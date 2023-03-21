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
      h1: "A sua primeira fez com a minha família.",
      p: "Eu nunca esqueço esse dia, e foi muito engraçado por ser a primeira vez que te vi com vergonha.",
      img: "background-image: url(./../../../assets/foto_primeira.jpg)"
    },
    {
      counter: false,
      h1: "A nossa princesinha S2.",
      p: "Eu sei que está difícil o que está acontecendo, tantas e tantas coisas mudaram, umas para melhor e outras para pior. Mas eu quero que você saiba que eu sempre vou estar aqui para tudo.",
      img: "background-image: url(./../../../assets/cecilia.JPEG)"
    },
    {
      counter: false,
      h1: "Nós!",
      p: "Eu te amo tanto, que eu nem sei como te explicar. Eu sou grato a Deus por ter te colocado em minha vida.",
      img: "background-image: url(./../../../assets/casamento_deitada.png)"
    },
    {
      counter: false,
      h1: "Você é incrível!",
      p: "Quero que essa data se repita por muitos e muito logos anos. Você é muito incrível, nunca se esqueça disso e eu estou aqui para sempre S2.",
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
