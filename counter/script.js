function newyear(){
    const current=new Date().getFullYear();
    const current_year=new Date();
    const new_year=new Date(`January 1 ${current+1} 00:00:00`);
    const diff=new_year-current_year;
    const sec=Math.floor(diff/1000%60);
    const mins=Math.floor(diff/1000/60%60);
    const hours=Math.floor(diff/1000/60/60%24);
    const days=Math.floor(diff/1000/60/60/24%365);

    document.querySelector("#days").innerHTML=days<10?"0"+days:days;
    document.querySelector("#hrs").innerHTML=hours<10?"0"+hours:hours;
    document.querySelector("#min").innerHTML=mins<10?"0"+mins:mins;
    document.querySelector("#sec").innerHTML=sec<10?"0"+sec:sec;

}

setInterval(newyear,1000);