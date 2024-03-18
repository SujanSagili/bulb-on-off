let off = document.querySelector('.off').addEventListener('click',()=>{
    let image_off = document.querySelector('.off_img').style.display = 'block';
    let image_on = document.querySelector('.on_img').style.display = 'none';
})
let on = document.querySelector('.on').addEventListener('click',()=>{
    let image_on = document.querySelector('.on_img').style.display = 'block';
    let image_off = document.querySelector('.off_img').style.display = 'none';
})
