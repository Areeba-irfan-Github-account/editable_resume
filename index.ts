// Function to handle saving changes
function saveChanges(): void {
    const personalInfo = {
        name: (document.getElementById('name') as HTMLSpanElement).innerText,
        email: (document.getElementById('email') as HTMLSpanElement).innerText,
        phone: (document.getElementById('phone') as HTMLSpanElement).innerText
    };

    const education = {
        degree: (document.getElementById('degree') as HTMLHeadingElement).innerText,
        university: (document.getElementById('university') as HTMLSpanElement).innerText,
        year: (document.getElementById('year') as HTMLSpanElement).innerText
    };

    const skills = Array.from(document.querySelectorAll('#skills-list li')).map(li => li.textContent || '');

    const workExperience = {
        jobTitle: (document.getElementById('job-title') as HTMLHeadingElement).innerText,
        employer: (document.getElementById('employer') as HTMLSpanElement).innerText,
        workYear: (document.getElementById('work-year') as HTMLSpanElement).innerText,
        description: (document.getElementById('job-description') as HTMLParagraphElement).innerText
    };

    // Save the data as needed (e.g., to local storage or a server)
    console.log('Personal Info:', personalInfo);
    console.log('Education:', education);
    console.log('Skills:', skills);
    console.log('Work Experience:', workExperience);
}

// Attach event listener to the save button
document.getElementById('save-btn')?.addEventListener('click', saveChanges);
