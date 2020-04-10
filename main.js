function openform() {
    document.getElementById("myform").style.display = "block";
}

function closeForm() {
    document.getElementById("myform").style.display = "none";
}

function openform1() {
    document.getElementById("myform1").style.display = "block";
}

function openform2() {
    document.getElementById("myform2").style.display = "block";
}

function openform3() {
    document.getElementById("myform3").style.display = "block";
}

function closeForm1() {
    document.getElementById("myform1").style.display = "none";
}

function closeForm2() {
    document.getElementById("myform2").style.display = "none";
}

function closeForm3() {
    document.getElementById("myform3").style.display = "none";
}

var form = document.getElementById('myform');
var maindiv = document.getElementById('pending');
var button = document.getElementById('ckt');
var inputtitle = document.getElementById('title');
var inputdesc = document.getElementById('desc');
var inputprior = document.getElementById('priority');
var inputstatus = document.getElementById('status');
var inputcat = document.getElementById('createdat');

const divmaker = (text1, text2, text3, text4) => {
    var div = document.createElement('div');
    maindiv.append(div);
    var newContent = document.createTextNode("title: " + text1 + "/n" + "Description:" + text2 + "Status: " + text3 + "Createdat:" + text4 + "TimeCreated:" + new Date());
    div.append(newContent);
    
}
form.addEventListener('submit',function (e) {
    e.preventDefault()

    divmaker(inputtitle.value,inputdesc.value,inputstatus.value,inputcat.value);
    inputtitle.value = '';
    inputdesc.value = '';
    inputstatus.value = '';
    inputcat.value = '';
    closeForm();

});
