"use strict";(self.webpackChunksfmcify=self.webpackChunksfmcify||[]).push([[9300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={id:"TransactionalSMS",title:"Send transactional SMS from MobileConnect in Salesforce Marketing Cloud",sidebar_label:"Transactional SMS",tags:["MobileConnect","Transactional SMS"]},r=void 0,s={unversionedId:"SFMC Studios/TransactionalSMS",id:"SFMC Studios/TransactionalSMS",title:"Send transactional SMS from MobileConnect in Salesforce Marketing Cloud",description:"The ability to send transactional SMS to customers is an indispensable feature, especially for companies selling to individuals. In this short article, I will describe how I have addressed this use case.",source:"@site/docs/SFMC Studios/TransactionalSMS.md",sourceDirName:"SFMC Studios",slug:"/SFMC Studios/TransactionalSMS",permalink:"/sfmcify.github.io/docs/SFMC Studios/TransactionalSMS",draft:!1,tags:[{label:"MobileConnect",permalink:"/sfmcify.github.io/docs/tags/mobile-connect"},{label:"Transactional SMS",permalink:"/sfmcify.github.io/docs/tags/transactional-sms"}],version:"current",frontMatter:{id:"TransactionalSMS",title:"Send transactional SMS from MobileConnect in Salesforce Marketing Cloud",sidebar_label:"Transactional SMS",tags:["MobileConnect","Transactional SMS"]},sidebar:"tutorialSidebar",previous:{title:"Short & Long Codes",permalink:"/sfmcify.github.io/docs/SFMC Studios/ShortLongCodesMobileConnect"}},l={},c=[],d={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ability to send transactional SMS to customers is an indispensable feature, especially for companies selling to individuals. In this short article, I will describe how I have addressed this use case."),(0,a.kt)("admonition",{title:":(",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Long story short, there is no such thing as\xa0",(0,a.kt)("strong",{parentName:"p"},"Transactional SMS sends"),"\xa0in Marketing Cloud. This functionality is only available when sending emails leveraging Send Classifications in Email Studio.")),(0,a.kt)("p",null,"In fact, not checking the \u201cHonor source and publication list level opt outs\u201d checkbox will ignore the contact\u2019s status on AllSubscribers, opening the doors for your transactional emails."),(0,a.kt)("p",null,"I had to figure out a way to do the same within MobileConnect. After digging in the documentation, I did not find a \u201cstandard\u201d way to achieve this. I had to look elsewhere. I was happy to find out that I can use\xa0",(0,a.kt)("strong",{parentName:"p"},"keywords"),". However, it did not last very long before I learned that there are many\xa0",(0,a.kt)("strong",{parentName:"p"},"limitations"),"."),(0,a.kt)("p",null,"I created two keywords,\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"WithConsent"),"\xa0&\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"NoConsent"),"\xa0to separate transactional and promotional SMS sends. I\u2019ve also created two queries:"),(0,a.kt)("admonition",{title:"Query 1",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Populate contacts that have a valid MobileNumber.")),(0,a.kt)("admonition",{title:"Query 2",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Populate contacts that gave their consent to receive SMS messages and have a valid MobileNumber.")),(0,a.kt)("p",null,"Every contact that have a valid MobileNumber will be uploaded to AllContacts through ContactBuilder and associated to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"NoConsent"),"\xa0keyword. Moreover, contacts who gave their consent and have a valid MobileNumber will be uploaded to AllContacts and associated to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"WithConsent"),"\xa0keyword. In addition, since Journey Builder gives the possibility to send SMS to contacts that are subscribed to\xa0",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"at least")),"\xa0one keyword, it was perfect for transactional sends."),(0,a.kt)("p",null,"The problem was with the promotional sends. The second option (cf image below) allows you to\xa0",(0,a.kt)("strong",{parentName:"p"},"associate"),"\xa0your SMS activity to a keyword and\xa0",(0,a.kt)("strong",{parentName:"p"},"subscribe"),"\xa0the contact to this keyword if he is not. At least, this is the description given in the UI by SFMC. But after conducting several tests, I found out that this is not the real behavior."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SMS delivery options in Journey Builder",src:n(3900).Z,width:"1168",height:"754"})),(0,a.kt)("p",null,"There is actually two use cases when choosing the second option (",(0,a.kt)("inlineCode",{parentName:"p"},"Subscribe all contacts to a Keyword"),"):"),(0,a.kt)("admonition",{title:"Use case 1",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the contact has been attached to this keyword in AllContacts, then Journey Builder will respect the consent. The contact will only receive the SMS if he has opted in. In case he is\xa0",(0,a.kt)("strong",{parentName:"p"},"Opted out"),"\xa0from this keyword, he will not receive the SMS and will not be re-opted in.")),(0,a.kt)("admonition",{title:"Use case 2",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the contact has not been attached to this keyword on AllContacts, he will receive the SMS and will be Opted-in to the keyword.")),(0,a.kt)("p",null,"The problem with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Use case #1")," is, there is no way of unsubscribing contacts from a keyword in\xa0",(0,a.kt)("strong",{parentName:"p"},"bulk"),". In other words, unless we do it manually on every contact on Contact Builder > AllContacts > YourContact > Membership, I could not unsubscribe contacts from\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"WithConsent"),"\xa0keyword. "),(0,a.kt)("admonition",{title:"Note 1",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"There is no such thing as ",(0,a.kt)("strong",{parentName:"p"},"Unsubscribe")," a contact from a keyword in Marketing Cloud, except in Australia.")),(0,a.kt)("admonition",{title:"Note 2",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"When a contact sends STOP to the short code, he will be unsubscribed at the account level, will be marked as Inactive, and hence will no longer receive any SMS messages.")),(0,a.kt)("p",null,"The problem with ",(0,a.kt)("inlineCode",{parentName:"p"},"Use case #2")," lies in the fact that I\u2019ve uploaded and attached all contacts to\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"NoConsent"),"\xa0keyword, and if by any chance I forget to check the consent of the audience before injecting it into Journey Builder, and chosed the second option, contacts who are basically opted out will receive the SMS and will be attached to the\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"WithConsent"),"\xa0keyword."),(0,a.kt)("p",null,"Finally, I\u2019ve decided to keep one keyword:\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"NoConsent"),". Every contact with a valid MobileNumber will be uploaded to AllContacts and attached to this keyword. The consent logic is implemented when populating the audience and contacts that are not opted in are excluded."),(0,a.kt)("p",null,"What would you have done in this case? I would love to read from you.."))}p.isMDXComponent=!0},3900:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/transactionalSMS-27a6864b21072deb8babb376ffb1aeb5.png"}}]);