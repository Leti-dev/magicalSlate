'use strict';

class Slate{
	constructor(slateId){
		this.c = document.querySelector(slateId);
		this.ctx = this.c.getContext("2d");
		this.height = this.c.height;
		this.width = this.c.width;
		this.isDrawing = false;
		this.picker = false;

		this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(0, 0, this.width, this.height);

	}

	// METHODS :

	erase(e){
	// effacer tout le canvas
		this.ctx.fillStyle = "#ffffff";
		this.ctx.fillRect(0, 0, this.width, this.height);
	}

	save(){
	// Enregistrer le dessin
		var imgUrl = this.c.toDataURL();
		$("#img-saved").attr("src", imgUrl);

		$("#img-container").css("width", "100%");
		$("#img-container").css("height", "100%");
	}

	endSave(){
		$("#img-container").css("width", "0");
		$("#img-container").css("height", "0");
	}

	initPicker(){
		console.log('to');
		this.picker = true;
		$("#draw").css("cursor", "url(img/image.png), crosshair");
	}

	getColor(e, pencil){
		if(this.picker){
			var color = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);
			pencil.color = "rgb(" + color.data[0] + "," + color.data[1] + "," + color.data[2] + ")";
			console.log(color.data);
			this.picker = false;
			$("#draw").css("cursor", "pointer");
		}
	}
}
