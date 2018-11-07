var canvas, ctx;

function init() {
  var inputFile = document.querySelector('#file');
  inputFile.addEventListener("change", handleFile);
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
}

function handleFile(event) {
  var canvasContainer = document.getElementsByClassName("canvas-container");
  var canvas = document.getElementById("canvas");
  canvas.width = canvasContainer[0].clientWidth;
  canvas.height = canvasContainer[0].clientHeight;

  var img = new Image;
  img.src = URL.createObjectURL(event.target.files[0]);
  img.onload = function () {
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
  }
}