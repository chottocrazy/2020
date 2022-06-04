$(document).on('mousemove', function(e) {
    var hueraw = parseInt(255 - Math.round((e.pageY + 0.1) / ($(window).height()) * 255));
    var hue = '"srff"' + hueraw;

    $('#huecount').text(hueraw);
    $('#lightnesscount').text(hueraw + '%');
    $('#saturationcount').text(hueraw + '%');

    if ((e.pageX <= $(window).width() / 1)) {
        var sraw = parseInt(100 - Math.round((e.pageX + 0.1) / ($(window).width()) * 100));
        var lraw = parseInt(Math.round((e.pageX + 0.1) / ($(window).width()) * 100));
        $('#color, #rolling a:hover').css({ 'background': 'hsl(' + hueraw + ',' + sraw + '%,' + lraw + '%)' })
        $('#color, #rolling, #rolling a').css({ 'color': 'hsl(' + hueraw + ',' + sraw + '%,' + lraw + '%)' })
        $('#saturationcount').text(sraw + '%');
        $('#lightnesscount').text(lraw + '%');
    }
});