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

const form = document.getElementById("myform");
const maindiv = document.getElementById("pending");
const button = document.getElementById('ckt');
const inputtitle = document.getElementById('title');
const inputdesc = document.getElementById('desc');
const inputprior = document.getElementById('priority');
const inputstatus = document.getElementById('status');
const inputcat = document.getElementById('createdat');

const divmaker = (text1, text2, text3, text4) => {
    var div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = 'auto';
    div.style.display='block';
    div.style.backgroundColor = 'yellowgreen';
    div.style.position = "static";
    div.style.fontSize = "1rem";
    var newContent = document.createTextNode("title: " + text1 + "/n" + "Description:" + text2 + "Status: " + text3 + "Createdat:" + text4 + "TimeCreated:" + new Date());
    div.append(newContent);
    maindiv.appendChild(div);
}
form.addEventListener('submit', function (e) {
    e.preventDefault()

    divmaker(inputtitle.value, inputdesc.value, inputstatus.value, inputcat.value);
    inputtitle.value = '';
    inputdesc.value = '';
    inputstatus.value = '';
    inputcat.value = '';
    id = '';
})
