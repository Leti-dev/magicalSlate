'use strict';

class Slate{
	constructor(slateId){
		this.c = document.querySelector(slateId);
		this.ctx = this.c.getContext("2d");
		this.height = this.c.height;
		this.width = this.c.width;
		this.isDrawing = false;

		this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.width, this.height);

	}

	// METHODS :

	erase(){
		// effacer tout le canvas
	}

	save(){
		// Enregistrer le dessin
	}
}
