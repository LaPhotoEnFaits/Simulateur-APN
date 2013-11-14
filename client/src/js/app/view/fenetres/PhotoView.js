var LARGEUR = 500;


PhotoView = function(configuration, sujets, apnChoisi, objectifChoisi) {

	this.dom = {
		root: document.getElementById("PhotoView"),
		canvas: document.getElementById("PhotoCanvas"),
		inputDistanceAvantPlan: document.getElementById("distanceAvantPlan")
	};

	this.textHelper = new TextHelper(configuration);
	this.sujets = sujets;
	this.apnChoisi = apnChoisi;
	this.objectifChoisi = objectifChoisi;
	this.bindEvents();
	this.render();
};



PhotoView.prototype.render = function render() {

	var ct = this.dom.canvas.getContext('2d');

	this.dom.canvas.width = LARGEUR;
	var hauteurCanvas = LARGEUR * this.apnChoisi.capteurHauteur / this.apnChoisi.capteurLargeur;
	this.dom.canvas.height = hauteurCanvas;

	var X;
	var Y;
	var largeurPixel;
	var hauteurPixel;
	var largeurSceneMetre;
	var hauteurSceneMetre;

	largeurSceneMetre = this.apnChoisi.capteurLargeur * this.sujets[0].distance / this.objectifChoisi.focale;
	hauteurSceneMetre = this.apnChoisi.capteurHauteur * this.sujets[0].distance / this.objectifChoisi.focale;

	var largeurSujetEnMetre = this.sujets[0].hauteurEnMetre * this.sujets[0].image.width / this.sujets[0].image.height;

	hauteurPixel = this.sujets[0].hauteurEnMetre * hauteurCanvas / hauteurSceneMetre;
	largeurPixel = largeurSujetEnMetre * LARGEUR / largeurSceneMetre;

	X = LARGEUR / 2 - largeurPixel / 2;
	Y = hauteurCanvas / 2 - hauteurPixel / 2;

	ct.drawImage(this.sujets[0].image, X, Y, largeurPixel, hauteurPixel);
};



PhotoView.prototype.bindEvents = function bindEvents() {

	this.dom.inputDistanceAvantPlan.addEventListener('change', this.render.bind(this));
	// à intégrer: this.sujets[0].distance= 1.0*this.dom.inputDistanceAvantPlan.value
};

module.exports = PhotoView;