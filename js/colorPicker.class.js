'use strict';

class ColorPicker{
	constructor(colorPickerId){
		this.c = document.querySelector(colorPickerId);
		this.ctx = this.c.getContext("2d");
		this.height = this.c.height;
		this.width = this.c.width;

		var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
		gradient.addColorStop(0, "hsl(0, 100%, 50%)");
		gradient.addColorStop(0.2, "hsl(61, 100%, 50%)");
		gradient.addColorStop(0.4, "hsl(113, 100%, 50%)");
		gradient.addColorStop(0.6, "hsl(179, 100%, 50%)");
		gradient.addColorStop(0.8, "hsl(236, 100%, 50%)");
		gradient.addColorStop(1, "hsl(303, 100%, 50%)");
		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.width, this.height);

		gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
		gradient.addColorStop(0, "hsl(0, 0%, 100%)");
		gradient.addColorStop(0.2, "hsla(0, 0%, 100%, 0.5)");
		gradient.addColorStop(0.5, "hsla(0, 0%, 100%, 0)");
		gradient.addColorStop(0.8, "hsl(0, 0%, 0%, 0.5)");
		gradient.addColorStop(1, "hsla(0, 0%, 0%)");
		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.width, this.height);
	}

	// METHODS :

	getColor(e, pencil){
	// Récupérer la couleur dans la palette
		var color = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
		pencil.color = "rgb(" + color.data[0] + "," + color.data[1] + "," + color.data[2] + ")";
	}

	changeZoom(e){
		$(".zoom").css("display", "block");
		$(".zoom").css("left", e.offsetX);
		$(".zoom").css("top", e.offsetY);
		var color = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
		$(".zoom").css("background-color", "rgb(" + color.data[0] + "," + color.data[1] + "," + color.data[2] + ")");
	}
}
