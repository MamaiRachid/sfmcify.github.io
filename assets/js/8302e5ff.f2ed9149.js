"use strict";(self.webpackChunksfmcify=self.webpackChunksfmcify||[]).push([[9515],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var u=n.createContext({}),m=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,u=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=m(a),c=i,k=p["".concat(u,".").concat(c)]||p[c]||d[c]||r;return a?n.createElement(k,l(l({ref:e},s),{},{components:a})):n.createElement(k,l({ref:e},s))}));function c(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7440:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={id:"AutomationStudioDataViews",title:"Automation Studio new Data Views to improve Automation Health",sidebar_label:"Automation Studio new Data Views",tags:["AutomationStudio","dataviews","SQL","MarketingCloud"]},l=void 0,o={unversionedId:"SFMC SQL/AutomationStudioDataViews",id:"SFMC SQL/AutomationStudioDataViews",title:"Automation Studio new Data Views to improve Automation Health",description:"It has been a while since Salesforce introduced new Data Views. Well, this is no longer the case as with the recent release of Marketing Cloud (05/10/2022) comes not only one but two new Data Views. AutomationInstance and AutomationActivityInstance will help you identify points of failure and improve the efficiency and success rate of your automations by reviewing their health.",source:"@site/docs/SFMC SQL/AutomationStudioDataViews.md",sourceDirName:"SFMC SQL",slug:"/SFMC SQL/AutomationStudioDataViews",permalink:"/sfmcify.github.io/docs/SFMC SQL/AutomationStudioDataViews",draft:!1,tags:[{label:"AutomationStudio",permalink:"/sfmcify.github.io/docs/tags/automation-studio"},{label:"dataviews",permalink:"/sfmcify.github.io/docs/tags/dataviews"},{label:"SQL",permalink:"/sfmcify.github.io/docs/tags/sql"},{label:"MarketingCloud",permalink:"/sfmcify.github.io/docs/tags/marketing-cloud"}],version:"current",frontMatter:{id:"AutomationStudioDataViews",title:"Automation Studio new Data Views to improve Automation Health",sidebar_label:"Automation Studio new Data Views",tags:["AutomationStudio","dataviews","SQL","MarketingCloud"]},sidebar:"tutorialSidebar",previous:{title:"SQL",permalink:"/sfmcify.github.io/docs/category/sql"},next:{title:"SSJS",permalink:"/sfmcify.github.io/docs/category/ssjs"}},u={},m=[{value:"Data View: Automation Instance",id:"data-view-automation-instance",level:3},{value:"What _AutomationInstance Data View Shows",id:"what-_automationinstance-data-view-shows",level:3},{value:"_AutomationInstance Columns",id:"_automationinstance-columns",level:3},{value:"Data View: Automation Activity Instance",id:"data-view-automation-activity-instance",level:3},{value:"What _AutomationActivityInstance Data View Shows",id:"what-_automationactivityinstance-data-view-shows",level:3},{value:"_AutomationActivityInstance Columns",id:"_automationactivityinstance-columns",level:3},{value:"Activity Type IDs",id:"activity-type-ids",level:3}],s={toc:m};function d(t){let{components:e,...a}=t;return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It has been a while since Salesforce introduced new Data Views. Well, this is no longer the case as with the recent release of Marketing Cloud (05/10/2022) comes not only one but two new Data Views. ",(0,i.kt)("inlineCode",{parentName:"p"},"_AutomationInstance")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_AutomationActivityInstance")," will help you identify points of failure and improve the efficiency and success rate of your automations by reviewing their health."),(0,i.kt)("h3",{id:"data-view-automation-instance"},"Data View: Automation Instance"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Wondering which automations failed yesterday? Or which ones skipped this week? Or maybe you need an average duration of each automation in a specific Business Unit?"),(0,i.kt)("p",null,"These are some examples of what you can accomplish by querying this Data View. It helps to get an overview of all automations within a tenant and improve the efficiency and success rate by continuously reviewing their health."),(0,i.kt)("h3",{id:"what-_automationinstance-data-view-shows"},"What _AutomationInstance Data View Shows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automations that ran recently"),(0,i.kt)("li",{parentName:"ul"},"When an automation ran"),(0,i.kt)("li",{parentName:"ul"},"The duration of an automation"),(0,i.kt)("li",{parentName:"ul"},"Whether an automation succeeded, skipped, or failed"),(0,i.kt)("li",{parentName:"ul"},"The reason an automation failed"),(0,i.kt)("li",{parentName:"ul"},"The file that was being processed when a triggered automation failed")),(0,i.kt)("p",null,"This Data View is available by default on all accounts. The data for the last 31 days is available 1 day after the automation runs."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Similar to ","_","Job, this Data View holds specific Child BU\u2019s data. You can not query ",(0,i.kt)("inlineCode",{parentName:"p"},"`_AutomationInstance`")," from the Parent BU")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Dates are in UTC")),(0,i.kt)("h3",{id:"_automationinstance-columns"},"_AutomationInstance Columns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,i.kt)("th",{parentName:"tr",align:null},"DATA EXTENSION DATA TYPE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MemberID"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the business unit."),(0,i.kt)("td",{parentName:"tr",align:null},"Number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationName"),(0,i.kt)("td",{parentName:"tr",align:null},"The automation name."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationDescription"),(0,i.kt)("td",{parentName:"tr",align:null},"The automation description."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationCustomerKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the automation."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationType"),(0,i.kt)("td",{parentName:"tr",align:null},"The automation\u2019s starting source. Possible values are Schedule, File Drop, or Trigger."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationNotificationRecipient_Complete"),(0,i.kt)("td",{parentName:"tr",align:null},"The email address where notifications about completed automations are sent."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationNotificationRecipient_Error"),(0,i.kt)("td",{parentName:"tr",align:null},"The email address where notifications about automation errors are sent."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationNotificationRecipient_Skip"),(0,i.kt)("td",{parentName:"tr",align:null},"The email address where notifications about skipped automations are sent."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationStepCount"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of steps in the automation."),(0,i.kt)("td",{parentName:"tr",align:null},"Number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceID"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the automation run."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceIsRunOnce"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether the automation was set to run once. 1 = true, 0 = false."),(0,i.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FilenameFromTrigger"),(0,i.kt)("td",{parentName:"tr",align:null},"For file drop and trigger automations, the file that started the automation."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceScheduledTime_UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"For scheduled automations, the time that the run was scheduled to begin."),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceStartTime_UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"The time that the automation run started. This value is blank if the run hasn\u2019t started."),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceEndTime_UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"The time that the automation run ended. This value is blank if the run hasn\u2019t ended."),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceStatus"),(0,i.kt)("td",{parentName:"tr",align:null},"The status of the automation. Possible values are QueuedFile, Initialized, Executing, Stopped, Complete, or Error."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceActivityErrorDetails"),(0,i.kt)("td",{parentName:"tr",align:null},"The message from the error log, if applicable. If a system or unclassified error occurs, the value is System Error. If multiple errors occur, only the first message is displayed. To get details on multiple errors, use the _AutomationActivityInstance view."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that there is a typo in the official documentation. The name of the column is ",(0,i.kt)("em",{parentName:"p"},"AutomationNotificationRecipient","_","Complete")," instead of ",(0,i.kt)("em",{parentName:"p"},"AutomationNotificationRecipient","_","Compete"),".")),(0,i.kt)("h3",{id:"data-view-automation-activity-instance"},"Data View: Automation Activity Instance"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Are you looking for activities at risk of timing out? Do you need the average duration of each activity inside an automation? Or maybe a list of activities that failed because of an error?"),(0,i.kt)("p",null,"This Data View stores all runs of activities inside your automations. It can be used to prevent failures by identifying activities that often fail or run long."),(0,i.kt)("h3",{id:"what-_automationactivityinstance-data-view-shows"},"What _AutomationActivityInstance Data View Shows"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Activities that ran in an automation"),(0,i.kt)("li",{parentName:"ul"},"When an activity ran"),(0,i.kt)("li",{parentName:"ul"},"The duration of an activity"),(0,i.kt)("li",{parentName:"ul"},"Whether an activity succeeded or failed"),(0,i.kt)("li",{parentName:"ul"},"The reason an activity failed")),(0,i.kt)("p",null,"This Data View is available by default on all accounts. The data for the last 31 days is available 1 day after the automation runs."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Similar to ","_","Job, this Data View holds specific Child BU\u2019s data. You can not query ",(0,i.kt)("inlineCode",{parentName:"p"},"`_AutomationActivityInstance`")," from the Parent BU")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Dates are in UTC")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example: Which Automations Are Failing and Why?")),(0,i.kt)("p",null,"An automation error can be categorized as a configuration error or system error."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A configuration error occurs because an activity or dependency isn\u2019t set up correctly. For example, if a file transfer activity is looking for a file that doesn\u2019t exist."),(0,i.kt)("li",{parentName:"ul"},"A system error is more general and often temporary\u2014for example, a timeout error for a query trying to run for more than 30 minutes.")),(0,i.kt)("p",null,"Before having access to this Data View, the quickest and easiest way to have more details about an automation\u2019s error that is more detailed than the standard \u201can error occurred while\u2026.\u201d was by asking the support. This is no longer the case as you can query ",(0,i.kt)("inlineCode",{parentName:"p"},"_AutomationActivityInstance")," to find activities that failed because of a configuration error and check the error message to learn how you can address the error. Use this query from:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM   [_automationactivityinstance]\nWHERE activityinstancestatus = 'Error'\n// highlight-next-line\n        AND activityinstancestatusdetails LIKE 'System Error occurred%'\n")),(0,i.kt)("p",null,"The same way, but this time you can use this query to get activities that failed because of a system error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM   [_automationactivityinstance]\nWHERE activityinstancestatus = 'Error'\n// highlight-next-line\n        AND activityinstancestatusdetails NOT LIKE 'System Error occurred%' \n")),(0,i.kt)("h3",{id:"_automationactivityinstance-columns"},"_AutomationActivityInstance Columns"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NAME"),(0,i.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,i.kt)("th",{parentName:"tr",align:null},"DATA EXTENSION DATA TYPE"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MemberID"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the business unit."),(0,i.kt)("td",{parentName:"tr",align:null},"Number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationName"),(0,i.kt)("td",{parentName:"tr",align:null},"The automation name."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationCustomerKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the automation."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AutomationInstanceID"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the automation run."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityType"),(0,i.kt)("td",{parentName:"tr",align:null},"The activity type. Possible values are listed in the Activity Type IDs table below."),(0,i.kt)("td",{parentName:"tr",align:null},"Number")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityName"),(0,i.kt)("td",{parentName:"tr",align:null},"The activity name."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityDescription"),(0,i.kt)("td",{parentName:"tr",align:null},"The activity description."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityCustomerKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the activity."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityInstanceStep"),(0,i.kt)("td",{parentName:"tr",align:null},"Where the activity occurs in the automation. For example, 3.2 is step 3, activity 2."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityInstanceID"),(0,i.kt)("td",{parentName:"tr",align:null},"The unique ID of the activity run."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityInstanceStartTime_UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"The time that the activity run started."),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityInstanceEndTime_UTC"),(0,i.kt)("td",{parentName:"tr",align:null},"The time that the activity run ended."),(0,i.kt)("td",{parentName:"tr",align:null},"Date")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityInstanceStatus"),(0,i.kt)("td",{parentName:"tr",align:null},"The status of the activity. Possible values are Initialized, Executing, Complete, Error, or NotSelected."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ActivityInstanceErrorDetails"),(0,i.kt)("td",{parentName:"tr",align:null},"The message from the error log, if applicable. If a system or unclassified error occurs, the value is System Error."),(0,i.kt)("td",{parentName:"tr",align:null},"Text")))),(0,i.kt)("p",null,"And to get all the details you need here are the ActivityType possible IDs:"),(0,i.kt)("h3",{id:"activity-type-ids"},"Activity Type IDs"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ACTIVITY TYPE ID"),(0,i.kt)("th",{parentName:"tr",align:null},"ACTIVITY NAME"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"33"),(0,i.kt)("td",{parentName:"tr",align:null},"SMS Activity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"42"),(0,i.kt)("td",{parentName:"tr",align:null},"Send Email")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"43"),(0,i.kt)("td",{parentName:"tr",align:null},"Import File")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"45"),(0,i.kt)("td",{parentName:"tr",align:null},"Refresh Group")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"53"),(0,i.kt)("td",{parentName:"tr",align:null},"File Transfer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"73"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Extract")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"84"),(0,i.kt)("td",{parentName:"tr",align:null},"Report Definition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"300"),(0,i.kt)("td",{parentName:"tr",align:null},"SQL Query")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"303"),(0,i.kt)("td",{parentName:"tr",align:null},"Filter")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"423"),(0,i.kt)("td",{parentName:"tr",align:null},"Script")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"425"),(0,i.kt)("td",{parentName:"tr",align:null},"Data Factory Utility Activity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"426"),(0,i.kt)("td",{parentName:"tr",align:null},"Refresh Segment Template")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"427"),(0,i.kt)("td",{parentName:"tr",align:null},"Publish Audience")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"467"),(0,i.kt)("td",{parentName:"tr",align:null},"Wait")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"724"),(0,i.kt)("td",{parentName:"tr",align:null},"Refresh Mobile Filtered List")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"725"),(0,i.kt)("td",{parentName:"tr",align:null},"Send SMS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"726"),(0,i.kt)("td",{parentName:"tr",align:null},"Import Mobile Contacts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"733"),(0,i.kt)("td",{parentName:"tr",align:null},"Journey Builder Event Activity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"736"),(0,i.kt)("td",{parentName:"tr",align:null},"Send Push")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"749"),(0,i.kt)("td",{parentName:"tr",align:null},"Fire Event")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"771"),(0,i.kt)("td",{parentName:"tr",align:null},"Salesforce Email Send")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"772"),(0,i.kt)("td",{parentName:"tr",align:null},"Mobile Connect Send Salesforce Sync Subscriber")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"783"),(0,i.kt)("td",{parentName:"tr",align:null},"Send GroupConnect")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"Verification")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1010"),(0,i.kt)("td",{parentName:"tr",align:null},"Interaction Studio Data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1101"),(0,i.kt)("td",{parentName:"tr",align:null},"Interactions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1701"),(0,i.kt)("td",{parentName:"tr",align:null},"Batch Personalization")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3700"),(0,i.kt)("td",{parentName:"tr",align:null},"Contact to Business Unit Mapping")))),(0,i.kt)("p",null,"I have not yet played with these two Data Views, but very excited to check them out. I can already think of some interesting use cases where they can be used. I\u2019ll share with you my findings, I promise ! In the meantime, have fun using SFMC !"),(0,i.kt)("admonition",{title:"Sources:",type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?language=en_US&id=sf.mc_as_data_view_automation_activity_instance.htm&type=5"},"https://help.salesforce.com/s/articleView?language=en_US&id=sf.mc_as_data_view_automation_activity_instance.htm&type=5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_automation_instance.htm&type=5"},"https://help.salesforce.com/s/articleView?id=sf.mc_as_data_view_automation_instance.htm&type=5")))))}d.isMDXComponent=!0}}]);