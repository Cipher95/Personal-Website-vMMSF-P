document.addEventListener('DOMContentLoaded', () => {

    // --- DATA STORE ---
    const pageData = {
        home: {
            title: "Welcome!",
            image: "BM12042.webp",
            content: `
                <p>I'm Cipher. By day, I architect the future of the web, fusing clean code with artificial intelligence to create intelligent, dynamic websites.</p>
                <p>By night, I'm a digital archivist, preserving the legacy of classic video games for a new generation. This space is the intersection of my two passions: building the new and celebrating the old. Explore my projects and my curated collection of gaming history.</p>
            `
        },
        websites: {
            title: "Web Projects",
            image: "Mega_Man_Star_Force_-_Pegasus_5.png",
            content: `
                 <p>A few of my favorite projects. Select a card to view the live site.</p>
                 <div class="project-card">
                    <h3>Mega Man Star Force 3</h3>
                    <p>A comprehensive and interactive fan-made website dedicated to the Nintendo DS classic.</p>
                    <a href="https://cipher95.github.io/Mega-Man-Star-Force-3/" target="_blank">View Project</a>
                </div>
                 <div class="project-card">
                    <h3>Mega Man Star Force Legacy Collection</h3>
                    <p>A conceptual promotional site for a hypothetical "Legacy Collection."</p>
                    <a href="https://cipher95.github.io/Mega-Man-Star-Force-Legacy-Collection/" target="_blank">View Project</a>
                </div>
                 <div class="project-card">
                    <h3>Ace Combat Zero: The Belkan War</h3>
                    <p>An immersive story-focused website that dives deep into the lore of Ace Combat Zero.</p>
                    <a href="https://cipher95.github.io/Ace-Combat-Zero-The-Belkan-War/" target="_blank">View Project</a>
                </div>
                 <div class="project-card">
                    <h3>MechWarrior 2: 31st Century Combat</h3>
                    <p>A retro-themed tribute to the 1995 PC gaming titan with classic MIDI audio.</p>
                    <a href="https://cipher95.github.io/MechWarrior-2-31st-Century-Combat/" target="_blank">View Project</a>
                </div>
            `
        },
		videos: {
            title: "Video Archive",
            image: "BM12042.webp",
            intro: `<p>A collection of classic and retro game clips dedicated to preserving gaming history.</p>`,
            videoList: [
                { title: "Air Combat (Longplay)", videoId: "_lPGVdE__tc?si=vfKSK361wA9joT4T" },
                { title: "Ace Combat 2 (Longplay)", videoId: "88CGhXFs5UA?si=iYLLaIPWT3wXjSsr" },
                { title: "Sidewinder 2 (Longplay)", videoId: "bFZ-fx2ivsc?si=DCttmFGP7PLd2N8r" },
				{ title: "Ace Combat 3 (Part 1/5)", videoId: "mqsrsvp90mg?si=SWRh75DpKMfh41an" }
            ]
        },
        gemini: {
            title: "Gemini AI",
            image: "UNMMSF3Gemini.webp", // A futuristic AI-themed image
            content: `
                <p>Interact directly with a powerful AI. This interface is connected to the Gemini 1.5 Pro model via a secure backend.</p>
                <div id="gemini-container">
                    <textarea id="gemini-prompt" placeholder="Enter your prompt for Gemini..."></textarea>
                    <button id="gemini-submit-btn">Send to AI</button>
                    <div id="gemini-response">The AI's response will appear here...</div>
                </div>
            `
        }
    };

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    // --- NEW: Selector for the back to top button
    const backToTopBtn = document.getElementById('back-to-top-btn');

	 // --- FUNCTIONS ---

    /**
     * Builds and sets up the interactive video player.
     * @param {object} videoData - The video data object from pageData.
     */
    function setupVideoPlayer(videoData) {
        const videoDisplay = document.getElementById('video-display-area');
        if (!videoDisplay || !videoData.videoList || videoData.videoList.length === 0) return;

        // Create navigation buttons
        const navButtonsHTML = videoData.videoList.map((video, index) =>
            `<button class="video-nav-btn ${index === 0 ? 'active' : ''}" data-video-id="${video.videoId}">${video.title}</button>`
        ).join('');

        const firstVideoId = videoData.videoList[0].videoId;

        // Create the full player HTML
        const playerHTML = `
            <div class="video-nav-container">
                ${navButtonsHTML}
            </div>
            <div class="video-container">
                <iframe id="youtube-player" src="https://www.youtube.com/embed/${firstVideoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;

        videoDisplay.innerHTML = playerHTML;

        // Add event listeners to the new buttons
        const videoNavButtons = videoDisplay.querySelectorAll('.video-nav-btn');
        videoNavButtons.forEach(button => {
            button.addEventListener('click', () => {
                const videoId = button.getAttribute('data-video-id');
                const playerFrame = document.getElementById('youtube-player');
                playerFrame.src = `https://www.youtube.com/embed/${videoId}`;

                // Update active state
                videoNavButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    /**
     * Switches the content displayed in the main area.
     * @param {string} pageKey - The key corresponding to the data in pageData.
     */
    function switchContent(pageKey) {
        const data = pageData[pageKey];
        if (!data) return;

        contentArea.classList.add('fade-out');

        setTimeout(() => {
            let contentHTML;
            if (pageKey === 'videos') {
                contentHTML = `${data.intro}<div id="video-display-area"></div>`;
            } else {
                contentHTML = data.content;
            }

            const html = `
                <div class="content-wrapper">
                    <div class="content-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="content-text">
                        <h2>${data.title}</h2>
                        ${contentHTML}
                    </div>
                </div>
            `;
            contentArea.innerHTML = html;

            if (pageKey === 'videos') {
                setupVideoPlayer(data);
            }

            contentArea.classList.remove('fade-out');
        }, 300);
    }

    /**
     * Updates the clock and date display.
     */
    function updateClock() {
        const now = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        const timeString = now.toLocaleTimeString('en-US', timeOptions);
        const dateDayString = now.toLocaleDateString('en-US', dateOptions);

        clockElement.textContent = timeString;
        dateDayElement.textContent = dateDayString;
    }

    // --- NEW: Back to Top Button Functions ---
    /**
     * Shows or hides the 'back to top' button based on scroll position.
     */
    function handleBackToTopButton() {
        if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    /**
     * Smoothly scrolls the window to the top.
     */
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

     // --- CHATBOT FUNCTIONALITY ---
    const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
    const chatbotPopup = document.getElementById('chatbot-popup');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');

    chatbotToggleBtn.addEventListener('click', () => {
        chatbotPopup.classList.toggle('active');
        if (chatbotPopup.classList.contains('active') && chatbotMessages.children.length === 0) {
            setTimeout(() => {
                addMessage("Hello! I'm CipherBot. Ask me anything about this site.", 'bot');
            }, 300);
        }
    });

    chatbotCloseBtn.addEventListener('click', () => {
        chatbotPopup.classList.remove('active');
    });

    chatbotSendBtn.addEventListener('click', handleUserMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage();
        }
    });

    function handleUserMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatbotInput.value = '';
            getBotResponse(message);
        }
    }

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message', `${sender}-message`);
        messageElement.innerHTML = message;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        let botMessage = "I'm not sure how to respond. Try asking about 'Cipher', 'websites', or 'videos'.";
        // Simple keyword matching for responses
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) botMessage = "Hello! I'm CipherBot. How can I help you today?";
        if (lowerCaseMessage.includes('cipher')) botMessage = "Cipher is a web developer and digital archivist, passionate about creating new web experiences and preserving classic video games.";
        if (lowerCaseMessage.includes('website') || lowerCaseMessage.includes('project')) botMessage = "Cipher has worked on several projects, including websites for Mega Man Star Force and Ace Combat Zero. You can navigate to the 'Websites' page to see them all.";
        if (lowerCaseMessage.includes('video')) botMessage = "You can find a collection of retro gaming longplays and clips on the 'Videos' page.";
        if (lowerCaseMessage.includes('thank')) botMessage = "You're welcome!";
        
        setTimeout(() => { addMessage(botMessage, 'bot'); }, 500);
    }

    // --- GEMINI 2.5 PRO API FUNCTIONALITY ---
    async function handleGeminiPrompt() {
        const promptInput = document.getElementById('gemini-prompt');
        const responseContainer = document.getElementById('gemini-response');
        const submitBtn = document.getElementById('gemini-submit-btn');
        const prompt = promptInput.value.trim();
        if (!prompt) {
            responseContainer.textContent = "Please enter a prompt before sending.";
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = "THINKING...";
        responseContainer.textContent = "Connecting to the AI, please wait...";
        try {
            const response = await fetch('https://954927c1-6f5f-4500-a6c4-b6c653965ac8-00-2f1g5gu0csdjw.pike.replit.dev/api/gemini', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt }),
            });
            if (!response.ok) throw new Error(`Server error! Status: ${response.status}`);
            const data = await response.json();
            responseContainer.textContent = data.response;
        } catch (error) {
            console.error('Error fetching Gemini response:', error);
            responseContainer.textContent = 'An error occurred. Please make sure the backend server is running and try again.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Send to AI";
        }
    }
    
    // --- EVENT LISTENERS & INITIALIZATION ---

    // Set up navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    // Event listener for dynamically added Gemini button
    contentArea.addEventListener('click', (event) => {
        if (event.target.id === 'gemini-submit-btn') {
            handleGeminiPrompt();
        }
    });

    // --- NEW: Add event listeners for the back to top button ---
    window.addEventListener('scroll', handleBackToTopButton);
    backToTopBtn.addEventListener('click', scrollToTop);
    
    // Initialize the page
    switchContent('home');
    updateClock();
    setInterval(updateClock, 1000);
});
