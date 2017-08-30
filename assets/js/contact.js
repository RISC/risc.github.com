$(document).ready(function(){
    $('#submit').on('click', function(){
        $(this).parent('form').attr(
            'action',
            'https://formspree.io/' +
            'ofni'.split("").reverse().join("") +
            String.fromCharCode(64) +
            window.location.hostname
        );
        console.log($(this).parent('form').attr(
            'action'));
    });
});