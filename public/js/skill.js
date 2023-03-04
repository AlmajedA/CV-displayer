import * as Source from './source.js';
import * as SkillDate from './skillDate.js'

export class Skill{

    // For Constructor:

    #id;
    #emsiId;
    #name;
    
    #type;
    #count;
    #weighting;

    // For Source:
    #sources = [];

    // For Skill Date

    #skillDate;


    constructor(id, emsiId, name, lastUsed, numberOfMonths, type, count, weighting, sourcesInfo){
        this.#id = id;
        this.#emsiId = emsiId;
        this.#name = name;
        this.#type = type;
        this.#count = count;
        this.#weighting = weighting;
    
        sourcesInfo.forEach(source => {
            this.#sources.push(new Source.Source(source.Section, source.Position, source.WorkExperienceId));
        });

        this.#skillDate = new SkillDate.SkillDate(lastUsed, numberOfMonths);
    }

    getHardSkill(){
        if (this.#type == 'hard_skill'){
            return this.#name;
        }
    }
}