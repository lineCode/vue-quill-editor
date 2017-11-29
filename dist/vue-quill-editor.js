!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("quill"),require("object-assign")):"function"==typeof define&&define.amd?define(["quill","object-assign"],t):"object"==typeof exports?exports.VueQuillEditor=t(require("quill"),require("object-assign")):e.VueQuillEditor=t(e.quill,e["object-assign"])}(this,function(e,t){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=2)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),o=n.n(i),l=n(6),r=n(5),u=r(o.a,l.a,!1,null,null,null);t.default=u.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=i(o),r=n(1),u=i(r),s=window.Quill||l.default,a={Quill:s,quillEditor:u.default,install:function(e,t){t&&(u.default.props.globalOptions.default=function(){return t}),e.component(u.default.name,u.default)}};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={theme:"snow",boundary:document.body,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"Insert text here ...",readOnly:!1}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),l=i(o),r=n(7),u=i(r),s=n(3),a=i(s),c=window.Quill||l.default;t.default={name:"quill-editor",data:function(){return{_options:{},_content:"",defaultOptions:a.default}},props:{content:String,value:String,disabled:Boolean,options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initialize:function(){var e=this;this.$el&&(this._options=(0,u.default)({},this.defaultOptions,this.globalOptions,this.options),this.quill=new c(this.$refs.editor,this._options),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled&&this.quill.enable(!1),this.quill.on("selection-change",function(t){t?e.$emit("focus",e.quill):e.$emit("blur",e.quill)}),this.quill.on("text-change",function(t,n,i){var o=e.$refs.editor.children[0].innerHTML,l=e.quill,r=e.quill.getText();"<p><br></p>"===o&&(o=""),e._content=o,e.$emit("input",e._content),e.$emit("change",{html:o,text:r,quill:l})}),this.$emit("ready",this.quill))}},watch:{content:function(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},value:function(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},disabled:function(e,t){this.quill&&this.quill.enable(!e)}}}},function(e,t){e.exports=function(e,t,n,i,o,l){var r,u=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,u=e.default);var a="function"==typeof u?u.options:u;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o);var c;if(l?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},a._ssrRegister=c):i&&(c=i),c){var d=a.functional,f=d?a.render:a.beforeCreate;d?(a._injectStyles=c,a.render=function(e,t){return c.call(t),f(e,t)}):a.beforeCreate=f?[].concat(f,c):[c]}return{esModule:r,exports:u,options:a}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"quill-editor"},[e._t("toolbar"),e._v(" "),n("div",{ref:"editor"})],2)},o=[],l={render:i,staticRenderFns:o};t.a=l},function(e,n){e.exports=t}])});