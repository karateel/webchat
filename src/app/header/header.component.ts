import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
