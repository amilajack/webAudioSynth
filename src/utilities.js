// Set the color change on the selected button
function setColor(e) {
  var status = e.classList.contains('active');
  e.classList.add(status ? 'inactive' : 'active');
  e.classList.remove(status ? 'active' : 'inactive');
}

// Toggle buttons that aren't clicked to inactive
function checkColors(){
  var buttons = document.getElementsByClassName('btn');
  for(var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('active')) {
      setColor(buttons[i]);
    }
  }
}

// cycle through our octave buttons and add event listeners
// add hooks to color toggler
function findAndSetButtons(){
  var buttons = document.getElementsByClassName('btn');
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e){
      checkColors()
      e = e || window.event;
      var target = e.target || e.srcElement
      var text = target.textContent || text.innerText;
      if (target.classList.contains('label')) {
        setColor(target.parentNode);
      } else {
        setColor(target)
      }
    })
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  findAndSetButtons()
});
