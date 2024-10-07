function getData(){
    console.log("btn clicked");
    // step 1
    var xhtt = new XMLHttpRequest();
    //step 2
    xhtt.open("GET","data.json",true);
    //step 3
    xhtt.send();
    // step 4
    xhtt.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
        var data=JSON.parse(this.responseText)
        let val="";
        for(let i=0;i<data.length;i++){
           val+=`<li>${data[i].name}<li>${data[i].age}</li>`
        document.getElementById("txt1").innerHTML=val

      }
    }
  }
}