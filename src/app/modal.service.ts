import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  display: string= "none";
  modalTitle:string='';
  modalText:string='';
}
