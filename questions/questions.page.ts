import { Component, OnInit } from '@angular/core';
import {QuestionModel} from "../models/question-model";
import {QuestionService} from "../services/question.service";
import {AnswerService} from "../services/answer.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  questions: QuestionModel[] = [];
  currQuestion: number = 0;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService,
  ) { }

  ngOnInit() {
    this.questionService.getFirstQuestion();
    this.questionService.getQuestions().subscribe(q => {
      this.questions = q;
      this.currQuestion = 1;
    });
  }

  ionViewWillEnter(){
    this.questionService.getQuestions().subscribe(q => {
      this.currQuestion = 1;
      this.questions.forEach(q => {
        q.answer = {
          questionId: q.answer.questionId,
          answerText: '',
          options: q.answer.options
        }
      });
    });
    this.answerService.startNewAnswer();
  }
}
