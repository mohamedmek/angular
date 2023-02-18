import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  age = 0;

  @Output() onRegister = new EventEmitter<{ name: string; age: number }>();

  submit() {
    this.onRegister.emit({ name: this.name, age: this.age });
    this.name = '';
    this.age = 0;
  }
}