// Predefined metadata database for previewing Ritual resources
const RESOURCE_DATABASE = {
    // Official Resources
    "ritual-net": {
        title: "Ritual Network",
        category: "Official Resource",
        url: "https://ritual.net/",
        desc: "Ritual is the premier Artificial Intelligence Coprocessor network. It bridges Web3 smart contracts with advanced off-chain AI execution, enabling trustless model inference, autonomous agent automation, and cryptographically verifiable AI workflows.",
        stats: [
            { label: "Role", value: "Sovereign AI Infrastructure Network" },
            { label: "Features", value: "Verifiable Model Inference, Multi-VM Agent Orchestration" },
            { label: "Host Domain", value: "ritual.net" }
        ]
    },
    "team": {
        title: "Ritual Foundation Team",
        category: "Official Resource",
        url: "https://www.ritualfoundation.org/team",
        desc: "Meet the world-class systems architects, cryptographic researchers, machine learning experts, and distributed network engineers building the future of decentralized AI execution.",
        stats: [
            { label: "Entity", value: "Ritual Foundation" },
            { label: "Key Focus", value: "Zero-Knowledge Proofs, Machine Learning Pipelines, Decoupled Consensus" },
            { label: "Careers", value: "Active Global Remote Hirings" }
        ]
    },
    "foundation": {
        title: "Ritual Foundation",
        category: "Official Resource",
        url: "https://www.ritualfoundation.org/",
        desc: "The coordinating entity supporting ecosystem development, open-source protocol research, and grant programs for builders deploying decentralized AI pipelines.",
        stats: [
            { label: "Role", value: "Ecosystem Stewardship & Governance Support" },
            { label: "Programs", value: "Developer Grants, Hackathons, Academic Collaborations" },
            { label: "Headquarters", value: "Decentralized / Global" }
        ]
    },
    "whitepaper": {
        title: "Ritual Whitepaper",
        category: "Official Resource",
        url: "https://whitepaper.ritualfoundation.org/",
        desc: "Read the foundational architecture whitepaper. It outlines the cryptographic design of the AI Coprocessor, verifying execution outputs, and the integration of LLMs inside stateful EVM runtime environments.",
        stats: [
            { label: "Format", value: "Technical Whitepaper & Architecture Spec" },
            { label: "Primary Math", value: "Optimistic Fraud Proofs & ZK Inference verifications" },
            { label: "Target Reader", value: "Cryptographers, Protocol Architects" }
        ]
    },
    "documentation": {
        title: "Developer Documentation Hub",
        category: "Official Resource",
        url: "https://docs.ritualfoundation.org/",
        desc: "Access the complete setup manuals, tutorial workflows, and contract specifications. Learn how to construct, deploy, and register your own custom AI model services using the Ritual API.",
        stats: [
            { label: "Documentation Tech", value: "GitBook / Modern Docs Grid" },
            { label: "SDK languages", value: "TypeScript, Python, Rust, Solidity" },
            { label: "Latest Release", value: "v1.2.0-beta" }
        ]
    },
    "skills-hub": {
        title: "Skills Hub",
        category: "Official Resource",
        url: "https://skills.ritualfoundation.org/",
        desc: "A standardized marketplace and execution catalog of specialized machine learning agents ('skills') that developers can query directly from any blockchain smart contract.",
        stats: [
            { label: "Platform", value: "Ritual Skills Protocol Registry" },
            { label: "Supported ML Models", value: "Llama 3, Mistral, Stable Diffusion, Whisper" },
            { label: "Integration", value: "On-Chain Solidity Oracle interfaces" }
        ]
    },
    "blog": {
        title: "Ritual Foundation Blog",
        category: "Official Resource",
        url: "https://www.ritualfoundation.org/blog",
        desc: "Catch up on the latest releases, partnership announcements, technology deep dives, and community spotlights published by the core engineering group.",
        stats: [
            { label: "Frequency", value: "Bi-weekly updates" },
            { label: "Topic Highlights", value: "LLM Orchestration, GPU Cluster Nodes, Proof Systems" }
        ]
    },
    // Socials
    "x-foundation": {
        title: "X - Ritual Foundation",
        category: "Social Link",
        url: "https://x.com/ritualfnd",
        desc: "Official announcement feed for the Ritual Foundation. Follow for key milestones, tokenomics disclosures, and ecosystem updates.",
        stats: [
            { label: "Platform", value: "Twitter / X (@ritualfnd)" },
            { label: "Key Updates", value: "Foundation Level Grants & Protocol Specs" }
        ]
    },
    "x-network": {
        title: "X - Ritual Network",
        category: "Social Link",
        url: "https://x.com/ritualnet",
        desc: "Community and general ecosystem news feed. Real-time updates on active nodes, community validator updates, and dApp collaborations.",
        stats: [
            { label: "Platform", value: "Twitter / X (@ritualnet)" },
            { label: "Key Updates", value: "Dev activity, Testnet stats, community spaces" }
        ]
    },
    "discord": {
        title: "Discord Ecosystem",
        category: "Social Link",
        url: "https://discord.com/invite/ritual-net",
        desc: "Join the official Discord server to connect with over 50,000 validators, node runners, smart contract developers, and AI researchers.",
        stats: [
            { label: "Platform", value: "Discord server" },
            { label: "Main Channels", value: "#developer-chat, #node-runners, #general-discussion" }
        ]
    },
    "telegram": {
        title: "Telegram Chat",
        category: "Social Link",
        url: "https://t.me/ritualchain",
        desc: "Ecosystem community chat group for real-time networking and announcements.",
        stats: [
            { label: "Platform", value: "Telegram Group (@ritualchain)" }
        ]
    },
    "linkedin": {
        title: "LinkedIn Corporate Page",
        category: "Social Link",
        url: "https://www.linkedin.com/company/ritual-foundation/",
        desc: "Official company profile. Used for corporate recruitment, career announcements, and institutional updates.",
        stats: [
            { label: "Platform", value: "LinkedIn Professional Network" }
        ]
    },
    "github": {
        title: "GitHub Repository Organization",
        category: "Social Link",
        url: "https://github.com/ritual-foundation",
        desc: "Explore the open-source codebase. Access the node execution clients, validation engines, solidity contracts, and developer SDKs.",
        stats: [
            { label: "Platform", value: "GitHub (@ritual-foundation)" },
            { label: "Core Repos", value: "infernet-sdk, infernet-node, ritual-contracts" },
            { label: "License", value: "Apache 2.0 / MIT" }
        ]
    },
    "cura": {
        title: "Cura Protocol Profile",
        category: "Social Link",
        url: "https://cura.network/ritualfoundation",
        desc: "Decentralized ecosystem registry profile linking Ritual developer stats and community metrics.",
        stats: [
            { label: "Platform", value: "Cura Web3 Registry" }
        ]
    },
    "ritual-digest": {
        title: "Ritual Digest",
        category: "Social Link",
        url: "https://x.com/ritualdigest",
        desc: "Community-led news aggregator compiling the top threads, updates, and tutorials from across the Ritual ecosystem.",
        stats: [
            { label: "Platform", value: "Twitter / X (@ritualdigest)" },
            { label: "Publisher", value: "Community Contributors" }
        ]
    },
    // Brand Kit
    "brand-kit": {
        title: "Official Brand Assets",
        category: "Brand Kit",
        url: "https://marshy-ermine-6e0.notion.site/Brand-Kit-28880470e38546d1a870b8f2cf903213",
        desc: "Access high-resolution logo variants, style guides, color specifications, and typography layouts for community usage.",
        stats: [
            { label: "Platform", value: "Notion Workspace Board" },
            { label: "Asset Types", value: "SVG Logos, Dark/Light Assets, Custom Font Files" }
        ]
    },
    "mascot": {
        title: "Official Siggy Mascot",
        category: "Brand Kit",
        url: "https://siggyhalloween-ritual.xyz/",
        desc: "Discover 'Siggy', the official spectral mascot of the Ritual Network. Access seasonal skins, animations, and community memes.",
        stats: [
            { label: "Platform", value: "Siggy Portal Hub" },
            { label: "Usage", value: "Sticker Packs, Profile Avatars, Community Memes" }
        ]
    },
    // Testnet Links
    "faucet": {
        title: "Ritual Token Faucet",
        category: "Testnet Links & Faucet",
        url: "https://faucet.ritualfoundation.org/",
        desc: "Request testnet RITUAL tokens to pay for model inference gas, node registrations, and smart contract execution on the 1979 Testnet.",
        stats: [
            { label: "Chain Name", value: "Ritual Testnet" },
            { label: "Payout Rate", value: "10 RITUAL per 24 Hours" },
            { label: "Cool-down", value: "IP & Wallet Locked (24 Hours)" }
        ]
    },
    "explorer": {
        title: "Ecosystem Block Explorer",
        category: "Testnet Links & Faucet",
        url: "https://explorer.ritualfoundation.org/",
        desc: "Search blocks, transactions, addresses, smart contracts, and AI agent executions in real-time on the Ritual Testnet chain.",
        stats: [
            { label: "Explorer Engine", value: "Custom Blockscout Suite" },
            { label: "API Endpoints", value: "explorer.ritualfoundation.org/api" },
            { label: "Metrics", value: "Block Time: ~350ms, Gas Price: 0.1 Gwei" }
        ]
    },
    "docs-txt": {
        title: "Full Chain LLM Reference Manual",
        category: "Testnet Links & Faucet",
        url: "https://docs.ritualfoundation.org/llms-full.txt",
        desc: "An optimization file created explicitly for LLM context ingestion. Contains the entire chain rules, API endpoints, system contract registry, and developer references in plain-text markdown format.",
        stats: [
            { label: "File Format", value: "Markdown Raw Text (.txt)" },
            { label: "Target Audience", value: "AI Agents, Copilot Integrations, Core Devs" }
        ]
    },
    // Community Directory
    "dapps-sheet": {
        title: "Community dApps Directory",
        category: "Community Directory",
        url: "https://docs.google.com/spreadsheets/d/1-71yrtMqSRCTAvmshY2K_wDSYproX7GQFybKwkC5IFM/edit?gid=0#gid=0",
        desc: "Explore a live public directory of dApps, oracles, agent services, and integrations built by community members on the Ritual testnet.",
        stats: [
            { label: "Platform", value: "Google Sheets" },
            { label: "Moderator", value: "Ecosystem Council / Stanelope" }
        ]
    },
    // Ritual Academy
    "academy-intro": {
        title: "Introduction to AI",
        category: "Ritual Academy",
        url: "https://www.linkedin.com/events/7422349185305325568/",
        desc: "Watch the foundational workshop providing an introductory framework on Artificial Intelligence ecosystems and off-chain execution mechanisms.",
        stats: [
            { label: "Platform", value: "LinkedIn Events" },
            { label: "Presenter", value: "Ritual Academy Speakers" }
        ]
    },
    "academy-payments": {
        title: "AI x Crypto Payments and the Future of AI Agents",
        category: "Ritual Academy",
        url: "https://x.com/i/broadcasts/1mrxmBMNnbqKy",
        desc: "Deep dive session outlining how AI Agents transact natively using cryptocurrency rails, and the paradigm shift in automated payments.",
        stats: [
            { label: "Platform", value: "X / Twitter Broadcast" },
            { label: "Host Account", value: "@ritualnet" }
        ]
    },
    "academy-risk": {
        title: "AI Risk Assessment for LLMs and Agents Workshop",
        category: "Ritual Academy",
        url: "https://x.com/i/broadcasts/1lPKqvMpRMdGb",
        desc: "Technical safety session covering evaluation methods, risk profiling, and execution validation for large language models and autonomous agents.",
        stats: [
            { label: "Platform", value: "X / Twitter Broadcast" },
            { label: "Focus Area", value: "Inference Safety & Model Risk" }
        ]
    },
    "academy-twin": {
        title: "Build Your Own AI Twin",
        category: "Ritual Academy",
        url: "https://x.com/i/broadcasts/1XxygmmVEjWGM",
        desc: "Interactive guide on fine-tuning and deploying customized agent models that mimic persona characteristics and specific user traits.",
        stats: [
            { label: "Platform", value: "X / Twitter Broadcast" },
            { label: "Use Case", value: "Personalized AI models" }
        ]
    },
    "academy-programming": {
        title: "Correctness-Oriented Programming with AI",
        category: "Ritual Academy",
        url: "https://x.com/i/broadcasts/1wxWjaRPyPNJQ",
        desc: "Advanced developer seminar on structuring model queries, prompt architecture, and system parameters to ensure deterministic agent actions.",
        stats: [
            { label: "Platform", value: "X / Twitter Broadcast" },
            { label: "Developer Topic", value: "Deterministic coding paradigms" }
        ]
    },
    "academy-k8s": {
        title: "Running Agent on K8s",
        category: "Ritual Academy",
        url: "https://x.com/i/broadcasts/1rGmqojbNOvGy",
        desc: "Operations workshop walking through Kubernetes cluster deployment configurations for containerized off-chain AI model nodes.",
        stats: [
            { label: "Platform", value: "X / Twitter Broadcast" },
            { label: "DevOps Focus", value: "Docker, Kubernetes, GPU Orchestration" }
        ]
    },
    "academy-tools": {
        title: "AI Agent with Tools Workshop",
        category: "Ritual Academy",
        url: "https://x.com/elifhilalumucu/status/2046997861402120490",
        desc: "Practical developer session detailing how to equip AI agents with browser tools, RPC triggers, and local execution functions.",
        stats: [
            { label: "Platform", value: "X / Twitter Status" },
            { label: "Speaker", value: "Elif Hilal Umucu (@elifhilalumucu)" }
        ]
    },
    "academy-cybersecurity": {
        title: "Cybersecurity x AI Workshop",
        category: "Ritual Academy",
        url: "https://x.com/i/broadcasts/1NGaraPnwqbJj",
        desc: "Explore the interface of security architectures and AI, addressing system vulnerabilities and mitigation pathways in agent environments.",
        stats: [
            { label: "Platform", value: "X / Twitter Broadcast" },
            { label: "Domain", value: "Web3/AI Security Protocols" }
        ]
    }
};

