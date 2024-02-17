let emailSpan = Array.from(document.querySelectorAll(".emailSpan"))
let passwordSpan = Array.from(document.querySelectorAll(".passwordSpan"))
let loginMail = document.getElementById("loginmail")
let loginPass = document.getElementById("loginpass")
console.log(emailSpan)
console.log(passwordSpan)
console.log(loginMail)
console.log(loginPass)

let addClass = (arrayElement)=>
{
    let i=0;
    arrayElement.forEach(element => {
        i+=0.15;
        element.style.transitionDuration = `${i}s`
        element.classList.add("spanActive")
    });
}

let removeClass = (arrayElement)=>
{
    let i=0;
    arrayElement.forEach(element => {
        i+=0.15;
        element.style.transitionDuration = `${i}s`
        element.classList.remove("spanActive")
    });
}


loginMail.addEventListener("click",()=>
{
    if(passwordSpan[0].classList.contains("spanActive"))
        removeClass(passwordSpan)
    addClass(emailSpan)
})


loginPass.addEventListener("click",()=>
{

    if(emailSpan[0].classList.contains("spanActive"))
        removeClass(emailSpan)
    addClass(passwordSpan)
    
})
