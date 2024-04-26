const getcolor = ()=>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomcode = "#" + randomNumber.toString(16);
    console.log(randomNumber,randomcode);
    document.body.style.backgroundColor = randomcode;
     document.getElementById("color-code").innerHTML = randomcode;
     navigator.clipboard.writeText(randomcode);
}
//event call when we click
document.getElementById("btn").addEventListener("click",getcolor);

//initial call
getcolor();
