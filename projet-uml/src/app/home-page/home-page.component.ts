import {Component, ContentChild, OnInit} from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {parser } from 'src/app/parser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor() { }

  public onChange(fileList: FileList) {
    if (fileList.length !==1) { throw new Error('can not use multiple files'); }

    let file = fileList[0];
    let fileReader: FileReader = new FileReader();

        fileReader.onloadend = (result) => {
        //subscrire les données
        let fileContent = result.target;
        console.log(fileContent);

        let parse = new parser();
        //parse.analyze(fileContent);

        }
        fileReader.readAsText(file);
  }

}
