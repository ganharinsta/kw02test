(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4740:function(e,t,r){Promise.resolve().then(r.bind(r,4103)),Promise.resolve().then(r.bind(r,7885)),Promise.resolve().then(r.bind(r,1361)),Promise.resolve().then(r.t.bind(r,8003,23)),Promise.resolve().then(r.t.bind(r,4742,23)),Promise.resolve().then(r.t.bind(r,7960,23))},4103:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(7437),a=r(9376),s=r(2869),i=r(2660);function o(){let e=(0,a.useRouter)(),t=(0,a.usePathname)();return"/"===t?null:(0,n.jsx)(s.z,{variant:"ghost",size:"icon",className:"fixed top-4 left-4 z-50",onClick:()=>{"/"!==t&&e.back()},children:(0,n.jsx)(i.Z,{className:"w-6 h-6"})})}},7885:function(e,t,r){"use strict";r.d(t,{default:function(){return l}});var n=r(7437),a=r(2265),s=r(6070),i=r(2869);let o=(0,r(9205).Z)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);function l(){let[e,t]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{let e=()=>t(!0);return window.addEventListener("showWithdrawWarning",e),()=>window.removeEventListener("showWithdrawWarning",e)},[]),e)?(0,n.jsx)("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:(0,n.jsxs)(s.Zb,{className:"w-full max-w-md p-6 animate-in zoom-in-95 duration-200 bg-white",children:[(0,n.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,n.jsx)("div",{className:"w-12 h-12 rounded-full bg-[#fff5ec] flex items-center justify-center",children:(0,n.jsx)(o,{className:"w-6 h-6 text-[#ff4d00]"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-lg font-semibold",children:"Question\xe1rio Pendente"}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:"Complete o question\xe1rio para desbloquear saques"})]})]}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground mb-6",children:"Responda todas as perguntas do question\xe1rio para ganhar at\xe9 R$578,31 e liberar a fun\xe7\xe3o de saque."}),(0,n.jsxs)("div",{className:"flex gap-3",children:[(0,n.jsx)(i.z,{variant:"outline",className:"flex-1",onClick:()=>{t(!1)},children:"Fechar"}),(0,n.jsx)(i.z,{className:"flex-1 bg-gradient-to-r from-[#ff4d00] to-orange-500 text-white",onClick:()=>{t(!1),window.scrollTo({top:0,behavior:"smooth"})},children:"Responder Agora"})]})]})}):null}},1361:function(e,t,r){"use strict";r.d(t,{RewardsProvider:function(){return i},t:function(){return o}});var n=r(7437),a=r(2265);let s=(0,a.createContext)(void 0);function i(e){let{children:t}=e,[r,i]=(0,a.useState)(0),[o,l]=(0,a.useState)(0),[u,c]=(0,a.useState)(!1),[d,f]=(0,a.useState)(null),[m,g]=(0,a.useState)(!0),[x,v]=(0,a.useState)(null),h=(0,a.useCallback)(()=>{if(!d)return!0;let e=new Date(d),t=new Date,r=new Date(e);return r.setHours(24,0,0,0),t>=r},[d]),p=(0,a.useCallback)(e=>{v(e),localStorage.setItem("kwai-pix-details",JSON.stringify(e))},[]),b=(0,a.useCallback)(()=>{if(!d)return null;let e=new Date(d);return e.setHours(24,0,0,0),e},[d]),w=(0,a.useCallback)(e=>{i(t=>{let r=Math.max(0,t+e);return localStorage.setItem("kwai-balance",r.toString()),r})},[]),k=(0,a.useCallback)(()=>{u||(c(!0),w(50),localStorage.setItem("kwai-initial-bonus","true"))},[u,w]),y=(0,a.useCallback)(()=>{g(!1),localStorage.setItem("kwai-first-visit-complete","true")},[]),N=(0,a.useCallback)(()=>{l(e=>{let t=e+1;if(localStorage.setItem("kwai-questions-completed",t.toString()),t>=14){let e=new Date().toISOString();f(e),localStorage.setItem("kwai-last-completion",e)}return t})},[]),S=(0,a.useCallback)(()=>{h()&&(l(0),localStorage.setItem("kwai-questions-completed","0"),f(null),localStorage.removeItem("kwai-last-completion"))},[h]);return(0,a.useEffect)(()=>{let e=localStorage.getItem("kwai-balance"),t=localStorage.getItem("kwai-questions-completed"),r=localStorage.getItem("kwai-initial-bonus"),n=localStorage.getItem("kwai-last-completion"),a=localStorage.getItem("kwai-first-visit-complete"),s=localStorage.getItem("kwai-pix-details");e&&i(Number(e)),t&&l(Number(t)),"true"===r&&c(!0),n&&f(n),"true"===a&&g(!1),s&&v(JSON.parse(s)),n&&!h()&&S()},[h,S]),(0,n.jsx)(s.Provider,{value:{balance:r,questionsCompleted:o,totalQuestions:14,addToBalance:w,markQuestionCompleted:N,isQuestionnaireCompleted:o>=14,resetQuestionnaire:S,hasInitialBonus:u,setInitialBonus:k,canTakeQuestionnaire:h(),nextQuestionnaireTime:b(),lastCompletionDate:d,isFirstVisit:m,markFirstVisitComplete:y,savedPixDetails:x,savePixDetails:p},children:t})}function o(){let e=(0,a.useContext)(s);if(void 0===e)throw Error("useRewards must be used within a RewardsProvider");return e}},2869:function(e,t,r){"use strict";r.d(t,{z:function(){return u}});var n=r(7437),a=r(2265),s=r(7053),i=r(535),o=r(4508);let l=(0,i.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:u=!1,...c}=e,d=u?s.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(l({variant:a,size:i,className:r})),ref:t,...c})});u.displayName="Button"},6070:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return u},Zb:function(){return i},aY:function(){return c},eW:function(){return d},ll:function(){return l}});var n=r(7437),a=r(2265),s=r(4508);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});u.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});d.displayName="CardFooter"},4508:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(1994),a=r(3335);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},2660:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});let n=(0,r(9205).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},7960:function(){},4742:function(e){e.exports={style:{fontFamily:"'__Inter_d65c78', '__Inter_Fallback_d65c78'",fontStyle:"normal"},className:"__className_d65c78"}}},function(e){e.O(0,[540,582,3,971,117,744],function(){return e(e.s=4740)}),_N_E=e.O()}]);