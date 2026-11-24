/* EDIT HERE: add a project by copying one object.
   type: "UI/UX" or "Development" (the filter buttons are built from these)
   short: label shown on the card when there is no image
   image: save a screenshot in images/projects/ and use "images/projects/name.png"
   Always use forward slashes (/) in paths, never backslashes (\). */
const projects = [
  {
    title: "RCOSD Web App: Disciplinary Record Keeping System",
    short: "RCOSD Web App",
    type: "Development",
    desc: "Responsive web system for the Office for Student Discipline at Rogationist College, with separate interfaces for students, department heads, and administrators. Built as my thesis project.",
    tools: ["React", "TypeScript", "CSS"],
    image: "",
    colors: ["#0891b2", "#2563eb"],
    links: {
      code: "https://github.com/Leeanee/RCOSD-WEB-APP",
      demo: "https://drive.google.com/file/d/1Nz_udFyVIlvX0bNNIJBeRvFBf5d0SXPi/view?usp=drive_link"
    }
  },
  {
    title: "RCOSD Web: Mobile-First Design",
    short: "RCOSD Web design",
    type: "UI/UX",
    desc: "High-fidelity, mobile-first Figma design for the web platform that digitizes record keeping for the Office for Student Discipline.",
    tools: ["Figma", "Design system", "Prototyping"],
    image: "images/projects/rcosd_figma.png",
    colors: ["#0891b2", "#2563eb"],
    links: { figma: "https://www.figma.com/community/file/1704347321754396577" }
  },
  {
    title: "ToothWorks: Dental Care E-Commerce Shop",
    short: "ToothWorks",
    type: "UI/UX",
    desc: "High-fidelity Figma design for a dental care e-commerce web platform.",
    tools: ["Figma", "Design system"],
    image: "images/projects/toothWorks.png",
    colors: ["#4f46e5", "#9333ea"],
    links: { figma: "https://www.figma.com/community/file/1704348676154697636" }
  },
  {
    title: "RCOSD Desktop App",
    short: "RCOSD Desktop App",
    type: "Development",
    desc: "Desktop version of the Office for Student Discipline system. I designed the screens in Figma, then built them in JavaFX with FXML and CSS.",
    tools: ["JavaFX", "FXML", "CSS", "Figma"],
    image: "",
    colors: ["#4f46e5", "#9333ea"],
    links: {
      code: "https://github.com/Leeanee/RCOSD-DESKTOP-APP",
      demo: "https://drive.google.com/file/d/19KgQREosq_-VjUVAOdlGT_Ukk9jr1QWf/view?usp=drive_link"
    }
  },
  {
    title: "E-Commerce Website",
    short: "E-Commerce Website",
    type: "Development",
    desc: "Responsive shopping website built with Laravel, PHP, HTML, and CSS, focused on intuitive navigation, visual consistency, and a user-friendly shopping experience.",
    tools: ["Laravel", "PHP", "HTML", "CSS"],
    image: "",
    colors: ["#0f766e", "#2563eb"],
    links: {}
  }
];
