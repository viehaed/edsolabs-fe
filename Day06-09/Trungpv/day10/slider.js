import data from "./data.json" assert { type: "json" };
console.log(data)
const list = document.querySelector('.splide__list')
console.log(list)
const listmember = () => {
    const infor = data.map((e) =>{
        return `  <div class="splide__slide">
                <div class="info"> 
                    <ul class="splide__slide">
                    <li class="text">STT :${e.id}  </li>
                    <li class="text">Ten: ${e.name}</li>
                    <li class="text">Nhóm :${e.group.groupid}</li>
                    <li class="text">Vị trí :${e.group.position}</li>
                    </ul>
                </div>
         </div>   `
    }).join('')
    if(infor){
        list.innerHTML = infor;
    }
}
listmember();
document.addEventListener('DomcontentLoaded',function(){
    new splide('.splide', {
        perpage: 3,
        permove:1,
    }).mount();
});