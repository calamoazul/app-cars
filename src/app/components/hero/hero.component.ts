import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

    @Input()
    public title: string = "Página por defecto"

    @Input()
    public background: string = ''

    @Input()
    public altImage: string = ''
}
