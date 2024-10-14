
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
        this.arrayShape = new Map();
        ctx.fillStyle = '#9e9d9d';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        listBtnRemoveShape.innerHTML = ""
    })
};


function addListeShape(idShape,shape){
    const buttonsArray = document.getElementById('listBtnRemoveShape');
    if(shape.constructor == Rectangle){
        buttonsArray.innerHTML += `
        <li class="btnRemove" id="removeShapeBtn${idShape}"=>
            Suprimer <b style="color=${shape.color}">>□<</b>
        </li>`;
    }else{
        buttonsArray.innerHTML += `
        <li class="btnRemove" id="removeShapeBtn${idShape}">
            Suprimer <b style="color=${shape.color}">>/<</b>
        </li>`;
    }
    
}