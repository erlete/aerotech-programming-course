!function(){var n=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.content_card=n({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){var a,o=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,i="function",c=n.escapeExpression,n=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="mt-3 mb-1 flex w-full items-center justify-between rounded-xl bg-secondary-50 p-3 shadow-xl">\r\n    <div class="flex items-center">\r\n        <a href="'+c(typeof(a=null!=(a=n(t,"link")||(null!=e?n(e,"link"):e))?a:s)==i?a.call(o,{name:"link",hash:{},data:r,loc:{start:{line:3,column:17},end:{line:3,column:25}}}):a)+'">\r\n            <div>\r\n                <img class="h-[83px] w-[83px] rounded-lg" src="'+c(typeof(a=null!=(a=n(t,"img_source")||(null!=e?n(e,"img_source"):e))?a:s)==i?a.call(o,{name:"img_source",hash:{},data:r,loc:{start:{line:5,column:63},end:{line:5,column:77}}}):a)+'" alt="Section image">\r\n            </div>\r\n            <div class="ml-4">\r\n                <p class="text-base font-bold text-title">\r\n                    '+c(typeof(a=null!=(a=n(t,"title")||(null!=e?n(e,"title"):e))?a:s)==i?a.call(o,{name:"title",hash:{},data:r,loc:{start:{line:9,column:20},end:{line:9,column:29}}}):a)+'\r\n                </p>\r\n                <p class="mt-2 mb-2 text-sm text-text">\r\n                    '+c(typeof(a=null!=(a=n(t,"description")||(null!=e?n(e,"description"):e))?a:s)==i?a.call(o,{name:"description",hash:{},data:r,loc:{start:{line:12,column:20},end:{line:12,column:35}}}):a)+'\r\n                </p>\r\n                <a class="text-sm"\r\n                    href="'+c(typeof(a=null!=(a=n(t,"issue_link")||(null!=e?n(e,"issue_link"):e))?a:s)==i?a.call(o,{name:"issue_link",hash:{},data:r,loc:{start:{line:15,column:26},end:{line:15,column:40}}}):a)+'" target="_blank">\r\n                    Report an issue\r\n                </a>\r\n            </div>\r\n        </a>\r\n    </div>\r\n</div>\r\n'},useData:!0}),e.content_card_collection=n({1:function(n,e,t,l,r){var a=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=n.invokePartial(a(l,"content_card"),e,{name:"content_card",data:r,indent:"        ",helpers:t,partials:l,decorators:n.decorators}))?a:""},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){var a,o=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,i="function",c=n.escapeExpression,d=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="relative flex w-full flex-col rounded-xl bg-secondary-100 bg-clip-border p-4 shadow-xl">\r\n\r\n    <div class="w-full">\r\n        <h4 class="mx-1 antialiased tracking-normal font-sans text-xl leading-snug text-inherit font-semibold">\r\n            '+c(typeof(a=null!=(a=d(t,"title")||(null!=e?d(e,"title"):e))?a:s)==i?a.call(o,{name:"title",hash:{},data:r,loc:{start:{line:5,column:12},end:{line:5,column:21}}}):a)+'\r\n        </h4>\r\n        <p class="mx-1 mt-2 text-base text-text">\r\n            '+c(typeof(a=null!=(a=d(t,"description")||(null!=e?d(e,"description"):e))?a:s)==i?a.call(o,{name:"description",hash:{},data:r,loc:{start:{line:8,column:12},end:{line:8,column:27}}}):a)+"\r\n        </p>\r\n    </div>\r\n\r\n"+(null!=(c=d(t,"each").call(o,null!=e?d(e,"content_cards"):e,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:12,column:4},end:{line:14,column:13}}}))?c:"")+"</div>\r\n"},usePartial:!0,useData:!0}),e.footer=n({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){return'<div class="flex flex-col items-center w-full mb-20">\r\n  <div class="grid grid-cols-3 auto-cols-auto items-center align-middle my-8">\r\n    <a href="https://uvigoaerotech.com/" target="_blank">\r\n      <img class="h-[64px] w-[64px] rounded-[50%]" src="/public/aerotech/icon.png">\r\n    </a>\r\n    <img class="m-auto h-[20px] w-[20px]" src="/public/icons8/x.png">\r\n    <a href="https://github.com/erlete/" target="_blank">\r\n      <img class="h-[64px] w-[64px] rounded-[50%]" src="https://github.com/erlete.png">\r\n    </a>\r\n  </div>\r\n  <div class="flex flex-col items-center gap-6 mb-8">\r\n    <div class="flex flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap text-dark-grey-900">\r\n      <a href="https://github.com/erlete" target="_blank">Repository</a>\r\n      <a href=" https://github.com/erlete/aerotech-programming-course/issues" target="_blank">Issues</a>\r\n      <a href="https://uvigoaerotech.com/miembros-acc/" target="_blank">About the team</a>\r\n      <a href="https://uvigoaerotech.com/patrocinadores/" target="_blank">Partners</a>\r\n      <a href="https://uvigoaerotech.com/newsletter/" target="_blank">Newsletter</a>\r\n    </div>\r\n    <div class=" flex items-center gap-8">\r\n      <a href="https://github.com/erlete/" target="_blank">\r\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\r\n          <path\r\n            d="M12 3C7.0275 3 3 7.13211 3 12.2284C3 16.3065 5.5785 19.7648 9.15375 20.9841C9.60375 21.0709 9.76875 20.7853 9.76875 20.5403C9.76875 20.3212 9.76125 19.7405 9.7575 18.9712C7.254 19.5277 6.726 17.7332 6.726 17.7332C6.3165 16.6681 5.72475 16.3832 5.72475 16.3832C4.9095 15.8111 5.78775 15.8229 5.78775 15.8229C6.6915 15.887 7.16625 16.7737 7.16625 16.7737C7.96875 18.1847 9.273 17.777 9.7875 17.5414C9.8685 16.9443 10.1003 16.5381 10.3575 16.3073C8.35875 16.0764 6.258 15.2829 6.258 11.7471C6.258 10.7399 6.60675 9.91659 7.18425 9.27095C7.083 9.03774 6.77925 8.0994 7.263 6.82846C7.263 6.82846 8.01675 6.58116 9.738 7.77462C10.458 7.56958 11.223 7.46785 11.988 7.46315C12.753 7.46785 13.518 7.56958 14.238 7.77462C15.948 6.58116 16.7017 6.82846 16.7017 6.82846C17.1855 8.0994 16.8818 9.03774 16.7917 9.27095C17.3655 9.91659 17.7142 10.7399 17.7142 11.7471C17.7142 15.2923 15.6105 16.0725 13.608 16.2995C13.923 16.5765 14.2155 17.1423 14.2155 18.0071C14.2155 19.242 14.2043 20.2344 14.2043 20.5341C14.2043 20.7759 14.3617 21.0647 14.823 20.9723C18.4237 19.7609 21 16.3002 21 12.2284C21 7.13211 16.9703 3 12 3Z"\r\n            fill="currentColor" />\r\n        </svg>\r\n      </a>\r\n      <a href="https://www.linkedin.com/in/erlete/" target="_blank">\r\n        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">\r\n          <path\r\n            d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"\r\n            fill="currentColor" />\r\n        </svg>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div class="flex items-center">\r\n    <p class="text-base font-normal leading-7 text-center text-text">\r\n      &copy Copyright <span id="current_year"></span> <a href="https://github.com/erlete" target="_blank">erlete</a>. All rights\r\n      reserved.</p>\r\n  </div>\r\n  <div class="flex items-center">\r\n    <p class="text-sm font-normal leading-7 text-center text-text">\r\n      The contents of this course are dedicated to the <a href="https://uvigoaerotech.com" target="_blank">UVigo Aerotech</a>\r\n      university team. The ultimate ownership of the contents belongs to the author of the course, <a\r\n        href="https://github.com/erlete" target="_blank">erlete</a>. All contents are subject to the <a\r\n        href="https://github.com/erlete/aerotech-programming-course/blob/stable/LICENSE" target="_blank">repository license</a>.\r\n    </p>\r\n  </div>\r\n  <script>\r\n    document.getElementById("current_year").innerHTML = new Date().getFullYear();\r\n  <\/script>\r\n</div>\r\n'},useData:!0}),e.header=n({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){return'<header class="absolute inset-x-0 top-0 z-50">\r\n  <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">\r\n    <div class="flex">\r\n      <a href="/" class="-m-1.5 p-1.5">\r\n        <span class="sr-only">UVigo Aerotech</span>\r\n        <img class="h-10 w-10" src="/public/aerotech/icon.png" alt="UVigo Aerotech">\r\n      </a>\r\n    </div>\r\n    <div class="flex">\r\n      <a href="https://github.com/erlete/aerotech-programming-course" target="_blank" class="-m-1.5 p-1.5">\r\n        <span class="sr-only">GitHub Repository</span>\r\n        <img class="h-10 w-10" src="/public/github/github-mark.svg" alt="GitHub Repository">\r\n      </a>\r\n    </div>\r\n  </nav>\r\n</header>\r\n'},useData:!0}),e.navigation_buttons=n({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){var a,o=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,i="function",c=n.escapeExpression,n=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="flex items-center justify-between">\r\n  <a href="'+c(typeof(a=null!=(a=n(t,"previous_page_link")||(null!=e?n(e,"previous_page_link"):e))?a:s)==i?a.call(o,{name:"previous_page_link",hash:{},data:r,loc:{start:{line:2,column:11},end:{line:2,column:33}}}):a)+'"\r\n    class="group relative overflow-hidden bg-primary-500 inline-flex items-center px-7 py-2.5 rounded-lg text-title font-semibold justify-center">\r\n    <svg class="z-40 mr-2 -ml-1 w-3 h-3 transition-all duration-300 group-hover:-translate-x-1" fill="currentColor"\r\n      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\r\n      <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" clip-rule="evenodd" />\r\n    </svg>\r\n    <span class="z-40">Previous page</span>\r\n    <div\r\n      class="absolute inset-0 h-[200%] w-[200%] rotate-45 -translate-x-[-70%] transition-all group-hover:scale-100 bg-primary-100/50 group-hover:-translate-x-[70%] z-20 duration-1000">\r\n    </div>\r\n  </a>\r\n  <a href="'+c(typeof(a=null!=(a=n(t,"next_page_link")||(null!=e?n(e,"next_page_link"):e))?a:s)==i?a.call(o,{name:"next_page_link",hash:{},data:r,loc:{start:{line:13,column:11},end:{line:13,column:29}}}):a)+'"\r\n    class="group relative overflow-hidden bg-primary-500 inline-flex items-center px-7 py-2.5 rounded-lg text-title font-semibold justify-center">\r\n    <span class="z-40">Next page</span>\r\n    <svg class="z-40 ml-2 -mr-1 w-3 h-3 transition-all duration-300 group-hover:translate-x-1" fill="currentColor"\r\n      viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\r\n      <path fill-rule="evenodd" d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"\r\n        clip-rule="evenodd" />\r\n    </svg>\r\n    <div\r\n      class="absolute inset-0 h-[200%] w-[200%] rotate-45 translate-x-[-70%] transition-all group-hover:scale-100 bg-primary-100/50 group-hover:translate-x-[70%] z-20 duration-1000">\r\n    </div>\r\n  </a>\r\n</div>\r\n'},useData:!0}),e.setup_step_slider=n({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){var a,o,s=null!=e?e:n.nullContext||{},i=n.hooks.helperMissing,c="function",n=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="w-full flex items-center justify-center">\r\n  <div x-data="{ openTab: 1 }" class="w-full">\r\n    <div class="w-full">\r\n      <div class="mb-4 flex space-x-4 p-2 bg-secondary-50 rounded-lg shadow-md">\r\n        <button x-on:click="openTab = 1" :class="{ \'bg-primary-500 text-title hover:text-[#4338ca]\': openTab === 1 }"\r\n          class="flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300"><p class="transition-all duration-300 hover:text-[#4338ca]">1. Download</p></button>\r\n        <button x-on:click="openTab = 2" :class="{ \'bg-primary-500 text-title hover:text-[#4338ca]\': openTab === 2 }"\r\n          class="flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300"><p class="transition-all duration-300 hover:text-[#4338ca]">2. Installation</p></button>\r\n        <button x-on:click="openTab = 3" :class="{ \'bg-primary-500 text-title hover:text-[#4338ca]\': openTab === 3 }"\r\n          class="flex-1 py-2 px-4 rounded-md font-semibold transition-all duration-300"><p class="transition-all duration-300 hover:text-[#4338ca]">3. Validation</p></button>\r\n      </div>\r\n\r\n      <div x-show="openTab === 1"\r\n        class="transition-all duration-300 bg-secondary-50 p-4 rounded-lg shadow-md border-l-4 border-secondary-800">\r\n        <h2 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mb-2 font-semibold text-secondary-800">How to download '+(null!=(a=typeof(o=null!=(o=n(t,"name")||(null!=e?n(e,"name"):e))?o:i)==c?o.call(s,{name:"name",hash:{},data:r,loc:{start:{line:15,column:152},end:{line:15,column:162}}}):o)?a:"")+'?</h2>\r\n        <p class="text-text">\r\n          '+(null!=(a=typeof(o=null!=(o=n(t,"download_description")||(null!=e?n(e,"download_description"):e))?o:i)==c?o.call(s,{name:"download_description",hash:{},data:r,loc:{start:{line:17,column:10},end:{line:17,column:36}}}):o)?a:"")+'\r\n        </p>\r\n      </div>\r\n\r\n      <div x-show="openTab === 2"\r\n        class="transition-all duration-300 bg-secondary-50 p-4 rounded-lg shadow-md border-l-4 border-secondary-800">\r\n        <h2 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mb-2 font-semibold text-secondary-800">How to install '+(null!=(a=typeof(o=null!=(o=n(t,"name")||(null!=e?n(e,"name"):e))?o:i)==c?o.call(s,{name:"name",hash:{},data:r,loc:{start:{line:23,column:151},end:{line:23,column:161}}}):o)?a:"")+'?</h2>\r\n        <p class="text-text">\r\n          '+(null!=(a=typeof(o=null!=(o=n(t,"installation_description")||(null!=e?n(e,"installation_description"):e))?o:i)==c?o.call(s,{name:"installation_description",hash:{},data:r,loc:{start:{line:25,column:10},end:{line:25,column:40}}}):o)?a:"")+'\r\n        </p>\r\n      </div>\r\n\r\n      <div x-show="openTab === 3"\r\n        class="transition-all duration-300 bg-secondary-50 p-4 rounded-lg shadow-md border-l-4 border-secondary-800">\r\n        <h2 class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mb-2 font-semibold text-secondary-800">How to validate installation?</h2>\r\n        <p class="text-text">\r\n          '+(null!=(a=typeof(o=null!=(o=n(t,"validation_description")||(null!=e?n(e,"validation_description"):e))?o:i)==c?o.call(s,{name:"validation_description",hash:{},data:r,loc:{start:{line:33,column:10},end:{line:33,column:38}}}):o)?a:"")+"\r\n        </p>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"},useData:!0}),e.step=n({compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){var a,o=null!=e?e:n.nullContext||{},s=n.hooks.helperMissing,i="function",c=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="relative w-full">\r\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="title"\r\n    class="absolute -top-1 -l-0.25 z-10 -ml-3.5 h-7 w-7 rounded-full text-title">\r\n    <rect x=6 y=6 height=12 width=12 class="fill-primary-500" />\r\n    <path fill-rule="evenodd"\r\n      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"\r\n      clip-rule="evenodd" />\r\n  </svg>\r\n  <div class="ml-6">\r\n    <h4 class="block antialiased tracking-normal font-sans text-lg leading-snug text-inherit mb-2 font-semibold">\r\n      '+n.escapeExpression(typeof(n=null!=(n=c(t,"index")||(null!=e?c(e,"index"):e))?n:s)==i?n.call(o,{name:"index",hash:{},data:r,loc:{start:{line:11,column:6},end:{line:11,column:15}}}):n)+". "+(null!=(a=typeof(n=null!=(n=c(t,"title")||(null!=e?c(e,"title"):e))?n:s)==i?n.call(o,{name:"title",hash:{},data:r,loc:{start:{line:11,column:17},end:{line:11,column:28}}}):n)?a:"")+'\r\n    </h4>\r\n    <p class="block antialiased font-sans text-base leading-relaxed font-normal text-text mt-2">\r\n      '+(null!=(a=typeof(n=null!=(n=c(t,"body")||(null!=e?c(e,"body"):e))?n:s)==i?n.call(o,{name:"body",hash:{},data:r,loc:{start:{line:14,column:6},end:{line:14,column:16}}}):n)?a:"")+"\r\n    </p>\r\n  </div>\r\n</div>\r\n"},useData:!0}),e.step_collection=n({1:function(n,e,t,l,r){var a=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return null!=(a=n.invokePartial(a(l,"step"),e,{name:"step",data:r,indent:"                ",helpers:t,partials:l,decorators:n.decorators}))?a:""},compiler:[8,">= 4.3.0"],main:function(n,e,t,l,r){var a,o=null!=e?e:n.nullContext||{},s=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<div class="bg-secondary-100 rounded-xl shadow-md overflow-hidden p-4 pt-0 mt-4">\r\n    <h3 class="mx-1 my-4 antialiased tracking-normal font-sans text-xl leading-snug text-inherit font-bold">\r\n        '+(null!=(a="function"==typeof(a=null!=(a=s(t,"title")||(null!=e?s(e,"title"):e))?a:n.hooks.helperMissing)?a.call(o,{name:"title",hash:{},data:r,loc:{start:{line:3,column:8},end:{line:3,column:19}}}):a)?a:"")+'\r\n    </h3>\r\n    <div class="flex items-center justify-center px-6">\r\n        <div class="space-y-6 border-l-2 border-dashed border-title">\r\n'+(null!=(a=s(t,"each").call(o,null!=e?s(e,"step_collection"):e,{name:"each",hash:{},fn:n.program(1,r,0),inverse:n.noop,data:r,loc:{start:{line:7,column:12},end:{line:9,column:21}}}))?a:"")+"        </div>\r\n    </div>\r\n</div>\r\n"},usePartial:!0,useData:!0})}();