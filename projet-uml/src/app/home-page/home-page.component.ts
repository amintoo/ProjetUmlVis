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

    let self = this;
    fileReader.onloadend = function(x) {
      self.fileContent = fileReader.result;
    }

    fileReader.readAsText(file);
  }

}
