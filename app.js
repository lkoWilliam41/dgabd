fetch("./log.txt")
.then(response => response.text())
.then(data =>{
    document.getElementById("display") = console.log(data);
})
