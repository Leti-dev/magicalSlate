'use strict';

class ColorPicker{
	constructor(cpId){
		this.c = document.querySelector(cpId);
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

	getColor(){
		// Récupérer la couleur dans la palette
	}
}

var colorPicker = new ColorPicker("#colorPicker");
console.log(colorPicker);