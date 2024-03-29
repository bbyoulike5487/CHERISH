<template>
  <Loading :active="isLoading"/>
  <div class="text-end">
    <button class="btn btn-outline-primary" type="button" @click="openModal(true)">
        增加產品
    </button>
  </div>
  <table class="table ls">
    <thead>
      <tr>
          <th width="120">分類</th>
          <th>產品</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">
            {{ $filters.currency(item.origin_price) }}
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <!-- 啟用 -->
            <span class="text-primary" v-if="item.is_enabled"><i class="bi bi-check2"/></span>
            <!-- 未啟用 -->
            <span class="text-muted" v-else><i class="bi bi-x-lg"/></span>
          </td>
          <td>
            <div class="btn-group">
                <button type="button"
                  class="btn btn-outline-primary btn-sm rounded-0"
                  @click="openModal(false, item)">
                  編輯 <i class="bi bi-pencil-square"/>
                </button>
                <button type="button"
                  class="btn btn-outline-danger btn-sm rounded-0"
                  @click="openDelProductModal(item)">
                  刪除 <i class="bi bi-x-square"/>
                </button>
            </div>
          </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getProducts"/>
  <ProductModal ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  />
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      products: [], // 產品
      pagination: {}, // 分頁資訊
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  methods: {
    getProducts(page = 1) { // 取得產品資訊
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線錯誤，請再試一次');
          this.isLoading = false;
        });
    },
    openModal(isNew, item) { // 打開 modal
      if (isNew) { // 如果是"新增"狀態
        this.tempProduct = {};
      } else { // 如果是"編輯"狀態
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // "新增"狀態
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // "編輯"狀態
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }

      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          productComponent.hideModal();
          if (res.data.success) {
            this.$httpMessageState(res, '更新產品'); // 更新成功 toast
            this.getProducts();
          } else {
            this.$httpMessageState(res, '更新產品'); // 更新失敗 toast
          }
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線錯誤，請再試一次');
        });
    },
    // 開啟刪除 Modal
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    // 刪除 product
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url)
        .then((res) => {
          this.$httpMessageState(res, '刪除產品'); // 刪除成功 toast
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
          this.getProducts();
        })
        .catch((err) => {
          this.$httpMessageState(err, '連線錯誤，請再試一次');
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
