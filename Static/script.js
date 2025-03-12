// Career paths data structure with questions and roadmaps
const careerPaths = {
    webdev: {
        name: "Web Development",
        description: "Building and maintaining websites and web applications",
        questions: [
            "Do you prefer designing visual elements?",
            "Do you enjoy working with user interfaces?",
            "Are you comfortable with HTML, CSS and basic JavaScript?",
            "Do you like creating responsive and interactive designs?",
            "Do you prefer seeing immediate visual results of your work?"
        ],
        branches: {
            frontend: {
                name: "Frontend Development",
                description: "Creating the user interfaces and experiences for websites and applications",
                roadmap: [
                    {
                        title: "Master the Fundamentals",
                        description: "Focus on HTML5, CSS3, and JavaScript ES6+. Build responsive layouts and understand the DOM."
                    },
                    {
                        title: "Learn a Modern Framework",
                        description: "Pick one of React, Vue.js, or Angular and build projects using component architecture."
                    },
                    {
                        title: "State Management & API Integration",
                        description: "Learn Redux or Context API for React, understand REST and GraphQL API integration."
                    },
                    {
                        title: "Performance Optimization",
                        description: "Study lazy loading, code splitting, and browser rendering optimization techniques."
                    },
                    {
                        title: "Advanced UI/UX Practices",
                        description: "Master animations, transitions, and accessibility standards for modern applications."
                    }
                ]
            },
            backend: {
                name: "Backend Development",
                description: "Building server-side logic, databases, and APIs that power applications",
                roadmap: [
                    {
                        title: "Core Programming Language",
                        description: "Master a server-side language like Node.js, Python, Java, or PHP with fundamentals of algorithms and data structures."
                    },
                    {
                        title: "Database Technologies",
                        description: "Learn SQL databases like PostgreSQL/MySQL and NoSQL like MongoDB. Understand data modeling."
                    },
                    {
                        title: "API Development",
                        description: "Build RESTful APIs and maybe GraphQL endpoints. Implement authentication and authorization."
                    },
                    {
                        title: "Server Management",
                        description: "Learn deployment, server configuration, and containerization with Docker."
                    },
                    {
                        title: "Scaling & Optimization",
                        description: "Study caching strategies, load balancing, and performance optimization for high-traffic applications."
                    }
                ]
            }
        }
    },
    cyber: {
        name: "Cybersecurity",
        description: "Protecting systems, networks, and programs from digital attacks",
        questions: [
            "Are you interested in identifying vulnerabilities in systems?",
            "Do you enjoy problem-solving and analytical thinking?",
            "Are ethics and confidentiality important values to you?",
            "Do you like staying updated with the latest security threats?",
            "Are you interested in digital forensics and incident response?"
        ],
        branches: {
            redteam: {
                name: "Offensive Security (Red Team)",
                description: "Ethical hacking and penetration testing to identify vulnerabilities",
                roadmap: [
                    {
                        title: "Security Fundamentals",
                        description: "Learn networking basics, operating systems, and common security protocols and vulnerabilities."
                    },
                    {
                        title: "Programming & Scripting",
                        description: "Master Python, Bash, and PowerShell for automation and exploit development."
                    },
                    {
                        title: "Pentesting Methodology",
                        description: "Learn systematic approaches to reconnaissance, vulnerability assessment, and exploitation."
                    },
                    {
                        title: "Specialized Attack Vectors",
                        description: "Study web app security, wireless security, and social engineering techniques."
                    },
                    {
                        title: "Advanced Exploitation",
                        description: "Develop skills in binary exploitation, malware analysis, and custom exploit development."
                    }
                ]
            },
            blueteam: {
                name: "Defensive Security (Blue Team)",
                description: "Implementing security measures and responding to incidents",
                roadmap: [
                    {
                        title: "Security Operations Fundamentals",
                        description: "Learn about SIEM tools, log analysis, and security infrastructure components."
                    },
                    {
                        title: "Threat Detection",
                        description: "Develop skills in identifying anomalies, understanding attack patterns, and creating detection rules."
                    },
                    {
                        title: "Incident Response",
                        description: "Learn methodologies for handling security incidents from detection to remediation."
                    },
                    {
                        title: "Digital Forensics",
                        description: "Study evidence collection, chain of custody, and forensic analysis techniques."
                    },
                    {
                        title: "Security Architecture",
                        description: "Understand how to design secure systems, implement defense-in-depth, and security hardening."
                    }
                ]
            }
        }
    },
    ai: {
        name: "Artificial Intelligence",
        description: "Creating intelligent machines that can simulate human thinking and behavior",
        questions: [
            "Are you comfortable with advanced mathematics?",
            "Do you enjoy working with large datasets?",
            "Are you interested in machine learning algorithms?",
            "Do you prefer theoretical research or practical applications?",
            "Do you have experience with programming languages like Python or R?"
        ],
        branches: {
            research: {
                name: "AI Research",
                description: "Advancing the field through theoretical innovations and new algorithms",
                roadmap: [
                    {
                        title: "Mathematical Foundation",
                        description: "Master linear algebra, calculus, probability, and statistics needed for AI theory."
                    },
                    {
                        title: "Advanced ML & DL Theory",
                        description: "Study the mathematical foundations behind machine learning algorithms and neural networks."
                    },
                    {
                        title: "Research Methodology",
                        description: "Learn to design experiments, analyze results, and contribute to the academic literature."
                    },
                    {
                        title: "Specialization Area",
                        description: "Dive deep into a specific AI domain like NLP, computer vision, or reinforcement learning."
                    },
                    {
                        title: "Research Implementation",
                        description: "Develop skills to implement novel algorithms and test theoretical innovations."
                    }
                ]
            },
            engineering: {
                name: "AI Engineering",
                description: "Building and implementing practical AI solutions for real-world problems",
                roadmap: [
                    {
                        title: "Programming & ML Basics",
                        description: "Become proficient in Python and learn fundamental ML algorithms and frameworks like TensorFlow/PyTorch."
                    },
                    {
                        title: "Data Processing Pipeline",
                        description: "Master data collection, cleaning, feature engineering, and preprocessing techniques."
                    },
                    {
                        title: "Model Development & Training",
                        description: "Learn to build, train, and fine-tune various types of machine learning models."
                    },
                    {
                        title: "MLOps & Deployment",
                        description: "Study model deployment, monitoring, and maintenance in production environments."
                    },
                    {
                        title: "Domain Application",
                        description: "Apply AI techniques to specific industry problems and develop specialized solutions."
                    }
                ]
            }
        }
    },
    data: {
        name: "Data Science",
        description: "Extracting insights and knowledge from structured and unstructured data",
        questions: [
            "Do you enjoy analyzing and interpreting complex data?",
            "Are you interested in statistics and statistical methods?",
            "Do you like creating visualizations to communicate insights?",
            "Are you comfortable with structured and unstructured data?",
            "Do you enjoy solving business problems with data-driven approaches?"
        ],
        branches: {
            analytics: {
                name: "Data Analytics",
                description: "Analyzing data to inform business decisions and strategies",
                roadmap: [
                    {
                        title: "Data Analysis Foundations",
                        description: "Learn statistics, probability, and basic data analysis techniques with Excel and SQL."
                    },
                    {
                        title: "Data Processing",
                        description: "Master data cleaning, transformation, and feature engineering with Python or R."
                    },
                    {
                        title: "Visualization & Storytelling",
                        description: "Learn effective data visualization using tools like Tableau, Power BI, or programming libraries."
                    },
                    {
                        title: "Business Intelligence",
                        description: "Understand how to translate data insights into actionable business recommendations."
                    },
                    {
                        title: "Domain Specialization",
                        description: "Develop expertise in specific industry contexts like marketing, finance, or healthcare analytics."
                    }
                ]
            },
            engineering: {
                name: "Data Engineering",
                description: "Building and maintaining data pipelines and infrastructure",
                roadmap: [
                    {
                        title: "Programming Fundamentals",
                        description: "Master Python and SQL for data manipulation and database interactions."
                    },
                    {
                        title: "Database Systems",
                        description: "Learn both SQL and NoSQL databases, data modeling, and optimization techniques."
                    },
                    {
                        title: "Big Data Technologies",
                        description: "Study distributed computing frameworks like Hadoop, Spark, and related tools."
                    },
                    {
                        title: "Data Pipelines",
                        description: "Master ETL processes, workflow orchestration, and real-time data processing."
                    },
                    {
                        title: "Cloud Data Platforms",
                        description: "Learn cloud-based data solutions on AWS, GCP, or Azure for scalable data systems."
                    }
                ]
            }
        }
    }
};

