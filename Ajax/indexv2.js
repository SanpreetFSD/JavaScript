function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      console.log(typeof this.responseText);
      const data = JSON.parse(this.responseText);
      // [{id: kjk},{id: kjk}]
      console.log(data);
      console.log(typeof data);
      const ulData = document.getElementById("data");
      const newUl = document.createElement("ul");
      ulData.appendChild(newUl);
      for (let i = 0; i < 11; i++) {
        let li = document.createElement("li");
        li.innerHTML = `User Id: ${data[i].login} -------- folowers: ${data[i].followers_url.length}`;
        newUl.appendChild(li);
      }
      console.log(ulData);
    }
  };
  xhttp.open("GET", "https://api.github.com/users/mojombo/followers", true);
  xhttp.send();
}
