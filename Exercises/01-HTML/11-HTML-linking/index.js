const btn1 = document.querySelector('button:nth-of-type(1)');
const btn2 = document.querySelector('button:nth-of-type(2)');

btn1.addEventListener('click', ()=> {
    document.querySelector('body').style.backgroundColor = '#ff0000';
})

btn2.addEventListener('click', ()=> {
    document.querySelector('body').style.backgroundColor = '#0000ff';
})