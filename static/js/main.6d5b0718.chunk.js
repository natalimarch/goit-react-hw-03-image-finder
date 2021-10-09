(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(t,e,a){t.exports={Image:"ImageGalleryItem_Image__3YXvD",Item:"ImageGalleryItem_Item__WGOL6"}},14:function(t,e,a){t.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},24:function(t,e,a){t.exports={List:"ImageGallery_List__138t9"}},25:function(t,e,a){t.exports={Btn:"Button_Btn__3Jv1l"}},28:function(t,e,a){t.exports={Load:"Loader_Load__3dI7_"}},33:function(t,e,a){},34:function(t,e,a){},74:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),o=a(11),c=a.n(o),s=(a(33),a(15)),i=a(4),l=a(5),u=a(7),h=a(6),m=(a(34),a(8)),d=a.n(m),p=a(0),b=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={query:""},t.handleSubmit=function(e){e.preventDefault(),""!==t.state.query.trim()?(t.props.onSubmit(t.state.query),t.setState({query:""})):console.log("\u041f\u0443\u0441\u0442\u043e")},t.handleChange=function(e){var a=e.currentTarget.value;t.setState({query:a})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state.query,e=this.handleSubmit,a=this.handleChange;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("header",{className:d.a.Searchbar,children:Object(p.jsxs)("form",{onSubmit:e,className:d.a.SearchForm,children:[Object(p.jsx)("button",{type:"submit",className:d.a.SearchFormButton,children:Object(p.jsx)("span",{className:d.a.SearchFormButtonLabel})}),Object(p.jsx)("input",{className:d.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:t,onChange:a})]})})})}}]),a}(n.Component),j=a(13),g=a.n(j),f=function(t){var e=t.pageUrl,a=t.largeUrl,n=t.tags,r=t.onPictureOpen;return Object(p.jsx)("li",{className:g.a.Item,onClick:function(){r(a)},children:Object(p.jsx)("img",{src:e,alt:n,className:g.a.Image})})},O=a(24),y=a.n(O),v=function(t){var e=t.list,a=t.onPictureOpen,n=e.map((function(t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(f,{pageUrl:t.webformatURL,largeUrl:t.largeImageURL,tags:t.tags,onPictureOpen:a},t.id)})}));return Object(p.jsx)("ul",{className:y.a.List,children:n})},S=a(25),_=a.n(S),x=function(t){var e=t.onClick;return Object(p.jsx)("button",{onClick:e,type:"button",className:_.a.Btn,children:"Load more"})},w=a(26),L=a.n(w),k="https://pixabay.com/api/",F="23365989-0313fa8d36a360eb60645d2f6",I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return L.a.get("".concat(k,"?q=").concat(t,"&page=").concat(e,"&key=").concat(F,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(t){return t.data}))},M=a(27),B=a.n(M),C=a(28),U=a.n(C),q=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsx)(B.a,{className:U.a.Load,type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.a.Component),N=a(14),E=a.n(N),P=document.querySelector("#modal-root"),G=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).onEsc=function(e){"Escape"===e.code&&t.props.onClose()},t.onBackdrop=function(e){e.currentTarget===e.target&&t.props.onClose()},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:E.a.Overlay,onClick:this.onBackdrop,children:Object(p.jsx)("div",{className:E.a.Modal,children:Object(p.jsx)("img",{src:this.props.largeUrl,alt:this.props.tags})})}),P)}}]),a}(n.Component),T=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={list:[],page:1,loading:!1,error:null,query:"",total:0,largeImageURL:{},showModal:!1},t.searchFormSubmit=function(e){t.setState({query:e,loading:!0,page:1})},t.makeGallery=function(){var e=t.state,a=e.query,n=e.page;t.setState({isLoading:!0}),I(a,n).then((function(e){var a=e.hits,r=e.total;t.setState((function(t){return{list:[].concat(Object(s.a)(t.list),Object(s.a)(a)),page:t.page+1,total:r,isLoading:!1}})),1!==n&&t.scroll(),console.log("state",t.state.list),0===r&&alert("There are no pictures")})).catch((function(t){return alert(t.message)})).finally((function(){return t.setState({isLoading:!1})}))},t.scroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},t.showBtnLoadMore=function(){return Math.ceil(t.state.total/12)!==t.state.page-1},t.onPictureOpen=function(e){t.setState({largeImageURL:e,showModal:!0})},t.changeModal=function(){t.setState((function(t){return{showModal:!t.showModal}}))},t}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(t,e){if(e.query!==this.state.query)return this.setState({list:[]}),void this.makeGallery()}},{key:"render",value:function(){var t=this.state,e=t.list,a=t.total,n=t.isLoading,r=t.showModal,o=t.largeImageURL,c=this.searchFormSubmit,s=this.makeGallery,i=this.onPictureOpen,l=this.changeModal;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(b,{onSubmit:c}),0!==e.length&&Object(p.jsx)(v,{list:e,onPictureOpen:i}),n&&Object(p.jsx)(q,{}),r&&Object(p.jsx)(G,{onClose:l,largeUrl:o}),this.showBtnLoadMore()&&0!==a&&Object(p.jsx)(x,{onClick:s})]})}}]),a}(n.Component);var A=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(T,{})})};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(A,{})}),document.getElementById("root"))},8:function(t,e,a){t.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85","SearchFormButton-label":"Searchbar_SearchFormButton-label__2QH50",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[74,1,2]]]);
//# sourceMappingURL=main.6d5b0718.chunk.js.map