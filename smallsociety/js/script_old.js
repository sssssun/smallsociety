for(var i=2; i<5;i++){
	$('#section' + i).hide();
}
var cnt=0;
var num=1;
$(window).on('wheel', function(e){
		var delta = e.originalEvent.deltaY;
		if(delta >0 && cnt != 1 && num<4){
			console.log('up');
			$('#section' + num).hide(1000);
			num++;
			$('#section' + num).fadeIn(1000);
			cnt =1;
			setTimeout(reset,1800);
		}else if(delta <=0 && cnt != 1 && num>1){
			console.log('down');
			$('#section' + num).hide(0);
			num--;
			$('#section' + num).fadeIn(1000);
			cnt =1;
			setTimeout(reset,1800);
		}
});

var reset = function(){
	cnt = 0;
};


