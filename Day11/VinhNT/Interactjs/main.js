
const getRandomNumber =(min,max)=>{
    return Math.random() * (max - min) + min;
}
const fishTank = document.querySelector('.fish_tank')
const dropFish = document.querySelector('.drop_fish')
const fishes = document.querySelectorAll('.fish')
const makeFish = () => {
    const fishes = document.querySelectorAll('.fish')
    const fishTank = document.querySelector('.fish_tank')
    let tankWidth = fishTank.clientWidth
    
    let tankHeight = fishTank.clientHeight
    for(let i =0; i<fishes.length;i++){
        let thisFish = fishes[i]
        let randomTop = getRandomNumber(0, tankHeight);
        let randomLeft = getRandomNumber(0, tankWidth);
        thisFish.style.top=randomTop+"px";
        thisFish.style.left=randomLeft+"px"
    }
    
    
}
makeFish()

interact('.draggable')
  .draggable({
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'fish_tank',
        endOnly: true
      })
    ],
    autoScroll: true,

    listeners: {
      move: dragMoveListener,
      end (event) {
        var textEl = event.target.querySelector('div')

        textEl && (textEl.textContent =
          'moved a distance of ' +
          (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px')
      }
    }
  })

function dragMoveListener (event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}



