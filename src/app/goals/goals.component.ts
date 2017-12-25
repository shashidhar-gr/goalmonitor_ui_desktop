import { Component, OnInit } from '@angular/core';
import { Goal } from './goal';
import { GoalService } from '../goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  selectedGoal: Goal;

  goals: Goal[];

  constructor(private goalService: GoalService) { }

  ngOnInit() {
    this.getGoals()
  }

  onSelect(goal: Goal): void {
    this.selectedGoal = goal;
  }

  getGoals(): void {
    this.goals = this.goalService.getGoals()
  }
}
