$('#add-to-cart').click(function(){
    $('#cart-not-empty').show();
    $('#cart-empty').hide();
});

if(sessionStorage == null) {
    console.log("Your browser dose not support sessionStorage");
}else{
    console.log("Kongratulations! Your support sessionStorage");
}


$(document).ready(function(){
    
    $(".detail-toggle").click(function(){
         console.log($(this).closest('.ibox-content'));
        $(this).closest('.ibox-content').toggleClass("active");
        $(this).closest('.ibox-content').find('.detail-table').slideToggle();
    });

    
    
    $('#smsDes').blur(function() {
        if( $(this).val()) {
        }else{
            $('#smsDesWell').slideUp();
        }
    })
        .focus(function() {
        $('#smsDesWell').slideDown();
    });


    $('input[type=radio][name=sendTime]').change(function() {
       
        if (this.value == 'sms2') {
            $('.target-time').find('.well').slideUp();
            $('#smsTarWell').slideDown();
        }else if (this.value == 'sms3') {
            $('.target-time').find('.well').slideUp();
            $('#smsScheWell').slideDown();
        }else{
            $('.target-time').find('.well').slideUp();
        }
    });
    
    $('input[type=radio][name=optionsRadios]').change(function() {
        if (this.value == 'send2') {
            $('#smsAlphaWell').slideDown();
        }else{
            $('#smsAlphaWell').slideUp();
        }
    });
    
/*
    smsForm
    sms2
    sms3
    smsTarWell
    smsScheWell
*/

});

