import * as Resume from './resume.js';

let jsonResumes = ['./db/CV01.json', './db/CV02.json', './db/CV03.json'];
let resumesInfo = [];
let resumes = [];

// let x = [];


await Promise.all(
    jsonResumes.map(jsonResumes =>
    fetch(jsonResumes).then(response => {
    if (response.ok) {
        return response.json();
    }
        throw new Error(`Network response was not ok for ${url}`);
    })
)
).then(data => {
// Assign data to resumes variable
    resumesInfo = data;
}).catch(error => {
// Handle errors
    console.error(error);
});

resumesInfo.forEach(resumeInfo => {
    let resumeDV = resumeInfo.Value.Data;
    resumes.push(new Resume.Resume(resumeDV.Objective, resumeDV.Languages,
        resumeDV.TotalYearsExperience, resumeDV.Profession, resumeDV.Linkedin,
        resumeDV.Publications,resumeDV.Referees,resumeDV.Certifications, resumeDV));

})




// // Add resumes to the selector

let resumeSelector = document.querySelector('#resume');
resumes.forEach(resume => {
    const newResume = document.createElement("option");
    newResume.text = resume.getPersonalData().getName();
    newResume.value = resumeSelector.selectedIndex

    
    // Add the new option element to the select element
    resumeSelector.appendChild(newResume);
})

function editCandidateInfo(){
    // removing the previous infomations:
    // Select all elements with the specified class
    const certificationsAndSkills = document.querySelectorAll('.list-item');

    // Loop through each element and remove it
    certificationsAndSkills.forEach(element => {
        element.remove();
    });
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });



    let index = resumeSelector.selectedIndex - 1;
    const nameField = document.querySelector('#name');
    const emailField = document.querySelector('#email'); 
    const educationField = document.querySelector('#education');
    const certificatesField = document.querySelector('#certificates');
    const skillsField = document.querySelector('#skills');
    nameField.value = resumes[index].getPersonalData().getName();
    emailField.value = resumes[index].getPersonalData().getFirstEmail();
    educationField.value = resumes[index].getFirstEducation();
    resumes[index].getCertifications().forEach(certification =>{
        const newCertification = document.createElement("div");
        newCertification.innerHTML = certification
        newCertification.classList.add('list-item');
        certificatesField.appendChild(newCertification);
        
        
    })
    resumes[index].getSkills().forEach(skill =>{
        if (skill.getHardSkill() != null){
            const newSkill = document.createElement("div");
            newSkill.innerHTML = skill.getHardSkill();
            newSkill.classList.add('list-item');
            skillsField.appendChild(newSkill);
        }
    })
    
}

resumeSelector.addEventListener("change", editCandidateInfo);






// await fetch(resumes[0])
//     .then(response => response.json())
//     .then(data => {
//         
        
//     });

// console.log(x)