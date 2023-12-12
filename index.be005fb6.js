document.addEventListener("click",e=>{let{clientX:t,clientY:c}=e,{offsetLeft:f,offsetTop:l,clientWidth:o,clientHeight:i,clientTop:s}=document.querySelector(".wall"),{offsetHeight:a,offsetWidth:p,style:d}=document.querySelector(".spider"),r=f+s+o,n=l+s+i;if(!(t<f)&&!(c<l)&&!(t>r+s)&&!(c>n+s)){switch(!0){case t<f+s:d.left="0px";break;case t>r:d.left=`${o-p}px`;break;default:d.left=`${t-f-s-p/2}px`}switch(!0){case c<l+s:d.top="0px";break;case c>n:d.top=`${i-a}px`;break;default:d.top=`${c-l-s-a/2}px`}}});//# sourceMappingURL=index.be005fb6.js.map

//# sourceMappingURL=index.be005fb6.js.map
