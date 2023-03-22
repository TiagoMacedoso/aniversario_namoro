import { getLocaleDateFormat, getLocaleTimeFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  slides = [
    {
      active: "active",
      counter: false,
      h1: "A sua primeira vez com a minha família.",
      p: "Nunca esqueço este dia, pois foi muito engraçado, porque foi a primeira vez que te vi com vergonha.",
      img: "background-image: url(./../../../assets/foto_primeira.jpg)"
    },
    {
      counter: false,
      h1: "Cecília, nossa princesinha S2.",
      p:      "Eu sei que está difícil, tantas coisas acontecendo, algumas boas e outras nem tanto, mas você sabe que sempre vou estar ao seu lado.",
      img: "background-image: url(./../../../assets/cecilia.jpg)"
    },
    {
      counter: false,
      h1: "Nós!",
      p: "Eu te amo tanto, um amor imensuravél. Agradeço a Deus todos os dias por ter você em minha vida.",
      img: "background-image: url(./../../../assets/casamento_deitada.png)"
    },
    {
      counter: false,
      h1: "Você é incrível!",
      p: "Quero comemorar essa data com você por muitos anos até chegar o dia do nosso casamento. Você é uma namorada incrível! Nunca se esqueça disso. Te amo para sempre S2.",
      img: "background-image: url(./../../../assets/foto_slide.png)"
    },
    {
      counter: true,
      dias: dias(),
      horas: horas(),
      minutos: minutos(),
      segundos: segundos(),
      img: "background-image: url(./../../../assets/counter.png)"
    }
  ]
}

const dateStart = new Date("2019, 03, 22")

function dias(){

  let dataAtual = new Date()
  let dataPassada = new Date(dateStart)
  let dataMilisegundos = Math.abs(dataAtual.getTime() - dataPassada.getTime())
  let diferenca = Math.ceil(dataMilisegundos / (1000*60*60*24))

  return diferenca
}

function horas(){

  let dataAtual = new Date()
  let dataPassada = new Date(dateStart)
  let dataMilisegundos = Math.abs(dataAtual.getTime() - dataPassada.getTime())
  let diferenca = Math.ceil(dataMilisegundos / (1000*60*60))

  return diferenca
}

function minutos(){

  let dataAtual = new Date()
  let dataPassada = new Date(dateStart)
  let dataMilisegundos = Math.abs(dataAtual.getTime() - dataPassada.getTime())
  let diferenca = Math.ceil(dataMilisegundos / (1000*60))

  return diferenca
}

function segundos(){

  let dataAtual = new Date()
  let dataPassada = new Date(dateStart)
  let dataMilisegundos = Math.abs(dataAtual.getTime() - dataPassada.getTime())
  let diferenca = Math.ceil(dataMilisegundos / 1000)

  return diferenca
}
