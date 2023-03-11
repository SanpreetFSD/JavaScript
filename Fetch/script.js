var button1 = document.getElementById("bt1")
button1.addEventListener("click", getText)
function getText(){
    fetch("file.txt")
    .then(res => res.text())
      .then(data => {
        console.log(data);

        document.getElementById("empty").innerHTML=data
      })
      .catch(err=> console.log(err))
}
