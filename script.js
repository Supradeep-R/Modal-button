const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementsByClassName('close-btn')[0];
const modalContainer = document.getElementById('modal-container');

console.log(closeBtn)

openBtn.addEventListener('click',function(){
    modalContainer.style.display='block';
});

closeBtn.addEventListener('click',function(){
    modalContainer.style.display='none';
});

window.addEventListener('click',function(e){
    if(e.target === modalContainer){
        modalContainer.style.display='none';
    }
})