import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appclase01';

  // Interpolacion
  username: string = 'Ramiro'

  languageList: string[] = [
    'Javascript', 
    'C#',
    'Python'
  ]

  addLanguage(language: string): void {
    if (!this.languageList.includes(language)){
      this.languageList.push(language)
    }
  }
  
  removeLanguage(): void {
    this.languageList.pop()
  }
}
