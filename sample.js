var ctx = document.getElementById('myCanvas');
var img = new Image();
img.src = "file.png";
img.onload = function() {
	ctx.drawImage(img, 200, 300, 200, 300);
};