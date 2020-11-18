
const randColorCard = () => {
    const r = Math.floor(Math.random()* 256);
    const g = Math.floor(Math.random()* 256);
    const b = Math.floor(Math.random()* 256);

    return `rgb(${r},${g},${b})`;
}

const button = document.querySelectorAll('button');
for(let btn of button){
    btn.addEventListener('click',colors )

};
function colors(){
    this.style.backgroundColor = randColorCard();
    this.style.color = randColorCard();
}


