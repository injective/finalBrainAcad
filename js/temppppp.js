var cars = [
    {
        name: 'LADA Niva',
        height: '62px',
        color: 'url("http://i.imgur.com/K19E3GP.png")'
    },
    {
        name: 'LADA Classic',
        height: '41px',
        color: 'url("http://i.imgur.com/BuNTj56.png")'
    },
    {
        name: 'ZAZ',
        height: '41px',
        color: 'url("http://i.imgur.com/P97PoCy.png")'
    },
    {
        name: 'MAZDA 3',
        height: '41px',
        color: 'url("http://i.imgur.com/O4au92D.png")'
    }
];


function callback() {
    $('#results').append('<li>' + $(this).text() + '</li>');


}

$(function(){
    $('#myModal').modal('show');

    cars.forEach(function(car, i){
        $('<div class="car">' + car.name + '</div>').css({
            background: car.color,
            width: '100px',
            height: car.height,
            top: i*60,
            left: 0,
            textIndent: '-9999px'
        }).appendTo('#wrapper');
    });

    $('#money').css({
        fontSize: '30px',
        color: 'red'
    }).text('1000');
});

$('#btn').click(function(){
    $('.car').each(function(){
        $(this).animate({
            left: 700
        }, Math.random()*3000 + 1000, 'swing', callback);
    });

    if($('#select').value == $('li:first-child').text()){
        alert('fsdfsdf');
    }
});

$('#select').change(function(){
    $('#money').text(this.value);
});