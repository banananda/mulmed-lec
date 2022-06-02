(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodes
    var myFoot = document.getElementsByTagName("footer")[0];
    var myNav = document.getElementById("float-nav");
    var myContent = document.getElementsByClassName("content")[0];
    var myNavContainer = document.getElementsByClassName("navigation")[0];
    var myHeader = document.getElementsByTagName("header")[0];
    var section1 = document.getElementById("section-1");

    document.getElementById("nav-intro").addEventListener("click", ()=>{
        document.getElementById("introduction").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-implementation").addEventListener("click", ()=>{
        document.getElementById("implementation").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-complexity").addEventListener("click", ()=>{
        document.getElementById("complexity").scrollIntoView();
        window.scrollBy(0, -120)
    })

    document.getElementById("nav-advantages").addEventListener("click", ()=>{
        document.getElementById("advantages").scrollIntoView();
        window.scrollBy(0, -120)
    })
    


    function windowScroll(){ 
  // Distance from top of document to top of footer.
  topOfFooter = myFoot.offsetTop - 100;
  // Distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding).
  scrollDistanceFromTopOfDoc = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + window.innerHeight - myNav.clientHeight;
  // Difference between the two.
  scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;

  console.log(scrollDistanceFromTopOfDoc, scrollDistanceFromTopOfFooter)

  // If user has scrolled further than footer,
  // pull sidebar up using a negative margin.
  if (scrollDistanceFromTopOfDoc > topOfFooter) {
      myNav.style.marginTop = (0 - scrollDistanceFromTopOfFooter) + "px";
    // $('#cart').css('margin-top',  0 - scrollDistanceFromTopOfFooter);
  } else  {
      myNav.style.marginTop = 0;
    // $('#cart').css('margin-top', 0);
  }
};

    document.addEventListener("scroll", windowScroll)

  }

})(window, document, undefined);
