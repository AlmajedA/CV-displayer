import * as Education from './education.js';
import * as Experance from './experance.js';
import * as Skill from './skill.js';
import * as PersonalData from './PersonalData.js'

export class Resume {


    // For Constructor:
    #name;
    #phoneNumbers;
    #websites;
    #emails;
    #dateOfBirth;
    #objective;
    #languages;
    #totalYearsOfExp;
    #profession;
    #linkedin;
    #publications;
    #referees;
    #certifications;
    #resume;

    // For PersonalData

    #personalData;

    // For Educations:

    #educations;

    // For Experances:

    #experances;

    // For Skills

    #skills;






    constructor(objective, languages, totalYearsOfExp, profession, linkedin,
          publications, referees, certifications, resume){

        
        this.#objective = objective;
        this.#languages = languages;
        this.#totalYearsOfExp = totalYearsOfExp;
        this.#profession = profession;
        this.#linkedin = linkedin;
        this.#publications = publications;
        this.#referees = referees;
        this.#certifications = certifications;
        this.#resume = resume;

        this.#personalData = this.#personalDataSection();
        this.#educations = this.#educationSection();
        this.#experances = this.#experienceSection();
        this.#skills = this.#skillSection();


    }

  

    
    
    
    // #education = new Education.Education(this.#resume.Education.Id, this.#resume.Education.Organization, 
    //     this.#resume.Education.Education, this.#resume.Education.EducationLevel, this.#resume.Education.Grade.Raw);


    #personalDataSection(){
        console.log(this.#resume)
        let personName = this.#resume.Name.First + ' ' + this.#resume.Name.Last;
        let personPhoneNums = this.#resume.PhoneNumbers;
        let personWebsites = this.#resume.Websites;
        let personEmails = this.#resume.Emails;
        let dateOfBirth = this.#resume.DateOfBirth;
        let personLinkedin = this.#resume.Linkedin
        
        let personalData = new PersonalData.PersonalData(personName, personPhoneNums, personWebsites, personEmails, dateOfBirth, personLinkedin, this.#resume.Location)

        return personalData;


    }
    #educationSection(){
        let educations = [];
        this.#resume.Education.forEach(education => {
            educations.push(new Education.Education(education.Id, education.Organization, education.Accreditation.Education, 
                education.Accreditation.EducationLevel, education.Grade, education.Location))
        });
        return educations;
    }

    #experienceSection(){
        let experances = [];
        let title;
        let minorGroup;
        let subMajorGroup;
        let majorGroup;
        let socCode;
        if (this.#resume.WorkExperience.Occupation != null){
            title = this.#resume.WorkExperience.Occupation.Classification.Title;
            minorGroup = this.#resume.WorkExperience.Occupation.Classification.MinorGroup;
            subMajorGroup = this.#resume.WorkExperience.Occupation.Classification.SubMajorGroup;
            majorGroup = this.#resume.WorkExperience.Occupation.Classification.MajorGroup;
            socCode =  this.#resume.WorkExperience.Occupation.Classification.SocCode;


            
        }
        this.#resume.WorkExperience.forEach(experance => {
            experances.push(new Experance.Experance(experance.Id, experance.JobTitle, experance.SocCode, experance.SocName, experance.Organization,
                experance.Industry, experance.JobDescription, experance.Dates.StartDate, experance.Dates.EndDate, 
                experance.Dates.MonthsInPosition, experance.Dates.IsCurrent, experance.Occupation.ManagementLevel, 
                title, minorGroup,
                subMajorGroup, majorGroup,
                socCode, experance.Location));
        });
        return experances;

    }

    #skillSection(){
        let skills = [];
        this.#resume.Skills.forEach(skill => {
            skills.push(new Skill.Skill(skill.Id, skill.EmsiId, skill.Name, skill.LastUsed, 
                skill.NumberOfMonths, skill.Type, Skill.Count, Skill.Weighting, skill.Sources));
        });
        return skills;
    }


    

    

    getFirstEducation(){

        return this.#educations[0].getEducation();
    }

    getPersonalData(){
        return this.#personalData;
    }

    getExperances(){
        return this.#experances;
    }

    getCertifications(){
        return this.#certifications;
    }

    getSkills(){
        return this.#skills;
    }

    
}

