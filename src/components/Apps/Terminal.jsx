import React, { useState, useEffect, useRef, useContext } from 'react';
import AppContext from "../../context/AppContext";

const Typewriter = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState("");
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index >= text.length) {
                clearInterval(interval);
                if (onComplete) onComplete();
            }
        }, 15);
        return () => clearInterval(interval);
    }, [text, onComplete]);

    return <span style={{ whiteSpace: "pre-wrap" }}>{displayedText}</span>;
};

const Terminal = ({ isMaximized }) => {
    const { closeApp } = useContext(AppContext);
    const [history, setHistory] = useState([
        { type: "output", text: "Preethi OS [Version 10.0.19045.3086]\n(c) Preethi Corporation. All rights reserved.\n\nType 'help' for a list of available commands.", animated: true }
    ]);
    const [input, setInput] = useState("");
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [isAnimating, setIsAnimating] = useState(false);
    
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, isAnimating, input]);

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus({ preventScroll: true });
        }
    };

    const processCommand = (cmd) => {
        const trimmed = cmd.trim();
        const lowerCmd = trimmed.toLowerCase();
        
        let output = "";
        
        if (lowerCmd === "help") {
            output = `Available commands:
  help                    - lists all available commands
  whoami                  - prints a short bio
  skills --list           - prints categorized tech stack
  hackathons --sort=wins  - prints hackathon wins, most recent first
  experience --timeline   - prints internships chronologically
  projects --top          - prints top 2-3 flagship projects
  sudo hire_me            - permission granted
  clear                   - clears the terminal screen
  exit                    - closes the terminal window`;
        } else if (lowerCmd === "whoami") {
            output = `> Preethi Durgaprasad
> B.E CSE @ Saveetha Engineering College | CGPA 9.6 | Class of 2028
> Oracle Certified Java SE 21
> Systems-oriented full-stack + DevOps Engineer`;
        } else if (lowerCmd === "skills --list") {
            output = `> BACKEND     : Java, Spring Boot, Node.js, Flask
> FRONTEND    : React, TypeScript
> DEVOPS      : Docker, Terraform, GitHub Actions, AWS (ECS Fargate, EC2, S3, RDS), 
                Railway, Vercel, Redis
> AI/LLM      : RAG pipelines, FAISS, sentence-transformers, multi-agent systems
> DATABASES   : MySQL, PostgreSQL, RDS
> CS_CORE     : DSA, System Design`;
        } else if (lowerCmd === "hackathons --sort=wins") {
            output = `> [WIN]  Ossome Hacks 3.0 by Github Community
> [WIN]  TechXora '26
> [WIN]  SheBuilds X CCCL
> [WIN]  HackHustle 2.0 at SEC
> [FINALIST] ImpactForge, IIT Madras`;
        } else if (lowerCmd === "experience --timeline") {
            output = `> [2026] Presidio — Mentor-led SDE Internship (Backend, Frontend, DevOps, AI/LLM)
> [2026] IntakeOff.AI — SDE Intern, DevOps (CI/CD, Railway/Vercel, Redis)`;
        } else if (lowerCmd === "projects --top") {
            output = `> 1. AI-Powered RAG System (Flask, FAISS, LLM) - Enterprise-grade semantic search
> 2. Full-Stack E-Commerce (Spring Boot, React, AWS RDS) - Scalable microservices
> 3. Real-Time Chat App (Node.js, Socket.io, Redis) - High-throughput messaging`;
        } else if (lowerCmd === "sudo hire_me") {
            output = `> [sudo] password for guest: ****
> Permission granted.
> Preethi is open to opportunities in backend, DevOps, and AI/LLM engineering.
> Reach out: preethiduraprasad@gmail.com | linkedin.com/in/preethidurgaprasad | GitHub: preethz2567`;
        } else if (lowerCmd === "clear") {
            setHistory([]);
            return;
        } else if (lowerCmd === "exit") {
            closeApp("Terminal.exe");
            return;
        } else if (trimmed === "") {
            output = "";
        } else {
            output = `command not found: ${trimmed}. type 'help' for options.`;
        }

        if (output) {
            setIsAnimating(true);
            setHistory(prev => [...prev, { type: "input", text: `guest@preethidurgaprasad:~$ ${trimmed}` }, { type: "output", text: output, animated: false }]);
        } else {
            setHistory(prev => [...prev, { type: "input", text: `guest@preethidurgaprasad:~$ ${trimmed}` }]);
        }
    };

    const handleKeyDown = (e) => {
        if (isAnimating) {
            e.preventDefault();
            return;
        }

        if (e.key === 'Enter') {
            const cmd = input;
            if (cmd.trim() !== "") {
                setCommandHistory(prev => [cmd, ...prev]);
            }
            setHistoryIndex(-1);
            setInput("");
            processCommand(cmd);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
                setHistoryIndex(nextIndex);
                setInput(commandHistory[nextIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const nextIndex = historyIndex - 1;
                setHistoryIndex(nextIndex);
                setInput(commandHistory[nextIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setInput("");
            }
        }
    };

    const handleAnimationComplete = (index) => {
        setIsAnimating(false);
        setHistory(prev => {
            const newHistory = [...prev];
            if (newHistory[index]) {
                newHistory[index].animated = true;
            }
            return newHistory;
        });
    };

    return (
        <div 
            ref={containerRef}
            className={`w-full h-full p-4 overflow-y-auto ${isMaximized ? "pb-20" : ""}`}
            style={{ 
                backgroundColor: "#0c0c0c", 
                color: "#00ff00", 
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "14px",
                lineHeight: "1.4"
            }}
            onClick={handleContainerClick}
        >
            <div className="flex flex-col pb-4">
                {history.map((item, idx) => (
                    <div key={idx} className="mb-1">
                        {item.type === "input" ? (
                            <span style={{ whiteSpace: "pre-wrap" }}>{item.text}</span>
                        ) : (
                            item.animated ? (
                                <span style={{ whiteSpace: "pre-wrap" }}>{item.text}</span>
                            ) : (
                                <Typewriter 
                                    text={item.text} 
                                    onComplete={() => handleAnimationComplete(idx)} 
                                />
                            )
                        )}
                    </div>
                ))}
                
                {!isAnimating && (
                    <div className="flex mt-1">
                        <span className="mr-2">guest@preethidurgaprasad:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="flex-1 bg-transparent border-none outline-none text-[#00ff00]"
                            style={{ fontFamily: "'Courier New', Courier, monospace" }}
                            autoFocus
                            spellCheck="false"
                            autoComplete="off"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Terminal;
