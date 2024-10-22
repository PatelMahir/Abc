import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //selector:'sign-up-form',
  standalone: true,
  imports: [RouterOutlet],
  template:`
  <p>Title:{{taskTitle}}</p>
  <button type="submit" [disabled]="fromIsInvalid">Submit</button>
  `,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class SignUpForm{
  formIsInvalid=true;
}
export class AppBanner{
  testId='main-cta';
}
export class AppComponent {
  title = 'Abc';
  taskTitle='A Cup of Coffee';
  isComplete=false;
  CompleteTask()
  {
    this.isComplete=true;
  }
  UpdateTitle(newTitle:string)
  {
    this.taskTitle=newTitle;
  }
}