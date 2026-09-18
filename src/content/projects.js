import { html, css, js, react, nodeJs, expressJs, mongoDb, tailwindCss, bootstrap, java, springBoot, python, postgreSql, rabbitMq, docker, fastApi, sqlite, d3js, anthropic, networkX } from "../content/badges";
export const projects = [
    {
        name: "Edhir - Adaptive Behavioral WAF",
        imagePath: "/assets/images/edhir_thumbnail.jpg",
        description: "Adaptive Behavioral Web Application Firewall - Built a distributed, event-driven system to detect web attacks in real time, combining signature-based filtering with behavioral machine learning scoring, track session risk through adaptive thresholds that resist evasion, and enable pluggable protection via a reverse proxy sidecar or embeddable SDK for any application. Containerized with Docker across independent proxy, ML, and dashboard services, using PostgreSQL and RabbitMQ for persistent, decoupled asynchronous processing.",
        githubLink: "https://github.com/preethz2567/Edhir",
        websiteLink: "https://github.com/preethz2567/Edhir",
        techStack: [java, springBoot, python, react, postgreSql, rabbitMq, docker]
    },
    {
        name: "Aegis - Autonomous Attack-Path Platform",
        imagePath: "/assets/images/aegis_thumbnail.jpg",
        description: "Autonomous Attack-Path Simulation Platform - Built a digital-twin security platform modeling network topology as a graph, with a custom pathfinding agent identifying highest-risk attacker routes and a greedy optimization engine recommending minimal-effort, maximum-impact fixes.",
        githubLink: "https://github.com/preethz2567/aegis-twin",
        websiteLink: "https://github.com/preethz2567/aegis-twin",
        techStack: [python, fastApi, networkX, react, d3js, sqlite, anthropic]
    }
]