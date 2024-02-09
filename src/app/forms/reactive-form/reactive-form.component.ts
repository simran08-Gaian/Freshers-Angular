import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  onSubmit() {
    console.log(this.myForm.value);
  }

  username: FormControl<string | null> = new FormControl("hello")

  updateUsername(): void {
    this.username.setValue("sjsl")
  }

  pathMyForm(): void {
    this.myForm.patchValue({
      email: "sjsl",
      address: {
        city: {
          zipcode: 500032
        }
      }
    })
  }

  myForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('', [Validators.maxLength(5)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormGroup({
        cityName: new FormControl('', []),
        zipcode: new FormControl('')
      })
    })
  })



  //fix this
  
  noSpace(control: FormControl<string>): { [key: string]: boolean } | null {
    if (control.value && control.value.includes(" ")) {
      return { 'noSpaceError': true } // validation failed
    }
    else {
      return null // validation passed
    }
  }


  


}
