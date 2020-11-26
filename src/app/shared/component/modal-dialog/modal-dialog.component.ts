import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-dialog, [app-modal-dialog]',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  @Input() showDialog: boolean;

  @Output() closeModal = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.closeModal.emit(false);
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
