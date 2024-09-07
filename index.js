"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function to handle saving changes
function saveChanges() {
    const personalInfo = {
        name: document.getElementById('name').innerText,
        email: document.getElementById('email').innerText,
        phone: document.getElementById('phone').innerText
    };
    const education = {
        degree: document.getElementById('degree').innerText,
        university: document.getElementById('university').innerText,
        year: document.getElementById('year').innerText
    };
    const skills = Array.from(document.querySelectorAll('#skills-list li')).map(li => li.textContent || '');
    const workExperience = {
        jobTitle: document.getElementById('job-title').innerText,
        employer: document.getElementById('employer').innerText,
        workYear: document.getElementById('work-year').innerText,
        description: document.getElementById('job-description').innerText
    };
    // Save the data as needed (e.g., to local storage or a server)
    console.log('Personal Info:', personalInfo);
    console.log('Education:', education);
    console.log('Skills:', skills);
    console.log('Work Experience:', workExperience);
}
// Attach event listener to the save button
document.getElementById('save-btn')?.addEventListener('click', saveChanges);
