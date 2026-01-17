


function side(personalInfo, skills){

    return `
        <div class="side">
            <div class="side-header">
                <span>${personalInfo.name}</span>
                <span>${personalInfo.title}</span>
            </div>
            <div class="side-body">
                <div class="contact">
                    <span>Contact</span>
                    <div class="contact-list">
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
                            <a href="${personalInfo.linkedin}">${personalInfo.linkedin}</a>
                        </div>
                        <div class="contact-item">
                            <span><i class="fa-brands fa-github"></i></span>
                            <a href="${personalInfo.github}">${personalInfo.github}</a>
                        </div>
                        <div class="contact-item">
                            <span><i class="fa-solid fa-briefcase"></i></span>
                            <a href="${personalInfo.portfolio}">${personalInfo.portfolio}</a>
                        </div>
                    </div>
                </div>
                <div class="skills">
                    <span>Skills</span>
                    <div class="skill-list">
                        ${
                            skills.map(skill => `
                                <span>${skill}</span>
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
            <div class="summary">
                <span>Summary</span>
                <p>${summary}</p>
            </div>

            <div class="education">
                <span>Education</span>
                <div class="education-list">
                    ${
                        education.map(educ => `
                            <div class="education-item">
                                <span>${educ.startDate+" - "+educ.endDate}</span>
                                <span>${educ.program}</span>
                                <span>${educ.school}</span>
                                <ul class="education-item-desc">
                                    ${
                                        educ.description.map(item => `
                                            <li>${item}</li>
                                        `).join(" ")
                                    }
                                </ul>
                            </div>    
                        `).join(" ")
                    }
                </div>
            </div>

            <div class="experience">
                <span>Experience</span>
                <div class="experience-list">
                    ${
                        experience.map(exp => `
                            <div class="education-item">
                                <span>${exp.startDate+" - "+exp.endDate}</span>
                                <span>${exp.position}</span>
                                <span>${exp.company}</span>
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

            <div class="project">
                <span>Recent Projects</span>
                <div class="project-list">
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

