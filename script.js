// Toggle menu responsive
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".navbar ul");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("show");
    });
  }
});

// project

const projects = [
  {
    image: "img/pinjam-ruang.png",
    title: "Sistem Pinjam Ruang Kesbangpol Jateng",
    description:
      "A web-based room reservation system developed for Kesbangpol Central Java.",
    tech: "Laravel, MySQL, Bootstrap, JavaScript",
    year: "2024",
    link: "https://pinjamruang.kesbangpol.jatengprov.go.id/",
  },
  {
    image: "img/disnakkeswan.png",
    title: "Website Disnakkeswan Jateng",
    description:
      "A public-facing website for Disnakkeswan Central Java providing digital services.",
    tech: "Laravel, MySQL, Bootstrap, JavaScript",
    year: "2024",
    link: "https://disnakkeswan.jatengprov.go.id/",
  },
  {
    image: "img/ppid-disnakkeswan.png",
    title: "PPID Disnakkeswan Jateng",
    description:
      "A public information portal to manage official documents and data requests.",
    tech: "Laravel, MySQL, Bootstrap, JavaScript",
    year: "2024",
    link: "https://ppid.disnakkeswan.jatengprov.go.id/",
  },
  {
    image: "img/distanbun.png",
    title: "Website Distanbun Jateng",
    description:
      "A government website built for Distanbun Central Java to deliver agricultural information, plantation statistics, and online services for farmers and the public.",
    tech: "Laravel, MySQL, Bootstrap, JavaScript",
    year: "2024",
    link: "https://distanbun.jatengprov.go.id/",
  },
  {
    image: "img/ehibah.png",
    title: "Ehibah Distanbun Jateng",
    description:
      "An online grant submission platform for the Central Java Agricultural Department, supporting efficient and transparent management of agricultural funding proposals.",
    tech: "Laravel, MySQL, Bootstrap, JavaScript",
    year: "2024",
    link: "https://ehibah.distanbun.jatengprov.go.id/",
  },
  {
    image: "img/ezra.png",
    title: "Company Profile PT. Ezra Pratama",
    description:
      "A company profile website for PT. Ezra Pratama, showcasing their services, portfolio, and contact information. Built to enhance their online presence and support client outreach.",
    tech: "Laravel, MySQL, Bootstrap, JavaScript",
    year: "2024",
    link: "https://ezrapratama.co.id/",
  },
  {
    image: "img/indograph.png",
    title: "Aplikasi Penjualan CV.Indograph",
    description:
      "A basic web app for managing transactions of stationery and printing supplies.",
    tech: "CodeIgniter 3, Bootstrap 5, MySQL",
    year: "2023",
    link: "#",
  },
  {
    image: "img/perpus.png",
    title: "Aplikasi Perpustakaan",
    description:
      "A library app for managing book lending and borrowing transactions.",
    tech: "CodeIgniter 3, Bootstrap 5, MySQL",
    year: "2023",
    link: "#",
  },
  {
    image: "img/sandi-group.png",
    title: "Company Profile Sandi Group",
    description:
      "A company profile website for Sandi Group, highlighting their 8 business pillars, corporate values, and commitment to sustainable growth.",
    tech: "WordPress",
    year: "2023",
    link: "#",
  },
  {
    image: "img/lima-warna.png",
    title: "Lima Warna Official Website",
    description:
      "A modern franchise website for Lima Warna, a trendy beverage brand serving flavored iced tea and dalgona drinks. The site showcases promotions, partner locations, and contact info to support franchise growth.",
    tech: "WordPress",
    year: "2023",
    link: "#",
  },
  {
    image: "img/landingpage1.png",
    title: "Landing Page 1",
    description:
      "A promotional landing page designed for the Global Impact event, created as part of a university project. It highlights event details, schedules, and registration to engage attendees and boost participation.",
    tech: "WordPress",
    year: "2024",
    link: "https://pka-conference.xyz/",
  },
  {
    image: "img/landingpage2.png",
    title: "Landing Page 2",
    description:
      "A clean and modern landing page created to promote personal services, showcasing key offerings, expertise, and a call-to-action to attract potential clients effectively.",
    tech: "HTML5, CSS, Javascript",
    year: "2024",
    link: "https://itsnurulpru.tiiny.site/",
  },
  {
    image: "img/landing-page.png",
    title: "Landing Page 3",
    description:
      "A simple promotional page for a cake shop. Made for a college project.",
    tech: "HTML5, CSS, Javascript",
    year: "2024",
    link: "https://itsnurulpru.tiiny.site/",
  },
];

const perPage = 5;
let currentPage = 1;

function displayProjects(page) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginated = projects.slice(start, end);

  const container = document.getElementById("project-list");
  container.innerHTML = "";

  paginated.forEach((p) => {
    container.innerHTML += `
          <div class="project-container">
            <div class="project-image">
              <img src="${p.image}" alt="${p.title}" />
            </div>
            <div class="project-details">
              <h2>${p.title}</h2>
              <p>${p.description}</p>
              <div class="project-meta">
                <p><strong>Tech:</strong> ${p.tech}</p>
                <p><strong>Year:</strong> ${p.year}</p>
              </div>
              <a href="${p.link}" class="project-link" target="_blank">View Live</a>
            </div>
          </div>
        `;
  });
}

function setupPagination() {
  const totalPages = Math.ceil(projects.length / perPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      displayProjects(currentPage);
      setupPagination();
    });

    pagination.appendChild(btn);
  }
}

// Initial load
displayProjects(currentPage);
setupPagination();
