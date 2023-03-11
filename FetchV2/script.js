// var textbtn = document.getElementById("text");
// textbtn.addEventListener("click", test);

function test() {
  document.getElementById("data").innerHTML = "</br></br>";

  fetch("file.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("data").innerHTML += data;
    })
    .catch((err) => (document.getElementById("data").innerHTML = err));
}

function json() {
  document.getElementById("data").innerHTML = "</br></br>";

  fetch("file.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        document.getElementById(
          "data"
        ).innerHTML += `${data[i].title}: ${data[i].body} </br></br>`;
      }
    })

    .catch((err) => (document.getElementById("data").innerHTML = err));
}

function api() {
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let x = "";
      data.forEach((user) => {
        x += `<li> ${user.login} </li>`;
      });

      document.getElementById("data").innerHTML = x;
    });
}
