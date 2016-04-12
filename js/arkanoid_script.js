var field = document.querySelector('.field');
fieldStyle = window.getComputedStyle(field);
field.style.height = parseInt(document.documentElement.clientHeight) - parseInt(fieldStyle.getPropertyValue('margin-top')) -
    parseInt(fieldStyle.getPropertyValue('margin-bottom')) - parseInt(fieldStyle.getPropertyValue('padding-top')) -
    parseInt(fieldStyle.getPropertyValue('padding-bottom')) + 'px';

var battledore = document.querySelector('.battledore');
battledore.addEventListener('mousemove', moveBattledore, false);

function moveBattledore(e) {
    var score = document.querySelector('.score');
    var clientCoords = "( " + e.clientX + " )";
    score.innerText = 'clientCoords' + clientCoords;
    battledore.style.left = parseInt(e.clientX) + 'px';
}
















//field.setProperty('height', function(){
//    parseInt(document.documentElement.clientHeight) - parseInt(fieldStyle.getPropertyValue('margin-top')) -
//        parseInt(fieldStyle.getPropertyValue('margin-bottom')) - parseInt(fieldStyle.getPropertyValue('padding-top')) -
//        parseInt(fieldStyle.getPropertyValue('padding-bottom')) + 'px';
//});