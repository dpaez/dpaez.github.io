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
  var posProjects = projects.getBoundingClientRect();
  var posBio = bio.getBoundingClientRect();
  var posContact = contact.getBoundingClientRect();
  var cfIntro;

  var getOffset = function( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += Math.abs(el.offsetLeft - el.scrollLeft);
        _y += Math.abs(el.offsetTop - el.scrollTop);
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
  }

  window.addEventListener('resize', function(){
    //posProjects = projects.getBoundingClientRect();
    posProjects = projects.getBoundingClientRect();
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
      e.preventDefault();
      sx.scrollZero(900);
      window.history.pushState( false, "DK", '/' );
      return false;
    });
  }

  projectsLink.addEventListener('click', function(e){
    //e.preventDefault();
    posProjects = getOffset(projects);
    console.log( 'pos to:', posProjects.top )
    sx.scrollX( Math.abs(posProjects.top), 700 );
    //window.history.pushState( "", "DK | Projects", projectsLink.dataset.section );
    return false;
  });

  bioLink.addEventListener('click', function(e){
    //e.preventDefault();
    posBio = getOffset(bio);
    console.log( 'pos to:', posBio.top )
    sx.scrollX( Math.abs(posBio.top), 700 );
    //window.history.pushState( "", "DK | Bio", bioLink.dataset.section );
    return false;
  });

  contactLink.addEventListener('click', function(e){
    //e.preventDefault();
    posContact = getOffset(contact);
    console.log( 'pos to:', posContact.top )
    sx.scrollX( Math.abs(posContact.top), 700 );
    //window.history.pushState( "", "DK | Contact", contactLink.dataset.section );
    return false;
  });

}( canvasFull, scrollerX ))
