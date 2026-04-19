

//function inc(){
//count++;
//document.gitElementByid("show").inner
//}
//function dec(){
    count --;
  //  decument.gitElementByID("show").inner

//}
//let count = 0;

function inc() {
    count++;
    document.getElementById("show").innerText = count;
}

function dec() {
    count--;
    document.getElementById("show").innerText = count;
}


let changeimg = ()=>{
    let divtag = document.querySelector('#imghere')
    divtag.style.backgroundimage = "url(bordar.jpeg)"
}