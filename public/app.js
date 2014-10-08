!function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),o=window.setTimeout(function(){e(n+i)},i);return t=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var canvasFull=function(t,e){var n,i,o,a="#8c918d",r=1,s=.45,c=5,l=65,h=0,d=!1,u=v,m=function(e){var n=t.innerWidth,i=t.innerHeight;e.strokeStyle=a,e.beginPath(),e.moveTo(0,0),e.lineTo(n,i),e.stroke(),e.beginPath(),e.moveTo(n,0),e.lineTo(0,i),e.stroke()},v=function(t){var e=r-r*s;r=e;var n=this.animationMaxX-this.animationMaxX*s,i=(this.canvas.width-n)/2;n+=i;var o=this.animationMaxY-this.animationMaxY*s,a=(this.canvas.height-o)/2;o+=a,this.newZeroX=i,this.newZeroY=a,t.clearRect(0,0,this.canvas.width,this.canvas.height),t.beginPath(),t.moveTo(newZeroX,newZeroY),t.lineTo(n,o),t.stroke(),t.beginPath(),t.moveTo(n,newZeroY),t.lineTo(newZeroX,o),t.stroke(),this.animationMaxX=n,this.animationMaxY=o},w=function(t){return t.clearRect(0,0,this.canvas.width,this.canvas.height),h+=c,h>l?(l=65,h=0,void(d=!0)):(t.translate(this.canvas.width/2,this.canvas.height/2),t.rotate(-c*Math.PI/180),t.translate(-this.canvas.width/2,-this.canvas.height/2),t.beginPath(),t.moveTo(this.newZeroX,this.newZeroY),t.lineTo(this.animationMaxX,this.animationMaxY),t.stroke(),t.beginPath(),t.moveTo(this.animationMaxX,this.newZeroY),t.lineTo(this.newZeroX,this.animationMaxY),void t.stroke())},g=function(){o.clearRect(0,0,this.canvas.width,this.canvas.height);var t=r+r*s;r=t;var e=this.animationMaxX+this.animationMaxX*s,n=(this.canvas.width-e)/2;e+=n;var i=this.animationMaxY+this.animationMaxY*s,a=(this.canvas.height-i)/2;i+=a,this.newZeroX=n,this.newZeroY=a,o.beginPath(),o.moveTo(newZeroX,newZeroY),o.lineTo(e,i),o.stroke(),o.beginPath(),o.moveTo(e,newZeroY),o.lineTo(newZeroX,i),o.stroke(),this.animationMaxX=e,this.animationMaxY=i},f=function(){r=1,l+=h,l>360&&(l=65,h=0)},b=function(e,n){if(t.addEventListener("resize",M.bind(this),!1),n.length)for(var i=0;i<n.length;i++)n[i].addEventListener("mouseover",T.bind(this),!1);else n.addEventListener("mouseover",T.bind(this),!1);return void 0===typeof e?void console.error("A canvas element is required."):(this.canvas=e,o=e.getContext("2d"),void(e.getContext?M():console.error("No canvas context obtained.")))},M=function(){var n,i,a=e.documentElement,r=e.getElementsByTagName("article")[0],s=a.clientWidth||r.clientWidth||t.innerWidth,c=a.clientHeight||r.clientHeight||t.innerHeight,l=0;i=c,n=s,t.outerWidth&&(l=(s-t.outerWidth)/2),this.canvas.width=n,this.canvas.height=i,o.clearRect(0,0,this.canvas.width,this.canvas.height),f(),m(o)},p=function(t,e){return e>t?t:e},T=function(){n=Date.now(),o.strokeStyle=a,this.animationMaxX=this.canvas.width,this.animationMaxY=this.canvas.height,o.clearRect(0,0,this.canvas.width,this.canvas.height),u=v,i=x,X()},x=function(){n=Date.now(),u=w,i=E,X()},E=function(){n=Date.now(),u=g,i=f,X()},X=function(){var t=Date.now(),e=p(1,(t-n)/600);u(o),1>e&&!d?requestAnimationFrame(X.bind(this)):(d=!1,i(o))};return{init:function(t,e){b(t,e)}}}(window,document),scrollerX=function(t,e){var n={linear:function(t){return t},easeInQuad:function(t){return t*t}},i=function(i,o,a,r){function s(t,e){return e>t?t:e}function c(){var e=Date.now(),n=s(1,(e-l)/o),h=a(n);t.scroll(i,h*(i-d)+d),1>n?requestAnimationFrame(c):r&&r()}a=a||"linear",a=n[a];var l=Date.now(),h=e.documentElement.scrollTop?e.documentElement:e.body,d=h.scrollTop;return 0!==i&&d===i?void(r&&r()):void requestAnimationFrame(c)};return{scrollZero:function(t,e){t=t||500,i(0,t,"easeInQuad",e)},scrollX:function(t,e,n){e=e||500,i(t,e,"easeInQuad",n)}}}(window,document);!function(t,e){var n,i=document.getElementById("intro"),o=document.querySelectorAll(".logo"),a=document.querySelectorAll(".section-link"),r=document.getElementById("projectsLink"),s=document.getElementById("bioLink"),c=document.getElementById("contactLink"),l=document.getElementById("projects"),h=document.getElementById("bio"),d=document.getElementById("contact"),u=l.offsetTop,m=h.getBoundingClientRect(),v=d.getBoundingClientRect();window.addEventListener("resize",function(){u=l.offsetTop,m=h.getBoundingClientRect(),v=d.getBoundingClientRect()},!1),n=t.init(i,a),window.addEventListener("scroll",function(){var t=window.pageYOffset||document.documentElement.scrollTop,e=100,n=document.querySelectorAll(".kan1"),i=document.querySelectorAll(".none");if(t>e){for(var o=0;o<i.length;o++)i[o].classList.add("removeNone");for(var a=0;a<n.length;a++)n[a].classList.add("extendKan")}else{for(var o=0;o<i.length;o++)i[o].classList.remove("removeNone");for(var a=0;a<n.length;a++)n[a].classList.remove("extendKan")}});for(var w=0;w<o.length;w++){var g=o[w];g.addEventListener("mouseover",function(t){var e=t.target;e.classList.add("lights")}),g.addEventListener("mouseleave",function(t){var e=t.target;e.classList.remove("lights")}),g.addEventListener("click",function(){e.scrollZero(900)})}r.addEventListener("click",function(){return 0===u.top&&(u.top=Math.abs(document.body.getBoundingClientRect().top)),console.log("pos to:",u),e.scrollX(Math.abs(u),700),!1}),s.addEventListener("click",function(){return 0===m.top&&(m.top=Math.abs(document.body.getBoundingClientRect().top)),console.log("pos to:",m.top),e.scrollX(Math.abs(m.top),700),!1}),c.addEventListener("click",function(){return 0===v.top&&(v.top=Math.abs(document.body.getBoundingClientRect().top)),console.log("pos to:",v.top),e.scrollX(Math.abs(v.top),700),!1})}(canvasFull,scrollerX);