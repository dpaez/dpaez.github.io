!function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),o=window.setTimeout(function(){t(n+i)},i);return e=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}();var canvasFull=function(e,t){var n,i,o,a="#8c918d",r=1,s=.45,c=5,l=65,h=0,d=!1,u=v,m=function(t){var n=e.innerWidth,i=e.innerHeight;t.strokeStyle=a,t.beginPath(),t.moveTo(0,0),t.lineTo(n,i),t.stroke(),t.beginPath(),t.moveTo(n,0),t.lineTo(0,i),t.stroke()},v=function(e){var t=r-r*s;r=t;var n=this.animationMaxX-this.animationMaxX*s,i=(this.canvas.width-n)/2;n+=i;var o=this.animationMaxY-this.animationMaxY*s,a=(this.canvas.height-o)/2;o+=a,this.newZeroX=i,this.newZeroY=a,e.clearRect(0,0,this.canvas.width,this.canvas.height),e.beginPath(),e.moveTo(newZeroX,newZeroY),e.lineTo(n,o),e.stroke(),e.beginPath(),e.moveTo(n,newZeroY),e.lineTo(newZeroX,o),e.stroke(),this.animationMaxX=n,this.animationMaxY=o},w=function(e){return e.clearRect(0,0,this.canvas.width,this.canvas.height),h+=c,h>l?(l=65,h=0,void(d=!0)):(e.translate(this.canvas.width/2,this.canvas.height/2),e.rotate(-c*Math.PI/180),e.translate(-this.canvas.width/2,-this.canvas.height/2),e.beginPath(),e.moveTo(this.newZeroX,this.newZeroY),e.lineTo(this.animationMaxX,this.animationMaxY),e.stroke(),e.beginPath(),e.moveTo(this.animationMaxX,this.newZeroY),e.lineTo(this.newZeroX,this.animationMaxY),void e.stroke())},g=function(){o.clearRect(0,0,this.canvas.width,this.canvas.height);var e=r+r*s;r=e;var t=this.animationMaxX+this.animationMaxX*s,n=(this.canvas.width-t)/2;t+=n;var i=this.animationMaxY+this.animationMaxY*s,a=(this.canvas.height-i)/2;i+=a,this.newZeroX=n,this.newZeroY=a,o.beginPath(),o.moveTo(newZeroX,newZeroY),o.lineTo(t,i),o.stroke(),o.beginPath(),o.moveTo(t,newZeroY),o.lineTo(newZeroX,i),o.stroke(),this.animationMaxX=t,this.animationMaxY=i},f=function(){r=1,l+=h,l>360&&(l=65,h=0)},T=function(t,n){if(e.addEventListener("resize",p.bind(this),!1),n.length)for(var i=0;i<n.length;i++)n[i].addEventListener("mouseover",M.bind(this),!1);else n.addEventListener("mouseover",M.bind(this),!1);return void 0===typeof t?void console.error("A canvas element is required."):(this.canvas=t,o=t.getContext("2d"),void(t.getContext?p():console.error("No canvas context obtained.")))},p=function(){var n,i,a=t.documentElement,r=t.getElementsByTagName("article")[0],s=a.clientWidth||r.clientWidth||e.innerWidth,c=a.clientHeight||r.clientHeight||e.innerHeight,l=0;i=c,n=s,e.outerWidth&&(l=(s-e.outerWidth)/2),this.canvas.width=n,this.canvas.height=i,o.clearRect(0,0,this.canvas.width,this.canvas.height),f(),m(o)},x=function(e,t){return t>e?e:t},M=function(){n=Date.now(),o.strokeStyle=a,this.animationMaxX=this.canvas.width,this.animationMaxY=this.canvas.height,o.clearRect(0,0,this.canvas.width,this.canvas.height),u=v,i=X,k()},X=function(){n=Date.now(),u=w,i=b,k()},b=function(){n=Date.now(),u=g,i=f,k()},k=function(){var e=Date.now(),t=x(1,(e-n)/600);u(o),1>t&&!d?requestAnimationFrame(k.bind(this)):(d=!1,i(o))};return{init:function(e,t){T(e,t)}}}(window,document),scrollerX=function(e,t){var n={linear:function(e){return e},easeInQuad:function(e){return e*e}},i=function(i,o,a,r){function s(e,t){return t>e?e:t}function c(){var t=Date.now(),n=s(1,(t-l)/o),h=a(n);e.scroll(i,h*(i-d)+d),1>n?requestAnimationFrame(c):r&&r()}a=a||"linear",a=n[a];var l=Date.now(),h=t.documentElement.scrollTop?t.documentElement:t.body,d=h.scrollTop;return 0!==i&&d===i?void(r&&r()):void requestAnimationFrame(c)};return{scrollZero:function(e,t){e=e||500,i(0,e,"easeInQuad",t)},scrollX:function(e,t,n){t=t||500,i(e,t,"easeInQuad",n)}}}(window,document);!function(e,t){var n,i=document.getElementById("intro"),o=document.querySelectorAll(".logo"),a=document.querySelectorAll(".section-link"),r=document.getElementById("projects"),s=document.getElementById("bio"),c=document.getElementById("contact"),l=r.offsetTop,h=s.getBoundingClientRect(),d=c.getBoundingClientRect(),u=window.history||u.pushState;window.addEventListener("resize",function(){l=r.offsetTop,h=s.getBoundingClientRect(),d=c.getBoundingClientRect()},!1),n=e.init(i,a),window.addEventListener("scroll",function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=100,n=document.querySelectorAll(".kan1"),i=document.querySelectorAll(".none");if(e>t){for(var o=0;o<i.length;o++)i[o].classList.add("removeNone");for(var a=0;a<n.length;a++)n[a].classList.add("extendKan")}else{for(var o=0;o<i.length;o++)i[o].classList.remove("removeNone");for(var a=0;a<n.length;a++)n[a].classList.remove("extendKan")}});for(var m=0;m<o.length;m++){var v=o[m];v.addEventListener("mouseover",function(e){var t=e.target;t.classList.add("lights")}),v.addEventListener("mouseleave",function(e){var t=e.target;t.classList.remove("lights")}),v.addEventListener("click",function(){t.scrollZero(900)})}projectsLink.addEventListener("click",function(e){u.pushState(null,null,e.target.parentNode.href),console.log("pos to:",l),t.scrollX(Math.abs(l),700)}),bioLink.addEventListener("click",function(e){u.pushState(null,null,e.target.parentNode.href),console.log("pos to:",h.top),t.scrollX(Math.abs(h.top),700)}),contactLink.addEventListener("click",function(e){console.log(e.target.parentNode.href),u.pushState(null,null,e.target.parentNode.href),console.log("pos to:",d.top),t.scrollX(Math.abs(d.top),700)})}(canvasFull,scrollerX);