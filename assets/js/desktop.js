$(function(){
    init();
    runtime();
})
function runtime(){
    var time;
    setInterval(function(){
        time = new Date();
        var times = time.toLocaleTimeString().split(':');
        if((Number)(times[0])<12){
            times = "上午 "+times[0]+":"+times[1];
        }else{
            times = "下午 "+((Number)(times[0])-12)+":"+times[1];
        }
        $(".itime").text(times);
        $(".idate").text(time.toLocaleDateString());
    },1000)
}
function init(){
    var show = false;
    $("#desktop").click(function(){
        if(show==true){
            $("#menu")[0].style.transform="translateY(0vh)";
            show = false;
        }
    })
    $(".start").mousedown(function(){
        $(".start")[0].style.backgroundSize = "47%";
    });
    $(".start").mouseup(function(){
        $(".start")[0].style.backgroundSize = "60%";
    });
    $(".start").click(function(){
        if(show){
            $("#menu")[0].style.transform="translateY(0vh)";
            show = false;
        }else{
            $("#menu")[0].style.transform="translateY(-74vh)";
            show = true;
        }
    });
}