var editingMode = { rectangle: 0, line: 1 };

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function Pencil(ctx, drawing, canvas) {

  this.currEditingMode = editingMode.rectangle;
  this.currLineWidth = 3;
  this.currColour = "#000000";
  this.currentShape = 0;
  // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

  new DnD(canvas, this);

  rectangle.addEventListener("click", () => {
    this.currEditingMode = editingMode.rectangle;
  });

  line.addEventListener("click", () => {
    this.currEditingMode = editingMode.line;
  });

  lineWidthChoicer.addEventListener("change", () => {
    this.currLineWidth = lineWidthChoicer.value;
  });
  
  color.addEventListener("change", () => {
    console.log(color.value);

    this.currColour = color.value;
  });

  // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

  this.onInteractionStart = function (dnd) {
    if (this.currEditingMode == editingMode.rectangle) {
      this.currentShape = new Rectangle(
        this.currColour,
        this.currLineWidth,
        dnd.startPoint.x,
        dnd.startPoint.y,
        0,
        0
      );
    } else {
      this.currentShape = new Line(
        this.currColour,
        this.currLineWidth,
        dnd.startPoint,
        dnd.endPoint
      );
    }
  }.bind(this);

  this.onInteractionUpdate = function (dnd) {
    if (this.currEditingMode == editingMode.rectangle) {
      this.currentShape.width = dnd.endPoint.x - dnd.startPoint.x;
      this.currentShape.height = dnd.endPoint.y - dnd.startPoint.y;
    } else {
      this.currentShape.endPoint = dnd.endPoint;
    }
    drawing.paint(ctx);
    this.currentShape.paint(ctx);
  }.bind(this);

  this.onInteractionEnd = function (dnd) {
    if (this.currEditingMode == editingMode.rectangle) {
      this.currentShape.largeur = dnd.endPoint.x - dnd.startPoint.x;
      this.currentShape.hauteur = dnd.endPoint.y - dnd.startPoint.y;
    } else {
      this.currentShape.endPoint = dnd.endPoint;
    }
    const idShape = generateUUID();
    drawing.arrayShape.set(idShape,this.currentShape);
    addListeShape(idShape,this.currentShape);
    drawing.paint(ctx);
    listBtnRemoveShape.addEventListener("click",(e)=>{
      remove(e.target.id.substring(14),drawing,ctx);
    });
  }.bind(this);
}

function remove (idShape, drawing, ctx) {
  drawing.arrayShape.delete(idShape)
  document.getElementById(`removeShapeBtn${idShape}`).remove();
  drawing.paint(ctx)
}