// Global variables
let currentPath = null;
let currentBranch = null;
let questionIndex = 0;
let userName = '';
let answers = [];
let connections = [];

// DOM elements
const coreNode = document.getElementById('coreNode');
const questionContainer = document.getElementById('questionContainer');
const questionEl = document.getElementById('question');
const answerOptions = document.getElementById('answerOptions');
const userInput = document.getElementById('userInput');
const optionsGrid = document.querySelector('.options-grid');
const welcomeScreen = document.getElementById('welcomeScreen');
const levelIndicator = document.getElementById('levelIndicator');
const roadmap = document.getElementById('roadmap');
const roadmapTitle = document.getElementById('roadmapTitle');
const roadmapContent = document.getElementById('roadmapContent');
const resetBtn = document.getElementById('resetBtn');
const connectionsCanvas = document.getElementById('connections');

// Initialize the application
function init() {
    // Auto-focus input on page load
    userInput.focus();
    
    // Create particles
    createParticles();
    
    // Handle Enter key submission for name
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && userInput.value.trim()) {
            userName = userInput.value.trim();
            
            // Animate welcome screen disappearance
            gsap.to(welcomeScreen, {
                opacity: 0,
                scale: 0.8,
                duration: 0.7,
                ease: "power2.out",
                onComplete: () => {
                    welcomeScreen.style.display = 'none';
                    activateCoreNode();
                    
                    // Show level indicator
                    gsap.to(levelIndicator, {
                        opacity: 1,
                        y: 10,
                        duration: 0.5,
                        delay: 0.3
                    });
                }
            });
        }
    });

    // Input hover effects
    userInput.addEventListener('mouseenter', () => {
        gsap.to('.input-glow', {
            opacity: 0.4,
            duration: 0.3
        });
    });

    userInput.addEventListener('mouseleave', () => {
        if(document.activeElement !== userInput) {
            gsap.to('.input-glow', {
                opacity: 0,
                duration: 0.3
            });
        }
    });
    
    // Handle reset button
    resetBtn.addEventListener('click', resetApplication);
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'rgba(100, 255, 218, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.boxShadow = '0 0 5px rgba(100, 255, 218, 0.8)';
        
        // Animate the particle
        gsap.to(particle, {
            y: `${Math.random() * 200 - 100}`,
            x: `${Math.random() * 200 - 100}`,
            opacity: Math.random() * 0.5 + 0.2,
            duration: Math.random() * 20 + 10,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
        
        particlesContainer.appendChild(particle);
    }
}

