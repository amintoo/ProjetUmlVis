import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

  constructor() { }
  fileContent: string = '';

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();

      fileReader.onloadend = (result) => {
        //subscrire les données
        this.fileContent = result.target;
        console.log(this.fileContent);
      }
    fileReader.readAsText(file);
  }

  public check() {
    if(this.fileContent.length !==1) {
      throw new Error('File error'); }
  }

}
