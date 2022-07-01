'use strict';
var selected = [false, false, false, false, false, false, false, false, false];
const ANSWER = [true, false, true, false, true, true, false, false, true];

window.onload = function setup(){

}

function select(num){
    document.getElementById("result").innerText = "";
    selected[num] = !selected[num];
    var img_element = document.getElementById(num.toString());
    var check_element = document.getElementById("c"+num.toString());
    if(selected[num]){
        img_element.style.width = "80px";
        img_element.style.height = "80px";
        img_element.style.margin = "10px";
        check_element.style.visibility = "visible";
    }
    else{
        img_element.style.width = "100px";
        img_element.style.height = "100px";
        img_element.style.margin = "0px";
        check_element.style.visibility = "hidden";
    }
}

function judge(){
    console.log(selected);
    console.log(ANSWER);
    if(selected.toString() == ANSWER){
        console.log("Correct!");
        document.getElementById("result").innerText = "正解!";
    }
    else{
        console.log("Incorrect...");
        document.getElementById("result").innerText = "不正解 もう一度やり直してください";
    }
}