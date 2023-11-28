import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {
  required: "Should not be empty",
  email: "Email is not valid",
  minlength: "Field is too short",
  notMatch: " Password and Confirm does not match"
}

@Component({
  selector: 'app-input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.scss']
})
export class InputValidationComponent implements OnInit, OnChanges {

  @Input() control!: AbstractControl;
  @Input() showErrors: boolean = true;
  errorMessages: string[] = [];

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidation();
    })

    this.control.valueChanges.subscribe(() => {
      this.checkValidation();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }

  checkValidation() {
    const errors = this.control.errors;
    if (!errors) {
      this.errorMessages = [];
      return;
    }

    const erroKeys = Object.keys(errors);
    this.errorMessages = erroKeys.map(key => VALIDATORS_MESSAGES[key]);
  }
}