function activateCoreNode() {
    gsap.to(coreNode, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
    });

    // Create initial options
    const options = Object.keys(careerPaths).map(path => 
        `<div class="option-item" data-path="${path}">
            ${careerPaths[path].name}
        </div>`
    ).join('');
    
    optionsGrid.innerHTML = options;
    
    document.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', handlePathSelection);
    });
}

function handlePathSelection(e) {
    currentPath = e.target.dataset.path;
    questionIndex = 0;
    answers = [];
    
    // Update level
    levelIndicator.textContent = 'LEVEL 2';
    gsap.to(levelIndicator, {
        backgroundColor: 'rgba(17, 34, 64, 0.9)',
        borderColor: 'var(--secondary-color)',
        color: 'var(--secondary-color)',
        duration: 0.5
    });
    
    // Animation effect
    gsap.to(coreNode, {
        scale: 1.2,
        yoyo: true,
        repeat: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => zoomIntoBranch()
    });
}

function zoomIntoBranch() {
    // Clean up existing elements
    document.querySelectorAll('.decision-node').forEach(node => {
        node.remove();
    });
    
    // Animate the core node zoom out
    gsap.to(coreNode, {
        scale: 5,
        opacity: 0,
        duration: 1,
        ease: "power4.in",
        onComplete: () => {
            coreNode.style.display = 'none';
            createQuestionNodePath();
        }
    });
}

