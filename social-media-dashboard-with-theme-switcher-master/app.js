const toggleSwitch=document.querySelector("#tog");
const value=document.querySelector("body");
const cards=document.querySelectorAll(".card-social");

toggleSwitch.addEventListener("click",(e)=>{
    value.classList.toggle("active");

});
cards.forEach(card=>{
    card.addEventListener('click', activeCard);
});

function activeCard(e){
    console.log(e.target.classList.contains("m"))
    e.target.classList.toggle("push")
}

