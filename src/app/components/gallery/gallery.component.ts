import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  photos = [
    {
      index: 0,
      linha: [
        {
          img: "background-image: url(./../../../assets/foto_primeira.jpg);",
          color: "rosa"
        },
        {
          img: "background-image: url(./../../../assets/aniversario15.jpg)",
          color: "rosa"
        },
        {
          img: "background-image: url(./../../../assets/brasil.jpg);",
          color: "rosa"
        }
      ]
    },
    {
      index: 1,
      linha: [
        {
          img: "background-image: url(./../../../assets/carol1.jpg);",
          color: "roxo"
        },
        {
          img: "background-image: url(./../../../assets/carol_blusa.jpg);",
          color: "roxo"
        },
        {
          img: "background-image: url(./../../../assets/carol_praia.jpg);",
          color: "roxo"
        }
      ]
    },
    {
      index: 2,
      linha: [
        {
          img: "background-image: url(./../../../assets/formatura1.JPG);",
          color: "rosa"
        },
        {
          img: "background-image: url(./../../../assets/date.jpg);",
          color: "roxo"
        },
        {
          img: "background-image: url(./../../../assets/foto5.JPEG);",
          color: "rosa"
        }
      ]
    },
    {
      index: 3,
      linha: [
        {
          img: "background-image: url(./../../../assets/zoe.JPG);",
          color: "rosa"
        },
        {
          img: "background-image: url(./../../../assets/foto1.jpg);",
          color: "roxo"
        },
        {
          img: "background-image: url(./../../../assets/foto7.JPEG);",
          color: "roxo"
        }
      ]
    },
    {
      index: 4,
      linha: [
        {
          img: "background-image: url(./../../../assets/parque.jpg);",
          color: "rosa"
        },
        {
          img: "background-image: url(./../../../assets/ze_hamburguer.jpg);",
          color: "rosa"
        },
        {
          img: "background-image: url(./../../../assets/abraco.jpg);",
          color: "rosa"
        }
      ]
    }
  ]
}