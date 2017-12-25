import { Injectable } from '@angular/core';
import { Goal } from './goals/goal'
import { GOALS } from './goals/mock-goals'

@Injectable()
export class GoalService {

  constructor() { }

  getGoals(): Goal[] {
    return GOALS;
  } 
}
