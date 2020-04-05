
function check1(){
    if (document.getElementById("swt").checked == true){
        document.getElementById("r_date").disabled=true;
        document.getElementById("rr").className = 'rr';
    }
}
function check2(){
    if (document.getElementById("rwt").checked == true){
        document.getElementById("r_date").disabled=false;
        document.getElementById("rr").className = 'rr12';
      }
}
function chgbk(){
    document.getElementById("ff").className="f1";
}
function chgbk1(){
    document.getElementById("ff").className="f2";
}
function fun1()
{
var f=document.getElementById('from');
var from = f.options[f.selectedIndex].value;
var fromt=f.options[f.selectedIndex].text;
var t=document.getElementById('to');
var to = t.options[t.selectedIndex].value;
var tot = t.options[t.selectedIndex].text;
var price=1000;

if(from=="del" && to=="bom")
{
    price=5000;
}
else if(to=="del" && from=="bom")
{
    price=6000;
}
else{
    alert("Please Enter City");
    return;
}
var num=document.getElementById("nop").value;

var total;
total=num*price;


var jd=document.getElementById("j_date").value;
var rd=document.getElementById("r_date").value;


document.getElementById("tf").innerHTML=fromt;
document.getElementById("tt").innerHTML=tot;
document.getElementById("td").innerHTML=jd;

document.getElementById("fnop").innerHTML=num;
document.getElementById("epp").innerHTML="INR "+price;
document.getElementById("exp").innerHTML="INR "+total;

var tax=total*12/100;
document.getElementById("tax").innerHTML="INR "+tax;

var totalexp=total+tax;
document.getElementById("fa").innerHTML="INR "+totalexp;



document.getElementById("tf1").innerHTML=tot;
document.getElementById("tt1").innerHTML=fromt;
document.getElementById("td1").innerHTML=rd;

document.getElementById("fnop1").innerHTML=num;
document.getElementById("epp1").innerHTML="INR "+price;
document.getElementById("exp1").innerHTML="INR "+total;

var tax=total*12/100;
document.getElementById("tax1").innerHTML="INR "+tax;

var totalexp=total+tax;
document.getElementById("fa1").innerHTML="INR "+totalexp;
}

function store(){
 
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    document.getElementById("log_c").value=email;
    document.getElementById("log_c1").value=pass;
    alert("Thank You For Registration"+fname+" "+lname);

}

function log_chk(){
    var lemail=document.getElementById("lemail").value;
    var lpass=document.getElementById("lpass").value;

    var femail=document.getElementById("log_c").value;
    var fpass=document.getElementById("log_c1").value;

    if(lemail==femail){
        if(lpass==fpass){
            alert("Login Succesfully");
        }
        else{
            alert("Password is Invalid");
        }
    }
    else{
        alert("Username is Invalid");
    }
}