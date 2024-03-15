import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  
  
  
  
  items!: MenuItem[];
  
  ngOnInit(): void {
    this.items = [
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home'
        },
        {
            label: 'Acerca de mi',
            icon: 'pi pi-fw pi-user',
        },
        {
            label: 'Habilidades',
            icon: 'pi pi-fw pi-star'
        },
        {
            label: 'Proyectos',
            icon: 'pi pi-fw pi-code'
        }
  ];

  
  }

}
