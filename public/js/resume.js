import * as Education from './education.js';
import * as Experance from './experance.js';
import * as Skill from './skill.js';

export class Resume {
    constructor(){
        this.education = new Education.Education();
        
    }
    method(){
        this.education.myFunction()
        console.log('hi');
    }
}

