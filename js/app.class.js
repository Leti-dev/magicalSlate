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
			if(this.slate.picker){
				this.slate.getColor(e, this.pencil);
			}else{
				this.pencil.startDrawing(e, this.slate);	
			}
		}.bind(this));

		$(this.slate.c).on("mousemove", function(e){
			this.pencil.drawing(e, this.slate);
		}.bind(this));

		$(this.slate.c).on("mouseup mouseout", function(e){
			this.slate.isDrawing = false;
		}.bind(this));

		$(this.colorpicker.c).on("click", function(e){
			this.colorpicker.getColor(e, this.pencil);
		}.bind(this));

		$(".fa-eraser").on("click", function(e){
			this.slate.erase(e);
		}.bind(this));

		$(".round").on("click", function(e){
			this.pencil.changeColor($(e.target).data("color"));
		}.bind(this));

		$("#img").on("click", function(e){
			this.pencil.multiColor = true;
		}.bind(this));

		$(".lineWidth").on("click", function(e){
			this.pencil.changeLineWidth($(e.target).data("linewidth"));
		}.bind(this));

		$(".fa-save").on("click", function(e){
			this.slate.save();
		}.bind(this));

		$("#img-saved").on("click", function(e){
			this.slate.endSave();
		}.bind(this));

		$(this.colorpicker.c).on("mousemove", function(e){
			this.colorpicker.changeZoom(e);
		}.bind(this));

		$(this.colorpicker.c).on("mouseout", function(e){
			$(".zoom").css("display", "none");
		}.bind(this));

		$(".fa-eye-dropper").on("click", function(e){
			this.slate.initPicker(e);
		}.bind(this));
	}
}