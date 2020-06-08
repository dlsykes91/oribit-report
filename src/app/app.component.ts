import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'orbit-report';
  sourceList;
  displayList: Satellite[];
  // displayList: Satellite[];

  constructor() {
  // Declare source list array
   let sourceList:Array<object>;
   let displayList:Array<object>;

    this.sourceList = [];
    this.displayList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
         let fetchedSatellites: Satellite[] = data.satellites;
          let satellite:object;
          // TODO: loop over satellites
          for (let i: number = 0; i < fetchedSatellites.length; i++){
           // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
              satellite = new Satellite(
               fetchedSatellites[i]["name"],
               fetchedSatellites[i]["type"],
               fetchedSatellites[i]["launchDate"],
               fetchedSatellites[i]["orbitType"],
               fetchedSatellites[i]["operational"]
             );
              // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
             this.sourceList.push(satellite); 
          }      
          
// make a copy of the sourceList to be shown to the user
this.displayList = this.sourceList.slice();
}.bind(this));
}.bind(this));
 
 }
// Search Method
 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  
  this.displayList = matchingSatellites;
}
  
};