// Function to create the question node path after selecting a career path
function createQuestionNodePath() {
    // Clear previous connections
    while (connectionsCanvas.firstChild) {
        connectionsCanvas.removeChild(connectionsCanvas.firstChild);
    }
    
    // Remove previous nodes
    document.querySelectorAll('.decision-node').forEach(node => {
        node.remove();
    });
    
    const questions = careerPaths[currentPath].questions;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create main path node at the left side
    const pathNode = document.createElement('div');
    pathNode.className = 'path-node';
    pathNode.textContent = careerPaths[currentPath].name;
    pathNode.style.left = `${centerX - 350}px`;
    pathNode.style.top = `${centerY - 90}px`;
    document.querySelector('.container').appendChild(pathNode);
    
    // Animate main path node
    gsap.fromTo(pathNode, 
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" }
    );
    
    // Create a zigzag path of question nodes
    questions.forEach((question, index) => {
        // Calculate positions in a zigzag pattern
        const xOffset = 150 + (index * 120); // Increasing x position
        const yOffset = (index % 2 === 0) ? -80 : 80; // Alternating y position
        
        const nodeX = centerX - 350 + xOffset;
        const nodeY = centerY + yOffset;
        
        // Create question node
        const questionNode = document.createElement('div');
        questionNode.className = 'question-node';
        questionNode.dataset.index = index;
        questionNode.textContent = `Q${index + 1}`;
        questionNode.style.left = `${nodeX - 50}px`;
        questionNode.style.top = `${nodeY - 50}px`;
        document.querySelector('.container').appendChild(questionNode);
        
        // Create connection from previous node
        const startX = index === 0 ? 
            centerX - 350 + 90 : // From path node
            centerX - 350 + xOffset - 120; // From previous question node
        const startY = index === 0 ? 
            centerY : // From path node
            centerY + (index % 2 === 0 ? 80 : -80); // From previous question node
        
        const line = drawConnection(startX, startY, nodeX, nodeY);
        
        // Animate question node with delay
        gsap.fromTo(questionNode, 
            { opacity: 0, scale: 0 },
            { 
                opacity: 1, 
                scale: 1, 
                duration: 0.5, 
                delay: 0.3 + (0.2 * index),
                ease: "back.out(1.7)" 
            }
        );
        
        // Add event listener only to the first node initially
        if (index === 0) {
            questionNode.classList.add('active-node');
            questionNode.addEventListener('click', () => showQuestionForNode(index));
        } else {
            questionNode.classList.add('locked-node');
        }
    });
}

