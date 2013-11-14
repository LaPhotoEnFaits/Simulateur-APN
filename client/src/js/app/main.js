var Configuration = require('./utils/Configuration');

var Sujet = require('./model/Sujet');
var APN = require('./model/AppareilPhoto');
var Objectif = require('./model/Objectif');

var FlouDeMAPView = require('./view/fenetres/FlouDeMAPView');
var PhotoView = require('./view/fenetres/PhotoView');



window.onload = function() {

    var configuration = new Configuration();
    configuration.systemeMesure = "METRIQUE";

    // Init model
    var sujets = [
        new Sujet("MasqueGaz", 10, 'http://commondatastorage.googleapis.com/simuapn%2FTESTLPEF%2Fsilhouettes%2FMasqueGaz.png', 0.3),
        new Sujet("WalterWalt", 30, 'http://commondatastorage.googleapis.com/simuapn%2FTESTLPEF%2Fsilhouettes%2FWalt.gif', 1.8),
        new Sujet("Camion", 100, 'http://commondatastorage.googleapis.com/simuapn%2FTESTLPEF%2Fsilhouettes%2FCamion.png', 2.2)
    ];

    var apnChoisi = new APN({
        marque: 'Nikon',
        modele : 'D800',
        gamme : 'Expert',
        date : '2012/02/07',
        prix : 2899,
        capteurFormat : 'full-frame',
        capteurHauteur : 24,
        capteurLargeur : 36,
        capteurDefinition : 36.3,
        capteurTechno : 'CMOS',
        capteurProfCouleur : 25.3,
        capteurDynamique : 14.4,
        capteurLowLightISO : 2853,
        ISOmin : 100,
        ISOmax : 6400,
        ISOboost : 12800,
        ptsAF : 51,
        FPS : 4,
        xGross : 0.7,
        visee : 100,
        tropicalisation : 1,
        viseeElec : 0,
        tailleEcran : 3.2,
        poids : 900,
        boitierLargeur : 146,
        boitierHauteur : 123,
        boitierProfondeur : 82,
        filtreAntiAliasing : 1
    });
    var objectifChoisi = new Objectif('50mm f/1.8', 50, 1.8, 0, 17, 7, 7, [11.3, 16, 7.5, 2], [63.5, 63.5, 63.5, 55.4], [2.2, 0, 0], 4);


    // Init views
    // new FlouDeMAPView(configuration, sujets);
    new PhotoView(configuration, sujets, apnChoisi, objectifChoisi);
};