
var clicktype = true;
function indexFun(){
	
	$('.load_bg').remove();
	
	$('.page_index .lottery_box').on('click','.list_but',function(){
		
		if(clicktype == false){return false};
		clicktype = false;
		
		zpjp = 0; //中奖位置
		zpfun(function(){
			setTimeout(function(){
				speed = 60;
				zpnum = 0;
				count = 0;
				zpjp = -1;
				clicktype = true;
				alert('恭喜您获得10元')
			},600)
		});	
		
	})
}

var speed = 60;//初始速度
var zpnum = 0; //当前位置
var count = 0;
var totalCount = 3;//默认转圈数
var zpjp = -1; //中奖位置
function zpfun(zpres){
	zpnum++;
	if(count>totalCount && zpnum == zpjp){
		 zpres();
		 setTimeout(function(){
			 $('.lottery_box .list_box').attr('class','list_box');
		 },800)
	} else {
		if(count>totalCount+1){
			zpnum = 0;
			zpres();
			setTimeout(function(){
				$('.lottery_box .list_box').attr('class','list_box');
			},800)
		} else {
			if(zpnum>7){
				zpnum = 0;
				count++;
			}
			if(count>=totalCount){
				speed+=30;
			}
			setTimeout(function(){
				zpfun(zpres)
			},speed)
		}
	}
	$('.lottery_box .list_box').attr('class','list_box list_box'+zpnum);
}