import { Component } from '@angular/core';

@Component({
  selector: 'app-nostros',
  standalone: true,
  imports: [],
  template: `
    <h1>{{titulo}}</h1>
    <p>
      nostros works!
    </p>
  `,
  styles: `
  h1{
    color: #00f;
  }
  `
})
export class NostrosComponent {
  public titulo: string = "Acerca de nosotros"
}
