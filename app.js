$(document).ready(function () {

    $('input').click(function (e) { 
        e.preventDefault();
        
        $('input').val("");
    });
    $('.btn').click(function (e) { 
        e.preventDefault();
        
        if ($.trim($("input").val()) != '') {
            let a = (a) => {
                if (parseInt(a) + 0 == parseInt(a)) {
                    for (let i = 1; i<a; i++) {
                        $('.minibox').append(`<h3>${a}</h3>`);
                    }
                } 
                if (a + 0 != parseInt(a)){
                    $('.minibox').append(`<h3>${a}</h3>`);
                }  
            }
        a($('input').val())
        }
        $('input').val("Please write");
    });

});

