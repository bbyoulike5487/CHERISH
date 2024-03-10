"use strict";(self["webpackChunkcherish"]=self["webpackChunkcherish"]||[]).push([[103],{5519:function(t,e,a){a.d(e,{Z:function(){return _}});var o=a(3396),l=a(7139),r=a(9242);const i={"aria-label":"Page navigation example"},s={class:"pagination justify-content-end"},d=(0,o._)("span",{"aria-hidden":"true"},"«",-1),c=[d],n=["onClick"],p=(0,o._)("span",{"aria-hidden":"true"},"»",-1),u=[p];function m(t,e,a,d,p,m){return(0,o.wg)(),(0,o.iD)("nav",i,[(0,o._)("ul",s,[(0,o._)("li",{class:(0,l.C_)(["page-item pagination-prev",{disabled:!a.pages.has_pre}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,r.iM)((t=>m.updatePage(a.pages.current_page-1)),["prevent"]))},c)],2),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.pages.total_pages,(t=>((0,o.wg)(),(0,o.iD)("li",{class:(0,l.C_)(["page-item pageHover",{active:t===a.pages.current_page}]),key:t},[(0,o._)("a",{class:"page-link",href:"#",onClick:(0,r.iM)((e=>m.updatePage(t)),["prevent"])},(0,l.zw)(t),9,n)],2)))),128)),(0,o._)("li",{class:(0,l.C_)(["page-item pagination-next",{disabled:!a.pages.has_next}])},[(0,o._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,r.iM)((t=>m.updatePage(a.pages.current_page+1)),["prevent"]))},u)],2)])])}var b={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},h=a(89);const g=(0,h.Z)(b,[["render",m]]);var _=g},2103:function(t,e,a){a.r(e),a.d(e,{default:function(){return mt}});var o=a(3396),l=a(7139);const r={class:"text-end"},i={class:"table ls"},s=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{width:"120"},"分類"),(0,o._)("th",null,"產品"),(0,o._)("th",{width:"120"},"原價"),(0,o._)("th",{width:"120"},"售價"),(0,o._)("th",{width:"100"},"是否啟用"),(0,o._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},c={class:"text-right"},n={key:0,class:"text-primary"},p=(0,o._)("i",{class:"bi bi-check2"},null,-1),u=[p],m={key:1,class:"text-muted"},b=(0,o._)("i",{class:"bi bi-x-lg"},null,-1),h=[b],g={class:"btn-group"},_=["onClick"],f=(0,o._)("i",{class:"bi bi-pencil-square"},null,-1),y=["onClick"],P=(0,o._)("i",{class:"bi bi-x-square"},null,-1);function w(t,e,a,p,b,w){const v=(0,o.up)("Loading"),k=(0,o.up)("Pagination"),x=(0,o.up)("ProductModal"),M=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(v,{active:b.isLoading},null,8,["active"]),(0,o._)("div",r,[(0,o._)("button",{class:"btn btn-outline-primary",type:"button",onClick:e[0]||(e[0]=t=>w.openModal(!0))}," 增加產品 ")]),(0,o._)("table",i,[s,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.products,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[(0,o._)("td",null,(0,l.zw)(e.category),1),(0,o._)("td",null,(0,l.zw)(e.title),1),(0,o._)("td",d,(0,l.zw)(t.$filters.currency(e.origin_price)),1),(0,o._)("td",c,(0,l.zw)(t.$filters.currency(e.price)),1),(0,o._)("td",null,[e.is_enabled?((0,o.wg)(),(0,o.iD)("span",n,u)):((0,o.wg)(),(0,o.iD)("span",m,h))]),(0,o._)("td",null,[(0,o._)("div",g,[(0,o._)("button",{type:"button",class:"btn btn-outline-primary btn-sm rounded-0",onClick:t=>w.openModal(!1,e)},[(0,o.Uk)(" 編輯 "),f],8,_),(0,o._)("button",{type:"button",class:"btn btn-outline-danger btn-sm rounded-0",onClick:t=>w.openDelProductModal(e)},[(0,o.Uk)(" 刪除 "),P],8,y)])])])))),128))])]),(0,o.Wm)(k,{pages:b.pagination,onEmitPages:w.getProducts},null,8,["pages","onEmitPages"]),(0,o.Wm)(x,{ref:"productModal",product:b.tempProduct,onUpdateProduct:w.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.Wm)(M,{item:b.tempProduct,ref:"delModal",onDelItem:w.delProduct},null,8,["item","onDelItem"])],64)}var v=a(9242);const k={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},x={class:"modal-dialog modal-xl",role:"document"},M={class:"modal-content border-0 ls"},U=(0,o._)("div",{class:"modal-header bg-info text-primary"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增產品")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),$={class:"modal-body bg-warning text-primary"},C={class:"row"},D={class:"col-sm-4"},V={class:"mb-3"},L={for:"image",class:"form-label w-100"},j={class:"mb-3"},S={for:"customFile",class:"form-label w-100"},Z=["src"],F={class:"col-sm-8"},z={class:"mb-3"},H={for:"title",class:"form-label w-100"},I={class:"row gx-2"},N={class:"mb-3 col-md-6"},W={for:"category",class:"form-label w-100"},Y={class:"mb-3 col-md-6"},q={for:"price",class:"form-label w-100"},E={class:"row gx-2"},K={class:"mb-3 col-md-6"},O={for:"origin_price",class:"form-label w-100"},A={class:"mb-3 col-md-6"},B={for:"price",class:"form-label w-100"},G={class:"mb-3"},J={for:"description",class:"form-label w-100"},Q={class:"mb-3"},R={for:"content",class:"form-label w-100"},T={class:"mb-3"},X={class:"form-check"},tt=(0,o._)("p",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),et={class:"modal-footer bg-info"},at=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(t,e,a,l,r,i){return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",x,[(0,o._)("div",M,[U,(0,o._)("div",$,[(0,o._)("div",C,[(0,o._)("div",D,[(0,o._)("div",V,[(0,o._)("label",L,[(0,o.Uk)("輸入圖片網址 * "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control border-bottom border-primary",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>r.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[v.nr,r.tempProduct.imageUrl]])])]),(0,o._)("div",j,[(0,o._)("label",S,[(0,o.Uk)("或 上傳圖片 * "),(0,o._)("input",{type:"file",id:"customFile",class:"form-control border-bottom border-primary",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>i.uploadFile&&i.uploadFile(...t))},null,544)])]),(0,o._)("img",{class:"img-fluid",src:r.tempProduct.imageUrl,alt:""},null,8,Z)]),(0,o._)("div",F,[(0,o._)("div",z,[(0,o._)("label",H,[(0,o.Uk)("產品名稱 * "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control border-bottom border-primary",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>r.tempProduct.title=t),placeholder:"請輸入產品名稱"},null,512),[[v.nr,r.tempProduct.title]])])]),(0,o._)("div",I,[(0,o._)("div",N,[(0,o._)("label",W,[(0,o.Uk)("分類 * "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control border-bottom border-primary",id:"category","onUpdate:modelValue":e[3]||(e[3]=t=>r.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[v.nr,r.tempProduct.category]])])]),(0,o._)("div",Y,[(0,o._)("label",q,[(0,o.Uk)("單位 * "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control border-bottom border-primary",id:"unit","onUpdate:modelValue":e[4]||(e[4]=t=>r.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[v.nr,r.tempProduct.unit]])])])]),(0,o._)("div",E,[(0,o._)("div",K,[(0,o._)("label",O,[(0,o.Uk)("原價 * "),(0,o.wy)((0,o._)("input",{type:"number",class:"form-control border-bottom border-primary",id:"origin_price","onUpdate:modelValue":e[5]||(e[5]=t=>r.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[v.nr,r.tempProduct.origin_price,void 0,{number:!0}]])])]),(0,o._)("div",A,[(0,o._)("label",B,[(0,o.Uk)("售價 * "),(0,o.wy)((0,o._)("input",{type:"number",class:"form-control border-bottom border-primary",id:"price","onUpdate:modelValue":e[6]||(e[6]=t=>r.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[v.nr,r.tempProduct.price,void 0,{number:!0}]])])])]),(0,o._)("div",G,[(0,o._)("label",J,[(0,o.Uk)("產品描述 * "),(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control border border-primary",id:"description","onUpdate:modelValue":e[7]||(e[7]=t=>r.tempProduct.description=t),placeholder:"請輸入產品描述"},"\n                  ",512),[[v.nr,r.tempProduct.description]])])]),(0,o._)("div",Q,[(0,o._)("label",R,[(0,o.Uk)("說明內容 "),(0,o.wy)((0,o._)("textarea",{type:"text",class:"form-control border border-primary",id:"content","onUpdate:modelValue":e[8]||(e[8]=t=>r.tempProduct.content=t),placeholder:"請輸入產品說明內容"},"\n                  ",512),[[v.nr,r.tempProduct.content]])])]),(0,o._)("div",T,[(0,o._)("div",X,[(0,o.wy)((0,o._)("input",{class:"form-check-input border border-primary",type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=t=>r.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[v.e8,r.tempProduct.is_enabled]]),tt])])])])]),(0,o._)("div",et,[at,(0,o._)("button",{type:"button",class:"btn btn-outline-primary",onClick:e[10]||(e[10]=e=>t.$emit("update-product",r.tempProduct))}," 確認 ")])])])],512)}var lt=a(1339),rt={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/jewelry-api/admin/upload";this.$http.post(a,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)})).catch((t=>{this.$httpMessageState(t,"連線錯誤，請再試一次")}))}},mixins:[lt.Z]},it=a(89);const st=(0,it.Z)(rt,[["render",ot]]);var dt=st,ct=a(5519),nt=a(2090),pt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:dt,DelModal:nt.Z,Pagination:ct.Z},methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/jewelry-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)})).catch((t=>{this.$httpMessageState(t,"連線錯誤，請再試一次"),this.isLoading=!1}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const a=this.$refs.productModal;a.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/jewelry-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/jewelry-api/admin/product/${t.id}`,a="put");const o=this.$refs.productModal;this.$http[a](e,{data:this.tempProduct}).then((t=>{o.hideModal(),t.data.success?(this.$httpMessageState(t,"更新產品"),this.getProducts()):this.$httpMessageState(t,"更新產品")})).catch((t=>{this.$httpMessageState(t,"連線錯誤，請再試一次")}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/jewelry-api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{this.$httpMessageState(t,"刪除產品");const e=this.$refs.delModal;e.hideModal(),this.getProducts()})).catch((t=>{this.$httpMessageState(t,"連線錯誤，請再試一次")}))}},created(){this.getProducts()}};const ut=(0,it.Z)(pt,[["render",w]]);var mt=ut}}]);
//# sourceMappingURL=103.d85d5a2c.js.map