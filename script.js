const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here


btn_toggle.onclick = () => {
  function myFunction() {
    var x = document.getElementById("text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
btn_search.onclick= () => {
  $(document).ready(function(){
    $("button").click(function(){
      $("p").toggle();
    });
  });
}
btn_reset.onclick= () => {
  btn_reset.disabled = true
  setTimeout(function () {
      Text.remove()
      saveToStorage()
      const temp = loadFromStorage()
  }, 1);
}



// more codes for Search and Reset buttons here
