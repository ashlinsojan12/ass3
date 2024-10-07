function change(){
  console.log("btn clicked");
  // step 1
  var xhtt = new XMLHttpRequest();
  //step 2
  xhtt.open("GET", "data.txt", true);
  //step 3
  xhtt.send();
  // step 4
  xhtt.onreadystatechange = function(){
    if (this.readyState == 4 && this.status==200){
      console.log(this.responseText);
      document.getElementById("txt1").innerText = this.responseText;
    }
  };
}
