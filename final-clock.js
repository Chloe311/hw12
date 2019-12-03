var vehicles = [];

var texts = ['Welcome', 'aboard', 'the', 'coding', 'train', '!!!'];
var nextT = 0;
var formattedTime = "00:00:00";
var prevSec = -1;
var maxChangeForce = 0;

var instructions = [];
var insText = 'Particle Clock';


function setup() {
    createCanvas(1000, 500);
    background(51);

    var bounds = font.textBounds(formattedTime, 0, 0, 192);
    var posx = width / 2 - bounds.w / 2;
    var posy = height / 2 + bounds.h / 2;

    var points = font.textToPoints(formattedTime, posx, posy, 192, {
        sampleFactor: 0.1
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }

    var boundsIns = font.textBounds(insText, 0, 0, 30);
    var posxIns = width / 2 - boundsIns.w / 2;
    var posyIns = height / 6 + boundsIns.h / 2;

    var insAr = split(insText, ' ');

    for (var c = 0; c < insAr.length; c++) {
        var bounds2 = font.textBounds(insAr[c], 0, 0, 30);
        var posx2 = posxIns;
        var posy2 = posyIns;

        posxIns += bounds2.w + 10;

        var points2 = font.textToPoints(insAr[c], posx2, posy2, 30, {
            sampleFactor: 0.3
        });

        for (var j = 0; j < points2.length; j++) {
            var pt = points2[j];
            var v = new Vehicle(pt.x, pt.y, 3);
            instructions.push(v);
        }
    }
}

function draw() {
    background(51);
  
  calcTime();
}

function calcTime() {
  var hours = hour();
  var minutes = minute();
  var seconds = second();
}

