import data from "./listMember.json" assert { type: "json" };
import createPoints from './create.js'
import inputName from './findPeople.js'
console.log(data);

const searchMember = document.querySelector('.btn2')
const createPointMember = document.querySelector('.btn1')


createPointMember.addEventListener('click', createPoints)
searchMember.addEventListener('click', inputName)
/*slider`````````````````````````````````````````````````*/ 
const list = document.querySelector('.splide__list')
const listMember = () =>{
    const infor = data.map((e)=>{
        return` <li class="splide__slide" style ="border: 2px solid #ccc;">
                    <div class="infor" >
                        <div>
                            <p style ="color:white;"> STT : ${e.id}</p>
                            <p style ="color:white;"> Name : ${e.name}</p>
                            <p style ="color:white;"> Groupid : ${e.groupid}</p>
                            <p style ="color:white;"> Position : ${e.position}</p>
                        </div>
                    </div>
                </li>`
    }).join('')
    if(infor){
        list.innerHTML = infor
    }
}
listMember();
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide',{
          perPage: 3,
          perMove:1,
      }).mount();
} );

//Fish********************************************************
document.addEventListener("DOMContentLoaded", function () {
  const manyfishs = document.querySelector(".manyfishs");

  let fishs = data
    .map((item) => {
      let name = item.name.split(" ");
      name = name[name.length - 1];
      return ` <div style="color: white" class="draggable">
									<i class="fas fa-fish"></i>${name}
								</div>`;
    })
    .join("");

  if (manyfishs) manyfishs.innerHTML = fishs;
});

const draggable = interact(".draggable");

window.addEventListener("DOMContentLoaded", (event) => {
  draggable.draggable({
    listeners: {
      move(event) {
        let x = (parseFloat(event.target.dataset.x) || 0) + event.dx;
        let y = (parseFloat(event.target.dataset.y) || 0) + event.dy;

        event.target.style.transform = `translate(${x}px, ${y}px)`;
        Object.assign(event.target.dataset, { x, y });
      },
    },
  });
});

//import thư viện
import interact from 
'https://cdn.interactjs.io/v1.10.11/interactjs/index.js'

interact('.item').draggable({
  listeners: {
    move (event) {
      console.log(event.pageX,
                  event.pageY)
    }
  }
})