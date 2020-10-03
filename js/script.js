var checkbox = document.querySelector("#checkbox");
var basic = document.querySelector("#basic");
var professional = document.querySelector("#professional");
var master = document.querySelector("#master")

checkbox.addEventListener( "change" , function(e){
    if(this.checked){
        basic.innerHTML = "&dollar;199.99";
        professional.innerHTML = "&dollar;249.99";
        master.innerHTML = "&dollar;399.99";
    } else {
        basic.innerHTML = "&dollar;19.99";
        professional.innerHTML = "&dollar;24.99";
        master.innerHTML = "&dollar;39.99";
    }
})