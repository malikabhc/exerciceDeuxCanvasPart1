//Déclaration de la variable draw pour récupérer l'id myCanvas
var draw = document.getElementById('myCanvas');
//Déclaration du contexte
var ctx = draw.getContext('2d');
//Rectangle pour la maison
ctx.fillStyle = '#A1D8E6';
ctx.fillRect(130, 180, 150, 175);
//Rectangle de la fenêtre de gauche
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(145, 195, 30, 30);
//Rectangle de la fenêtre de droite
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(230, 195, 30, 30);
//Rectangle pour la porte
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(180, 285, 50, 70);
//Triangle pour le toit
ctx.beginPath();
ctx.moveTo(205, 100);
ctx.lineTo(280, 180);
ctx.lineTo(130, 180);
ctx.fillStyle = '#D7823E';
ctx.fill();
