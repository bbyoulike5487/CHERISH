"use strict";(self["webpackChunkcherish"]=self["webpackChunkcherish"]||[]).push([[72],{5519:function(t,e,i){i.d(e,{Z:function(){return y}});var a=i(3396),s=i(7139),r=i(9242);const n={"aria-label":"Page navigation example"},o={class:"pagination justify-content-end"},c=(0,a._)("span",{"aria-hidden":"true"},"«",-1),l=[c],p=["onClick"],g=(0,a._)("span",{"aria-hidden":"true"},"»",-1),d=[g];function u(t,e,i,c,g,u){return(0,a.wg)(),(0,a.iD)("nav",n,[(0,a._)("ul",o,[(0,a._)("li",{class:(0,s.C_)(["page-item pagination-prev",{disabled:!i.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,r.iM)((t=>u.updatePage(i.pages.current_page-1)),["prevent"]))},l)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,s.C_)(["page-item pageHover",{active:t===i.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,r.iM)((e=>u.updatePage(t)),["prevent"])},(0,s.zw)(t),9,p)],2)))),128)),(0,a._)("li",{class:(0,s.C_)(["page-item pagination-next",{disabled:!i.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,r.iM)((t=>u.updatePage(i.pages.current_page+1)),["prevent"]))},d)],2)])])}var h={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},_=i(89);const m=(0,_.Z)(h,[["render",u]]);var y=m},4072:function(t,e,i){i.r(e),i.d(e,{default:function(){return N}});var a=i(3396),s=i(9242),r=i(7139);const n={class:"container mb-5 mb-lg-6"},o={class:"row row-cols-1 row-cols-lg-2 mt-6 mt-lg-7"},c={class:"col-lg-3"},l={class:"mb-5 pd-menu"},p={class:"list-unstyled my-3 position-relative"},g={class:"list-unstyled my-3 position-relative"},d={class:"list-unstyled my-3 position-relative"},u={class:"list-unstyled my-3 position-relative"},h={class:"list-unstyled my-3 position-relative"},_={class:"col-lg-9"},m={class:"row row-cols-2 row-cols-lg-5 mt-lg-3"},y=["onClick","onKeydown"],v={class:"imageHover"},k=["src","alt"],f={class:"card-body text-primary bg-warning px-0 d-flex flex-column justify-content-between"},C={class:"ls"},w={class:"d-flex"},x={key:0,class:"text-danger border border-danger px-1 mb-1 ls",style:{"font-size":"10px"}},P={class:"d-flex align-items-end"},I={key:0},b={key:1,class:"text-danger"},$={key:2,class:"small text-muted ms-2"};function L(t,e,i,L,D,M){const A=(0,a.up)("Loading"),E=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(A,{active:D.isLoading},null,8,["active"]),(0,a._)("div",n,[(0,a._)("div",o,[(0,a._)("div",c,[(0,a._)("ul",l,[(0,a._)("li",p,[(0,a._)("a",{href:"#",class:"link-primary text-decoration-none",onClick:e[0]||(e[0]=(0,s.iM)((t=>(D.categoryItem="",M.updateCategory(""))),["prevent"]))},[(0,a._)("span",{class:(0,r.C_)(["list-hover stretched-link",{active:""===D.categoryItem}])},"— ",2),(0,a.Uk)("ALL ")])]),(0,a._)("li",g,[(0,a._)("a",{href:"#",class:"link-primary text-decoration-none",onClick:e[1]||(e[1]=(0,s.iM)((t=>(D.categoryItem="戒指",M.updateCategory("戒指"))),["prevent"]))},[(0,a._)("span",{class:(0,r.C_)(["list-hover stretched-link",{active:"戒指"===D.categoryItem}])},"— ",2),(0,a.Uk)("RING ")])]),(0,a._)("li",d,[(0,a._)("a",{href:"#",class:"link-primary text-decoration-none",onClick:e[2]||(e[2]=(0,s.iM)((t=>(D.categoryItem="耳環",M.updateCategory("耳環"))),["prevent"]))},[(0,a._)("span",{class:(0,r.C_)(["list-hover stretched-link",{active:"耳環"===D.categoryItem}])},"— ",2),(0,a.Uk)("EARRING ")])]),(0,a._)("li",u,[(0,a._)("a",{href:"#",class:"link-primary text-decoration-none",onClick:e[3]||(e[3]=(0,s.iM)((t=>(D.categoryItem="手鍊",M.updateCategory("手鍊"))),["prevent"]))},[(0,a._)("span",{class:(0,r.C_)(["list-hover stretched-link",{active:"手鍊"===D.categoryItem}])},"— ",2),(0,a.Uk)("BRACELET ")])]),(0,a._)("li",h,[(0,a._)("a",{href:"#",class:"link-primary text-decoration-none",onClick:e[4]||(e[4]=(0,s.iM)((t=>(D.categoryItem="項鍊",M.updateCategory("項鍊"))),["prevent"]))},[(0,a._)("span",{class:(0,r.C_)(["list-hover stretched-link",{active:"項鍊"===D.categoryItem}])},"— ",2),(0,a.Uk)("NECKLACE ")])])])]),(0,a._)("div",_,[(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(M.productsFilter,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col px-2 mb-3",key:e.id},[(0,a._)("div",{class:"card border-0 h-100 cardHover",onClick:t=>M.getProduct(e.id),onKeydown:t=>M.getProduct(e.id)},[(0,a._)("div",v,[(0,a._)("img",{src:e.imageUrl,class:"card-img-top img-fluid",alt:e.title},null,8,k)]),(0,a._)("div",f,[(0,a._)("p",C,(0,r.zw)(e.title),1),(0,a._)("div",w,[e.price!==e.origin_price?((0,a.wg)(),(0,a.iD)("p",x," SALE ")):(0,a.kq)("",!0)]),(0,a._)("div",P,[e.price===e.origin_price?((0,a.wg)(),(0,a.iD)("div",I," NT$ "+(0,r.zw)(t.$filters.currency(e.origin_price)),1)):(0,a.kq)("",!0),e.price!==e.origin_price?((0,a.wg)(),(0,a.iD)("div",b," NT$ "+(0,r.zw)(t.$filters.currency(e.price)),1)):(0,a.kq)("",!0),e.price!==e.origin_price?((0,a.wg)(),(0,a.iD)("del",$," NT$ "+(0,r.zw)(t.$filters.currency(e.origin_price)),1)):(0,a.kq)("",!0)])])],40,y)])))),128))])])]),(0,a.Wm)(E,{pages:D.pagination,onEmitPages:M.getAllProducts},null,8,["pages","onEmitPages"])])],64)}i(560);var D=i(5519),M={data(){return{products:[],categoryItem:"",pagination:"",isLoading:!1}},components:{Pagination:D.Z},methods:{getAllProducts(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/jewelry-api/products/all";this.$http.get(e).then((e=>{if(!e.data.success)return void(this.isLoading=!1);this.products=e.data.products;const{categoryItem:i}=this.$route.params;i&&(this.categoryItem=i),""!==this.categoryItem?this.pagination={}:this.setPagination(t),this.isLoading=!1})).catch((t=>{this.$httpMessageState(t,"連線錯誤，請再試一次"),this.isLoading=!1}))},setPagination(t=1){const e=10;this.pagination={total_pages:Math.ceil(this.products.length/e),current_page:t,has_pre:1!==t,has_next:!1,category:null},this.pagination.current_page>=this.pagination.total_pages?(this.pagination.current_page=this.pagination.total_pages,this.pagination.has_next=!1):this.pagination.has_next=!0;const i=this.pagination.current_page*e-e,a=this.pagination.current_page*e;this.products=this.products.slice(i,a)},updateCategory(t){this.$router.push({name:"allProducts",params:{categoryItem:t}})},getProduct(t){this.$router.push(`/product/${t}`)}},watch:{categoryItem(t,e){""!==t&&""!==e||this.getAllProducts()}},computed:{productsFilter(){return this.products.filter((t=>t.category.match(this.categoryItem)))}},created(){this.getAllProducts()}},A=i(89);const E=(0,A.Z)(M,[["render",L]]);var N=E}}]);
//# sourceMappingURL=72.f3bd6d19.js.map