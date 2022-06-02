(function(window, document, undefined){

// code that should be taken care of right away

window.onload = init;

  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodes

    document.getElementById("card-merge-sort").addEventListener("click", () => {
      window.open("./../mergeSort.html", "_self");
    })

    document.getElementById("course-2").addEventListener("click", () => {
      window.open("./../mergeSort.html", "_self");
    })

    document.getElementById("course-3").addEventListener("click", () => {
      window.open("./../mergeSort.html", "_self");
    })
  }

})(window, document, undefined);
