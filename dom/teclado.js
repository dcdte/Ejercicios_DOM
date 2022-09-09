const d = document
let x = 0,
  y = 0

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage= $stage.getBoundingClientRect()

    //console.log(limitsBall,limitsStage)

    switch (e.keyCode) {
      //izq
      case 37:
        if(limitsBall.left > limitsStage.left) {
          e.preventDefault()
          x--
        }
      break;
      //up  
      case 38:
        if(limitsBall.top > limitsStage.top) {
          e.preventDefault()
          y--
        }
      break;
      //der  
      case 39:
        if(limitsBall.right < limitsStage.right){
          e.preventDefault()
          x++
        }
      break;
        //down  
      case 40:
        if(limitsBall.bottom < limitsStage.bottom) {
          e.preventDefault()
          y++
        }
      break;
      
      default:
        break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
  }

export function shortcuts (e) {
  /* console.log(e.type)
  console.log(e.key)
  console.log(e.keyCode)
  console.log(e.ctrlKey)
  console.log(e.altKey)
  console.log(e) */

  if(e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el Teclado")
  }

  if(e.key === "c" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el Teclado")
  }

  if(e.key === "p" && e.altKey) {
    prompt("Haz lanzado un aviso con el Teclado")
  }
}