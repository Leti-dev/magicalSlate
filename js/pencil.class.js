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

	startDrawing(e, slate){
	// Commencer à dessiner => quand le stylo se pose
		if(e.button == 0){
			slate.isDrawing = true;
			slate.ctx.lineWidth = this.lineWidth;
			slate.ctx.strokeStyle = this.color;
			this.posX = e.offsetX;
			this.posY = e.offsetY;
		}
	}

	drawing(e, slate){
	// Dessiner => souris cliqué
		if(slate.isDrawing){
			slate.ctx.beginPath();
			slate.ctx.moveTo(this.posX, this.posY);
			slate.ctx.lineTo(e.offsetX, e.offsetY);
			slate.ctx.stroke();

			this.posX = e.offsetX;
			this.posY = e.offsetY;
		}
	}


}