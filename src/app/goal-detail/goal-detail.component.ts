import { Component, OnInit, Input } from '@angular/core';
import { Goal } from '../goals/goal'

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() goal: Goal;
}
