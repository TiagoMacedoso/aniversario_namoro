import { Component } from '@angular/core';

@Component({
  selector: 'app-gift2',
  templateUrl: './gift2.component.html',
  styleUrls: ['./gift2.component.css']
})
export class Gift2Component {
  correct = dias() + "?"

  a1_click(){
    const a1 = document.getElementById("alternative1")

    a1?.classList.add("error")
    setTimeout(function(){
      a1?.classList.remove("error")
    }, 900)
  }

  a2_click(){
    const a2 = document.getElementById("alternative2")

    a2?.classList.add("error")
    setTimeout(function(){
      a2?.classList.remove("error")
    }, 900)
  }

  a3_click(){
    const a3 = document.getElementById("alternative3")

    a3?.classList.add("error")
    setTimeout(function(){
      a3?.classList.remove("error")
    }, 900)
  }

  a4_click(){
    const a4 = document.getElementById("alternative4")
    const ans = document.getElementById("ans")

    a4?.classList.add("text-success")
    this.correct = "ACERTOU"
    ans?.classList.add("hit")
  }
}

const dateStart = new Date("2019, 03, 22")

function dias(){

  let dataAtual = new Date()
  let dataPassada = new Date(dateStart)
  let dataMilisegundos = Math.abs(dataAtual.getTime() - dataPassada.getTime())
  let diferenca = Math.ceil(dataMilisegundos / (1000*60*60*24))

  return diferenca
}
