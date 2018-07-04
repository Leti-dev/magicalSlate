'use strict';

class Pencil{
	constructor(){
		this.lineWidth = 1;
		this.color = "black";
		this.posX = 0;
		this.posY = 0;
	}

	// METHODS :

	changeLineWidth(){
		// Changer la taille du stylo
	}

	changeColor(){
		// Changer la couleur du stylo
	}

	startDrawing(){
		// Commencer à dessiner => quand le stylo se pose
	}

	drawing(){
		// Dessiner => souris cliqué
	}

	stopDrawing(){
		// Arrêter de dessiner => quand on relache la souris ou qu'on sort du canvas
	}
}