console.log('yo yo');

console.log("please work");

const btn = document.getElementById('pink-mode-toggle');

// ✅ Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Foundational';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'Developing';
  } else {
    btn.textContent = initialText;
  }
});

// check for saved 'darkMode' in localStorage
let pinkMode = localStorage.getItem('pinkMode'); 

const pinkModeToggle = document.querySelector('#pink-mode-toggle');

const enablePinkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('pinkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('pinkMode', 'enabled');
}

const disablePinkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('pinkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('pinkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (pinkMode === 'enabled') {
  enablePinkMode();
}

// When someone clicks the button
pinkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  pinkMode = localStorage.getItem('pinkMode'); 
  
  // if it not current enabled, enable it
  if (pinkMode !== 'enabled') {
    enablePinkMode();
  // if it has been enabled, turn it off  
  } else {  
    disablePinkMode(); 
  }
});

/*-- this one changes picture colors

function one() {
    var x = document.getElementById("contentpink");
    if (x.style.display === "none") {
      x.style.display = "grid";
    } else {
      x.style.display = "none";
    }
  }

  /*-- this one changes text colors --*/

  


   /* $(document).ready(function(){

        $("button").click(function(){
          $("#contentpink").toggle();
          $('p').css('color', '#FF00FF');
        });
        
    }); */

    /* $(document).ready(function () {
        $("p.home").css("background-color", "blue");
      }); */
