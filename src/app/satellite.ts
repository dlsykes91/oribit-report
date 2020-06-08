import { ThrowStmt } from '@angular/compiler';

export class Satellite {

// Properties
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

// Constructor
constructor (name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name
    this.type = type
    this.launchDate = launchDate
    this.orbitType = orbitType
    this.operational = operational
}
// Methods
shouldShowWarning(){
  let type = this.type;
  type = type.toLowerCase();
  if (type === 'space debris')
  return true;
}

}
