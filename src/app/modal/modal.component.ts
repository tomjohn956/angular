import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  @Input('displayModal') display:string='';
  @Input('modalTittle') tittle:string='';
  @Input('modalText') text:string='';

  openModal() {
    console.log("openmodal");
      this.display='block';
    }
    onCloseHandled() {
      this.display = 'none';
      //window.location.reload;
      this.route.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.navigate([this.route.url]);
    }
}

