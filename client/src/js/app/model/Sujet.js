Sujet = function(nom, distance, srcImage, hauteurEnMetre) {
	this.nom = nom;
	this.distance = distance;
	this.image = document.createElement("IMG");
	this.image.crossOrigin = "anonymous";
	this.image.src = srcImage;
	this.hauteurEnMetre = hauteurEnMetre;
};

module.exports = Sujet;