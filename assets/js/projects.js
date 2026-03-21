const projects = [
    {
        title: "pessoa-ms",
        url: "https://github.com/rookie-leo/pessoa-ms",
        description: "Micro serviço responsavel por gerenciar usuarios de um sistema - construção em andamento."
    },
    {
        title: "ImageRepo API - Backend",
        url: "https://github.com/rookie-leo/imagerepoapi",
        description: "O ImageRepo API é um microserviço backend responsável pelo gerenciamento e armazenamento de imagens."
    },
    {
        title: "ImageRepo - Frontend",
        url: "https://github.com/rookie-leo/imagerepo",
        description: "Frontend de uma aplicação de galeria e repositório de imagens, desenvolvido com Next.js, TypeScript e Tailwind CSS, consumindo uma API REST dedicada."
    },
    {
        title: "Unit Tests Study",
        url: "https://github.com/rookie-leo/unit-tests-study",
        description: "Repositório de estudos sobre testes unitarios com Kotlin."
    },
]

function loadProjects() {
    const container = document.getElementById("project-list");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "post-card";

        card.innerHTML = `
            <h3><a href="${project.url}" target="_blank">${project.title}</a></h3>
            <p>${project.description}</p></p>
        `;

        container.appendChild(card)
    })
}

document.addEventListener("DOMContentLoaded", loadProjects);
