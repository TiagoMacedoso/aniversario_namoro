import { Component } from '@angular/core';

@Component({
  selector: 'app-gift3',
  templateUrl: './gift3.component.html',
  styleUrls: ['./gift3.component.css']
})
export class Gift3Component {
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

    a4?.classList.add("error")
    setTimeout(function(){
      a4?.classList.remove("error")
    }, 900)
  }
}
