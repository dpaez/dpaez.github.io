var canvasFull = (function( window, document ){
  var sizeX = 1920;
  var sizeY = 1080;

  var drawIntro = function( ctx ){
    var maxX = window.innerWidth;
    var maxY = window.innerHeight;
    ctx.strokeStyle = '#8c918d';
    ctx.beginPath();
    ctx.moveTo( 0, 0 );
    ctx.lineTo( maxX, maxY );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo( maxX, 0 );
    ctx.lineTo( 0, maxY );
    ctx.stroke();
  };

  var start = function( canvas, drawing ){
    var ctx;

    window.addEventListener('resize', resize.bind( this ), false);

    if ( undefined === typeof canvas ){
      console.error( 'A canvas element is required.' );
      return;
    }

    this.canvas = canvas;

    ctx = canvas.getContext('2d');
    if ( canvas.getContext ){
      this.ctx = ctx;
      // this.draw( drawing );
      resize();

    } else {
      console.error( 'No canvas context obtained.' );
    }

  };

  var resize = function(){
    console.log( 'resizing canvas' );
    var e = document.documentElement,
        g = document.getElementsByTagName('article')[0],
        x = window.innerWidth || e.clientWidth || g.clientWidth,
        y = window.innerHeight|| e.clientHeight || g.clientHeight;

    //var cc = document.getElementById("canvasWrapper");

    var cx,cy;                  //The size of the canvas-Element
    var cleft=0;                //Offset to the left border (to center the canvas-element, if there are borders on the left&right)
    cy = y;
    cx = x;
    if ( window.outerWidth ){
      cleft = ( x - window.outerWidth )/2;
    }
    /*if(x/y > sizeX/sizeY){      //x-diff > y-diff   ==> black borders left&right
        cx = (y*sizeX/sizeY);
        cleft = (x-cx)/2;
    }else{                      //y-diff > x-diff   ==> black borders top&bottom
        cy = (x*sizeY/sizeX);
    }*/
    //cc.setAttribute("style", "width:"+x+"px;height:"+y+"px;");                                          //canvas-content = fullscreen
    //this.canvas.setAttribute("style", "width:"+cx+"px;height:"+cy+"px;position: absolute; left:"+cleft+"px");    //canvas: 16:9, as big as possible, horizintally centered
    this.canvas.width = cx;
    this.canvas.height = cy;
    //this.canvas.setAttribute("style", "position: absolute; left:0; top: 0; bottom:0; right:0;width: 100%;height: 100%;");    //canvas: 16:9, as big as possible, horizintally centered
    //this.canvas.setAttribute("style", "left:"+cleft+"px");    //canvas: 16:9, as big as possible, horizintally centered

    // TODO: separate this call, trigger resized local event
    drawIntro( this.ctx );
  }


  return {
    init: function( element, drawing ){
      start( element, drawing );
    }
  }

}( window, document ))