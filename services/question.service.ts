import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {QuestionModel} from "../models/question-model";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {  private questions: QuestionModel[] =[
  {
    questionId: 1,
    questionText: 'I confirm that I am 18 years or older',
    answer: {
      questionId: 58343,
      options: [
        {optionId: 1, optionText: 'Yes'},
        {optionId: 2, optionText: 'No'},
      ]
    }
  },
  {
    questionId: 2,
    questionText: 'Have you purchased 2 or more Handy Andy products and have kept your till slip for the competition ?',
    answer: {
      questionId: 58344,
      options: [
        {optionId: 1, optionText: 'Yes'},
        {optionId: 2, optionText: 'No'},
      ]
    }
  },
  {
    questionId: 3,
    questionText: 'Yes, I want to receive offers and updates from trusted Unilever brands via SMS, email and online advertising to my interests and preferences',
    answer: {
      questionId: 58345,
      options: [
        {optionId: 1, optionText: 'Yes'},
        {optionId: 2, optionText: 'No'},
      ]
    }
  },
/*  {
    questionId: 4,
    questionText: 'Yes, I want to receive offers and updates from trusted Unilever brands via email and online advertising to my interests and preferences',
    answer: {
      questionId: 58346,
      options: [
        {optionId: 1, optionText: 'Yes'},
        {optionId: 2, optionText: 'No'},
      ]
    }
  },*/
  {
    questionId: 4,
    questionText: 'At which province did you make your purchase and enter the competition?',
    answer: {
      questionId : 58347,
      options: [
        {optionId: 1, optionText: 'Kwa-Zulu Natal'},
        {optionId: 2, optionText: 'Western Cape'},
        {optionId: 3, optionText: 'Northern Cape'},
        {optionId: 4, optionText: 'Eastern Cape'},
        {optionId: 5, optionText: 'Mpumalanga'},
        {optionId: 6, optionText: 'North West'},
        {optionId: 7, optionText: 'Gauteng'},
        {optionId: 8, optionText: 'Limpopo'},
        {optionId: 9, optionText: 'Free State'},
      ]
    }
  },
]
  constructor() { }

  getQuestions() {
    return of(this.questions);
  }

  getFirstQuestion(){
    return this.questions[0];
  }
}