// Function to show question for a specific node
function showQuestionForNode(index) {
    questionIndex = index;
    const question = careerPaths[currentPath].questions[index];
    
    // Create or update the question bubble
    let questionBubble = document.querySelector('.question-bubble');
    if (!questionBubble) {
        questionBubble = document.createElement('div');
        questionBubble.className = 'question-bubble';
        document.querySelector('.container').appendChild(questionBubble);
    }
    
    // Position the bubble below the active node
    const activeNode = document.querySelector(`.question-node[data-index="${index}"]`);
    const nodeRect = activeNode.getBoundingClientRect();
    questionBubble.style.left = `${nodeRect.left + (nodeRect.width / 2) - 150}px`;
    questionBubble.style.top = `${nodeRect.bottom + 20}px`;
    
    // Set question content
    questionBubble.innerHTML = `
        <div class="bubble-content">
            <div class="bubble-question">${userName}, ${question}</div>
            <div class="bubble-options">
                <button class="bubble-btn" data-value="yes">Yes</button>
                <button class="bubble-btn" data-value="no">No</button>
            </div>
        </div>
    `;
    
    // Animate the bubble
    gsap.fromTo(questionBubble, 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    
    // Add event listeners to buttons
    questionBubble.querySelectorAll('.bubble-btn').forEach(btn => {
        btn.addEventListener('click', handleBubbleAnswer);
    });
}

// Function to handle answer from question bubble
function handleBubbleAnswer(e) {
    const answer = e.target.dataset.value;
    answers[questionIndex] = answer;
    
    // Animate selected button
    gsap.to(e.target, {
        scale: 1.2,
        backgroundColor: 'rgba(100, 255, 218, 0.3)',
        duration: 0.3,
        yoyo: true,
        repeat: 1
    });
    
    // Hide the question bubble
    const questionBubble = document.querySelector('.question-bubble');
    gsap.to(questionBubble, {
        opacity: 0, 
        y: -20, 
        duration: 0.5,
        onComplete: () => {
            // Mark current node as completed
            const currentNode = document.querySelector(`.question-node[data-index="${questionIndex}"]`);
            currentNode.classList.remove('active-node');
            currentNode.classList.add('completed-node');
            
            // Move to next question or finish
            questionIndex++;
            if (questionIndex < careerPaths[currentPath].questions.length) {
                // Unlock and activate next node
                const nextNode = document.querySelector(`.question-node[data-index="${questionIndex}"]`);
                nextNode.classList.remove('locked-node');
                nextNode.classList.add('active-node');
                nextNode.addEventListener('click', () => showQuestionForNode(questionIndex));
                
                // Pulse animation on the next node
                gsap.to(nextNode, {
                    scale: 1.2,
                    boxShadow: '0 0 30px var(--secondary-color)',
                    repeat: 3,
                    yoyo: true,
                    duration: 0.5
                });
            } else {
                // All questions answered, determine branch
                determineBranch();
            }
        }
    });
}

function showNextQuestion() {
    if (questionIndex < careerPaths[currentPath].questions.length) {
        const question = careerPaths[currentPath].questions[questionIndex];
        questionEl.textContent = `${userName}, ${question}`;
        questionContainer.style.pointerEvents = 'auto';
        
        // Show the question container
        gsap.to(questionContainer, { 
            opacity: 1, 
            y: 0, 
            duration: 0.7,
            ease: "back.out(1.4)"
        });
        
        // Set up event listeners for answer buttons
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', handleAnswer);
        });
    } else {
        determineBranch();
    }
}

function handleAnswer(e) {
    const answer = e.target.dataset.value;
    answers.push(answer);
    
    // Remove event listeners to prevent multiple clicks
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.removeEventListener('click', handleAnswer);
    });
    
    // Animate answer selection
    gsap.to(e.target, {
        scale: 1.2,
        backgroundColor: 'rgba(100, 255, 218, 0.3)',
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            // Hide question and show next
            gsap.to(questionContainer, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                onComplete: () => {
                    questionIndex++;
                    showNextQuestion();
                }
            });
        }
    });
}

function determineBranch() {
    // Simple algorithm: count 'yes' answers and select branch accordingly
    const yesCount = answers.filter(a => a === 'yes').length;
    const threshold = answers.length / 2;
    
    // Select the first branch if more yeses, otherwise second branch
    const branchKeys = Object.keys(careerPaths[currentPath].branches);
    currentBranch = yesCount >= threshold ? branchKeys[0] : branchKeys[1];
    
    // Update level indicator
    levelIndicator.textContent = 'FINAL LEVEL';
    gsap.to(levelIndicator, {
        backgroundColor: 'rgba(17, 34, 64, 0.9)',
        borderColor: 'var(--tertiary-color)',
        color: 'var(--tertiary-color)',
        duration: 0.5
    });
    
    // Show final result
    showFinalRoadmap();
}

