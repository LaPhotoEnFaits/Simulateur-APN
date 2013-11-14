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

    var apnChoisi = new APN('Nikon', 'D800', 'Expert', '2012/02/07', 2899, 'full-frame', 24, 36, 36.3, 'CMOS', 25.3, 14.4, 2853, 100, 6400, 12800, 51, 4, 0.7, 100, 1, 0, 3.2, 900, 146, 123, 82, 1);
    var objectifChoisi = new Objectif('50mm f/1.8', 50, 1.8, 0, 17, 7, 7, [11.3, 16, 7.5, 2], [63.5, 63.5, 63.5, 55.4], [2.2, 0, 0], 4);


    // Init views
    new FlouDeMAPView(configuration, sujets);
    new PhotoView(configuration, sujets, apnChoisi, objectifChoisi);
};