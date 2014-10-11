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
      //body = document.body.getBoundingClientRect(),
      from = elem.scrollTop;
      //offset = body.top - from;

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