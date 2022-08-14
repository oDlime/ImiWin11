$(function(){
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