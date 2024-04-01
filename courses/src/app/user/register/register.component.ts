import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {


  public registerForm : FormGroup | any;
  constructor(private formBuilder: FormBuilder,
    public userService : UserService,
    private router: Router
  ){
 
}

ngOnInit(): void {

  this.registerForm = this.formBuilder.group({
    id: [,[ Validators.required ,  this.isValidIdNumber]],
    name: [this.userService.name$.value, [Validators.required]], 
    address: [''],
    mail: [''],
    password: ['', Validators.required],
  })
}

onSubmit(){
this.checkUserExsist(); 
  this.userService.save(this.registerForm.value).subscribe(data=> {
      if(data == true){
         this.router.navigate(['/course/All-Course'])
      }
      else{
      }
    })
}

checkUserExsist(){this.userService.login(this.registerForm.value.name,
  this.registerForm.value.password).subscribe(data => {
   if(data){
    Swal.fire('המשתמש כבר קיים במערכת')
    this.registerForm.reset();
   }
  })
    }

    isValidIdNumber(control: FormControl): { [key: string]: any } | null {
      const idNumber = control.value;
  
      if (!idNumber || isNaN(Number(idNumber))) {
        return { 'invalidIdNumber': true };
      }
  
  
       const checkDigit = Number(idNumber.toString().charAt(8));
      let sum = 0;
  
      for (let i = 0; i < 8; i++) {
        let digit = Number(idNumber.toString().charAt(i));
        if (i % 2 === 0) {
          digit *= 1; // Multiply even digits by 1
        } else {
          digit *= 2; // Multiply odd digits by 2
          if (digit > 9) {
            digit -= 9; // Subtract 9 from digits greater than 9
          }
        }
        sum += digit;
      }
     if((sum + checkDigit) % 10 === 0)
      return null;
      else
      return { 'invalidIdNumber': true };

    }
  
}
