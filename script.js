let getdata = document.getElementById("getdata");
console.log(getdata);
//console.log("hello00000000");

getdata.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();
   // console.log("hello1");
    xhr.open('GET', 'https://fakestoreapi.com/products', true);
    
    xhr.onprogress=function(){
        console.log("In progress");
    }
    xhr.onreadystatechange=function(){
        console.log("Ready State change to "+ xhr.readyState);
    }
    xhr.onload = function() {
        if (xhr.status === 200) {
            let object_data=JSON.parse(xhr.responseText);
            console.log(object_data);
            let table_data = document.getElementById("table_data");
            data = ` <thead class="table-dark"> 
            <tr>
            
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
            </tr>
          </thead>`;
          for(value in object_data){
            data += `<tr>
            <td>${object_data[value].title}</td>
            <td>${object_data[value].price}</td>
            <td><img src='${object_data[value].image}'</td>
            </tr>`
          }
          table_data.innerHTML = data;
        } else {
            console.log("Error: " + xhr.status);
        }
    };

    xhr.onerror = function() {
        console.log("Request failed"); 
    };

   // console.log("world");
    xhr.send();
});
