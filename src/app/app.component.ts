import { Component } from '@angular/core';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { 
	ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'angular7-reactive-postMethod';
  myform: FormGroup;	  
    constructor( private http: HttpClient) {
    	this.myform = new FormGroup({
         uName: new FormControl(	'',	[Validators.required]),
         password: new FormControl(  '',  [Validators.required]),
         eMail: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
         cOption: new FormControl('',   [Validators.required]),
         optionsRadios : new FormControl('',   [Validators.required]),
         optionChecked : new FormControl('',   [Validators.required]),
         address: new FormControl('', 	[Validators.required]),
         dBirth : new FormControl('',   [Validators.required])
      });  
  	}

  	 get formData() { return this.myform.controls; };
  
 validateForm() { 

for(let i in this.myform.controls)
    this.myform.controls[i].markAsTouched();

}

onSubmit (user: any): void  {
	console.log(user);    
    if (this.myform.valid) {
    let url = "https://reqres.in/api/users";     
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
      this.http.post(url, user).subscribe(res => console.log("Data Post Done"));
    
	}
	else{this.validateForm()}
  }
}
