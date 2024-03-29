import{importUnifiedConsoleApp as v}from"./loader.js";const Z=(a,t)=>{const s=a.length;if(s!==t.length)return!1;for(let e=0;e<s;e++){const l=a[e],o=t[e];if(l!==o)return!1}return!0},m=a=>{let t,s;return(...l)=>((t===void 0||Z(l,t)===!1)&&(t=l,s=a(...l)),s)},A=a=>{const t=m(o=>{const c=o.length>0?o.split(";"):[],n=c.length,i=Object.create(null);for(let h=0;h<n;h++){const r=c[h].split("="),p=r[0].trim(),g=r[1];i[p]={raw:g}}return i}),s=o=>{let c=o.unescaped;return c===void 0&&(c=o.unescaped=unescape(o.raw.trim())),c};return{get:o=>{const n=t(a.cookie)[o];return n?s(n):null},getParsedJson:async o=>{const n=t(a.cookie)[o];if(!n)return null;let{parsedJson:i}=n;if(i!==void 0)return i;const h=s(n);try{i=JSON.parse(h)||null}catch{i=null}return n.parsedJson=i}}};let d;const V=()=>d||(d=A(document)),M=(a=V())=>a.getParsedJson("aws-userInfo");var w;(function(a){a.Dev="dev",a.Beta="beta",a.Gamma="gamma",a.Prod="prod"})(w||(w={}));function x(){const a="hideNavigation",s=new URLSearchParams(window.location.search).get(a);return s&&sessionStorage.setItem(a,"true"),!!(V().get("noflush_awsc_hide_nav_ui")||s||sessionStorage.getItem(a))}const u=`<div id="skeleton-nav-awt-wrapper" data-testid="skeleton-nav-default-awt-wrapper">
<div class="skeleton-nav-awt-loader">
  <div class="aws-logo-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="2.0"
      focusable="false"
      aria-hidden="true"
      class="aws-logo"
      viewBox="0 0 29 17"
    >
      <path
        class="aws-logo__letters"
        d="M8.38 6.17a2.6 2.6 0 00.11.83c.08.232.18.456.3.67a.4.4 0 01.07.21.36.36 0 01-.18.28l-.59.39a.43.43 0 01-.24.08.38.38 0 01-.28-.13 2.38 2.38 0 01-.34-.43c-.09-.16-.18-.34-.28-.55a3.44 3.44 0 01-2.74 1.29 2.54 2.54 0 01-1.86-.67 2.36 2.36 0 01-.68-1.79 2.43 2.43 0 01.84-1.92 3.43 3.43 0 012.29-.72 6.75 6.75 0 011 .07c.35.05.7.12 1.07.2V3.3a2.06 2.06 0 00-.44-1.49 2.12 2.12 0 00-1.52-.43 4.4 4.4 0 00-1 .12 6.85 6.85 0 00-1 .32l-.33.12h-.14c-.14 0-.2-.1-.2-.29v-.46A.62.62 0 012.3.87a.78.78 0 01.27-.2A6 6 0 013.74.25 5.7 5.7 0 015.19.07a3.37 3.37 0 012.44.76 3 3 0 01.77 2.29l-.02 3.05zM4.6 7.59a3 3 0 001-.17 2 2 0 00.88-.6 1.36 1.36 0 00.32-.59 3.18 3.18 0 00.09-.81V5A7.52 7.52 0 006 4.87h-.88a2.13 2.13 0 00-1.38.37 1.3 1.3 0 00-.46 1.08 1.3 1.3 0 00.34 1c.278.216.63.313.98.27zm7.49 1a.56.56 0 01-.36-.09.73.73 0 01-.2-.37L9.35.93a1.39 1.39 0 01-.08-.38c0-.15.07-.23.22-.23h.92a.56.56 0 01.36.09.74.74 0 01.19.37L12.53 7 14 .79a.61.61 0 01.18-.37.59.59 0 01.37-.09h.75a.62.62 0 01.38.09.74.74 0 01.18.37L17.31 7 18.92.76a.74.74 0 01.19-.37.56.56 0 01.36-.09h.87a.21.21 0 01.23.23 1 1 0 010 .15s0 .13-.06.23l-2.26 7.2a.74.74 0 01-.19.37.6.6 0 01-.36.09h-.8a.53.53 0 01-.37-.1.64.64 0 01-.18-.37l-1.45-6-1.44 6a.64.64 0 01-.18.37.55.55 0 01-.37.1l-.82.02zm12 .24a6.29 6.29 0 01-1.44-.16 4.21 4.21 0 01-1.07-.37.69.69 0 01-.29-.26.66.66 0 01-.06-.27V7.3c0-.19.07-.29.21-.29a.57.57 0 01.18 0l.23.1c.32.143.656.25 1 .32.365.08.737.12 1.11.12a2.47 2.47 0 001.36-.31 1 1 0 00.48-.88.88.88 0 00-.25-.65 2.29 2.29 0 00-.94-.49l-1.35-.43a2.83 2.83 0 01-1.49-.94 2.24 2.24 0 01-.47-1.36 2 2 0 01.25-1c.167-.3.395-.563.67-.77a3 3 0 011-.48A4.1 4.1 0 0124.4.08a4.4 4.4 0 01.62 0l.61.1.53.15.39.16c.105.062.2.14.28.23a.57.57 0 01.08.31v.44c0 .2-.07.3-.21.3a.92.92 0 01-.36-.12 4.35 4.35 0 00-1.8-.36 2.51 2.51 0 00-1.24.26.92.92 0 00-.44.84c0 .249.1.488.28.66.295.236.635.41 1 .51l1.32.42a2.88 2.88 0 011.44.9 2.1 2.1 0 01.43 1.31 2.38 2.38 0 01-.24 1.08 2.34 2.34 0 01-.68.82 3 3 0 01-1 .53 4.59 4.59 0 01-1.35.22l.03-.01z"
      ></path>
      <path
        class="aws-logo__smile"
        d="M25.82 13.43a20.07 20.07 0 01-11.35 3.47A20.54 20.54 0 01.61 11.62c-.29-.26 0-.62.32-.42a27.81 27.81 0 0013.86 3.68 27.54 27.54 0 0010.58-2.16c.52-.22.96.34.45.71z"
      ></path>
      <path
        class="aws-logo__smile"
        d="M27.1 12c-.4-.51-2.6-.24-3.59-.12-.3 0-.34-.23-.07-.42 1.75-1.23 4.63-.88 5-.46.37.42-.09 3.3-1.74 4.68-.25.21-.49.09-.38-.18.34-.95 1.17-3.02.78-3.5z"
      ></path>
    </svg>
  </div>
</div>
<style id="skeleton-nav-awt-style">
  .skeleton-nav-awt-loader .aws-logo {
    display: block;
    width: 33px;
    height: 19px;
    position: relative;
  }

  .skeleton-nav-awt-loader .aws-logo-wrapper {
    position: relative;
    padding: 9px 17px;
  }

  .skeleton-nav-awt-loader .aws-logo__letters {
    fill: #ffffff;
  }

  .skeleton-nav-awt-loader .aws-logo__smile {
    fill: #f8991d;
    fill-rule: evenodd;
  }

  .skeleton-nav-awt-loader {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #232f3e;
    border-bottom: 1px solid rgb(84, 91, 100);
  }
</style>
</div>`,f=`<div id="skeleton-nav-awt-wrapper" data-testid="skeleton-nav-cn-awt-wrapper">
<div class="skeleton-nav-awt-loader">
  <div class="aws-logo-wrapper">
  <svg 
    viewBox="0 0 627.64 83.55" 
    xmlns="http://www.w3.org/2000/svg"
    version="2.0"
    focusable="false"
    aria-hidden="true"
    class="aws-logo-cn"
  >
    <g id="logos">
      <path class="aws-cn-logo-icon-text" d="M201.05,19V33.47h-4V12.68h4.8l8.46,14.55V12.68h4V33.47h-4.8Z" />
      <path
        class="aws-cn-logo-icon-text"
        d="M234.26,33.47,231,18.8l-3.18,14.67h-4.89l-5.76-20.79h5l3.3,15.9,3.3-15.39h4.74l3.36,15.33,3.24-15.84h4.86l-5.73,20.79Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M262,32.93a15.09,15.09,0,0,1-5.43.93q-5.07,0-7.68-2.71t-2.61-8q0-5.19,2.73-8t7.68-2.85a14.89,14.89,0,0,1,5,.84v3.54a21.72,21.72,0,0,0-4.47-.6,6.08,6.08,0,0,0-4.66,1.65,7.16,7.16,0,0,0-1.55,5v.69a7.2,7.2,0,0,0,1.5,5,5.93,5.93,0,0,0,4.59,1.63,24.57,24.57,0,0,0,4.89-.69Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M265.28,33.47V12.68h7.47q4.65,0,7.16,2.69t2.5,7.69q0,5-2.5,7.7a9.14,9.14,0,0,1-7.07,2.71Zm4.5-17.31V30h2.58q5.43,0,5.43-6.63v-.6q0-6.6-5.46-6.6Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M300.77,33.92a6.82,6.82,0,0,1-5.34-2.13,8.56,8.56,0,0,1-1.92-5.94,8.51,8.51,0,0,1,1.92-5.91,7.76,7.76,0,0,1,10.68,0A8.51,8.51,0,0,1,308,25.85a8.56,8.56,0,0,1-1.92,5.94A6.82,6.82,0,0,1,300.77,33.92Zm0-2.4q4.23,0,4.23-5.67t-4.23-5.64q-4.23,0-4.23,5.64T300.77,31.52Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M311.69,39.65V18.26h2.49l.27,1.56a7.49,7.49,0,0,1,5.07-2,5.55,5.55,0,0,1,4.59,2.12,9,9,0,0,1,1.68,5.74A9.21,9.21,0,0,1,324,31.58a5.72,5.72,0,0,1-4.71,2.22A6.68,6.68,0,0,1,314.66,32v7.62Zm7-19.44a6.7,6.7,0,0,0-4,1.38V30a6.62,6.62,0,0,0,4,1.44q4.14,0,4.14-5.58a7.21,7.21,0,0,0-1-4.23A3.57,3.57,0,0,0,318.68,20.21Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M331.55,26.51a5.42,5.42,0,0,0,1.28,3.81,5.08,5.08,0,0,0,3.76,1.23,13.6,13.6,0,0,0,4.83-.93v2.13a11,11,0,0,1-5.28,1.17,7.24,7.24,0,0,1-5.58-2q-1.89-2-1.89-6a8.57,8.57,0,0,1,1.89-5.92,6.72,6.72,0,0,1,5.28-2.12,5.77,5.77,0,0,1,4.38,1.61A6.31,6.31,0,0,1,341.75,24a12.42,12.42,0,0,1-.24,2.55Zm4.14-6.45a3.83,3.83,0,0,0-2.94,1.13,5.27,5.27,0,0,0-1.2,3.34H339a7.08,7.08,0,0,0,0-.78A4,4,0,0,0,338.2,21,3.25,3.25,0,0,0,335.69,20.06Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M345.32,33.47V18.26h2.49l.33,2.25a9.76,9.76,0,0,1,1.56-1.39,5.64,5.64,0,0,1,1.47-.74,5.29,5.29,0,0,1,1.62-.24,9.14,9.14,0,0,1,1.23.09v2.7a13.42,13.42,0,0,0-1.62-.12,6.17,6.17,0,0,0-4.11,1.44V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M365.45,33.47l-.24-1.56a8.19,8.19,0,0,1-2.38,1.44,7.11,7.11,0,0,1-2.6.51,4.7,4.7,0,0,1-3.4-1.21,4.26,4.26,0,0,1-1.28-3.26,4.31,4.31,0,0,1,1.56-3.49,6.34,6.34,0,0,1,4.2-1.31,15.66,15.66,0,0,1,3.78.51v-2a3,3,0,0,0-.73-2.28,3.78,3.78,0,0,0-2.51-.66,16.34,16.34,0,0,0-5.28.93V19a9.84,9.84,0,0,1,2.64-.88,15.88,15.88,0,0,1,3.15-.32,6.25,6.25,0,0,1,4.2,1.19,4.55,4.55,0,0,1,1.35,3.61V33.47ZM361,31.61a7,7,0,0,0,4.14-1.53V27a13.06,13.06,0,0,0-3.18-.39q-3.39,0-3.39,2.61a2.35,2.35,0,0,0,.63,1.76A2.47,2.47,0,0,0,361,31.61Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M380.87,33.11a9.15,9.15,0,0,1-3.33.57q-4.26,0-4.26-4.26V20.6h-2.76V18.68l2.85-.36.45-4.32h2.43v4.26h4.5V20.6h-4.5v8.67a2.08,2.08,0,0,0,.49,1.56,2.53,2.53,0,0,0,1.7.45,10,10,0,0,0,2.43-.3Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M385.43,15.56a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,1.86,1.86,0,0,1,1.37-.5,1.84,1.84,0,0,1,1.36.5,1.72,1.72,0,0,1,.5,1.3,1.74,1.74,0,0,1-.5,1.31A1.83,1.83,0,0,1,385.43,15.56Zm-1.5,17.91V18.26h3V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M401.75,33.47V23.3A3.53,3.53,0,0,0,401.1,21a2.52,2.52,0,0,0-2-.75,8.26,8.26,0,0,0-4.65,1.53V33.47h-3V18.26H394l.3,1.68a9.87,9.87,0,0,1,6-2.13A4.48,4.48,0,0,1,403.58,19a4.55,4.55,0,0,1,1.14,3.34V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M419.12,31.4a7.83,7.83,0,0,1-2.19,1.34,6.36,6.36,0,0,1-2.37.46,5.89,5.89,0,0,1-3.24-.9,6,6,0,0,1-2.21-2.62,9.58,9.58,0,0,1-.79-4A8.81,8.81,0,0,1,410,19.93a5.6,5.6,0,0,1,4.59-2.12,6.71,6.71,0,0,1,4.71,1.86l.24-1.41h2.49V32.54a7.57,7.57,0,0,1-1.91,5.52A7.21,7.21,0,0,1,414.74,40a11.32,11.32,0,0,1-5.19-1.2V36.68a15.7,15.7,0,0,0,4.95.93A4.68,4.68,0,0,0,418,36.46a5.22,5.22,0,0,0,1.11-3.71Zm-3.69-.6a6.1,6.1,0,0,0,3.69-1.38V21.53a6.05,6.05,0,0,0-3.87-1.32q-3.9,0-3.9,5.31a6.38,6.38,0,0,0,1,3.95A3.62,3.62,0,0,0,415.43,30.8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M437.48,16.94V33.47h-2.82V12.68H438L448.22,29.3V12.68H451V33.47h-3.36Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M456.92,15.56a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,1.86,1.86,0,0,1,1.37-.5,1.84,1.84,0,0,1,1.36.5,1.76,1.76,0,0,1,.5,1.3,1.78,1.78,0,0,1-.5,1.31A1.83,1.83,0,0,1,456.92,15.56Zm-1.5,17.91V18.26h3V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M472.76,33.47V23.3a3.53,3.53,0,0,0-.65-2.34,2.52,2.52,0,0,0-2-.75,8.26,8.26,0,0,0-4.65,1.53V33.47h-3V18.26H465l.3,1.68a9.87,9.87,0,0,1,6-2.13A4.48,4.48,0,0,1,474.59,19a4.55,4.55,0,0,1,1.14,3.34V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M489.65,31.4a7.83,7.83,0,0,1-2.19,1.34,6.36,6.36,0,0,1-2.37.46,5.89,5.89,0,0,1-3.24-.9,6,6,0,0,1-2.21-2.62,9.58,9.58,0,0,1-.79-4,8.81,8.81,0,0,1,1.71-5.71,5.6,5.6,0,0,1,4.59-2.12,6.71,6.71,0,0,1,4.71,1.86l.24-1.41h2.49V32.54a7.57,7.57,0,0,1-1.91,5.52A7.21,7.21,0,0,1,485.27,40a11.32,11.32,0,0,1-5.19-1.2V36.68a15.7,15.7,0,0,0,4.95.93,4.68,4.68,0,0,0,3.51-1.15,5.22,5.22,0,0,0,1.11-3.71ZM486,30.8a6.1,6.1,0,0,0,3.69-1.38V21.53a6.05,6.05,0,0,0-3.87-1.32q-3.9,0-3.9,5.31a6.38,6.38,0,0,0,1,3.95A3.62,3.62,0,0,0,486,30.8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M505.25,33.47l-3.81-5.82-3.75,5.82h-3.15l5.37-7.8-5.07-7.41h3.27l3.48,5.31L505,18.26h3.12l-5,7.23,5.43,8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M512.12,15.56a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,1.86,1.86,0,0,1,1.37-.5,1.84,1.84,0,0,1,1.36.5,1.76,1.76,0,0,1,.5,1.3,1.78,1.78,0,0,1-.5,1.31A1.83,1.83,0,0,1,512.12,15.56Zm-1.5,17.91V18.26h3V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M526.61,33.47l-.24-1.56A8.24,8.24,0,0,1,524,33.35a7.06,7.06,0,0,1-2.59.51A4.72,4.72,0,0,1,518,32.65a4.29,4.29,0,0,1-1.27-3.26,4.31,4.31,0,0,1,1.56-3.49,6.31,6.31,0,0,1,4.19-1.31,15.73,15.73,0,0,1,3.79.51v-2a3,3,0,0,0-.74-2.28,3.74,3.74,0,0,0-2.51-.66,16.24,16.24,0,0,0-5.27.93V19a9.84,9.84,0,0,1,2.64-.88,15.88,15.88,0,0,1,3.15-.32A6.2,6.2,0,0,1,527.71,19a4.52,4.52,0,0,1,1.36,3.61V33.47Zm-4.5-1.86a7.08,7.08,0,0,0,4.14-1.53V27a13.06,13.06,0,0,0-3.18-.39c-2.27,0-3.39.87-3.39,2.61a2.35,2.35,0,0,0,.63,1.76A2.47,2.47,0,0,0,522.11,31.61Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M540.67,33.47V12.68h7.59a6.83,6.83,0,0,1,4.83,1.67,5.8,5.8,0,0,1,1.8,4.48,5.86,5.86,0,0,1-1.12,3.59,6.35,6.35,0,0,1-3.17,2.2l5.52,8.85h-3.33l-5.1-8.37h-4.05v8.37Zm3-10.8h4.23a4.09,4.09,0,0,0,2.93-1,3.76,3.76,0,0,0,1-2.85,3.76,3.76,0,0,0-1-2.8,3.91,3.91,0,0,0-2.85-.95h-4.35Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M560.08,26.51a5.42,5.42,0,0,0,1.28,3.81,5.08,5.08,0,0,0,3.76,1.23,13.6,13.6,0,0,0,4.83-.93v2.13a11,11,0,0,1-5.28,1.17,7.24,7.24,0,0,1-5.58-2q-1.89-2-1.89-6a8.57,8.57,0,0,1,1.89-5.92,6.72,6.72,0,0,1,5.28-2.12,5.77,5.77,0,0,1,4.38,1.61A6.31,6.31,0,0,1,570.28,24a12.42,12.42,0,0,1-.24,2.55Zm4.14-6.45a3.83,3.83,0,0,0-2.94,1.13,5.27,5.27,0,0,0-1.2,3.34h7.47a7.08,7.08,0,0,0,0-.78,4,4,0,0,0-.85-2.76A3.25,3.25,0,0,0,564.22,20.06Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M583.39,31.4a7.83,7.83,0,0,1-2.19,1.34,6.36,6.36,0,0,1-2.37.46,5.89,5.89,0,0,1-3.24-.9,6,6,0,0,1-2.2-2.62,9.58,9.58,0,0,1-.8-4,8.81,8.81,0,0,1,1.71-5.71,5.6,5.6,0,0,1,4.59-2.12,6.71,6.71,0,0,1,4.71,1.86l.24-1.41h2.49V32.54a7.57,7.57,0,0,1-1.9,5.52A7.24,7.24,0,0,1,579,40a11.32,11.32,0,0,1-5.19-1.2V36.68a15.7,15.7,0,0,0,4.95.93,4.68,4.68,0,0,0,3.51-1.15,5.22,5.22,0,0,0,1.11-3.71Zm-3.69-.6a6.1,6.1,0,0,0,3.69-1.38V21.53a6.05,6.05,0,0,0-3.87-1.32q-3.9,0-3.9,5.31a6.38,6.38,0,0,0,1,3.95A3.6,3.6,0,0,0,579.7,30.8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M591.91,15.56a1.83,1.83,0,0,1-1.36-.49,1.78,1.78,0,0,1-.5-1.31,1.76,1.76,0,0,1,.5-1.3,1.84,1.84,0,0,1,1.36-.5,1.86,1.86,0,0,1,1.37.5,1.75,1.75,0,0,1,.49,1.3,1.77,1.77,0,0,1-.49,1.31A1.85,1.85,0,0,1,591.91,15.56Zm-1.5,17.91V18.26h3V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M603.94,33.92a6.82,6.82,0,0,1-5.34-2.13,8.56,8.56,0,0,1-1.92-5.94,8.51,8.51,0,0,1,1.92-5.91,7.76,7.76,0,0,1,10.68,0,8.51,8.51,0,0,1,1.92,5.91,8.56,8.56,0,0,1-1.92,5.94A6.82,6.82,0,0,1,603.94,33.92Zm0-2.4q4.23,0,4.23-5.67t-4.23-5.64q-4.23,0-4.23,5.64T603.94,31.52Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M624.67,33.47V23.3A3.54,3.54,0,0,0,624,21a2.54,2.54,0,0,0-2-.75,8.26,8.26,0,0,0-4.65,1.53V33.47h-3V18.26h2.49l.3,1.68a9.87,9.87,0,0,1,6-2.13A4.48,4.48,0,0,1,626.5,19a4.55,4.55,0,0,1,1.14,3.34V33.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M201.14,58.38A8.85,8.85,0,0,1,197.3,56a6,6,0,0,1,.92-8.12,8.64,8.64,0,0,1,5.59-1.68,16,16,0,0,1,5.76,1.08v3.42a18.36,18.36,0,0,0-5.4-.9q-3.54,0-3.54,2.28a1.76,1.76,0,0,0,.62,1.38,7.54,7.54,0,0,0,2.29,1.14l2.22.81a9.59,9.59,0,0,1,4,2.39,5.21,5.21,0,0,1,1.18,3.55,5.93,5.93,0,0,1-2.22,4.88A9.46,9.46,0,0,1,202.61,68a18.19,18.19,0,0,1-3.36-.31,12.79,12.79,0,0,1-2.88-.86V63.39a24.43,24.43,0,0,0,3.21.72,20,20,0,0,0,3.09.27,4.88,4.88,0,0,0,2.73-.64,2.1,2.1,0,0,0,1-1.85,1.9,1.9,0,0,0-.58-1.47,7.85,7.85,0,0,0-2.36-1.2Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M216.65,49.77a2.61,2.61,0,0,1-1.83-.63,2.46,2.46,0,0,1,0-3.42,3,3,0,0,1,3.66,0,2.46,2.46,0,0,1,0,3.42A2.61,2.61,0,0,1,216.65,49.77Zm-2.19,17.7V52.14h4.38V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M233,67.47v-10a2.55,2.55,0,0,0-.54-1.8,2.17,2.17,0,0,0-1.65-.57,6.08,6.08,0,0,0-3.27,1v11.4h-4.38V52.14h3.6l.42,1.65a9.22,9.22,0,0,1,5.76-2.1,4,4,0,0,1,4.44,4.44V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M251.36,67.47v-10a2.55,2.55,0,0,0-.54-1.8,2.17,2.17,0,0,0-1.65-.57,6.08,6.08,0,0,0-3.27,1v11.4h-4.38V52.14h3.6l.42,1.65a9.22,9.22,0,0,1,5.76-2.1,4,4,0,0,1,4.44,4.44V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M263.15,60.87a3.83,3.83,0,0,0,1.2,2.87,5.31,5.31,0,0,0,3.39.88,17.62,17.62,0,0,0,4.68-.75v2.91a9.77,9.77,0,0,1-2.5.84,14.94,14.94,0,0,1-3,.3,7.68,7.68,0,0,1-5.8-2.07,8.4,8.4,0,0,1-2-6.06,8.44,8.44,0,0,1,2-6,7.13,7.13,0,0,1,5.49-2.13,6.14,6.14,0,0,1,4.58,1.64,6.37,6.37,0,0,1,1.6,4.66,14.24,14.24,0,0,1-.09,1.5,12.89,12.89,0,0,1-.21,1.38Zm3.27-6.15a3.07,3.07,0,0,0-2.32.89,4,4,0,0,0-1,2.56H269v-.51Q269,54.72,266.42,54.72Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M285.23,67.08a10,10,0,0,1-3.63.63,5.16,5.16,0,0,1-3.76-1.2,5,5,0,0,1-1.22-3.72V55.38h-2.31v-2.7l2.43-.48.66-4.2H281v4.14h4.14v3.24H281v7.2a1.65,1.65,0,0,0,.48,1.35,2.6,2.6,0,0,0,1.62.39,14.54,14.54,0,0,0,2.13-.18Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M302.39,67.92a6.82,6.82,0,0,1-5.34-2.13,8.56,8.56,0,0,1-1.92-5.94,8.51,8.51,0,0,1,1.92-5.91,7.76,7.76,0,0,1,10.68,0,8.51,8.51,0,0,1,1.92,5.91,8.56,8.56,0,0,1-1.92,5.94A6.82,6.82,0,0,1,302.39,67.92Zm0-2.4q4.23,0,4.23-5.67t-4.23-5.64q-4.23,0-4.23,5.64T302.39,65.52Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M313.31,73.65V52.26h2.49l.27,1.56a7.49,7.49,0,0,1,5.07-2,5.55,5.55,0,0,1,4.59,2.12,9,9,0,0,1,1.68,5.74,9.21,9.21,0,0,1-1.77,5.91,5.72,5.72,0,0,1-4.71,2.22A6.68,6.68,0,0,1,316.28,66v7.62Zm7-19.44a6.7,6.7,0,0,0-4,1.38V64a6.62,6.62,0,0,0,4,1.44q4.14,0,4.14-5.58a7.21,7.21,0,0,0-1-4.23A3.56,3.56,0,0,0,320.3,54.21Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M333.17,60.51a5.42,5.42,0,0,0,1.28,3.81,5.08,5.08,0,0,0,3.76,1.23,13.6,13.6,0,0,0,4.83-.93v2.13a11,11,0,0,1-5.28,1.17,7.24,7.24,0,0,1-5.58-2q-1.89-2-1.89-6a8.57,8.57,0,0,1,1.89-5.92,6.72,6.72,0,0,1,5.28-2.12,5.77,5.77,0,0,1,4.38,1.61A6.31,6.31,0,0,1,343.37,58a12.42,12.42,0,0,1-.24,2.55Zm4.14-6.45a3.83,3.83,0,0,0-2.94,1.13,5.27,5.27,0,0,0-1.2,3.34h7.47a7.08,7.08,0,0,0,0-.78,4,4,0,0,0-.85-2.76A3.25,3.25,0,0,0,337.31,54.06Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M346.94,67.47V52.26h2.49l.33,2.25a9.76,9.76,0,0,1,1.56-1.39,5.64,5.64,0,0,1,1.47-.74,5.29,5.29,0,0,1,1.62-.24,9.14,9.14,0,0,1,1.23.09v2.7a13.42,13.42,0,0,0-1.62-.12,6.17,6.17,0,0,0-4.11,1.44V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M367.07,67.47l-.24-1.56a8.19,8.19,0,0,1-2.38,1.44,7.11,7.11,0,0,1-2.6.51,4.7,4.7,0,0,1-3.4-1.21,4.26,4.26,0,0,1-1.28-3.26,4.31,4.31,0,0,1,1.56-3.49,6.34,6.34,0,0,1,4.2-1.31,15.66,15.66,0,0,1,3.78.51v-2a3,3,0,0,0-.73-2.28,3.78,3.78,0,0,0-2.51-.66,16.34,16.34,0,0,0-5.28.93V53a9.84,9.84,0,0,1,2.64-.88,15.88,15.88,0,0,1,3.15-.32,6.25,6.25,0,0,1,4.2,1.19,4.55,4.55,0,0,1,1.35,3.61V67.47Zm-4.5-1.86a7,7,0,0,0,4.14-1.53V61a13.06,13.06,0,0,0-3.18-.39q-3.39,0-3.39,2.61a2.35,2.35,0,0,0,.63,1.76A2.47,2.47,0,0,0,362.57,65.61Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M382.49,67.11a9.15,9.15,0,0,1-3.33.57q-4.26,0-4.26-4.26V54.6h-2.76V52.68l2.85-.36.45-4.32h2.43v4.26h4.5V54.6h-4.5v8.67a2.08,2.08,0,0,0,.49,1.56,2.53,2.53,0,0,0,1.7.45,10,10,0,0,0,2.43-.3Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M387.05,49.56a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,2.13,2.13,0,0,1,2.74,0,1.75,1.75,0,0,1,.49,1.3,1.77,1.77,0,0,1-.49,1.31A1.87,1.87,0,0,1,387.05,49.56Zm-1.5,17.91V52.26h3V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M403.37,67.47V57.3a3.53,3.53,0,0,0-.65-2.34,2.52,2.52,0,0,0-2-.75,8.26,8.26,0,0,0-4.65,1.53V67.47h-3V52.26h2.49l.3,1.68a9.87,9.87,0,0,1,6-2.13A4.48,4.48,0,0,1,405.2,53a4.55,4.55,0,0,1,1.14,3.34V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M420.74,65.4a7.83,7.83,0,0,1-2.19,1.34,6.36,6.36,0,0,1-2.37.46,5.89,5.89,0,0,1-3.24-.9,6,6,0,0,1-2.21-2.62,9.58,9.58,0,0,1-.79-4,8.81,8.81,0,0,1,1.71-5.71,5.6,5.6,0,0,1,4.59-2.12A6.71,6.71,0,0,1,421,53.67l.24-1.41h2.49V66.54a7.57,7.57,0,0,1-1.91,5.52,7.21,7.21,0,0,1-5.41,2,11.32,11.32,0,0,1-5.19-1.2V70.68a15.7,15.7,0,0,0,4.95.93,4.68,4.68,0,0,0,3.51-1.15,5.22,5.22,0,0,0,1.11-3.71Zm-3.69-.6a6.1,6.1,0,0,0,3.69-1.38V55.53a6.05,6.05,0,0,0-3.87-1.32q-3.9,0-3.9,5.31a6.38,6.38,0,0,0,1,3.95A3.62,3.62,0,0,0,417.05,64.8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M436.28,67.47V46.68h6.87a7,7,0,0,1,4.68,1.5,5,5,0,0,1,1.77,4,4.89,4.89,0,0,1-.72,2.69,4.59,4.59,0,0,1-2.07,1.72,5.64,5.64,0,0,1,2.94,1.88,5.06,5.06,0,0,1,1,3.22,5.25,5.25,0,0,1-1.86,4.22,7.45,7.45,0,0,1-5,1.57ZM439.19,49v6.69h3.66q3.72,0,3.72-3.33a3.25,3.25,0,0,0-.92-2.5,3.83,3.83,0,0,0-2.71-.86Zm0,9v7.14h4.68q3.81,0,3.81-3.57a3.46,3.46,0,0,0-1-2.67,4.12,4.12,0,0,0-2.89-.9Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M456,60.51a5.42,5.42,0,0,0,1.27,3.81A5.11,5.11,0,0,0,461,65.55a13.6,13.6,0,0,0,4.83-.93v2.13a11,11,0,0,1-5.28,1.17,7.24,7.24,0,0,1-5.58-2q-1.89-2-1.89-6A8.57,8.57,0,0,1,455,53.93a6.72,6.72,0,0,1,5.28-2.12,5.77,5.77,0,0,1,4.38,1.61A6.31,6.31,0,0,1,466.19,58a12.42,12.42,0,0,1-.24,2.55Zm4.14-6.45a3.83,3.83,0,0,0-2.94,1.13,5.27,5.27,0,0,0-1.2,3.34h7.47a7.08,7.08,0,0,0,0-.78,4,4,0,0,0-.86-2.76A3.22,3.22,0,0,0,460.13,54.06Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M470.9,49.56a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,1.86,1.86,0,0,1,1.37-.5,1.84,1.84,0,0,1,1.36.5,1.76,1.76,0,0,1,.5,1.3,1.78,1.78,0,0,1-.5,1.31A1.83,1.83,0,0,1,470.9,49.56Zm-1.5,17.91V52.26h3V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M476.57,52.26h3V70a4.18,4.18,0,0,1-1,3,3.69,3.69,0,0,1-2.82,1,8.78,8.78,0,0,1-2.55-.39V71.49a10.67,10.67,0,0,0,1.77.12,1.87,1.87,0,0,0,1.21-.31,1.29,1.29,0,0,0,.38-1Zm1.5-2.7a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,1.86,1.86,0,0,1,1.37-.5,1.84,1.84,0,0,1,1.36.5,1.76,1.76,0,0,1,.5,1.3,1.78,1.78,0,0,1-.5,1.31A1.83,1.83,0,0,1,478.07,49.56Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M485.24,49.56a1.85,1.85,0,0,1-1.37-.49,1.77,1.77,0,0,1-.49-1.31,1.75,1.75,0,0,1,.49-1.3,1.86,1.86,0,0,1,1.37-.5,1.84,1.84,0,0,1,1.36.5,1.76,1.76,0,0,1,.5,1.3,1.78,1.78,0,0,1-.5,1.31A1.83,1.83,0,0,1,485.24,49.56Zm-1.5,17.91V52.26h3V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M501.08,67.47V57.3a3.53,3.53,0,0,0-.65-2.34,2.52,2.52,0,0,0-2-.75,8.26,8.26,0,0,0-4.65,1.53V67.47h-3V52.26h2.49l.3,1.68a9.87,9.87,0,0,1,6-2.13A4.48,4.48,0,0,1,502.91,53a4.55,4.55,0,0,1,1.14,3.34V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M518,65.4a7.83,7.83,0,0,1-2.19,1.34,6.36,6.36,0,0,1-2.37.46,5.89,5.89,0,0,1-3.24-.9A6,6,0,0,1,508,63.68a9.58,9.58,0,0,1-.79-4,8.81,8.81,0,0,1,1.71-5.71,5.6,5.6,0,0,1,4.59-2.12,6.73,6.73,0,0,1,4.71,1.86l.24-1.41h2.49V66.54A7.57,7.57,0,0,1,519,72.06a7.21,7.21,0,0,1-5.41,2,11.32,11.32,0,0,1-5.19-1.2V70.68a15.7,15.7,0,0,0,5,.93,4.68,4.68,0,0,0,3.51-1.15A5.22,5.22,0,0,0,518,66.75Zm-3.69-.6A6.1,6.1,0,0,0,518,63.42V55.53a6.5,6.5,0,0,0-1.83-1,6.37,6.37,0,0,0-2-.32q-3.9,0-3.9,5.31a6.38,6.38,0,0,0,1,3.95A3.62,3.62,0,0,0,514.28,64.8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M532.54,67.47V46.68h7.59A6.83,6.83,0,0,1,545,48.35a6.4,6.4,0,0,1,.68,8.07,6.35,6.35,0,0,1-3.17,2.2L548,67.47h-3.33l-5.1-8.37h-4v8.37Zm3-10.8h4.23a4.09,4.09,0,0,0,2.93-1,3.76,3.76,0,0,0,1-2.85,3.76,3.76,0,0,0-1-2.8,3.91,3.91,0,0,0-2.85-1h-4.35Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M552,60.51a5.42,5.42,0,0,0,1.28,3.81A5.08,5.08,0,0,0,557,65.55a13.6,13.6,0,0,0,4.83-.93v2.13a11,11,0,0,1-5.28,1.17,7.24,7.24,0,0,1-5.58-2q-1.89-2-1.89-6A8.57,8.57,0,0,1,551,53.93a6.72,6.72,0,0,1,5.28-2.12,5.77,5.77,0,0,1,4.38,1.61A6.31,6.31,0,0,1,562.15,58a12.42,12.42,0,0,1-.24,2.55Zm4.14-6.45a3.83,3.83,0,0,0-2.94,1.13,5.27,5.27,0,0,0-1.2,3.34h7.47a7.08,7.08,0,0,0,0-.78A4,4,0,0,0,558.6,55,3.25,3.25,0,0,0,556.09,54.06Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M575.26,65.4a7.83,7.83,0,0,1-2.19,1.34,6.36,6.36,0,0,1-2.37.46,5.89,5.89,0,0,1-3.24-.9,6,6,0,0,1-2.2-2.62,9.58,9.58,0,0,1-.8-4,8.81,8.81,0,0,1,1.71-5.71,5.6,5.6,0,0,1,4.59-2.12,6.71,6.71,0,0,1,4.71,1.86l.24-1.41h2.49V66.54a7.57,7.57,0,0,1-1.9,5.52,7.24,7.24,0,0,1-5.42,2,11.32,11.32,0,0,1-5.19-1.2V70.68a15.7,15.7,0,0,0,4.95.93,4.68,4.68,0,0,0,3.51-1.15,5.22,5.22,0,0,0,1.11-3.71Zm-3.69-.6a6.1,6.1,0,0,0,3.69-1.38V55.53a6.05,6.05,0,0,0-3.87-1.32q-3.9,0-3.9,5.31a6.38,6.38,0,0,0,1,3.95A3.6,3.6,0,0,0,571.57,64.8Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M583.78,49.56a1.83,1.83,0,0,1-1.36-.49,1.78,1.78,0,0,1-.5-1.31,1.76,1.76,0,0,1,.5-1.3,1.84,1.84,0,0,1,1.36-.5,1.86,1.86,0,0,1,1.37.5,1.75,1.75,0,0,1,.49,1.3,1.77,1.77,0,0,1-.49,1.31A1.85,1.85,0,0,1,583.78,49.56Zm-1.5,17.91V52.26h3V67.47Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M595.81,67.92a6.82,6.82,0,0,1-5.34-2.13,8.56,8.56,0,0,1-1.92-5.94,8.51,8.51,0,0,1,1.92-5.91,7.76,7.76,0,0,1,10.68,0,8.51,8.51,0,0,1,1.92,5.91,8.56,8.56,0,0,1-1.92,5.94A6.82,6.82,0,0,1,595.81,67.92Zm0-2.4q4.23,0,4.23-5.67t-4.23-5.64q-4.23,0-4.23,5.64T595.81,65.52Z"
      />
      <path
        class="aws-cn-logo-icon-text"
        d="M616.54,67.47V57.3A3.54,3.54,0,0,0,615.9,55a2.54,2.54,0,0,0-2-.75,8.26,8.26,0,0,0-4.65,1.53V67.47h-3V52.26h2.49l.3,1.68a9.87,9.87,0,0,1,6-2.13A4.48,4.48,0,0,1,618.37,53a4.55,4.55,0,0,1,1.14,3.34V67.47Z"
      />
      <line class="aws-cn-logo-icon-smile" x1="175.07" x2="175.07" y2="83.55" />
      <g id="master_76_pt_text" data-name="master 76 pt text">
        <path
          class="aws-cn-logo-icon-vertical-line"
          d="M68.43,58.19c-8.29,6.12-20.31,9.38-30.66,9.38A55.45,55.45,0,0,1,.32,53.27c-.74-.7-.09-1.65.85-1.11A75.42,75.42,0,0,0,38.64,62.1a74.67,74.67,0,0,0,28.59-5.84C68.62,55.66,69.81,57.18,68.43,58.19Z"
        />
        <path
          class="aws-cn-logo-icon-vertical-line"
          d="M71.88,54.26c-1.06-1.36-7-.65-9.68-.33-.81.1-.94-.61-.2-1.12,4.74-3.34,12.54-2.37,13.42-1.26s-.24,8.93-4.68,12.65c-.69.57-1.34.26-1-.5,1-2.49,3.24-8.12,2.22-9.44Z"
        />
        <path
          class="aws-cn-logo-icon-text"
          d="M24.44,40.48v2.91H.77V40.48h7V25.21H1.64v-3H23.75v3H17.32V36.62a47.47,47.47,0,0,0,3.06-8.81l3,1A71.68,71.68,0,0,1,20,37.67l-2.71-.94v3.75ZM4.37,27.86C5.55,30.7,7,34.43,7.64,36.7L4.7,38a88.07,88.07,0,0,0-3-9.09Zm6.69,12.62H14V25.21H11.06Z"
        />
        <path
          class="aws-cn-logo-icon-text"
          d="M44.28,39.89H27.48V37h16.8Zm5.65-8.07s0,.9-.11,1.31c-.58,6.56-1.2,9.32-2.19,10.36a3.51,3.51,0,0,1-2.53,1.1,32.76,32.76,0,0,1-4,0,6.29,6.29,0,0,0-1-2.91c1.53.13,3,.15,3.7.15A1.6,1.6,0,0,0,45,41.55c.67-.56,1.15-2.6,1.59-6.89H30.55c.35-2.2.71-5.67.89-8.4l3.06.2c-.15,1.71-.33,3.65-.53,5.36h8.5c.28-2.22.54-4.72.72-6.76H29.29V22.12H43.7l.51-.13,2.24.21c-.17,2.88-.56,6.43-.94,9.62Z"
        />
        <path
          class="aws-cn-logo-icon-text"
          d="M68,41.6a88.46,88.46,0,0,0,9-.53,9.4,9.4,0,0,0-.76,2.86c-1.74.1-5.85.28-8.35.28A16.18,16.18,0,0,1,60.7,43c-1.15-.59-2-1.31-2.65-1.31-.87,0-2.17,1.49-3.32,2.94l-1.82-2.53a16.09,16.09,0,0,1,3.22-2.35v-7H53.32V29.86h5.52v9.47a8.73,8.73,0,0,1,1.53.82,8.48,8.48,0,0,0-.74-2c.74,0,1.53,0,1.79,0s.38-.08.38-.36V32.56l-2,.72L59,30.65c.82-.23,1.76-.54,2.81-.87V26a11.48,11.48,0,0,0,1.66-2H59.63V21.58H65.3l.53-.15,1.69,1.28a26.13,26.13,0,0,1-3,3.78v2.4l1.83-.59.39,2.09c.3-1.61.56-3.32.71-4.95l2.45.36a46.17,46.17,0,0,1-2.37,10.72,16.38,16.38,0,0,0-2.22-1.1,23,23,0,0,0,1.35-4.62l-2.14.79v6.26c0,1.2-.21,1.84-1,2.27a4.92,4.92,0,0,1-2.33.46C62.92,41.42,65.25,41.6,68,41.6ZM57.15,27.46a24.58,24.58,0,0,0-3.75-4.22l2.25-1.61a26.73,26.73,0,0,1,3.88,4ZM72.73,38c0,1.35-.28,2-1.15,2.35a9.78,9.78,0,0,1-3.91.46,9,9,0,0,0-1-2.35c1.15.05,2.43.05,2.79,0S70,38.31,70,38V21.07h2.71v4.78l2.14-.46A68.76,68.76,0,0,1,77,35.45l-2.47.61a59.81,59.81,0,0,0-1.84-9.5Z"
        />
        <path
          class="aws-cn-logo-icon-text"
          d="M99.69,44.67a15.08,15.08,0,0,0-1-2.07c-6.56.38-13.46.69-18.18.89l-.2-3.21L84,40.17A52.06,52.06,0,0,0,86.82,33H79.7V29.81h23V33H90.78c-1,2.43-2.14,5-3.24,7.08,3-.11,6.18-.21,9.37-.34-.89-1.3-1.86-2.6-2.78-3.7l2.93-1.43A38.6,38.6,0,0,1,102.83,43Zm.34-19.1H82.56V22.43H100Z"
        />
        <path
          class="aws-cn-logo-icon-text"
          d="M113.81,37.08a28.35,28.35,0,0,0-1.53-2.81V44.64h-2.94V35.45a23.49,23.49,0,0,1-2.78,5.06,16.76,16.76,0,0,0-1.4-2.89,24,24,0,0,0,3.78-6.84h-3.45V27.94h3.85V25.06c-1,.15-1.94.3-2.88.4a9.2,9.2,0,0,0-.82-2.34,39,39,0,0,0,8.22-2.1l1.72,2.48a22.52,22.52,0,0,1-3.3.94v3.5h3.37v2.84h-3.37V31c.74.72,2.84,3.12,3.32,3.7Zm12.59,1.1v6.44h-3v-5.9l-7.71,1.33-.48-2.89,8.19-1.4v-15h3V35.24l2.53-.43.49,2.84ZM120,34.63a23.15,23.15,0,0,0-4.06-3.91L117.87,29a22.16,22.16,0,0,1,4.19,3.7Zm.67-6.74a19.33,19.33,0,0,0-3.81-3.83l2-1.74A20.75,20.75,0,0,1,122.78,26Z"
        />
        <path
          class="aws-cn-logo-icon-text"
          d="M140.5,34.43c-.9.25-1.82.51-2.74.74v6.1c0,1.48-.28,2.2-1.14,2.68a8.52,8.52,0,0,1-3.86.54,13.12,13.12,0,0,0-.87-2.76c1,0,2,0,2.38,0s.48-.13.48-.51V36l-2.48.61-.79-2.89c1-.18,2.05-.43,3.27-.74V28.45h-2.93V25.64h2.93V20.79h3v4.85h2.51v2.81h-2.51v3.78l2.35-.59ZM154.64,31a18.65,18.65,0,0,1-4.75,8.48,17.33,17.33,0,0,0,5.9,2.58,13.34,13.34,0,0,0-1.94,2.63,18.33,18.33,0,0,1-6.36-3.22,23.38,23.38,0,0,1-6.71,3.14,12.2,12.2,0,0,0-1.64-2.76,19.55,19.55,0,0,0,6.11-2.5,20.17,20.17,0,0,1-3.63-6.08l.77-.23h-1.33V30.29h5V27.23H140.6V24.42h5.49V20.77h3v3.65h5.72v2.81H149.1v3.06h3.07l.53-.13Zm-10.06,2a14.56,14.56,0,0,0,3,4.52A14.3,14.3,0,0,0,150.79,33Z"
        />
      </g>
    </g>
  </svg>
  </div>
</div>
<style id="skeleton-nav-awt-style">
  .skeleton-nav-awt-loader .aws-logo-cn {
    display: block;
    height: 29px;
    position: relative;
  }

  .skeleton-nav-awt-loader .aws-logo-wrapper {
    position: relative;
    padding: 9px 17px;
  }

  .skeleton-nav-awt-loader .aws-cn-logo-icon-text {
    fill: #ffffff;
  }

  .skeleton-nav-awt-loader .aws-cn-logo-icon-smile {
    fill: none;
    stroke: #ffffff;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 0.72px;
  }

  .skeleton-nav-awt-loader .aws-cn-logo-icon-vertical-line {
    fill: #FF9900;
    fill-rule: evenodd;
  }

  .skeleton-nav-awt-loader {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #232f3e;
    border-bottom: 1px solid rgb(84, 91, 100);
  }
</style>
</div>`,k=a=>{const t=a.split(":");if(t.length<6||t[0]!=="arn")throw new Error("Malformed ARN");const[,s,e,l,o,...c]=t;return{partition:s,service:e,region:l,accountId:o,resource:c.join(":")}},q=async()=>{var t,s;if(((s=(t=window.AWSC)==null?void 0:t.NavFAC)==null?void 0:s.isFeatureEnabled("unified_nav_awt"))&&!x()){const e=await M(),l=e==null?void 0:e.arn,{partition:o}=k(l||""),c=o==="aws-cn"?f:u,n=await H("#consoleNavHeader",1e4);n&&(n.innerHTML=c)}};async function H(a,t){const s=new Promise(l=>setTimeout(()=>l(null),t)),e=new Promise(l=>{const o=document.querySelector(a);if(o){l(o);return}new MutationObserver((c,n)=>{const i=document.querySelector(a);i&&(l(i),n.disconnect())}).observe(document.documentElement,{childList:!0,subtree:!0})});return Promise.race([s,e])}(async()=>{try{q();const{initializeUnifiedConsoleApp:a}=await v();a==null||a()}catch{}})();
