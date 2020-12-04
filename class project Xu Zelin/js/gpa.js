var scores=[];
var hours=[];
var $ = function (id) { return document.getElementById(id); }

window.onload=function(){
    $("add").onclick=addscore;
    $("display").onclick=display;
    $("calculate").onclick=displayscore;
}

var addscore=function(){
    var score=$("scores").value;
    var hour=$("hours").value;
    
    scores[scores.length]=parseFloat(score);
    hours[hours.length]=parseFloat(hour);
    
}
var display=function(){
    var html = "<h2>Scores</h2><tr><td><b>grade</b></td><td><b>hour</b></td></tr>"
    for(var i=0;i<hours.length;i++){
        html = html + "<tr><td>"+scores[i]+"</td><td>"+hours[i]+"</td></tr>";
        
    }
    $("scores_table").innerHTML = html;
}

var displayscore=function(){
    var sum_grade=0;
    var sum_hour=0;
    var gpa;
    for(var i=0;i<scores.length;i++){
        sum_grade=sum_grade+scores[i];
    }
    gpa=sum_grade/scores.length;
    alert("the GPA is:"+gpa);
}