function showFinalRoadmap() {
    const branchData = careerPaths[currentPath].branches[currentBranch];
    
    // Update roadmap title
    roadmapTitle.textContent = `${userName}, Your Ideal Path: ${branchData.name}`;
    
    // Build roadmap content
    let roadmapHTML = `
        <div class="roadmap-description">${branchData.description}</div>
    `;
    
    // Add roadmap steps
    branchData.roadmap.forEach((step, index) => {
        roadmapHTML += `
            <div class="roadmap-step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <div class="step-title">${step.title}</div>
                    <div class="step-description">${step.description}</div>
                </div>
            </div>
        `;
    });
    
    roadmapContent.innerHTML = roadmapHTML;
    
    // Show roadmap with animation
    roadmap.style.display = 'block';
    gsap.fromTo(roadmap, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }
    );
}

function resetApplication() {
    // Hide roadmap
    gsap.to(roadmap, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            roadmap.style.display = 'none';
            
            // Reset level indicator
            levelIndicator.textContent = 'LEVEL 1';
            gsap.to(levelIndicator, {
                backgroundColor: 'rgba(17, 34, 64, 0.8)',
                borderColor: 'var(--tertiary-color)',
                color: 'var(--tertiary-color)',
                opacity: 0,
                duration: 0.5
            });
            
            // Show welcome screen again
            welcomeScreen.style.display = 'flex';
            gsap.to(welcomeScreen, {
                opacity: 1,
                scale: 1,
                duration: 0.7
            });
            
            // Reset variables
            currentPath = null;
            currentBranch = null;
            questionIndex = 0;
            answers = [];
            
            // Focus input field
            userInput.value = '';
            userInput.focus();
        }
    });
}

// Add this function to create the branched visualization
function createBranchedVisualization() {
    // Clear any existing connections
    while (connectionsCanvas.firstChild) {
        connectionsCanvas.removeChild(connectionsCanvas.firstChild);
    }
    
    // Get dimensions
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create central node
    const centralNode = document.createElement('div');
    centralNode.className = 'decision-core';
    centralNode.style.left = `${centerX - 90}px`;
    centralNode.style.top = `${centerY - 90}px`;
    centralNode.style.opacity = '1';
    centralNode.style.transform = 'scale(1)';
    document.querySelector('.container').appendChild(centralNode);
    
    // Create branches
    const branches = Object.keys(careerPaths);
    const branchCount = branches.length;
    const radius = 250; // Distance from center
    
    branches.forEach((branch, index) => {
        // Calculate position in a circle around the central node
        const angle = (index / branchCount) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        // Create branch node
        const branchNode = document.createElement('div');
        branchNode.className = 'decision-node';
        branchNode.textContent = careerPaths[branch].name;
        branchNode.dataset.path = branch;
        branchNode.style.left = `${x - 72}px`;
        branchNode.style.top = `${y - 72}px`;
        document.querySelector('.container').appendChild(branchNode);
        
        // Create connecting line
        const line = drawConnection(
            centerX, centerY,
            x, y
        );
        
        // Animate branch node
        gsap.to(branchNode, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.1 * index,
            ease: "back.out(1.7)"
        });
        
        // Add click event
        branchNode.addEventListener('click', handlePathSelection);
    });
}


// Connect nodes with animated lines
function drawConnection(x1, y1, x2, y2) {
    const svgNS = "http://www.w3.org/2000/svg";
    const line = document.createElementNS(svgNS, "line");
    
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("class", "node-connection");
    
    connectionsCanvas.appendChild(line);
    connections.push(line);
    
    return line;
}



// Modify activateCoreNode to use the branch visualization
function activateCoreNode() {
    // Hide the current core node
    coreNode.style.display = 'none';
    
    // Create the branch visualization
    createBranchedVisualization();
    
    // The original options grid won't be needed
    // We'll use the branch nodes instead
}

// Initialize application
window.addEventListener('load', init);