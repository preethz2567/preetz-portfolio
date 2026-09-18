import { html, css, js, react, nodeJs, expressJs, mongoDb, tailwindCss, bootstrap, java, springBoot, python, postgreSql, rabbitMq, docker, fastApi, sqlite, d3js, anthropic, networkX } from "../content/badges";
export const projects = [
    {
        name: "Tees For You",
        imagePath: "/assets/projectSnaps/project1a.jpg",
        description: "An E-Commerce website with modern UI to buy T-Shirts. This is my first complete website project.\n (This isn't designed for mobile view yet)",
        githubLink: "https://github.com/renish47/TeesForYou-MiniProject1",
        websiteLink: "https://teesforyou.netlify.app/",
        techStack: [html, css, js]
    },
    {
        name: "Book My Doc",
        imagePath: "/assets/projectSnaps/project2a.jpg",
        description: "A Doctor appointment booking app which provides functionalities to book and manage appointments. This is my first Full-Stack project.",
        githubLink: "https://github.com/renish47/BookMyDoc",
        websiteLink: "https://bookmydoc.netlify.app/",
        techStack: [react, bootstrap, expressJs, mongoDb]
    },
    {
        name: "Portfolio",
        imagePath: "/assets/projectSnaps/project3a.jpg",
        description: "My web portfolio whose design is inspired based on popular Windows-95 operating system's look.",
        githubLink: "https://github.com/renish47/portfolio",
        websiteLink: "https://preethi-portfolio.netlify.app/",
        techStack: [react, tailwindCss]
    },
    {
        name: "url-sm",
        imagePath: "/assets/projectSnaps/project4a.jpg",
        description: "A URL shortening website, which also implements the flow of processes like signin, signup, forget password along with OTP verification. This is one of my Mini project",
        githubLink: "https://github.com/renish47/url-sm",
        websiteLink: "https://url-sm.netlify.app/",
        techStack: [react, tailwindCss, expressJs, mongoDb]
    },
    {
        name: "Edhir - Adaptive Behavioral WAF",
        imagePath: "/assets/projects.png",
        description: "Adaptive Behavioral Web Application Firewall - Built a distributed, event-driven system to detect web attacks in real time, combining signature-based filtering with behavioral machine learning scoring, track session risk through adaptive thresholds that resist evasion, and enable pluggable protection via a reverse proxy sidecar or embeddable SDK for any application. Containerized with Docker across independent proxy, ML, and dashboard services, using PostgreSQL and RabbitMQ for persistent, decoupled asynchronous processing.",
        githubLink: "https://github.com/preethz2567/Edhir",
        websiteLink: "https://github.com/preethz2567/Edhir",
        techStack: [java, springBoot, python, react, postgreSql, rabbitMq, docker]
    },
    {
        name: "Aegis - Autonomous Attack-Path Platform",
        imagePath: "/assets/projects.png",
        description: "Autonomous Attack-Path Simulation Platform - Built a digital-twin security platform modeling network topology as a graph, with a custom pathfinding agent identifying highest-risk attacker routes and a greedy optimization engine recommending minimal-effort, maximum-impact fixes.",
        githubLink: "https://github.com/preethz2567/aegis-twin",
        websiteLink: "https://github.com/preethz2567/aegis-twin",
        techStack: [python, fastApi, networkX, react, d3js, sqlite, anthropic]
    }
]