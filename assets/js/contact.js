$(document).ready(function(){
    $('.validate-form').on('submit', function(){
        $(this).addClass("was-validated");
        return $(this)[0].checkValidity();
    });

    $('#submit').on('click', function(){
        $(this).parents('form').attr(
            'action',
            'https://formspree.io/' +
            'ofni'.split("").reverse().join("") +
            String.fromCharCode(64) +
            window.location.hostname.replace('www.','')
        );
    });
});
