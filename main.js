//Divisions Selection

var reqe = document.querySelector('#Requirements');
var teste = document.querySelector('#testing');
var deve = document.querySelector('#development');
var dese = document.querySelector('#design');
// 


//top Container 
var heading = document.querySelector('h1');
var form = document.querySelector('.profileform');
var x = document.querySelector('.profbtn');
var n;

//Project Name Div Events


x.addEventListener('click', function (E) {
    E.preventDefault();
    var projectname = document.querySelector('input').value;
    localStorage.setItem("ProjectName", projectname);
    forminvisible(localStorage.getItem("ProjectName"));
});

function forminvisible(value) {
    if(value!=null)
    {
    form.classList.add("profileforma");
    heading.innerHTML = "Project :  " + value;
}
}
forminvisible(localStorage.getItem("ProjectName"));
// project nameevents

//EditFormButton & Events


var editform=document.querySelector('#editform');
function editformv(){
    editform.style.display="block";
}



function editfromin()
{
    editform.style.disply="none;"
}







// Create Task Form & Events
var addtsk = document.querySelector('.addtask');
var mainform = document.querySelector('#mainform');

function forminvisiblemain() {
    mainform.style.display = "none";

}


function visibleform() {
    mainform.style.display = "block";
}
addtsk.addEventListener('click', function () {
    visibleform();
});
  




//Create Task Button Functions


var ckt = document.querySelector('#ckt');

var itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
var data = JSON.parse(localStorage.getItem('items'));

var del;
var e;
function creatediv(input, desc, status, type) {
    var div = document.createElement('div');
    div.className = "sticky";
    switch (type) {
        case "requirements":
            reqe.append(div);
            break;
        case "testing":
            teste.append(div);
            break;
        case "development":
            deve.append(div);
            break;
        case "design":
            dese.append(div);
            break;

    }
    div.innerHTML="<p>Title: <strong>"+input+"</strong></p> <p>Description: <strong>"+desc+"</strong></p><p>Status: <strong>"+status+"</strong></p><p>Created At: <strong> "+new Date()+"</strong></p><button class='deletenote'><i class='fas fa-trash'></i><span class='caption'>DeleteNote</span></button><button class='edit'><i class='fas fa-pencil-alt'></i><span class='caption'>Edit</span></button>";
    del=document.querySelectorAll('.deletenote');
    for(var i=0;i<del.length;i++)
        {
            del[i].addEventListener('click', function (e) {
                 this.parentNode.parentNode.removeChild(this.parentNode);
                });
  
        }
    
    
    
    
    e=document.querySelectorAll('.edit');
    for(var i=0;i<e.length;i++)
        {
            e[i].addEventListener('click',function()
                                  {
                editformv();
            });
        }
}





//Create Task ButtonEvent listner
ckt.addEventListener('click', function (e) {
    e.preventDefault();
    var input = document.querySelector('#title').value;
    var desc = document.querySelector('#desc').value;

    if (document.getElementById('s0').checked == true) {
        var status = document.getElementById('s0').value;
    } else if (document.getElementById('s1').checked == true) {
        var status = document.getElementById('s1').value;
    } else {
        var status = document.getElementById('s2').value;
    }
    var priority = document.querySelector('#priority').value;
    var type;
    if (document.getElementById('r1').checked == true) {
        type = document.getElementById('r1').value;
    } else if (document.getElementById('r2').checked == true) {
         type = document.getElementById('r2').value;
    } else if (document.getElementById('r3').checked == true) {
     type = document.getElementById('r3').value;
    } else {
     type = document.getElementById('r4').value;
    }
    var div1 = new Adddiv(input, desc, status,priority, type);
    itemsArray.push(div1);

    localStorage.setItem('items', JSON.stringify(itemsArray));

    creatediv(input, desc, status, type);

   forminvisiblemain();

    input.value = " ";
    desc.value = " ";
    status.value = " ";
    priority.value = " ";
    type.value = " ";
     window.location.reload();
        

});

function Adddiv(input, desc, status,  priority, type) {
    this.title = input;
    this.desc = desc;
    this.status = status;
    this.priority = priority;
    this.type = type;
}

data.forEach(lse);
function lse(item){
     creatediv(item.title, item.desc, item.status,item.type);   
}


var dela=document.querySelector('.delete');
dela.addEventListener('click',function()
                     {
      localStorage.clear();
    window.location.reload();

});
