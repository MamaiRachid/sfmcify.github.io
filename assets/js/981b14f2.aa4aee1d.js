"use strict";(self.webpackChunksfmcify=self.webpackChunksfmcify||[]).push([[1023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>w,frontMatter:()=>k,metadata:()=>y,toc:()=>N});var a=n(7462),o=n(7294),r=n(3905),l=n(6010),i=n(2389),s=n(7392),d=n(7094),u=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:i,values:p,groupId:h,className:g}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,d.U)(),[S,w]=(0,o.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:M}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==S&&k.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==S&&(M(t),w(a),null!=h&&N(h,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},g)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:T},r,{className:(0,l.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":S===t})}),n??t)}))),n?(0,o.cloneElement)(b.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function h(e){const t=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}const g="tabItem_Ymn6";function b(e){let{children:t,hidden:n,className:a}=e;return o.createElement("div",{role:"tabpanel",className:(0,l.Z)(g,a),hidden:n},t)}const k={id:"ShortLongCodesMobileConnect",title:"Things you might not know about short and long codes, private and shared codes on MobileConnect",sidebar_label:"Short & Long Codes",tags:["MobileConnect","ShortCode","LongCode","MarketingCloud"]},f=void 0,y={unversionedId:"SFMC Studios/ShortLongCodesMobileConnect",id:"SFMC Studios/ShortLongCodesMobileConnect",title:"Things you might not know about short and long codes, private and shared codes on MobileConnect",description:"While sending emails is pretty straightforward in Marketing Cloud, sending SMS messages is not that easy, especially in a multi-country environment. In this article, I\u2019m sharing information I\u2019ve learned via experience, SFMC support, official documentation, and through community feedback.",source:"@site/docs/SFMC Studios/ShortLongCodes.md",sourceDirName:"SFMC Studios",slug:"/SFMC Studios/ShortLongCodesMobileConnect",permalink:"/sfmcify.github.io/docs/SFMC Studios/ShortLongCodesMobileConnect",draft:!1,tags:[{label:"MobileConnect",permalink:"/sfmcify.github.io/docs/tags/mobile-connect"},{label:"ShortCode",permalink:"/sfmcify.github.io/docs/tags/short-code"},{label:"LongCode",permalink:"/sfmcify.github.io/docs/tags/long-code"},{label:"MarketingCloud",permalink:"/sfmcify.github.io/docs/tags/marketing-cloud"}],version:"current",frontMatter:{id:"ShortLongCodesMobileConnect",title:"Things you might not know about short and long codes, private and shared codes on MobileConnect",sidebar_label:"Short & Long Codes",tags:["MobileConnect","ShortCode","LongCode","MarketingCloud"]},sidebar:"tutorialSidebar",previous:{title:"Studios",permalink:"/sfmcify.github.io/docs/category/studios"},next:{title:"Transactional SMS",permalink:"/sfmcify.github.io/docs/SFMC Studios/TransactionalSMS"}},v={},N=[{value:"Short VS Long Codes",id:"short-vs-long-codes",level:2},{value:"Differences between Short and Long codes?",id:"differences-between-short-and-long-codes",level:3},{value:"How to choose between the two?",id:"how-to-choose-between-the-two",level:3},{value:"<strong>Shared VS Private short codes</strong>",id:"shared-vs-private-short-codes",level:2},{value:"Shared and Private code summary",id:"shared-and-private-code-summary",level:3},{value:"Code provisioning on SFMC",id:"code-provisioning-on-sfmc",level:3}],S={toc:N};function w(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},S,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While sending emails is pretty straightforward in Marketing Cloud, sending SMS messages is not that easy, especially in a multi-country environment. In this article, I\u2019m sharing information I\u2019ve learned via experience, SFMC support, official documentation, and through community feedback."),(0,r.kt)("admonition",{title:"general considerations",type:"info"},(0,r.kt)(h,{mdxType:"Tabs"},(0,r.kt)(b,{value:"locale",label:"Locale Field",mdxType:"TabItem"},"You don\u2019t need to have the Locale field in your Data Extension (DE) when sending an SMS from Journey Builder (as long as the number format is CountryCode+PhoneNumber)"),(0,r.kt)(b,{value:"RaiseErrorinSMS",label:"RaiseError in SMS",mdxType:"TabItem"},"Marketing Cloud does not send an empty SMS. Hint: a similar behavior as `RaiseError` on emails"),(0,r.kt)(b,{value:"Keywords",label:"Keywords",mdxType:"TabItem"},"You can not have more than 5 keywords on shared short codes"),(0,r.kt)(b,{value:"STOP SMS",label:"STOP SMS",mdxType:"TabItem"},"A STOP keyword sent back to a shared short code will opt out the customer from all accounts using that shared code"))),(0,r.kt)("h2",{id:"short-vs-long-codes"},"Short VS Long Codes"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Well, I\u2019m not teaching you anything here but, a short code is an easy-to-remember 5 to 6 digits number (ex 96876). A long code is a standard 10 digits number (+33147875909)."),(0,r.kt)("h3",{id:"differences-between-short-and-long-codes"},"Differences between Short and Long codes?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A long code is required to send to an international market, usually a British, Swedish, or Australian variant"),(0,r.kt)("li",{parentName:"ul"},"A long code sends rate is around 1 per second. A short code sends rate is up to 100 per second."),(0,r.kt)("li",{parentName:"ul"},"One-way messaging (the long code case) is the ability to send an outbound SMS message (Mobile Terminated \u2013 MT) without a response path or the response path will result in an international SMS rate for the subscriber, i.e. they will have to send to a foreign number"),(0,r.kt)("li",{parentName:"ul"},"With this configuration, STOP and HELP requests will have to be handled through customer preference centers or web forms, i.e. a URL in the text that directs subscribers to a dedicated web page"),(0,r.kt)("li",{parentName:"ul"},"Not all markets offer a choice between long and short codes. In some markets, one or the other type of code is available, and in others, both types are available for rent."),(0,r.kt)("li",{parentName:"ul"},"Long code does not allow using a FromName")),(0,r.kt)("h3",{id:"how-to-choose-between-the-two"},"How to choose between the two?"),(0,r.kt)("p",null,"These are some factors to consider when choosing between these two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cost"),(0,r.kt)("li",{parentName:"ul"},"Time to Market"),(0,r.kt)("li",{parentName:"ul"},"Use case support"),(0,r.kt)("li",{parentName:"ul"},"Implementation complexity")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For two-way messaging, the best solution (if available) is a private short code, but the time and cost can be prohibitive"),(0,r.kt)("li",{parentName:"ul"},"A local long code or shared short code is a cheaper, faster, and, in some markets, the only option available")),(0,r.kt)("h2",{id:"shared-vs-private-short-codes"},(0,r.kt)("strong",{parentName:"h2"},"Shared VS Private short codes")),(0,r.kt)("p",null,"As you might have guessed, a shared code is shared between multiple brands, and a private code is dedicated to a single brand."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A shared code is a less expensive alternative to a private code and allows for a faster time to market. It is shared because it is used by multiple customers in different verticals with different SMS programs"),(0,r.kt)("li",{parentName:"ul"},"With a private code, the customer also has unlimited availability of keywords. Generic keywords such as STOP, HELP, JOIN, ENTER, etc. are not available on a shared code")),(0,r.kt)("h3",{id:"shared-and-private-code-summary"},"Shared and Private code summary"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Shared")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Private"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Structure")),(0,r.kt)("td",{parentName:"tr",align:null},"Shared with multiple clients of various business types. For example, only one shared short keyword in France is available"),(0,r.kt)("td",{parentName:"tr",align:null},"Exclusive to one client and good for brand association")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Set up time")),(0,r.kt)("td",{parentName:"tr",align:null},"1 week"),(0,r.kt)("td",{parentName:"tr",align:null},"From 1 to 12 weeks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cost")),(0,r.kt)("td",{parentName:"tr",align:null},"Low"),(0,r.kt)("td",{parentName:"tr",align:null},"High")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Transferable")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes, for short codes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Keywords")),(0,r.kt)("td",{parentName:"tr",align:null},"Keywords limited to 5. No possibility to buy more"),(0,r.kt)("td",{parentName:"tr",align:null},"Unlimited keywords")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"FromName")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported (local market restrictions may apply)"),(0,r.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Concatenation")),(0,r.kt)("td",{parentName:"tr",align:null},"Supported"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Choice of Vanity Options")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"code-provisioning-on-sfmc"},"Code provisioning on SFMC"),(0,r.kt)("p",null,"In terms of code provisioning, SFMC offers two options, ",(0,r.kt)("strong",{parentName:"p"},"shared")," and ",(0,r.kt)("strong",{parentName:"p"},"inherited"),". Below are some differences:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Inherited code is provisioned at the parent MID and is inherited by all child BUs. All administrative keywords (help & stop keywords) configured at the parent MID will also be inherited."),(0,r.kt)("li",{parentName:"ul"},"A code can be shared between specific MIDs belonging to the same client.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Code provisioning on SFMC",src:n(3023).Z,width:"1900",height:"714"})))}w.isMDXComponent=!0},3023:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shortvslongcodes-7fe73347a9dc3cc5e8a6211c19b207f4.png"}}]);