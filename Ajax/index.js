function load(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            document.getElementById("data").innerHTML=this.responseText;
        }
    } 
    xhttp.open("GET","https://api.github.com/users",true);
    xhttp.send();
}