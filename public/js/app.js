import * as Resume from './resume.js';



fetch('./db/CV01.json')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    // You can access the data object properties as follows:
    console.log(data.Value.Data.Name.Raw);
    console.log(data.age);
    console.log(data.city);
    });