function openform() {
    document.getElementById("formu").style.display = "block";
}

function closeForm() {
   document.getElementById("formu").style.display =  "none";
}

function openform1() {
    document.getElementById("formu1").style.display = "block";
}

function openform2() {
    document.getElementById("formu2").style.display = "block";
}

function openform3() {
    document.getElementById("formu3").style.display = "block";
}

function closeForm1() {
    document.getElementById("formu1").style.display = "none";
}

function closeForm2() {
    document.getElementById("formu2").style.display = "none";
}

function closeForm3() {
    document.getElementById("formu3").style.display = "none";
}

var form = document.getElementById('myform');
var maindiv = document.getElementById('requirements');
var button = document.getElementById('ckt');
var inputtitle = document.getElementById('title');
var inputdesc = document.getElementById('desc');
var inputprior = document.getElementById('priority');
var inputstatus = document.getElementById('status');
var inputcat = document.getElementById('createdat');
var style=document.createElement('style');

var form1 = document.getElementById('myform1');
var maindiv1 = document.getElementById('design');
var button1 = document.getElementById('ckt1');
var inputtitle1 = document.getElementById('title1');
var inputdesc1 = document.getElementById('desc1');
var inputprior1 = document.getElementById('priority1');
var inputstatus1 = document.getElementById('status1');
var inputcat1 = document.getElementById('createdat1');


var form2 = document.getElementById('myform2');
var maindiv2 = document.getElementById('development');
var button2 = document.getElementById('ckt2');
var inputtitle2 = document.getElementById('title2');
var inputdesc2 = document.getElementById('desc2');
var inputprior2 = document.getElementById('priority2');
var inputstatus2 = document.getElementById('status2');
var inputcat2 = document.getElementById('createdat2');


var form3 = document.getElementById('myform3');
var maindiv3 = document.getElementById('testing');
var button3 = document.getElementById('ckt3');
var inputtitle3 = document.getElementById('title3');
var inputdesc3 = document.getElementById('desc3');
var inputprior3 = document.getElementById('priority3');
var inputstatus3 = document.getElementById('status3');
var inputcat3 = document.getElementById('createdat3');




const divmaker = (text1, text2, text3) => {
    var div = document.createElement('div');
    div.className ="sticky";
    maindiv.append(div);
    var newContent = document.createTextNode("title: " + text1 );
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode ("Description:" + text2);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Status: " + text3);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Created at:" + new Date())
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);  
}
const divmaker1 = (text1, text2, text3) => {
    var div = document.createElement('div');
    div.className ="sticky";
    maindiv1.append(div);
    var newContent = document.createTextNode("title: " + text1 );
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode ("Description:" + text2);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Status: " + text3);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Created at:" + new Date())
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);  
}
const divmaker2 = (text1, text2, text3) => {
    var div = document.createElement('div');
    div.className ="sticky";
    maindiv2.append(div);
    var newContent = document.createTextNode("title: " + text1 );
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode ("Description:" + text2);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Status: " + text3);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Created at:" + new Date())
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);  
}
const divmaker3 = (text1, text2, text3) => {
    var div = document.createElement('div');
    div.className ="sticky";
    maindiv3.append(div);
    var newContent = document.createTextNode("title: " + text1 );
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode ("Description:" + text2);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Status: " + text3);
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);
    newContent = document.createTextNode("Created at:" + new Date())
    div.appendChild(newContent);
    newContent=document.createElement('br');
    div.appendChild(newContent);  
}
form.addEventListener('submit',function (e) {
    e.preventDefault()

    divmaker(inputtitle.value,inputdesc.value,inputstatus.value);
    inputtitle.value = '';
    inputdesc.value = '';
    inputstatus.value = '';
    inputcat.value = '';
    closeForm();

});
form1.addEventListener('submit',function (e) {
    e.preventDefault()

    divmaker1(inputtitle1.value,inputdesc1.value,inputstatus1.value);
    inputtitle.value = '';
    inputdesc.value = '';
    inputstatus.value = '';
    inputcat.value = '';
    closeForm1();

});
form2.addEventListener('submit',function (e) {
    e.preventDefault()

    divmaker2(inputtitle2.value,inputdesc2.value,inputstatus2.value);
    inputtitle.value = '';
    inputdesc.value = '';
    inputstatus.value = '';
    inputcat.value = '';
    closeForm2();

});
form3.addEventListener('submit',function (e) {
    e.preventDefault()

    divmaker3(inputtitle3.value,inputdesc3.value,inputstatus3.value);
    inputtitle.value = '';
    inputdesc.value = '';
    inputstatus.value = '';
    inputcat.value = '';
    closeForm3();

});

