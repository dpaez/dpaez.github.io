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