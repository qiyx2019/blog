"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[910],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=a.createContext({}),s=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=s(r),d=t,y=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.createElement(y,l(l({ref:n},p),{},{components:r})):a.createElement(y,l({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},4493:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var a=r(7462),t=r(3366),o=(r(7294),r(3905)),l=["components"],i={title:"JS\uff1a\u6df1\u6d45\u62f7\u8d1d"},c=void 0,s={unversionedId:"base/2019-06-01-js-deepshallowcopy",id:"base/2019-06-01-js-deepshallowcopy",title:"JS\uff1a\u6df1\u6d45\u62f7\u8d1d",description:"\u6211\u4eec\u5148\u6765\u770b\u4e0b\u6570\u7ec4\u7684\u62f7\u8d1d\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u7528`slice()` `concat()`\u65b9\u6cd5\u5b9e\u73b0\u6570\u7ec4\u62f7\u8d1d\uff1a",source:"@site/docs/base/2019-06-01-js-deepshallowcopy.md",sourceDirName:"base",slug:"/base/2019-06-01-js-deepshallowcopy",permalink:"/blog/docs/base/2019-06-01-js-deepshallowcopy",tags:[],version:"current",frontMatter:{title:"JS\uff1a\u6df1\u6d45\u62f7\u8d1d"},sidebar:"base",previous:{title:"JS\uff1alet\u548cconst",permalink:"/blog/docs/base/2019-05-30-js-let-const"},next:{title:"JS\uff1a\u6a21\u62df\u5b9e\u73b0call apply\u548cbind\u65b9\u6cd5",permalink:"/blog/docs/base/2019-06-02-js-applycallbind-implemented"}},p=[{value:"\u5229\u7528JSON.stringify\u5b9e\u73b0\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u6df1\u62f7\u8d1d",id:"\u5229\u7528jsonstringify\u5b9e\u73b0\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u6df1\u62f7\u8d1d",children:[],level:2},{value:"\u5229\u7528\u9012\u5f52\u5b9e\u73b0\u6570\u7ec4\u548c\u5bf9\u8c61\u6df1\u62f7\u8d1d",id:"\u5229\u7528\u9012\u5f52\u5b9e\u73b0\u6570\u7ec4\u548c\u5bf9\u8c61\u6df1\u62f7\u8d1d",children:[],level:2}],u={toc:p};function b(e){var n=e.components,r=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6211\u4eec\u5148\u6765\u770b\u4e0b\u6570\u7ec4\u7684\u62f7\u8d1d\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"slice()")," ",(0,o.kt)("inlineCode",{parentName:"p"},"concat()"),"\u65b9\u6cd5\u5b9e\u73b0\u6570\u7ec4\u62f7\u8d1d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var arr = [1, 2, 3, 4, 5];\nvar arr1 = arr.concat();\nvar arr2 = arr.slice();\nconsole.log(arr1); //[1, 2, 3, 4, 5]\nconsole.log(arr2); //[1, 2, 3, 4, 5]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"slice()")," ",(0,o.kt)("inlineCode",{parentName:"p"},"concat()"),"\u90fd\u662f\u8fd4\u56de\u4e86\u4e00\u4e2a\u65b0\u6570\u7ec4\uff0c\u6ca1\u6709\u6539\u53d8\u539f\u6765\u7684\u6570\u7ec4\uff0c\u770b\u8d77\u6765\u50cf\u662f\u6df1\u62f7\u8d1d\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u518d\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var arr = [1, 2, 3, 4, { value: 5 }];\nvar arr1 = arr.concat();\nvar arr2 = arr.slice();\narr[4].value = 6;\nconsole.log(arr1); //[1, 2, 3, 4, { value: 6 }]\nconsole.log(arr2); //[1, 2, 3, 4, { value: 6 }]\n")),(0,o.kt)("p",null,"\u8fd9\u8fb9\u53ef\u4ee5\u770b\u5230\uff0c\u5982\u679c\u6570\u7ec4\u91cc\u6709\u5bf9\u8c61\uff0c\u90a3\u4e48\u4e0d\u4f1a\u62f7\u8d1d\u5bf9\u8c61\u7684\u503c\uff0c\u800c\u662f\u62f7\u8d1d\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u539f\u6765\u6570\u636e\u5bf9\u8c61\u7684\u503c\u53d1\u751f\u6539\u53d8\uff0c\u7531\u4e8e\u62f7\u8d1d\u7684\u662f\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u65b0\u62f7\u8d1d\u7684\u6570\u7ec4\u4e2d\u5bf9\u8c61\u7684\u503c\u4e5f\u53d1\u751f\u6539\u53d8\uff0c\u62f7\u8d1d\u7684\u4e0d\u662f\u5f88\u5f7b\u5e95\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"slice()")," ",(0,o.kt)("inlineCode",{parentName:"p"},"concat()"),"\u662f",(0,o.kt)("strong",{parentName:"p"},"\u6d45\u62f7\u8d1d"),"\uff0c\u5bf9\u4e8e\u5bf9\u8c61\uff0c\u6211\u4eec\u901a\u5e38\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"assign()"),"\u6216\u8005\u5c55\u5f00\u8fd0\u7b97\u7b26",(0,o.kt)("inlineCode",{parentName:"p"},"..."),"\u6765\u5b9e\u73b0\u62f7\u8d1d\uff0c\u540c\u6837\u5982\u679c\u5bf9\u8c61\u91cc\u5d4c\u5957\u4e86\u5bf9\u8c61\uff0c\u4e5f\u53ea\u80fd\u5b9e\u73b0\u6d45\u62f7\u8d1d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var obj = {\n    name: "mei",\n    address: {city: "shanghai"}\n}\nvar obj1 = Object.assign({},obj);\nvar obj2 = {...obj};\nobj.address.city = "beijing";\nconsole.log(obj1); //{name: "mei", address:{city: "beijing"}\nconsole.log(obj2); //{name: "mei", address:{city: "beijing"}\n')),(0,o.kt)("h2",{id:"\u5229\u7528jsonstringify\u5b9e\u73b0\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u6df1\u62f7\u8d1d"},"\u5229\u7528JSON.stringify\u5b9e\u73b0\u5bf9\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u6df1\u62f7\u8d1d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var arr = [1, 2, 3, 4, { value: 5 }];\nvar arr1 = JSON.parse(JSON.stringify(arr));\narr[4].value = 6;\nconsole.log(arr1); //[1, 2, 3, 4, { value: 5 }]\n\nvar obj = {\n    name: "mei",\n    address: {city: "shanghai"}\n}\nvar obj1 = JSON.parse(JSON.stringify(obj));\nobj.address.city = "beijing";\nconsole.log(obj1); //{name: "mei", address:{city: "shanghai"}\n')),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u4e0d\u80fd\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," ",(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," ",(0,o.kt)("inlineCode",{parentName:"p"},"\u51fd\u6570")," \u8fdb\u884c\u6df1\u5ea6\u62f7\u8d1d\u3002"),(0,o.kt)("h2",{id:"\u5229\u7528\u9012\u5f52\u5b9e\u73b0\u6570\u7ec4\u548c\u5bf9\u8c61\u6df1\u62f7\u8d1d"},"\u5229\u7528\u9012\u5f52\u5b9e\u73b0\u6570\u7ec4\u548c\u5bf9\u8c61\u6df1\u62f7\u8d1d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function deepCopy(obj) {\n    if (typeof obj !== 'object') return;\n    var newObj = obj instanceof Array ? [] : {};\n    for (var key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];\n        }\n    }\n    return newObj;\n\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u6765\u9a8c\u8bc1\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var arr = [1, 2, 3, 4, { value: 5 }];\nvar arr2 = deepCopy(arr);\narr[4].value = 6;\nconsole.log(arr);//1, 2, 3, 4, { value: 6 }]\nconsole.log(arr2);//1, 2, 3, 4, { value: 5 }]\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u6d45\u62f7\u8d1d\uff0c\u53bb\u6389\u9012\u5f52\u5c31\u53ef\u4ee5\u4e86\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function shallowCopy(obj) {\n    if (typeof obj !== 'object') return;\n    var newObj = obj instanceof Array ? [] : {};\n    for (var key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            newObj[key] = obj[key];\n        }\n    }\n    return newObj;\n\n}\n")),(0,o.kt)("p",null,"\u9a8c\u8bc1\u4e00\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var arr = [1, 2, 3, 4, { value: 5 }];\nvar arr2 = shallowCopy(arr);\narr[4].value = 6;\nconsole.log(arr);//1, 2, 3, 4, { value: 6 }]\nconsole.log(arr2);//1, 2, 3, 4, { value: 6 }]\n")))}b.isMDXComponent=!0}}]);