import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { Table } from '../../model/table';
import { TableService } from '../../service/table.service';
import { OrderFoodFormService } from './service/order-food-form.service';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Field } from '@prajna10/sd_design';
import { SubSink } from 'subsink';
import { OrderForm } from './enum/order-form-keys';
import { Order } from '../../model/order';

@Component({
  selector: 'app-order-food-form',
  templateUrl: './order-food-form.component.html',
  styleUrls: ['./order-food-form.component.scss']
})
export class OrderFoodFormComponent implements OnInit, OnChanges, OnDestroy {
  tables: Table[];
  tableNos: string[];
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  formGroup: FormGroup;
  tableNo: Field;
  quantity: Field;
  subsink = new SubSink();

  @Output() orderSubmit = new EventEmitter<Order>();
  @Input() showModal: boolean;

  constructor(private tableService: TableService, private orderFormService: OrderFoodFormService) { }

  ngOnInit(): void {
    this.initTables();
    this.buildForm();
  }

  ngOnChanges(): void {
    this.onModalToggle(this.showModal);
  }

  onModalToggle(showModal: boolean): void {
    if (!showModal && this.formGroup) {
      this.formGroup.reset();
      this.subsink.unsubscribe();
    }
  }

  buildForm(): void {
    this.subsink.sink = this.orderFormService.buildForm()
      .subscribe(({ fields, formGroup }) => {
        this.formGroup = formGroup;
        [this.tableNo, this.quantity] = fields;
      });
  }

  onTableNoBlur(value: string): void {
    const isInvalidTableNo = !this.tableNos.find(tableNo => tableNo === value);
    if (isInvalidTableNo) {
      this.formGroup.controls[OrderForm.tableNo].setValue(null);
    }
  }

  initTables(): void {
    this.tableService.getAll()
      .subscribe((tables: Table[]) => {
        this.tables = tables;
        this.tableNos = this.tables.map(table => table.tableNo);
      });
  }

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(distinctUntilChanged());
    const inputFocus$ = this.focus$;
    return merge(debouncedText$, inputFocus$)
      .pipe(this.mapToTableNo());
  }

  mapToTableNo = () => {
    return map((text: string) => {
      return !text ? this.tableNos : this.tableNos
        .filter(tableNo => tableNo.toLowerCase().includes(text.toLowerCase()))
    });
  }

  controls(key: OrderForm): AbstractControl {
    return this.formGroup.controls[key];
  }

  onSubmit(): void {
    const tableNo = this.controls(OrderForm.tableNo).value;
    const total = this.controls(OrderForm.quantity).value;
    const table: Table = this.tables.find(value => value.tableNo === tableNo);
    this.onModalToggle(false);
    this.orderSubmit.emit({ table, quantity: total });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
