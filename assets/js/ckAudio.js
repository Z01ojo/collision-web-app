var target;

function checkAudio() {
    if($("#audio")[0].paused) {
        window.location.href  = target;
    } else {
        setTimeout(checkAudio, 1000);
    }
}

$('#menu ul a ').click(function(e) {
    e.preventDefault();

    target = $(this).attr('href');

    var sound = $("#audio");
    sound.get(0).play();

    setTimeout(checkAudio, 1200);
}
);