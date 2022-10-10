var pagesize=1; //默认请求的页面1
var isMore=0;//默认是否有跟多数据 0表示没有 1表示有
var pageNum=20;//假设每次请求返回20条数据
function info(){

             var data={ //后台返回的数据
                cont:20, //返回的条数
                list:[
                    {imgUrl:'./images/1.png',height:'600'},
                    {imgUrl:'./images/2.png',height:'200'},
                    {imgUrl:'./images/3.png',height:'300'},
                    {imgUrl:'./images/4.png',height:'240'},
                    {imgUrl:'./images/5.png',height:'550'},
                    {imgUrl:'./images/6.png',height:'600'},
                    {imgUrl:'./images/7.png',height:'200'},
                    {imgUrl:'./images/9.png',height:'600'},
                    {imgUrl:'./images/9.png',height:'200'},
                    {imgUrl:'./images/1.png',height:'600'},
                    {imgUrl:'./images/2.png',height:'200'},
                    {imgUrl:'./images/3.png',height:'300'},
                    {imgUrl:'./images/4.png',height:'240'},
                    {imgUrl:'./images/5.png',height:'550'},
                    {imgUrl:'./images/6.png',height:'600'},
                    {imgUrl:'./images/7.png',height:'200'},
                    {imgUrl:'./images/1.png',height:'600'},
                    {imgUrl:'./images/2.png',height:'200'},
                   
                ]
        };
        if(data.cont>0) {
            if(pagesize==1){
                if(data.cont==0){
                    isMore=0;
                }
            }
            if(pageNum>data.cont){
                isMore=0;
            }else {
                isMore=1
            }
            console.log(isMore)
            $("#content").append(template('template-tpl',data));
            //当获取到数据，执行瀑布流
            waterFall();
        }
}
       






        function waterFall() {
           var widthNum=parseInt(($(window).width()-160)/$(".item").outerWidth(true)), ////计算出列数
               allHeight=[];//定义列高度数组

            for (var i=0;i<widthNum;i++){
                allHeight.push(0)
            }
        $(".item").each(function () {
            var $cur=$(this),
                    indx=0,
             minAllHeight=allHeight[0];
            for (var j=0;j<allHeight.length;j++){
                if (allHeight[j]<minAllHeight){
                    minAllHeight=allHeight[j];
                    indx=j;
                }
            }

          $cur.css({
                "left":indx*$cur.outerWidth(true),
                "top":minAllHeight
            });
            allHeight[indx]=minAllHeight+$cur.outerHeight(true);
        })
        }
        
        //当窗口大小重置之后，重新执行
        $(window).on("resize",function () {
            waterFall()
        })
        /*页面滚动到底部进行懒加载*/ 
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop(); //滚动条距离顶部的高度
            var scrollHeight = $(document).height(); //当前页面的总高度
            
            var clientHeight = $(this).height(); //当前可视的页面高度
            
            if(scrollTop + clientHeight >= scrollHeight){ //距离顶部+当前高度 >=页面总高度 即滚动条到达底部
                if(isMore) {
                    pagesize++;
                    info();
                }
            }
            return false
            
        })