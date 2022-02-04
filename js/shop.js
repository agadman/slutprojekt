var modal = document.getElementById('myModal');

// Hämta bild och lägg in i modalen
var img = document.getElementById('shopImg');
var modalImg = document.getElementById("modal_img");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}