// Application State Management
const appState = {
    theme: 'light',
    sidebarCollapsed: false,
    currentSelectedKey: null
};

// DOM Elements Selection
document.addEventListener('DOMContentLoaded', () => {
    // UI Control Selectors
    const sidebarToggle = document.getElementById('sidebarToggle');
    const appSidebar = document.getElementById('appSidebar');
    const btnThemeToggle = document.getElementById('btnThemeToggle');

    // Preview Pane Elements
    const browserViewport = document.getElementById('browserViewport');
    const viewportDefaultState = document.getElementById('viewportDefaultState');
    const viewportPreviewCard = document.getElementById('viewportPreviewCard');
    const previewCategory = document.getElementById('previewCategory');
    const previewTitle = document.getElementById('previewTitle');
    const previewUrl = document.getElementById('previewUrl');
    const previewDesc = document.getElementById('previewDesc');
    const previewStatsContainer = document.getElementById('previewStatsContainer');
    const previewIframe = document.getElementById('previewIframe');
    const browserAddressInput = document.getElementById('browserAddressInput');
    const btnOpenExternal = document.getElementById('btnOpenExternal');
    const btnReloadPreview = document.getElementById('btnReloadPreview');

    // AI Chat Widget Selectors
    const aiChatWidget = document.getElementById('aiChatWidget');
    const chatToggleBtn = document.getElementById('chatToggleBtn');
    const chatWindow = document.getElementById('chatWindow');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatSuggestions = document.getElementById('chatSuggestions');

    /* --- Sidebar Navigation & Collapsing State --- */
    
    sidebarToggle.addEventListener('click', () => {
        appSidebar.classList.toggle('collapsed');
        appState.sidebarCollapsed = appSidebar.classList.contains('collapsed');
    });

    /* --- Link Hover & Selection Preview Dashboard --- */
    
    const navLinks = document.querySelectorAll('.nav-link');

    function loadPreview(key) {
        const itemData = RESOURCE_DATABASE[key];
        if (!itemData) return;

        appState.currentSelectedKey = key;
        
        // Hide default welcome view
        viewportDefaultState.style.display = 'none';
        viewportPreviewCard.style.display = 'block';

        // Populate card details
        previewCategory.textContent = itemData.category;
        previewTitle.textContent = itemData.title;
        previewUrl.textContent = itemData.url;
        previewDesc.textContent = itemData.desc;
        browserAddressInput.value = itemData.url;
        btnOpenExternal.href = itemData.url;

        // Render Stats Grid
        previewStatsContainer.innerHTML = '';
        if (itemData.stats) {
            itemData.stats.forEach(stat => {
                const statDiv = document.createElement('div');
                statDiv.className = 'stat-box';
                statDiv.innerHTML = `
                    <div class="stat-box-label">${stat.label}</div>
                    <div class="stat-box-value">${stat.value}</div>
                `;
                previewStatsContainer.appendChild(statDiv);
            });
        }

        // Set iframe url (with warning fallback since many sites block X-Frame-Options)
        previewIframe.src = itemData.url;
    }

    // Attach listeners: Hover preview triggers immediately
    navLinks.forEach(link => {
        const previewKey = link.getAttribute('data-preview-key');

        link.addEventListener('mouseenter', () => {
            loadPreview(previewKey);
        });

        // Click no longer triggers e.preventDefault() so it opens link in a new tab,
        // but it still sets the sidebar active state.
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            loadPreview(previewKey);
        });
    });

    btnReloadPreview.addEventListener('click', () => {
        if (appState.currentSelectedKey) {
            loadPreview(appState.currentSelectedKey);
        }
    });

    /* --- Theme Toggle (Light & Dark Mode) --- */
    
    btnThemeToggle.addEventListener('click', () => {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', nextTheme);
        appState.theme = nextTheme;

        // Update Theme Button Icon
        const icon = btnThemeToggle.querySelector('i');
        if (nextTheme === 'dark') {
            icon.className = 'fa-solid fa-sun';
        } else {
            icon.className = 'fa-solid fa-moon';
        }
    });

    /* --- AI Agent (Ritual Oracle) Chatbot Engine --- */

    // Toggle Chat visibility
    chatToggleBtn.addEventListener('click', () => {
        chatWindow.classList.toggle('hidden');
    });

    closeChatBtn.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
    });

    // Handle Quick Suggestion Chip Click
    chatSuggestions.addEventListener('click', (e) => {
        if (e.target.classList.contains('suggest-chip')) {
            const query = e.target.getAttribute('data-query');
            chatInput.value = query;
            handleUserMessage();
        }
    });

    // Handle message send
    sendChatBtn.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });

    function handleUserMessage() {
        const messageText = chatInput.value.trim();
        if (!messageText) return;

        // Display user message
        appendMessage(messageText, 'user');
        chatInput.value = '';

        // Trigger typing simulation
        setTimeout(() => {
            const answer = generateAgentResponse(messageText);
            appendMessage(answer, 'assistant');
        }, 800);
    }

    function appendMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // AI Keyword-Matching Knowledge Base Answer Generator
    function generateAgentResponse(query) {
        const q = query.toLowerCase();

        if (q.includes('faucet') || q.includes('tokens')) {
            return `You can get testnet RITUAL tokens for the testnet from the <strong>Ritual Token Faucet</strong> here: <a href="https://faucet.ritualfoundation.org/" target="_blank">faucet.ritualfoundation.org</a>.<br><br>The faucet distributes 10 RITUAL tokens every 24 hours per IP address and wallet connection.`;
        }
        
        if (q.includes('chain id') || q.includes('chainid') || q.includes('specs') || q.includes('network details')) {
            return `Here are the official specifications for the **Ritual Chain / Network**:<br>
            • <strong>Chain ID</strong>: 1979<br>
            • <strong>Currency</strong>: RITUAL (18 decimals)<br>
            • <strong>Block Time</strong>: ~350ms<br>
            • <strong>RPC Endpoint (HTTP)</strong>: rpc.ritualfoundation.org<br>
            • <strong>RPC Endpoint (WebSocket)</strong>: rpc.ritualfoundation.org/ws<br>
            • <strong>Block Explorer</strong>: <a href="https://explorer.ritualfoundation.org/" target="_blank">explorer.ritualfoundation.org</a>`;
        }

        if (q.includes('skills') || q.includes('skills hub')) {
            const data = RESOURCE_DATABASE['skills-hub'];
            return `${data.desc}<br><br>👉 Access the Skills Hub here: <a href="${data.url}" target="_blank">${data.url}</a>.`;
        }

        if (q.includes('creator') || q.includes('stanelope') || q.includes('who made')) {
            return `This website and portal dashboard was built by <strong>Stanelope</strong>, an active member of the Ritual Network community. Follow the guide parameters on each page.`;
        }

        if (q.includes('explorer')) {
            const data = RESOURCE_DATABASE['explorer'];
            return `${data.desc}<br><br>Explore blocks, validation instances, and contract events at: <a href="${data.url}" target="_blank">${data.url}</a>.`;
        }

        if (q.includes('team') || q.includes('founders')) {
            const data = RESOURCE_DATABASE['team'];
            return `${data.desc}<br><br>You can view the full team profile here: <a href="${data.url}" target="_blank">${data.url}</a>.`;
        }

        if (q.includes('whitepaper')) {
            const data = RESOURCE_DATABASE['whitepaper'];
            return `${data.desc}<br><br>Read the math and specs: <a href="${data.url}" target="_blank">${data.url}</a>.`;
        }

        if (q.includes('documentation') || q.includes('docs')) {
            const data = RESOURCE_DATABASE['documentation'];
            return `You can find the official Ritual Documentation containing installation, sdk configurations, and API structures at: <a href="${data.url}" target="_blank">${data.url}</a>.<br><br>There is also a plain-text version optimized for LLMs: <a href="https://docs.ritualfoundation.org/llms-full.txt" target="_blank">llms-full.txt</a>.`;
        }

        if (q.includes('discord')) {
            return `Join the active developer community on the official Ritual Discord: <a href="https://discord.com/invite/ritual-net" target="_blank">discord.com/invite/ritual-net</a>. Find help under the #node-runners and #developer-chat channels.`;
        }

        if (q.includes('mascot') || q.includes('siggy')) {
            const data = RESOURCE_DATABASE['mascot'];
            return `Siggy is the official spectral mascot of the Ritual Network. Discover Siggy's halloween/themed portal here: <a href="${data.url}" target="_blank">${data.url}</a>.`;
        }

        if (q.includes('academy') || q.includes('workshop') || q.includes('broadcast') || q.includes('training')) {
            return `Here are the active workshops and educational streams in the **Ritual Academy**:<br><br>
            1. <strong>Introduction to AI</strong>: <a href="https://www.linkedin.com/events/7422349185305325568/" target="_blank">View Event</a><br>
            2. <strong>AI x Crypto Payments</strong>: <a href="https://x.com/i/broadcasts/1mrxmBMNnbqKy" target="_blank">Watch Broadcast</a><br>
            3. <strong>AI Risk Assessment</strong>: <a href="https://x.com/i/broadcasts/1lPKqvMpRMdGb" target="_blank">Watch Workshop</a><br>
            4. <strong>Build Your Own AI Twin</strong>: <a href="https://x.com/i/broadcasts/1XxygmmVEjWGM" target="_blank">Watch Broadcast</a><br>
            5. <strong>Correctness-Oriented Programming</strong>: <a href="https://x.com/i/broadcasts/1wxWjaRPyPNJQ" target="_blank">Watch Broadcast</a><br>
            6. <strong>Running Agent on K8s</strong>: <a href="https://x.com/i/broadcasts/1rGmqojbNOvGy" target="_blank">Watch Broadcast</a><br>
            7. <strong>AI Agent with Tools</strong>: <a href="https://x.com/elifhilalumucu/status/2046997861402120490" target="_blank">View Workshop</a><br>
            8. <strong>Cybersecurity x AI</strong>: <a href="https://x.com/i/broadcasts/1NGaraPnwqbJj" target="_blank">Watch Workshop</a><br><br>
            You can select any of these on the sidebar to view their metadata.`;
        }

        // Generic fallback combining sidebar information
        return `I can help guide you through the Ritual Network. You can ask me about:<br>
        • <strong>Ritual Academy</strong> (Workshops, coding, k8s, twins)<br>
        • <strong>Chain specifications</strong> (Chain ID 1979)<br>
        • <strong>Testnet links</strong> (Faucet, explorer, and sheets directory)<br>
        • <strong>Official resources</strong> (Whitepaper, Docs, Skills Hub, Team)<br>
        • <strong>Website developer</strong> (Stanelope)`;
    }
});
