
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.strokeRect(this.startPoint.x, this.startPoint.y, this.width, this.height);
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.beginPath();
    ctx.moveTo(this.startPoint.x,this.startPoint.y);
    ctx.lineTo(this.endPoint.x,this.endPoint.y);
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    ctx.fillStyle = '#9e9d9d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);    
    this.arrayShape.forEach(function (arrayElement) {
         arrayElement.paint(ctx);
     });
    clear.addEventListener("click", ()=>{
        this.arrayShape = [];
        ctx.fillStyle = '#9e9d9d';
        ctx.fillRect(0, 0, canvas.width, canvas.height);  
    })
};