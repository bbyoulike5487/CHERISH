"use strict";(self["webpackChunkcherish"]=self["webpackChunkcherish"]||[]).push([[109],{109:function(s,t,e){e.r(t),e.d(t,{default:function(){return is}});var r=e(3396),l=e(7139),a=e(9242);const i={class:"container mb-5 mb-lg-6"},o={key:0,class:"row justify-content-center mt-6 mt-lg-7"},c=(0,r.uE)('<div class="col-lg-10"><div class="d-flex justify-content-evenly align-items-center my-5"><div class="d-flex flex-column align-items-center border border-primary p-2"><i class="bi bi-cart-check fs-5 pb-2"></i><span class="border-top border-primary pt-2 ls">確認清單</span></div> &gt;&gt;&gt; <div class="d-flex flex-column align-items-center border border-primary p-2"><i class="bi bi-card-list fs-5 pb-2"></i><span class="border-top border-primary pt-2 ls">填寫資料</span></div> &gt;&gt;&gt; <div class="d-flex flex-column align-items-center bg-primary text-warning p-2"><i class="bi bi-coin fs-5 pb-2"></i><span class="border-top border-warning pt-2 ls">結帳付款</span></div></div></div>',1),d=[c],n={key:1,class:"text-center text-primary mb-12 mt-12"},p=(0,r._)("i",{class:"bi bi-check2-circle display-3"},null,-1),m=(0,r._)("p",{class:"fs-4 my-4 ls"},"感謝您的訂購，現貨商品將於1-2天內為您寄出",-1),u=(0,r._)("i",{class:"bi bi-arrow-right"},null,-1),g={class:"row"},h={class:"col-lg-5"},b={class:"table border-primary border"},_=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{colspan:"2",class:"ls"},"購物品項")])],-1),y={class:"py-3 d-flex align-items-center text-primary"},f={class:"d-flex align-items-center"},v=["src","alt"],w={class:"ms-5"},x={class:"ls"},k={class:"mt-3"},$=(0,r._)("small",{class:"text-muted ls"},"數量：",-1),D={class:"text-muted ms-1"},z={class:"mt-3"},L={class:"pt-3 ps-3"},E=(0,r._)("small",{class:"text-muted ls"},"應付金額：",-1),M={class:"fs-2"},I={class:"col-lg-7"},S={class:"mb-4"},O=(0,r._)("p",null,"ORDER NUMBER",-1),T={name:"orderId",class:"form-control text-secondary"},A={class:"mb-4"},R=(0,r._)("p",null,"NAME",-1),U={name:"姓名",class:"form-control text-secondary"},N={class:"mb-4"},j=(0,r._)("p",null,"EMAIL",-1),q=["href"],Y={class:"mb-4"},C=(0,r._)("p",null,"TEL",-1),H=["href"],K={class:"mb-4"},P=(0,r._)("p",null,"ADDRESS",-1),W={name:"地址",class:"form-control text-secondary"},B={key:0,class:"mb-4"},Z=(0,r._)("p",null,"REMARK",-1),F={name:"remark",class:"form-control text-secondary"},G={class:"mb-4"},J=(0,r._)("p",null,"PAYMENT STATUS *",-1),Q={key:0,name:"ispay",class:"form-control text-danger"},V={key:1,name:"ispay",class:"form-control text-success"},X={key:1,class:"text-end"},ss=(0,r._)("button",{type:"submit",class:"btn btn-outline-primary w-100 py-2"},[(0,r.Uk)(" 結帳付款 "),(0,r._)("i",{class:"bi bi-arrow-right"})],-1),ts=[ss];function es(s,t,e,c,ss,es){const rs=(0,r.up)("Loading"),ls=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(rs,{active:ss.isLoading},null,8,["active"]),(0,r._)("div",i,[ss.order.is_paid?((0,r.wg)(),(0,r.iD)("div",n,[p,m,(0,r.Wm)(ls,{to:"/allProducts",type:"button",class:"btn btn-outline-primary px-5"},{default:(0,r.w5)((()=>[(0,r.Uk)(" 繼續購物 "),u])),_:1})])):((0,r.wg)(),(0,r.iD)("div",o,d)),(0,r._)("div",g,[(0,r._)("div",h,[(0,r._)("table",b,[_,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(ss.order.products,(t=>((0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("td",y,[(0,r._)("div",f,[(0,r._)("img",{src:t.product.imageUrl,alt:t.product.title,style:{height:"150px"}},null,8,v),(0,r._)("div",w,[(0,r._)("h6",x,(0,l.zw)(t.product.title),1),(0,r._)("p",k,[$,(0,r.Uk)(" "+(0,l.zw)(t.qty)+" ",1),(0,r._)("small",D,(0,l.zw)(t.product.unit),1)]),(0,r._)("p",z,"NT$ "+(0,l.zw)(s.$filters.currency(t.total)),1)])])])])))),128)),(0,r._)("tr",null,[(0,r._)("td",L,[E,(0,r._)("p",M," NT$ "+(0,l.zw)(s.$filters.currency(ss.order.total)),1)])])])])]),(0,r._)("div",I,[(0,r._)("form",{class:"mt-5 mt-lg-0",onSubmit:t[0]||(t[0]=(0,a.iM)(((...s)=>es.payOrder&&es.payOrder(...s)),["prevent"]))},[(0,r._)("div",S,[O,(0,r._)("p",T,(0,l.zw)(ss.orderId),1)]),(0,r._)("div",A,[R,(0,r._)("p",U,(0,l.zw)(ss.order.user.name),1)]),(0,r._)("div",N,[j,(0,r._)("a",{href:`mailto:${ss.order.user.email}`,class:"form-control text-secondary text-decoration-none"},(0,l.zw)(ss.order.user.email),9,q)]),(0,r._)("div",Y,[C,(0,r._)("a",{href:`tel:${ss.order.user.tel}`,class:"form-control text-secondary text-decoration-none"},(0,l.zw)(ss.order.user.tel),9,H)]),(0,r._)("div",K,[P,(0,r._)("p",W,(0,l.zw)(ss.order.user.address),1)]),ss.order.message?((0,r.wg)(),(0,r.iD)("div",B,[Z,(0,r._)("p",F,(0,l.zw)(ss.order.message),1)])):(0,r.kq)("",!0),(0,r._)("div",G,[J,ss.order.is_paid?((0,r.wg)(),(0,r.iD)("p",V," 付款完成 ")):((0,r.wg)(),(0,r.iD)("p",Q," 尚未付款 "))]),ss.order.is_paid?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",X,ts))],32)])])])],64)}var rs={data(){return{order:{user:{},products:{}},orderId:"",isLoading:!1}},methods:{getOrder(){this.isLoading=!0;const s=`https://vue3-course-api.hexschool.io/api/jewelry-api/order/${this.orderId}`;this.$http.get(s).then((s=>{s.data.success&&(this.order=s.data.order),this.isLoading=!1})).catch((s=>{this.$httpMessageState(s,"連線錯誤，請再試一次"),this.isLoading=!1}))},payOrder(){this.isLoading=!0;const s=`https://vue3-course-api.hexschool.io/api/jewelry-api/pay/${this.orderId}`;this.$http.post(s).then((s=>{s.data.success&&(this.getOrder(),window.scrollTo(0,0),this.$httpMessageState(s,"付款")),this.isLoading=!1})).catch((s=>{this.$httpMessageState(s,"連線錯誤，請再試一次"),this.isLoading=!1}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},ls=e(89);const as=(0,ls.Z)(rs,[["render",es]]);var is=as}}]);
//# sourceMappingURL=109.878a6131.js.map