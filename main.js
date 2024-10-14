var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const range = document.getElementById("lineWidthChoicer");
const rangeValue = document.getElementById("rangeValue");
function updateRangeValue() {
  rangeValue.textContent = range.value;
}
range.addEventListener("change", updateRangeValue);

// Code temporaire pour tester le DnD
//var dnd = new DnD(canvas, this);
//console.log(dnd)
// ctx.fillStyle = '#F0F0F0'; // set canvas' background color
// ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas

/////

// Code temporaire pour tester l'affiche de la vue
// var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
// ligne.paint(ctx);
// tester également Dessin.
////



// Code final à utiliser pour manipuler Pencil.
window.addEventListener("load", () => {
    color.value = "#000000"
  var drawing = new Drawing(new Map());
  var pencil = new Pencil(ctx, drawing, canvas);
  drawing.paint(ctx, canvas);
});
