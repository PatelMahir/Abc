import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { Component,inject } from './calculator.service';
@Injectable({
  providedIn:'root'
})
export class CalculatorService
{
  add(x:number,y:number)
  {
    return x+y;
  }
}
@Component({
  selector: 'app-receipt',
  template: `
  /*<h1>Your Receipt {{totalCost}}</h1>*/
  `,
})
export class Receipt
{
  //private cal=inject(CalculatorService);
  //totalCost=this.calculatorService.add(50,25);
}
export interface SignUpForm
{
  title:'Sign Up';
}
@Component({
  selector: 'app-root',
  //selector:'sign-up-form',
  standalone: true,
  imports: [RouterOutlet],
  template:`
  @if(isAdmin)
  {
    <button> Erase Everything</button>
  }
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
export class TextTransformer
{
  announcement='Hello';
  transformText()
  {
    this.announcement=this.announcement.toUpperCase();
  }
}
@Component({
  selector:'profile-photo',
  template: `<img src="profile-photo.jpg" alt="Your profile photo">`,
})
export class ProfilePhoto{}