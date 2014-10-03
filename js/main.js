/*! main.js v1.0.0 | MIT License | DK Official Site */

;(function( cf, sx  ){
  var cIntro = document.getElementById( 'intro' );
  var logo = document.querySelectorAll( '.logo' );
  var sectionLinks = document.querySelectorAll( '.section-link' );
  var projects = document.getElementById( 'projects' );
  var pLink = document.getElementById( 'projectsLink' );
  var bio = document.getElementById( 'bio' );
  var bLink = document.getElementById( 'bioLink' );
  var contact = document.getElementById( 'contact' );
  var cLink = document.getElementById( 'contactLink' );
  var articles = [ projects, bio, contact ];
  var cfIntro;

  var posProjects = projects.getBoundingClientRect();
  var posBio = bio.getBoundingClientRect();
  var posContact = contact.getBoundingClientRect();

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
      sx.scrollTop(900);
    });
  }

  projectsLink.addEventListener('click', function(e){
    //e.preventDefault();
    console.log( 'pos to:', posProjects.top )
    sx.scrollX( Math.abs(posProjects.top), 900 );

  });

  bioLink.addEventListener('click', function(e){
    //e.preventDefault();
    console.log( 'pos to:', posBio.top )
    sx.scrollX( Math.abs(posBio.top), 900 );

  });

  contactLink.addEventListener('click', function(e){
    //e.preventDefault();
    console.log( 'pos to:', posContact.top )
    sx.scrollX( Math.abs(posContact.top), 900 );

  });

}( canvasFull, scrollerX ))
