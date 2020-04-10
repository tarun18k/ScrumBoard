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
var maindiv = document.getElementById('pending');
var button = document.getElementById('ckt');
var inputtitle = document.getElementById('title');
var inputdesc = document.getElementById('desc');
var inputprior = document.getElementById('priority');
var inputstatus = document.getElementById('status');
var inputcat = document.getElementById('createdat');
var style=document.createElement('style');



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
    newContent = document.createTextNode("Createdat:" + new Date())
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

