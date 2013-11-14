Objectif = function(nom, focale, ouvertureMin, antiVibration, resolution, abbChro, nbrCylindres, longueurCylindre, diametreCylindre, ecartCyclindre, numBague) {
	this.nom = nom;
	this.focale = focale;
	this.ouvertureMin = ouvertureMin;
	this.antiVibration = antiVibration;
	this.resolution = resolution;
	this.abbChro = abbChro;
	this.nbrCylindres = nbrCylindres;
	this.longueurCylindre = longueurCylindre;
	this.diametreCylindre = diametreCylindre;
	this.ecartCyclindre = ecartCyclindre;
	this.numBague = numBague;
};

module.exports = Objectif;