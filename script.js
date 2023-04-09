console.log('yo yo');

console.log("please work");


if (
    localStorage.getItem("color-mode") === "blue" ||
    (window.matchMedia("(prefers-color-scheme: blue)").matches &&
      !localStorage.getItem("color-mode"))
  ) {
    document.documentElement.setAttribute("color-mode", "blue");
  }

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
