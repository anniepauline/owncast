(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{63606:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var a=t(1413),s=t(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},c=t(42135),i=function(e,n){return s.createElement(c.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:n,icon:l}))};i.displayName="CheckOutlined";var r=s.forwardRef(i)},94594:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(87462),s=t(4942),l=t(50888),c=t(94184),i=t.n(c),r=t(97685),o=t(45987),d=t(67294),u=t(21770),f=t(15105),h=d.forwardRef(function(e,n){var t,a=e.prefixCls,l=void 0===a?"rc-switch":a,c=e.className,h=e.checked,m=e.defaultChecked,g=e.disabled,p=e.loadingIcon,b=e.checkedChildren,v=e.unCheckedChildren,C=e.onClick,x=e.onChange,N=e.onKeyDown,k=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=(0,u.Z)(!1,{value:h,defaultValue:m}),E=(0,r.Z)(j,2),y=E[0],Z=E[1];function w(e,n){var t=y;return g||(Z(t=e),null==x||x(t,n)),t}var O=i()(l,c,(t={},(0,s.Z)(t,"".concat(l,"-checked"),y),(0,s.Z)(t,"".concat(l,"-disabled"),g),t));return d.createElement("button",Object.assign({},k,{type:"button",role:"switch","aria-checked":y,disabled:g,className:O,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?w(!1,e):e.which===f.Z.RIGHT&&w(!0,e),null==N||N(e)},onClick:function(e){var n=w(!y,e);null==C||C(n,e)}}),p,d.createElement("span",{className:"".concat(l,"-inner")},y?b:v))});h.displayName="Switch";var m=t(53124),g=t(98866),p=t(97647),b=t(68349),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},C=d.forwardRef(function(e,n){var t,c=e.prefixCls,r=e.size,o=e.disabled,u=e.loading,f=e.className,C=v(e,["prefixCls","size","disabled","loading","className"]),x=d.useContext(m.E_),N=x.getPrefixCls,k=x.direction,j=d.useContext(p.Z),E=d.useContext(g.Z),y=N("switch",c),Z=d.createElement("div",{className:"".concat(y,"-handle")},u&&d.createElement(l.Z,{className:"".concat(y,"-loading-icon")})),w=i()((t={},(0,s.Z)(t,"".concat(y,"-small"),"small"===(r||j)),(0,s.Z)(t,"".concat(y,"-loading"),u),(0,s.Z)(t,"".concat(y,"-rtl"),"rtl"===k),t),void 0===f?"":f);return d.createElement(b.Z,{insertExtraNode:!0},d.createElement(h,(0,a.Z)({},C,{prefixCls:y,className:w,disabled:(null!=o?o:E)||u,ref:n,loadingIcon:Z})))});C.__ANT_SWITCH=!0;var x=C},20550:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var a=t(4942),s=t(87462),l=t(97685),c=t(97937),i=t(94184),r=t.n(i),o=t(98423),d=t(67294),u=t(53124),f=t(98787),h=t(68349),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},p=RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),b=RegExp("^(".concat(f.E.join("|"),")$")),v=d.forwardRef(function(e,n){var t,i=e.prefixCls,f=e.className,m=e.style,v=e.children,C=e.icon,x=e.color,N=e.onClose,k=e.closeIcon,j=e.closable,E=g(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),y=d.useContext(u.E_),Z=y.getPrefixCls,w=y.direction,O=d.useState(!0),S=(0,l.Z)(O,2),P=S[0],U=S[1];d.useEffect(function(){"visible"in E&&U(E.visible)},[E.visible]);var _=function(){return!!x&&(p.test(x)||b.test(x))},I=(0,s.Z)({backgroundColor:x&&!_()?x:void 0},m),T=_(),D=Z("tag",i),M=r()(D,(t={},(0,a.Z)(t,"".concat(D,"-").concat(x),T),(0,a.Z)(t,"".concat(D,"-has-color"),x&&!T),(0,a.Z)(t,"".concat(D,"-hidden"),!P),(0,a.Z)(t,"".concat(D,"-rtl"),"rtl"===w),t),f),R=function(e){e.stopPropagation(),null==N||N(e),!e.defaultPrevented&&("visible"in E||U(!1))},z="onClick"in E||v&&"a"===v.type,A=(0,o.Z)(E,["visible"]),J=C||null,F=J?d.createElement(d.Fragment,null,J,d.createElement("span",null,v)):v,L=d.createElement("span",(0,s.Z)({},A,{ref:n,className:M,style:I}),F,void 0!==j&&j?k?d.createElement("span",{className:"".concat(D,"-close-icon"),onClick:R},k):d.createElement(c.Z,{className:"".concat(D,"-close-icon"),onClick:R}):null);return z?d.createElement(h.Z,null,L):L});v.CheckableTag=function(e){var n,t=e.prefixCls,l=e.className,c=e.checked,i=e.onChange,o=e.onClick,f=m(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,d.useContext(u.E_).getPrefixCls)("tag",t),g=r()(h,(n={},(0,a.Z)(n,"".concat(h,"-checkable"),!0),(0,a.Z)(n,"".concat(h,"-checkable-checked"),c),n),l);return d.createElement("span",(0,s.Z)({},f,{className:g,onClick:function(e){null==i||i(!c),null==o||o(e)}}))};var C=v},42011:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return t(91616)}])},80894:function(e,n,t){"use strict";t.d(n,{Q:function(){return d},Y:function(){return u}});var a=t(85893),s=t(67294),l=t(84485),c=t(20550),i=t(40117),r=t(39664);let{Title:o}=l.Z,d="#5a67d8",u=e=>{let{title:n,description:t,placeholder:l,maxLength:u,values:f,handleDeleteIndex:h,handleCreateString:m,submitStatus:g,continuousStatusMessage:p}=e,[b,v]=(0,s.useState)(""),C=e=>{let{value:n}=e;v(n)},x=()=>{let e=b.trim();m(e),v("")};return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(o,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:t}),(0,a.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,n)=>{let t=()=>{h(n)};return(0,a.jsx)(c.Z,{closable:!0,onClose:t,color:d,children:e},"tag-".concat(e,"-").concat(n))})}),p&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(r.E,{status:p})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(i.nv,{fieldName:"string-input",value:b,onChange:C,onPressEnter:x,maxLength:u,placeholder:l,status:g})})]})};u.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},73706:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(85893),s=t(67294),l=t(94594),c=t(41983),i=t(39664),r=t(90745),o=t(99519);let d=e=>{let{apiPath:n,checked:t,reversed:d=!1,configPath:u="",disabled:f=!1,fieldName:h,label:m,tip:g,useSubmit:p,onChange:b}=e,[v,C]=(0,s.useState)(null),x=null,N=(0,s.useContext)(o.aC),{setFieldInConfigState:k}=N||{},j=()=>{C(null),clearTimeout(x),x=null},E=async e=>{if(p){C((0,c.kg)(c.Jk));let t=d?!e:e;await (0,r.Si)({apiPath:n,data:{value:t},onSuccess(){k({fieldName:h,value:t,path:u}),C((0,c.kg)(c.zv))},onError(e){C((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),x=setTimeout(j,r.sI)}b&&b(e)},y=null!==v&&v.type===c.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[m&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:m})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(l.Z,{className:"switch field-".concat(h),loading:y,onChange:E,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,a.jsx)(i.E,{status:v})]}),(0,a.jsx)("p",{className:"field-tip",children:g})]})]})};d.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},91616:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var a=t(85893),s=t(84485),l=t(67294),c=t(40117),i=t(10135),r=t(73706),o=t(80894),d=t(41983),u=t(90745),f=t(99519);function h(){var e;let{Title:n}=s.Z,[t,h]=(0,l.useState)(null),[m,g]=(0,l.useState)(null),[p,b]=(0,l.useState)(null),v=(0,l.useContext)(f.aC),{serverConfig:C,setFieldInConfigState:x}=v||{},{chatDisabled:N,chatJoinMessagesEnabled:k,forbiddenUsernames:j,instanceDetails:E,suggestedUsernames:y,chatEstablishedUserMode:Z}=C,{welcomeMessage:w}=E,O=e=>{let{fieldName:n,value:a}=e;h({...t,[n]:a})};function S(){g(null)}function P(){(0,u.Si)({apiPath:u.CJ,data:{value:t.forbiddenUsernames},onSuccess(){x({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),g((0,d.kg)(d.zv)),setTimeout(S,u.sI)},onError(e){g((0,d.kg)(d.Un,e)),setTimeout(S,u.sI)}})}function U(){b(null)}function _(){(0,u.Si)({apiPath:u.cf,data:{value:t.suggestedUsernames},onSuccess(){x({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),b((0,d.kg)(d.zv)),setTimeout(U,u.sI)},onError(e){g((0,d.kg)(d.Un,e)),setTimeout(U,u.sI)}})}return((0,l.useEffect)(()=>{h({chatDisabled:N,chatJoinMessagesEnabled:k,forbiddenUsernames:j,suggestedUsernames:y,welcomeMessage:w,chatEstablishedUserMode:Z})},[C]),t)?(0,a.jsxs)("div",{className:"config-server-details-form",children:[(0,a.jsx)(n,{children:"Chat Settings"}),(0,a.jsxs)("div",{className:"form-module config-server-details-container",children:[(0,a.jsx)(r.Z,{fieldName:"chatDisabled",...u.yj,checked:!t.chatDisabled,reversed:!0,onChange:function(e){O({fieldName:"chatDisabled",value:!e})}}),(0,a.jsx)(r.Z,{fieldName:"chatJoinMessagesEnabled",...u.kB,checked:t.chatJoinMessagesEnabled,onChange:function(e){O({fieldName:"chatJoinMessagesEnabled",value:e})}}),(0,a.jsx)(r.Z,{fieldName:"establishedUserMode",...u.dj,checked:t.chatEstablishedUserMode,onChange:function(e){O({fieldName:"chatEstablishedUserMode",value:e})}}),(0,a.jsx)(i.$7,{fieldName:"welcomeMessage",...u.IX,type:c.Sk,value:t.welcomeMessage,initialValue:w,onChange:O}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Y,{title:u.Dg.label,placeholder:u.Dg.placeholder,description:u.Dg.tip,values:t.forbiddenUsernames,handleDeleteIndex:function(e){t.forbiddenUsernames.splice(e,1),P()},handleCreateString:function(e){t.forbiddenUsernames.push(e),O({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),P()},submitStatus:m}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(o.Y,{title:u.AN.label,placeholder:u.AN.placeholder,description:u.AN.tip,values:t.suggestedUsernames,handleDeleteIndex:function(e){t.suggestedUsernames.splice(e,1),_()},handleCreateString:function(e){t.suggestedUsernames.push(e),O({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),_()},submitStatus:p,continuousStatusMessage:0===(e=t.suggestedUsernames.length)?(0,d.kg)("success",u.AN.no_entries):e>0&&e<10?(0,d.kg)("warning",u.AN.min_not_reached):null})]})]}):null}}},function(e){e.O(0,[4485,9774,2888,179],function(){return e(e.s=42011)}),_N_E=e.O()}]);