'use strict';

class App{
	constructor(slateId, colorPickerId){
		this.slate = new Slate(slateId);
		this.colorpicker = new ColorPicker(colorPickerId);
		this.pencil = new Pencil();

		this.initEvents();
	}

	initEvents(){
		$(this.slate.c).on("mousedown", function(e){
			this.pencil.startDrawing(e, this.slate);
		}.bind(this));

		$(this.slate.c).on("mousemove", function(e){
			this.pencil.drawing(e, this.slate);
		}.bind(this));

		$(this.slate.c).on("mouseup mouseout", function(e){
			this.slate.isDrawing = false;
		}.bind(this));

	}
}