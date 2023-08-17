import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {

ngOnInit():void{

  // versione potenziata della promise, ricevono tanti risultati e non si spengono dopo il primo risultato.
  // Introducono il paradigma reattivo - tramite notifiche
  const intervallo = new Observable(observer => {

    let count = 0

    setInterval(()=>{
      observer.next(count)
      count++
    },1000)


  });

intervallo.subscribe(dato => {
  console.log(dato)
})

}



}
