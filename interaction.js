// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'

  this.startPoint = {x:0, y:0};
  this.endPoint = {x:0, y:0};

  this.isClick = false;
  // Developper les 3 fonctions gérant les événements
  this.mouseDown = function (evt) {
    this.startPoint = getMousePosition(canvas, evt)
    this.isClick = true;
    interactor.onInteractionStart(this)
  }.bind(this)

  this.mouseMove = function (evt) {
    if (this.isClick){
      this.endPoint = getMousePosition(canvas, evt)
      interactor.onInteractionUpdate(this)
    }

  }.bind(this)

  this.mousUp = function (evt) {
    if (this.isClick){
      this.isClick = false;
      this.endPoint = getMousePosition(canvas, evt)
      interactor.onInteractionEnd(this)
    }
  }.bind(this)

  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mousUp, false);
  // Associer les fonctions précédentes aux évènements du canvas.
};

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};