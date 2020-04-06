
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
    document.getElementById("ff").reset();
}
function chgbk1(){
    document.getElementById("ff").className="f2";
    document.getElementById("ff").reset();
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

if(from=="del"  ||  from=="bom")
{
    price=9500;
}
else if(from=="bang"  ||  from=="chen")
{
    price=8500;
}
else if(from=="kol"  ||  from=="hyd")
{
    price=7500;
}
else if(from=="ker"  ||  from=="ahm")
{
    price=6500;
}
else if(from=="pun"  ||  from=="goa")
{
    price=5500;
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

if(rd<jd && document.getElementById("rwt").checked == true){
    alert("Return Date must be longer than Journey Date.");
    return 0;
}


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
var final=0;
if( document.getElementById("rwt").checked == true)
{
    document.getElementById("fepp").innerHTML="INR "+(price*2);
    document.getElementById("fexp").innerHTML="INR "+(total*2);
    document.getElementById("ftax").innerHTML="INR "+(tax*2);
    document.getElementById("ffa1").innerHTML="INR "+(totalexp*2);
    final=totalexp*2;
}
else if(document.getElementById("swt").checked == true){
    document.getElementById("fepp").innerHTML="INR "+price;
    document.getElementById("fexp").innerHTML="INR "+total;
    document.getElementById("ftax").innerHTML="INR "+tax;
    document.getElementById("ffa1").innerHTML="INR "+totalexp;
    final=totalexp;
}
alert("Final Amount need to be pay by you : Rs. "+final);


}

function store(){
 
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    document.getElementById("du").innerHTML=email;
    document.getElementById("dp").innerHTML=pass;
    alert("Thank You For Registration "+fname+" "+lname+"Your Login Credentials are updated below. Press OK to continue.");
    alert("Now you will be directed to Log In section of this page.");
    


}

function log_chk(){
    var lemail=document.getElementById("lemail").value;
    var lpass=document.getElementById("lpass").value;

    var femail=document.getElementById("du").innerHTML;
    var fpass=document.getElementById("dp").innerHTML;

    if(lemail==femail){
        if(lpass==fpass){
            alert("Login Succesfully");
            alert('Now as Reward you will be redirected to Most Popular Site');
            window.open('https://www.google.co.in','_blank');
        }
        else{
            alert("Password is Invalid");
        }
    }
    else{
        alert("Username is Invalid");
    }
}

