<template>
    <Loading :active="isLoading"></Loading>
    <div class="container">
        <div class="row justify-content-center mt-6 mt-lg-7">
            <div class="col-lg-10">
                <div class="d-flex justify-content-evenly align-items-center my-5">
                    <div class="d-flex flex-column align-items-center border border-primary p-2">
                        <i class="bi bi-cart-check fs-5 pb-2"></i>
                        <span class="border-top border-primary pt-2 ls">確認清單</span>
                    </div>
                    >>>
                    <div class="d-flex flex-column align-items-center bg-primary text-warning p-2">
                        <i class="bi bi-card-list fs-5 pb-2"></i>
                        <span class="border-top border-warning pt-2 ls">填寫資料</span>
                    </div>
                    >>>
                    <div class="d-flex flex-column align-items-center border border-primary p-2">
                        <i class="bi bi-coin fs-5 pb-2"></i>
                        <span class="border-top border-primary pt-2 ls">結帳付款</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <!-- cart -->
            <div class="col-lg-5">
                <table class="table border-primary border">
                    <thead>
                        <tr>
                            <th colspan="2" class="ls">購物品項</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in carts.carts" :key="item.id">
                            <td class="py-3 d-flex align-items-center text-primary">
                                <div class="d-flex align-items-center">
                                    <img :src="item.product.imageUrl" :alt="item.product.title" style="height: 150px;">
                                    <div class="ms-5">
                                        <h6 class="ls">{{ item.product.title }}</h6>
                                        <p class="mt-3">
                                            <small class="text-muted ls">數量：</small>
                                            {{ item.qty }} 
                                            <small class="text-muted ms-1">{{ item.product.unit }}</small>
                                        </p>
                                        <p class="mt-3">NT$ {{ $filters.currency(item.total) }}</p>
                                    </div>
                                </div>                           
                            </td>
                        </tr>
                        <tr>
                            <td class="pt-3 ps-3">
                                <small class="text-muted ls">應付金額：</small>
                                <p class="fs-2">
                                    NT$ {{ $filters.currency(carts.final_total) }}
                                    <span v-if="carts.final_total !== carts.total" class="text-danger ms-2 ls" style="font-size: 12px;">已套用優惠券</span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- 回購物車 -->
                <router-link to="/cart" class="link-primary fs-4 text-decoration-none link-hover"><i class="bi bi-arrow-left"></i> BACK</router-link>
            </div>
            <!-- 訂購人表單 -->
            <div class="col-lg-7">
                <Form class="mt-5 mt-lg-0" v-slot="{ errors }" @submit="createOrder">
                    <div class="mb-4">
                        <label for="name" class="form-label">NAME *</label>
                        <Field id="name" name="姓名" type="text" class="form-control border-bottom border-primary"
                                :class="{ 'is-invalid': errors['姓名'] }"
                                placeholder="請輸入收件人姓名" rules="required"
                                v-model="form.user.name"></Field>
                        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="form-label">EMAIL *</label>
                        <Field id="email" name="email" type="email" class="form-control border-bottom border-primary"
                                :class="{ 'is-invalid': errors['email'] }"
                                placeholder="請輸入收件人 Email" rules="email|required"
                                v-model="form.user.email"></Field>
                        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="tel" class="form-label">TEL *</label>
                        <Field id="tel" name="電話" type="tel" class="form-control border-bottom border-primary"
                                :class="{ 'is-invalid': errors['電話'] }"
                                placeholder="請輸入收件人手機" rules="required"
                                v-model="form.user.tel"></Field>
                        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="address" class="form-label">ADDRESS *</label>
                        <Field id="address" name="地址" type="text" class="form-control border-bottom border-primary"
                                :class="{ 'is-invalid': errors['地址'] }"
                                placeholder="請輸入收件地址" rules="required"
                                v-model="form.user.address"></Field>
                        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                    </div>

                    <div class="mb-4">
                        <label for="message" class="form-label">REMARK</label>
                        <textarea name="remark" id="message" class="form-control border border-primary"
                                    v-model="form.message" style="height: 150px;"></textarea>
                    </div>
                    <div class="text-end">
                        <button class="btn btn-outline-primary w-100">送出訂單 <i class="bi bi-arrow-right"></i></button>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
    data() {
        return {
            carts: {},
            form: { // 訂單
                user: {
                name: '',
                email: '',
                tel: '',
                address: '',
                },
                message: '',
            },
            isLoading: false,
        }
    },
    methods: {
        getCarts() { // 取得購物車列表
            this.isLoading = true;
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.get(api)
                .then(res => {
                    if(res.data.success) {
                        this.carts = res.data.data;
                        this.isLoading = false;
                    }
                })
        },
        createOrder() { // 訂單
            this.isLoading = true;
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
            const order = this.form;
            this.$http.post(api, { data: order })
                .then(res => {
                    if(res.data.success) {
                        const id = res.data.orderId;
                        this.$router.push(`pay/${ id }`);
                        emitter.emit('updateCart'); // 與 navCart 同步更新
                        this.$httpMessageState(res, '建立訂單'); // toast
                        this.isLoading = false;
                    } 
                });
        },
    },
    mounted() {
        this.getCarts();
    }
}
</script>