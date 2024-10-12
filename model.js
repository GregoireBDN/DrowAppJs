
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Shape(color, lineWidth) {
    this.color = color;
    this.lineWidth = lineWidth;
};

function Rectangle(color, lineWidth, startPointX, startPointY, width,  height) {
    Shape.call(this, color, lineWidth)
    this.startPoint = {x:startPointX, y:startPointY};
    this.width = width;
    this.height =  height;
};

function Line(color, lineWidth, startPoint, endPoint) {
    Shape.call(this, color, lineWidth)
    this.startPoint = {x:startPoint.x, y:startPoint.y};
    this.endPoint = endPoint;
};

function Drawing(arrayShape) {
    this.arrayShape = arrayShape;
};