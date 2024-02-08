import { Component } from '@angular/core';

@Component({
  selector: 'app-learning-pipe',
  templateUrl: './learning-pipe.component.html',
  styleUrls: ['./learning-pipe.component.scss']
})
export class LearningPipeComponent {


  name: string = "SIMRAN"

  date: Date = new Date()


  users: string[] = ["abc", "def"]

}
