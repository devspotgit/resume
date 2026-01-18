


function side(personalInfo, skills){

    return `
        <div class="side">
            <div class="side-header">
                <span class="name">${personalInfo.name}</span>
                <span class="title">${personalInfo.title}</span>
            </div>
            <div class="side-body">
                <div class="side-section">
                    <span class="side-section-title">Contact</span>
                    <div class="side-section-content">
                        <div class="contact-item">
                            <span><i class="fa-solid fa-envelope"></i></span>
                            <span>${personalInfo.email}</span>
                        </div>
                        <div class="contact-item">
                            <span><i class="fa-solid fa-phone"></i></span>
                            <span>${personalInfo.phone}</span>
                        </div>
                        <div class="contact-item">
                            <span><i class="fa-brands fa-linkedin-in"></i></span>
                            <span>${personalInfo.linkedin}</span>
                        </div>
                        <div class="contact-item">
                            <span><i class="fa-brands fa-github"></i></span>
                            <span>${personalInfo.github}</span>
                        </div>
                        <div class="contact-item">
                            <span><i class="fa-solid fa-briefcase"></i></span>
                            <span>${personalInfo.portfolio}</span>
                        </div>
                    </div>
                </div>
                <div class="side-section">
                    <span class="side-section-title">Skills</span>
                    <div class="side-section-content">
                        ${
                            skills.map(skill => `
                                <span class="skill-item">${skill}</span>
                            `).join(" ")
                        }
                    </div>
                </div>
            </div>
        </div>
    `
}

function main(summary, education, experience, project){

    return `
        <div class="main">
            <div class="main-section summary">
                <span class="main-section-title">Summary</span>
                <p>${summary}</p>
            </div>

            <div class="main-section">
                <span class="main-section-title">Education</span>
                <div class="main-section-content">
                    ${
                        education.map(educ => `
                            <div class="education-item">
                                <span>${educ.program}</span>
                                <span>${educ.school}</span>
                                <span>${educ.startDate+" - "+educ.endDate}</span>
                                <ul class="education-item-desc">
                                    ${
                                        educ.description.slice(0, 4).map(item => `
                                            <li>${item}</li>
                                        `).join(" ")
                                    }
                                </ul>
                            </div>    
                        `).join(" ")
                    }
                </div>
            </div>

            <div class="main-section">
                <span class="main-section-title">Experience</span>
                <div class="main-section-content">
                    ${
                        experience.map(exp => `
                            <div class="experience-item">
                                <span>${exp.position}</span>
                                <span>${exp.company}</span>
                                <span>${exp.startDate+" - "+exp.endDate}</span>
                                <ul class="experience-item-desc">
                                    ${
                                        exp.description.map(item => `
                                            <li>${item}</li>
                                        `).join(" ")
                                    }
                                </ul>
                            </div>    
                        `).join(" ")
                    }
                </div>
            </div>

            <div class="main-section">
                <span class="main-section-title">Recent Project</span>
                <div class="main-section-content">
                    ${
                        project.map(item => `
                            <div class="project-item">
                                <span>
                                    ${item.id.split("").map((letter, index) => index == 0 ? letter.toUpperCase() : letter).join("")}
                                </span>
                                <a href="${item.url}">${item.url}</a>
                                <p>${item.description}</p>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function home(data){

    return `
        ${side(data.personalInfo, data.skills)}
        ${main(data.summary, data.education, data.experience, data.project)}       
    `
}

export { home }

