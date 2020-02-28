import { Component } from '@angular/core';
import {MaterialCssVarsService} from 'angular-material-css-vars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public materialCssVarsService: MaterialCssVarsService) {
    const hex = '#3f51b5';
    this.materialCssVarsService.setDarkTheme(true);
    this.materialCssVarsService.setPrimaryColor(hex);
    this.materialCssVarsService.setAccentColor('#333');
  }
  title = 'test-app';
}
