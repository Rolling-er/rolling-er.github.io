function info(){
    /*假设data为后台返回的数据*/ 
    var data={
            count:3,
            data:[
                {   list:[
                    {url:'images/1.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/2.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/3.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/10.png',title:'测试1测试1测试11测试1111111112'},
                    ]
                },
                
                {   list:[
                    {url:'images/4.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/5.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/6.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/7.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/8.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/9.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/10.png',title:'测试1测试1测试11测试1111111112'},
                    ]
                },
                {   list:[
                    {url:'images/1.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/3.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/5.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/7.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/9.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/9.png',title:'测试1测试1测试11测试1111111112'},
                    {url:'images/10.png',title:'测试1测试1测试11测试1111111112'},
                    ]
                }
            ]
            }
    $("#lb").append(template("lb-tpl",data));
        $("#lb .cont").eq(0).show();
     
       setTimeout(() => {
        for(let i=0;i<data.count;i++){
            var swiper = new Swiper(`.mySwiper${i}`, {
            slidesPerView: 3,
            spaceBetween: 30,
            });
        }
       }, 100);
       handerWordRoll(0,'0')
        
}
function changeGroup(type) {
    $(".btnbox .btn").eq(type).addClass('active').siblings().removeClass('active');
    $("#lb .cont").eq(type).show().siblings().hide();
    handerWordRoll(type,'0')
}

/*文字滚动*/
(function ($) {
    $.fn.extend({
        roll: function (options) {
            var defaults = {
                speed: 1,
            };
            var options = $.extend(defaults, options);
            var speed = (document.all) ? options.speed : Math.max(1, options.speed - 1);
            if ($(this) == null) return;
            var $container = $(this);
            var $content = $(this).children();
            var init_left = $container.left;
            $content.css({
                left: parseInt(init_left) + "px"
            });
            var This = this;
            AlltimeRollClear = setInterval(function () {
                This.move($container, $content, speed);
            }, 20);
            $container.bind("mouseover", function () {
                if ($container.parent().parent().hasClass('swiper-slide-thumb-active') == true) {
                    if (BoClearTime) {
                        clearTimeout(BoClearTime)
                    }
                    if (AlltimeRollClear) {
                        clearInterval(AlltimeRollClear);
                    }
                }

            });
            $container.bind("mouseout", function () {
                if ($container.parent().parent().hasClass('swiper-slide-thumb-active') == true) {
                    if (BoClearTime) {
                        clearTimeout(BoClearTime)
                    }
                    if (AlltimeRollClear) {
                        clearInterval(AlltimeRollClear);
                    }
                    AlltimeRollClear = setInterval(function () {
                        This.move($container, $content, speed);
                    }, 20);
                }
            });
            return this;
        },

        move: function ($container, $content, speed) {
            var container_width = $container.width();
            var content_width = $content.width();
            if (parseInt($content.css("left")) + content_width > 0) {
                $content.css({
                    left: parseInt($content.css("left")) - speed + "px"
                });
            } else {
                $content.css({
                    left: parseInt(container_width) + "px"
                });
            }
        }
    });
})(jQuery);

var AlltimeRollClear = null;
var BoClearTime = null;
function handerWordRoll(i,key) {
BoClearTime = setTimeout(function () {
    if (BoClearTime) {
        clearTimeout(BoClearTime)
    }
    if (AlltimeRollClear) {
        clearInterval(AlltimeRollClear);
    }
    for (let i = 0; i < $(".content_small_tip").length; i++) {
        $(".content_small_tip").addClass("content_small_tip2")
        $(".content_small_tip").css('left', '0px')
    }
    $(`#container_small_tip${i}_${key}`).children().eq(0).removeClass("content_small_tip2")
    var _widthXS = $(`#container_small_tip${i}_${key}`).parent().width(); //实际的宽度
    var _widthWordT = $(`#container_small_tipp${i}_${key}`).children().eq(0).width()
    if (_widthWordT > _widthXS) {
        $(`#container_small_tip${i}_${key}`).roll({
            speed: 0.2
        });
    } else {
        $(`#content_small_tip${i}_${key}`).addClass("content_small_tip2")
    }
    $(`#container_small_tip${i}_${key}`).roll({
            speed: 0.2
    });
}, 100)
}
var swiper = new Swiper('.swiper-container1', {
    slidesPerView:'auto',/*根据slide的宽度自动调整展示数量*/
    spaceBetween: 20,/*左右的间距20px*/
    centeredSlides: false,/*是否居中显示*/
    slidesPerGroup:5,/*定义slides的5个为一组*/
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
    });
