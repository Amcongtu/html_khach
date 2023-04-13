$(document).ready(function () {
    $('.btn_order').each(function (index, element) {
        // element == this
        $(element).click(function (e) { 
            e.preventDefault();
            $('.modal').css('display', 'flex');
        });
    });
    $('.new_btn_order').each(function (index, element) {
        // element == this
        $(element).click(function (e) { 
            e.preventDefault();
            $('.modal').css('display', 'flex');
        });
    });
    $('.btn-close-modal').click(function (e) { 
        e.preventDefault();
        $('.modal').css('display', 'none');
    });
});