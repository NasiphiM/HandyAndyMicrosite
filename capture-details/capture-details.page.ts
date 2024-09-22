import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AlertController, LoadingController} from "@ionic/angular";
import {PersonalInfoModel} from "../models/personall-info-model";
import {Router} from "@angular/router";
import {AnswerService} from "../services/answer.service";
import {Constants} from "../constants";
import {QuestionService} from "../services/question.service";

@Component({
  selector: 'app-capture-details',
  templateUrl: './capture-details.page.html',
  styleUrls: ['./capture-details.page.scss'],
})
export class CaptureDetailsPage implements OnInit {

  userDetails: PersonalInfoModel = {
    fullname: '',
    phoneNumber: '',
    emailAddress: '',
    consent: ''
  }
  hasChecked : boolean = false
  constructor(
    private router: Router,
    private answerService: AnswerService,
    private questionService: QuestionService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.userDetails = {
      fullname: '',
      phoneNumber: '',
      emailAddress: '',
      consent: ''
    };
    this.hasChecked = false;
    // if (localStorage["done"] == "true"){
    //   this.router.navigate(['/thank-you']);
    // }
  }

  ionViewWillEnter(){
    this.userDetails = {
      fullname: '',
      phoneNumber: '',
      emailAddress: '',
      consent: ''
    };
    this.answerService.startNewAnswer();
    this.hasChecked = false;
  }

  async onSubmit(f: NgForm){
    if (!f.valid) {
      Constants.showInvalidControls(f, this.alertCtrl);
      return;
    }
    const loading = await this.loadingCtrl.create({ message: 'Loading ...' });
    await loading.present();
    let consentString: string = this.hasChecked.toString();
    this.userDetails.consent = consentString;
    this.answerService.setUserDetails(this.userDetails);
    await this.router.navigate(['/questions']).then(r => loading.dismiss());
  }
}
