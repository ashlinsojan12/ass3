function getData(){
    console.log("btn clicked");
    // step 1
    var xhtt = new XMLHttpRequest();
    //step 2
    xhtt.open("GET","https://jsonplaceholder.typicode.com/users",true);
    //step 3
    xhtt.send();
    // step 4
    xhtt.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        var data=JSON.parse(this.responseText)
        let val="";
        for(let i=0;i<data.length;i++){

           val+=`<table>
           <tr>
           <td>${data[i].name}</td>
           <td>${data[i].username}</td>
           <td>${data[i].address.city}</td>
           <td>${data[i].phone}</td>
           </tr>
           </table>`
        document.getElementById("table").innerHTML=val

      }
    }
  }
}

    

