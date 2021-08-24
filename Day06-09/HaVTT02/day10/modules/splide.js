const list = document.querySelector('.splide__list')
const listMember = () =>{
    const infor = listStudent.map((e)=>{
        return` <li class="splide__slide" style ="border: 2px solid #ccc;">
                    <div class="infor" >
                        <ul>
                            <li> STT : ${e.id}</p>
                            <li> Họ và tên : ${e.name}</p>
                            <li> Nhóm : ${e.groupId}</p>
                            <li> Vị trí : ${e.position}</p>
                        </ul>
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

export default {listMember}