'use strict';

class Pencil{
	constructor(){
		this.lineWidth = 1;
		this.color = "black";
		this.multiColor = false;
		this.hue = 0;
		this.posX = 0;
		this.posY = 0;
	}

	// METHODS :

	changeLineWidth(lineWidth){
		// Changer l'épaisseur du stylo
		this.lineWidth = lineWidth;
	}

	changeColor(color){
	// Changer la couleur du stylo
		this.color = color;
	}

	startDrawing(e, slate){
	// Commencer à dessiner => quand le stylo se pose
		if(e.button == 0){
			slate.isDrawing = true;
			slate.ctx.lineWidth = this.lineWidth;
			slate.ctx.strokeStyle = this.color;
			this.posX = e.offsetX;
			this.posY = e.offsetY;
			$("#draw").css("cursor", "url(img/pen-icon.png), crosshair");
		}
	}

	drawing(e, slate){
		// Dessiner => souris cliqué
		if(slate.isDrawing && !slate.picker){
			if(this.multiColor){
				slate.ctx.strokeStyle = "hsl(" + this.hue + ", 100%, 50%, 1)";

				this.hue +=1;
				if(this.hue > 360){
					this.hue = 0;
				}

			}else{
				this.multiColor = false;
				slate.ctx.strokeStyle = this.color;
			}

		slate.ctx.beginPath();
		slate.ctx.moveTo(this.posX, this.posY);
		slate.ctx.lineTo(e.offsetX, e.offsetY);
		slate.ctx.stroke();

		this.posX = e.offsetX;
		this.posY = e.offsetY;

		}

	}


}