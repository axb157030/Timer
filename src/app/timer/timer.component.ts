import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  time
  formGroup:FormGroup
  timer
  timeUp:Boolean
  constructor(
    private formBuilder: FormBuilder
  ) { }
  

  ngOnInit(): void {
    this.time = 1
    this.timeUp = false
    this.timer = null

    this.formGroup = this.formBuilder.group({
      theTime: [1, [Validators.required, Validators.min(1)]] 
    });
  }



  setTimer() {
    console.log(this.time)
    //this.time= this.time - 1
    this.clearTimer()
    this.timer = setInterval(() => { 
      if(this.time < 1) {
        this.clearTimer();
        this.timeUp = true
      }
      else {
      this.time= this.time - 1;
      //this.protectTimer(); 
      }
    }, 1000); 
  }
  clearTimer() {
      clearInterval(this.timer);
      this.timeUp = false
    
  }

}
