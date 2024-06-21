// let btnElement = document.createElement('button');
// btnElement.textContent = "Change Heading";
// btnElement.onclick = function(){
//     console.log("click event triggred");
// };
// document.getElementById('myContainer').appendChild(btnElement);

document.addEventListener("DOMContentLoaded", function() {
    function switchOff() {
      document.getElementById("bulbimage").src = "depositphotos_23575953-stock-photo-light-bulb.jpg";
      document.getElementById("catimage").src = "Loaf.jpg";
      document.getElementById("switchstatus").textContent = "Switched Off";
    }
  
    function switchOn() {
      document.getElementById("bulbimage").src = "images.jpeg";
      document.getElementById("catimage").src = "images (3).jpeg";
      document.getElementById("switchstatus").textContent = "Switched On";
    }
  
    window.switchOff = switchOff;
    window.switchOn = switchOn;
  });
  