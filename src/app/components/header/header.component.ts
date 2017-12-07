import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homeo-header',
  templateUrl: './header.component.html',
  styles: [`.main-header{
              background-color: #1abc9c !important;
            } 
            .header-titles {
              color: whitesmoke !important;
            }
            .header-titles > li > a:hover{
              color: black !important;
            }
            .fa-bars, .fa-search{
              color: whitesmoke !important;
            }
            .fa-bars:hover{
              color: black !important;
            }
            @media (min-width: 966px) {
              .fa-bars {
                 display: none !important;
              }
            }   
            
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
