$('#add-to-cart').click(function(){
	$('#cart-not-empty').show();
	$('#cart-empty').hide();
});

if(sessionStorage == null) {
  console.log("Your browser dose not support sessionStorage");
}else{
  console.log("Kongratulations! Your support sessionStorage");
    
}
