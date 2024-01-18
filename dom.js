var form=document.getElementById("addform");
var listItem=document.getElementById("list");

form.addEventListener("submit", (e)=>{
    var itemText = document.getElementById("item").value;
    e.preventDefault();
    console.log(itemText);

    var li = document.createElement('li');
    li.className="list-group-item";
    li.innerHTML=itemText;

    var btn=document.createElement('button');
    btn.className="btn btn-danger float-end";
    btn.innerHTML="X";

    li.appendChild(btn);
    listItem.appendChild(li);
    //clear input field after adding to the list
    document.getElementById("item").value="";

    listItem.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn')){
            var li=e.target.parentElement;
            listItem.removeChild(li);
        }
    })
})

//if(e.target.classList.contains('btn))