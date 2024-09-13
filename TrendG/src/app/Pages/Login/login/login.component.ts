import { Component, OnDestroy, OnInit, Renderer2, signal } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl, FormsModule, EmailValidator, Validators} from '@angular/forms';
import { MyErrorStateMatcher } from '../../../Core/Helpers/MyErrorStateMatcher/my-error-state-matcher';
import {MatInputModule} from '@angular/material/input';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,MatFormField,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new  FormGroup({
      email :  new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.pattern("(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[#$&!=°|]).{8,}$")])
  }); 
  matcher = new MyErrorStateMatcher();
  hide = signal(true);

  constructor(public render: Renderer2) {
   
  }
  
  hidePassword(event: MouseEvent){
    this.hide.set(!this.hide());
    event.preventDefault();
    event.stopPropagation();
  }
  
  
  
  ngOnInit(): void {
    this.render.addClass(document.body,'custom-body-style');
  }



  handleSubmit()
  {
    alert(this.loginForm.value.email + "|" + this.loginForm.value.password);
  }

  ngOnDestroy(): void {
    this.render.removeClass(document.body,'custom-body-style');
  }


}
