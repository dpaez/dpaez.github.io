// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel (<-credits)
(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
    || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame){
    window.requestAnimationFrame = function(callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame){
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }
}());
/*! canvasFull.js v1.0.0 | MIT License | DK Official Site */

var canvasFull = (function( window, document ){

  var STROKECOLOR = '#8c918d';
  var currentScale = 1;
  var scaleFactor = 0.45;
  var degreeStep = 5;
  var degreeLimit = 65;
  var currentDegree = 0;
  var STOP = false;
  var startTime;
  var callbackFn;
  var ctx;
  var currentAnimation = drawAnimation;

  var drawIntro = function( ctx ){
    var maxX = window.innerWidth;
    var maxY = window.innerHeight;
    ctx.strokeStyle = STROKECOLOR;
    ctx.beginPath();
    ctx.moveTo( 0, 0 );
    ctx.lineTo( maxX, maxY );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo( maxX, 0 );
    ctx.lineTo( 0, maxY );
    ctx.stroke();
  };


  var drawAnimation = function( ctx ){

    var newScale = currentScale - (currentScale * scaleFactor);
    currentScale = newScale;
    var maxX = this.animationMaxX - (this.animationMaxX * scaleFactor) ;
    //var maxX = this.canvas.height * newScale;
    var diffX = (this.canvas.width - maxX)/2;
    maxX += diffX;
    var maxY = this.animationMaxY - (this.animationMaxY * scaleFactor) ;
    //var maxY = this.canvas.width * newScale;
    var diffY = (this.canvas.height - maxY)/2;
    maxY += diffY;
    this.newZeroX = diffX;
    this.newZeroY = diffY;


    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.beginPath();
    ctx.moveTo( newZeroX, newZeroY );
    ctx.lineTo( maxX, maxY );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo( maxX, newZeroY );
    ctx.lineTo( newZeroX, maxY );
    ctx.stroke();

    this.animationMaxX = maxX;
    this.animationMaxY = maxY;
  };

  var drawRotateAnimation = function( ctx ){
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //ctx.rotate( -65 * Math.PI / 180 );
    currentDegree += degreeStep;
    if ( currentDegree > degreeLimit ){
      degreeLimit = 65;
      currentDegree = 0;
      STOP = true;
      return;
    }
    ctx.translate(this.canvas.width/2, this.canvas.height/2);

    ctx.rotate( -degreeStep * Math.PI / 180 );

    ctx.translate(-this.canvas.width/2, -this.canvas.height/2);

    ctx.beginPath();
    ctx.moveTo( this.newZeroX, this.newZeroY );
    ctx.lineTo( this.animationMaxX, this.animationMaxY );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo( this.animationMaxX, this.newZeroY );
    ctx.lineTo( this.newZeroX, this.animationMaxY );
    ctx.stroke();

  };

  var drawRestoreAnimation = function(){
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    var newScale = currentScale + (currentScale * scaleFactor);
    currentScale = newScale;
    var maxX = this.animationMaxX + (this.animationMaxX * scaleFactor) ;
    //var maxX = this.canvas.height * newScale;
    var diffX = (this.canvas.width - maxX)/2;
    maxX += diffX;
    var maxY = this.animationMaxY + (this.animationMaxY * scaleFactor) ;
    //var maxY = this.canvas.width * newScale;
    var diffY = (this.canvas.height - maxY)/2;
    maxY += diffY;
    this.newZeroX = diffX;
    this.newZeroY = diffY;

    ctx.beginPath();
    ctx.moveTo( newZeroX, newZeroY );
    ctx.lineTo( maxX, maxY );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo( maxX, newZeroY );
    ctx.lineTo( newZeroX, maxY );
    ctx.stroke();

    this.animationMaxX = maxX;
    this.animationMaxY = maxY;
  };

  var cleanAnimation = function( ctx ){
    currentScale = 1;
    degreeLimit = degreeLimit + currentDegree;
    if ( degreeLimit > 360 ){
      degreeLimit = 65;
      currentDegree = 0;
    }
  };

  var start = function( canvas, element ){

    window.addEventListener('resize', resize.bind( this ), false);

    if ( element.length ){
      for(var j=0;j<element.length;j++){
        element[ j ].addEventListener('mouseover', preAnimate.bind(this), false);
      }
    }else{
      element.addEventListener('mouseover', preAnimate.bind(this), false);
    }

    if ( undefined === typeof canvas ){
      console.error( 'A canvas element is required.' );
      return;
    }

    this.canvas = canvas;

    ctx = canvas.getContext('2d');
    if ( canvas.getContext ){
      resize();

    } else {
      console.error( 'No canvas context obtained.' );
    }
  };

  var resize = function(){

    var e = document.documentElement,
        g = document.getElementsByTagName('article')[0],
        x = e.clientWidth || g.clientWidth || window.innerWidth,
        y = e.clientHeight || g.clientHeight || window.innerHeight;

    var cx,cy;                  //The size of the canvas-Element
    var cleft=0;                //Offset to the left border (to center the canvas-element, if there are borders on the left&right)
    cy = y;
    cx = x;
    if ( window.outerWidth ){
      cleft = ( x - window.outerWidth )/2;
    }

    this.canvas.width = cx;
    this.canvas.height = cy;

    // TODO: separate this call, maybe trigger resized local event
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    cleanAnimation();
    drawIntro( ctx );
  }

  var min = function( a, b ) {
    return a<b?a:b;
  }

  var preAnimate = function(){
    startTime = Date.now();
    ctx.strokeStyle = STROKECOLOR;
    this.animationMaxX = this.canvas.width;
    this.animationMaxY = this.canvas.height;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    currentAnimation = drawAnimation;
    callbackFn = rotateAnimation;
    animate();
  }

  var rotateAnimation = function(){
    startTime = Date.now();
    currentAnimation = drawRotateAnimation;
    callbackFn = restoreAnimation;
    animate();
  }

  var restoreAnimation = function(){
    startTime = Date.now();
    currentAnimation = drawRestoreAnimation;
    callbackFn = cleanAnimation;
    animate();
  }

  var animate = function(){

    var currentTime = Date.now(),
        time = min(1, ((currentTime - startTime) / 600));

    currentAnimation( ctx );

    if ( (time < 1) && (!STOP) ){
      requestAnimationFrame( animate.bind(this) );
    }
    else{
      STOP = false;
      callbackFn( ctx );
    }
  }


  return {
    init: function( canvas, element ){
      start( canvas, element );
    }
  }

}( window, document ))
/**
 * Vanilla ScrollTo functionality based on gist: https://gist.github.com/dezinezync/5487119
 */

