var DrawingHelper = require('../../utils/DrawingHelper');
var TextHelper = require('../../utils/TextHelper');

var COULEURS_SUJETS = [
    'rgb(221,68,119)',
    'rgb(51,102,204)',
    'rgb(102,170,20)'
];

var COULEUR_AXES = '#000000';
var LARGEUR = 200;
var HAUTEUR = Math.round(LARGEUR * 2 / 3);
var MARGE_HAUT = 10;
var MARGE_BAS = 35;
var MARGE_GAUCHE = 30;
var MARGE_DROITE = 40;


FlouDeMAPView = function(configuration, sujets) {

    this.dom = {
        root: document.getElementById("FlouDeMAPView"),
        canvas: document.getElementById("FlouDeMAPCanvas")
    };

    this.textHelper = new TextHelper(configuration);
    this.sujets = sujets;
    this.render();
};

FlouDeMAPView.prototype.render = function() {

    var ct = this.dom.canvas.getContext('2d');

    this.dom.canvas.width = LARGEUR;
    this.dom.canvas.height = HAUTEUR;

    ct.beginPath();
    ct.fillStyle = 'rgba(255,255,255,0.9)';
    ct.fillRect(0, 0, LARGEUR - 1, HAUTEUR - 1);

    DrawingHelper.demiFlecheHorizontale(ct, HAUTEUR - MARGE_BAS - 1, MARGE_GAUCHE, LARGEUR - MARGE_DROITE - 1, COULEUR_AXES);
    DrawingHelper.demiFlecheVerticale(ct, MARGE_GAUCHE, HAUTEUR - MARGE_BAS - 1, MARGE_HAUT, COULEUR_AXES);

    var distanceMax = this.sujets.reduce(function(previousValue, currentValue) {
        return previousValue.distance > currentValue.distance ? previousValue : currentValue;
    }).distance;

    this.sujets.forEach(function(sujet, index) {
        var positionEnPixels = Math.round(sujet.distance * LARGEUR / (1.25 * distanceMax));
        ct.fillStyle = COULEURS_SUJETS[index];
        ct.fillText(this.textHelper.distanceAffichable(sujet.distance), positionEnPixels, 50 - 10 * index);
    }.bind(this));
};

module.exports = FlouDeMAPView;