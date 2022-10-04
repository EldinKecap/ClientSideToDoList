if (localStorage.getItem('list')!=null) {    
    list.innerHTML = localStorage.getItem('list').toString();
}

add.addEventListener('click',()=>{
    let val = document.querySelector(`input[type='text']`).value;
    let liItm = document.createElement('li');
    let list = document.querySelector('#list');
    console.log(liItm);
    liItm.innerText = val + ' ';
    document.querySelector(`input[type='text']`).value = '';
    let btn = document.createElement('button');
    btn.innerText = 'x';
    btn.className = 'rmvBtn';
    btn.addEventListener('click',()=>{
        btn.parentElement.remove();
    })
    liItm.appendChild(btn);
    list.appendChild(liItm);
    localStorage.setItem('list',list.innerHTML);
})

let rmvBtn = document.querySelectorAll('.rmvBtn');
rmvBtn.forEach((itm)=>{
    itm.addEventListener('click',()=>{
        itm.parentElement.remove();
        console.log('yo');
        localStorage.setItem('list',list.innerHTML);
    })})
    
