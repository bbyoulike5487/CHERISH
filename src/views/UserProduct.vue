<template>
    <Loading :active="isLoading"></Loading>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/nav/allProducts">{{ product.content }}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col">
        <h2>{{ product.title }}</h2>
        <div class="h5" v-if="product.price === product.origin_price">NT$ {{ product.origin_price }}</div>
        <del class="h6" v-if="product.price !== product.origin_price">NT$ {{ product.origin_price }}</del>
        <div class="h5" v-if="product.price !== product.origin_price">NT$ {{ product.price }}</div>
        <hr>
        <div>{{ product.description }}</div>
        <hr>
        <button type="button" class="btn btn-outline-danger"
                @click="addToCart(product.id)">
          加到購物車
        </button>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: {},
            id: '',
            };
    },
    methods: {
        getProduct() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
            this.isLoading = true;
            this.$http.get(api).then((response) => {
                console.log(response.data);
                this.isLoading = false;
                if (response.data.success) {
                this.product = response.data.product;
                }
            });
        },
        addToCart(id, qty = 1) {
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            const cart = {
                product_id: id,
                qty,
            };
            this.isLoading = true;
            this.$http.post(url, { data: cart }).then((response) => {
                this.isLoading = false;
                this.$httpMessageState(response, '加入購物車');
                this.$router.push('/nav/allProducts');
            });
        },
    },
    created() {
        this.id = this.$route.params.productId;
        this.getProduct();
    },
};
</script>