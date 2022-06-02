
var child_index = ''

$('.flow-button').click(function() {
  var idx = $(this).index() - 1;
  $('.flow-button').removeClass("active");
  $(this).addClass('active');

  $('.border').fadeOut(300)
  $('.border').children().removeClass("active");
  
  $('.border').fadeIn(300)
  $('.border').children().eq(idx).addClass('active')


});

var text = ["Pintar", "Juara", "Terampil", "Cerdas"];
var counter = 0;
var texts = document.getElementById("changeText");
var time = setInterval(change, 2000);

function change() {
  texts.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
      counter = 0;
  }
}

document.getElementsByClassName("startBtn")[0].addEventListener("click", ()=>{
  window.open("./../courses.html", "_self")
});