const ratingEls=document.querySelectorAll('.rating');
const btn=document.getElementById('btn');
let selectedRating=" ";
const containerEl=document.getElementById('container');

ratingEls.forEach((ratingel)=>{
    ratingel.addEventListener("click",(event)=>
    {
        removeActive();
        selectedRating=event.target.innerText||
        event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    });
});

btn.addEventListener("click",()=>{
    if(selectedRating!==" "){
         containerEl.innerHTML=`
         <strong>Thank you!</strong>
         <br/>
         <br/>
         <strong>Feedback:${selectedRating}</strong>
         <br/>
         <br/>
         <p>We'll use your feedback to improve our customer support</p>`;
    }
})
function removeActive(){
    ratingEls.forEach((ratingel)=>{
        ratingel.classList.remove("active");
    });
}