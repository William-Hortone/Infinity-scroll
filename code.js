const container = document.querySelector('.container');


window.addEventListener('scroll', ()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
  
    if (scrollTop + clientHeight === scrollHeight){
        console.log('find');
        addBox(10);

    }
})
const addBox = idx =>{
    for(let i = 0; i < idx; i++){
        const item = document.createElement('div');
        item.setAttribute('class', 'box');
        container.appendChild(item);
    }
}