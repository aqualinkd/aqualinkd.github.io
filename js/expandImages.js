
try {
  const body = document.body;

  const mainDiv = document.createElement('div');
  mainDiv.id = "expandedImage";
  mainDiv.classList.add("modal");
  const contentDiv = document.createElement('div');
  contentDiv.classList.add("modal-content");
  contentDiv.innerHTML = "<span class=\"close\">&times;</span>"+
                         "<img class=\"expandedImage\" src=\"\" id=\"modal-image\"/>";
  //                       "<img class=\"pointer\" src=\"\" id=\"modal-image\" width=\"90%\" height=\"90%\"/>";
  
  mainDiv.appendChild(contentDiv);             
  body.appendChild(mainDiv);
} catch (e){}

/*
<div id="expandedImage" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <img class="pointer" src="" id="modal-image" width="90%" height="90%"/>
  </div>
</div>
*/


//let imageBox1 = document.getElementById("imageBox1");
//var modal = document.getElementById("expandedImage");

function expandImage(e) {

  var modal = document.getElementById("expandedImage");
  modal.style.display = "block";

  var src = e.src;
  var modalImage = document.getElementById("modal-image");
  modalImage.src = src;

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
}

window.onclick = function (event) {
  if (event.target == modal || event.target.id == "modal-image") {
    var modal = document.getElementById("expandedImage");
    modal.style.display = "none";
  }
  //console.log(event.target.id);
  //console.log(event.target);
  //console.log("click");
};