var scrollerX = (function( window, document ){
  var elem;

  var easing = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t }
  }

  var scrollTo = function(Y, duration, easingFunction, callback) {
      easingFunction = easingFunction || 'linear';
      easingFunction = easing[easingFunction];
      var start = Date.now(),
        elem = document.documentElement.scrollTop ? document.documentElement : document.body,
        from = elem.scrollTop;

      if ( (Y !== 0) && (from === Y) ) {
        if(callback) callback();
        return; /* Prevent scrolling to the Y point if already there */
      }

      function min(a,b) {
        return a<b?a:b;
      }

      function scroll(timestamp) {

        var currentTime = Date.now(),
            time = min(1, ((currentTime - start) / duration)),
            easedT = easingFunction(time);

        //elem.scrollTop = (easedT * (Y - from)) + from;
        window.scroll(Y, (easedT * (Y - from)) + from);

        if(time < 1) requestAnimationFrame(scroll);
        else
          if(callback) callback();
      }

      requestAnimationFrame(scroll)
  }

  return {
    scrollZero: function( duration, callback ){
      duration = duration || 500;
      scrollTo( 0, duration, 'easeInQuad', callback );
    },
    scrollX: function( Y, duration, callback ){
      duration = duration || 500;
      scrollTo( Y, duration, 'easeInQuad', callback );
    }
  }

}( window, document ))
/*! main.js v1.0.0 | MIT License | DK Official Site */

;(function( cf, sx  ){
  var cIntro = document.getElementById( 'intro' );
  var logo = document.querySelectorAll( '.logo' );
  var sectionLinks = document.querySelectorAll( '.section-link' );
  var projectsLink = document.getElementById( 'projectsLink' );
  var bioLink = document.getElementById( 'bioLink' );
  var contactLink = document.getElementById( 'contactLink' );
  var projects = document.getElementById( 'projects' );
  var bio = document.getElementById( 'bio' );
  var contact = document.getElementById( 'contact' );
  var posProjects = projects.offsetTop;
  var posBio = bio.getBoundingClientRect();
  var posContact = contact.getBoundingClientRect();
  var cfIntro;

  window.addEventListener('resize', function(){
    //posProjects = projects.getBoundingClientRect();
    posProjects = projects.offsetTop;
    posBio = bio.getBoundingClientRect();
    posContact = contact.getBoundingClientRect();
  }, false);

  // canvas stuff
  cfIntro = cf.init( cIntro, sectionLinks );

  // header scroll effect
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 100,
        kan1 = document.querySelectorAll(".kan1"),
        none = document.querySelectorAll(".none");
    if (distanceY > shrinkOn) {
      for ( var i=0; i<none.length; i++ ){
        none[ i ].classList.add( 'removeNone' );
      }
      for ( var j=0; j<kan1.length; j++ ){
        kan1[ j ].classList.add( 'extendKan' );
      }
    } else {
      for ( var i=0; i<none.length; i++ ){
        none[ i ].classList.remove( 'removeNone' );
      }
      for ( var j=0; j<kan1.length; j++ ){
        kan1[ j ].classList.remove( 'extendKan' );
      }
    }
  });

  // logo events
  for ( var w=0; w<logo.length;w++ ){
    var targetLogo = logo[ w ];
    targetLogo.addEventListener('mouseover', function(e){
      var current = e.target;
      current.classList.add('lights');
    });


    targetLogo.addEventListener('mouseleave', function(e){
      var current = e.target;
      current.classList.remove('lights');
    });

    targetLogo.addEventListener('click', function(e){
      window.history.pushState( false, 'DK', '/' );
      sx.scrollZero(900);
      return false;
    });
  }

  projectsLink.addEventListener('click', function(e){
    e.preventDefault();
    console.log( 'pos to:', posProjects )
    sx.scrollX( Math.abs(posProjects), 700 );
    window.history.pushState( "", "DK | Projects", projectsLink.dataset.section );
    return false;
  });

  bioLink.addEventListener('click', function(e){
    e.preventDefault();
    console.log( 'pos to:', posBio.top )
    sx.scrollX( Math.abs(posBio.top), 700 );
    window.history.pushState( "", "DK | Bio", bioLink.dataset.section );
    return false;
  });

  contactLink.addEventListener('click', function(e){
    e.preventDefault();
    console.log( 'pos to:', posContact.top )
    sx.scrollX( Math.abs(posContact.top), 700 );
    window.history.pushState( "", "DK | Contact", contactLink.dataset.section );
    return false;
  });

}( canvasFull, scrollerX ))
