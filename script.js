
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
				 <div class="project-card">
                    <h3>Cipher | Personal Website</h3>
                    <p>This is my main Personal Website.</p>
                    <a href="https://cipher95.github.io/Personal-Website/" target="_blank">View Project</a>
                </div>
				<div class="project-card">
                    <h3>SF Clan | Star Force</h3>
                    <p>A fellowship of gamers dedicated to mastering the classics.</p>
                    <a href="https://cipher95.github.io/SF-Clan/" target="_blank">View Project</a>
                </div>
				<div class="project-card">
                    <h3>MMSF3 Grand Tournament 2026</h3>
                    <p>This event has been canceled. I created a new URL for the new tournament.</p>
                    <a href="https://cipher95.github.io/MMSF3-Grand-Tournament-2026/" target="_blank">View Project</a>
                </div>
				<div class="project-card">
                    <h3>MMSF3 Ranking Tournament 2026</h3>
                    <p>Final result.</p>
                    <a href="https://cipher95.github.io/MMSF3-Ranking-Tournament-2026/" target="_blank">View Project</a>
                </div>
            `
        },
		videos: {
            title: "Video Archive",
            image: "BM12042.webp",
            intro: `<p>A collection of classic and retro game clips dedicated to preserving gaming history.</p>`,
            videoList: [
                { title: "PS1 Emulator (DuckStation) - Air Combat [Hard] (Longplay)", videoId: "_lPGVdE__tc?si=vfKSK361wA9joT4T" },
                { title: "PS1 Emulator (DuckStation) - Ace Combat 2 [Hard] (Longplay)", videoId: "88CGhXFs5UA?si=iYLLaIPWT3wXjSsr" },
                { title: "PS1 Emulator (DuckStation) - Sidewinder 2 [Hard] (Longplay)", videoId: "bFZ-fx2ivsc?si=DCttmFGP7PLd2N8r" },
				{ title: "PS1 Emulator (DuckStation) - Ace Combat 3: Electrosphere [Hard] (Part 1/5)", videoId: "mqsrsvp90mg?si=SWRh75DpKMfh41an" },
				{ title: "PS1 Emulator (DuckStation) - Ace Combat 3: Electrosphere [Hard] (Part 2/5)", videoId: "_H7OtXuUj6U?si=MWccg6A1vkk70HjW" },
				{ title: "PS1 Emulator (DuckStation) - Ace Combat 3: Electrosphere [Hard] (Part 3/5)", videoId: "_QLarGejb5s?si=msEFtnx0yDOd_BjH" },
				{ title: "PS1 Emulator (DuckStation) - Ace Combat 3: Electrosphere [Hard] (Part 4/5)", videoId: "wHG7TqwgKcI?si=o-zFGA8SQLUST8sX" },
				{ title: "PS1 Emulator (DuckStation) - Ace Combat 3: Electrosphere [Hard] (Part 5/5)", videoId: "GKO8ud8ChXg?si=nXyPUpa3wUdObsh3" },
				{ title: "Shooting Star Rockman: Pegasus [Using ANOTHER combo card] (In less then a second lol)", videoId: "9XRomr24SwU?si=B9ZN_S8WuQZqEShA" },
				{ title: "NDS - Shooting Star Rockman 3: Black Ace (Burai ZZ) [Gemini Noise] (S Rank + No Damage)", videoId: "dvmgo7hlyfY?si=Iu5y4ixxKQus59Wc" },
				{ title: "NDS - Shooting Star Rockman 3: Black Ace (Acid Ace BB) [Gemini Noise + BA] (S Rank + No Damage)", videoId: "1eIjGiDAvsY?si=rt0Fj3NOqo8_HPz0" },
				{ title: "NDS - Shooting Star Rockman 3: Black Ace (Acid Ace BB) [Gemini Noise] (S Rank + No Damage) Twice :)", videoId: "MjP8PkjCFiw?si=CNg98EPMcEq7b25S" },
				{ title: "GBA - Mega Man Battle Network (MagicMan + LifeVirus) [Normal Armor] (Hero Swords Folder)", videoId: "LRQy7Ps5iD4?si=_CLYAgXIW5hH0aS5" },
				{ title: "GBA - Mega Man Battle Network (Bass) [Normal Armor] (Non Hero Swords Folder)", videoId: "NPsb0qZQ9c0?si=cWEf9CvjmVOhDXOM" },
				{ title: "GBA - Mega Man Battle Network 2 (Bass + Gospel) [Style: WoodCustom V3] (LS + GS Folder)", videoId: "FMyEhHz5kjE?si=GcE0siL3oZUdoZr-" },
				{ title: "GBA - Mega Man Battle Network 2 (Bass Deluxe) [Style: WoodCustom V3] (Gaia Sword Folder)", videoId: "7Z5_1ggy1JI?si=Ml0OCvCnOoHEveFU" },
				{ title: "GBA - Mega Man Battle Network 3: Blue (Non encounter β bosses) [Style: WoodCustom]", videoId: "DW9a2M9cp-Y?si=znoUfkwKRKCWBEkn" },
				{ title: "GBA - Mega Man Battle Network 3: Blue (JapanMan β + DarkMan β) [Style: WoodCustom]", videoId: "YINZepjR1cU?si=o9nCbnAVgUYOfB-U" },
				{ title: "GBA - Mega Man Battle Network 3: Blue (Bass + Alpha Ω) [Style: WoodCustom]", videoId: "74nHF5BDNrE?si=i4dYpudhojwTvsO8" },
				{ title: "GBA - Mega Man Battle Network 4: Blue Moon (Only 10 Ω bosses) [Number Soul] (PA: Life Sword Folder)", videoId: "07dit9fjez8?si=-tp9QDVuqbW8_K05" },
				{ title: "Mega Man Battle Network 4: Blue Moon (ProtoMan Ω) (PA: Life Sword Folder without Giga Chip)", videoId: "zcH0Kp_8OUE?si=pMGcNlSXomtU0l-A" },
				{ title: "GBA - Mega Man Battle Network 4: Blue Moon (Bass Ω) [No DS] (Super Vulcan Folder)", videoId: "YcO0x_q_Yns?si=vG23kFkNnqOY_BBi" },
				{ title: "GBA - Mega Man Battle Network 4: Blue Moon (Duo Ω) [No DS] (LS + SV Folder)", videoId: "xQnszvSIZHs?si=-6gCFP5F2JXcWq7R" },
				{ title: "Parsec (ePSXe) - ISS Pro Evolution (Cipher's Goals) [1 VS 1]", videoId: "TeSzwpSHjj8?si=lsZ7YtSMljsQU0U-" }
            ]
        },
        gemini: {
            title: "Gemini AI",
            image: "UNMMSF3Gemini.webp", // A futuristic AI-themed image
            content: `
                <p>Interact directly with a powerful AI. This interface is connected to the Gemini 1.5 Flash model via a secure backend.</p>
                <div id="gemini-container">
                    <textarea id="gemini-prompt" placeholder="Enter your prompt for Gemini..."></textarea>
                    <button id="gemini-submit-btn">Send to AI</button>
                    <div id="gemini-response">The AI's response will appear here...</div>
                </div>
            `
        },
		others: {
            title: "Others",
            image: "others/image_11~0.png",
            intro: ``,
            games: [
                {
                    id: 'CaptainTsubasaDreamTeam',
                    title: 'Captain Tsubasa: Dream Team (8TH Anniversary)',
                    image: 'others/CaptainTsubasaDreamTeam.jpg',
                    description: `
						<div class="project-card">
						<img src="others/CaptainTsubasaDreamTeam.jpg" class="big-data">
<p>I played Captain Tsubasa: Dream Team for eight years after it was released. I played actively for the first three years, then stopped because of the pay-to-win mechanics. Later, I came back just to have some fun.</p>
</div>

<div class="project-card">
<h3>Roberto Hongo (Dream Festival) Version</h3>
<img src="others/1stDraw.jpg" class="big-data">

<p>I got Roberto Hongo (Dream Festival version) from the Super Dream Festival before the Anniversary started.</p>
</div>

<div class="project-card">
<h3>Hikaru Matsuyama (Super Star) Version</h3>
<img src="others/2ndDraw.jpg" class="big-data">

<p>I got Hikaru Matsuyama (Super Star version) from the Super Anniversary Transfer on my first draw, and when I continued drawing, I got nothing.</p>
</div>

<div class="project-card">
<h3>Genzo Wakabayashi (Super Star) Version</h3>
<img src="others/3rdDraw.jpg" class="big-data">

<p>I got Genzo Wakabayashi (Super Star version) from the Super Anniversary Transfer on my first draw, and then I had more good luck.</p>
</div>

<div class="project-card">
<h3>Tsubasa Ozora (Dream Festival) Version</h3>
<img src="others/4thDraw.jpg" class="big-data">

<p>I got Tsubasa Ozora (Festival version) from the Super Anniversary Transfer on my second draw, and then I got a duplicate Genzo Wakabayashi (Super Star version) on the third draw.</p>
</div>

<div class="project-card">
<h3>Taro Misaki (Dream Festival) Version</h3>
<img src="others/5thDraw.jpg" class="big-data">

<p>I got Taro Misaki (Festival version) from the Super Anniversary Transfer on my fourth draw, and after that my luck ran out.</p>
</div>

<div class="project-card">
<h3>Radunga (Dream Collection) Version</h3>
<img src="others/6thDraw.jpg" class="big-data">

<p>I got Radunga (Dream Collection version) from the Valentine’s Dream Transfer on my first draw, and then I continued to collect Dreamballs from the events so I could draw more to get Shun Nitta.</p>
</div>

<div class="project-card">
<h3>Shun Nitta (Dream Festival) Version</h3>
<img src="others/7thDraw1.jpg" class="big-data">
<img src="others/7thDraw2.jpg" class="big-data">
<img src="others/8thDraw.jpg" class="big-data">

<p>So I finally got Shun Nitta (Dream Festival version) from the Valentine’s Dream Transfer on my 14th and 15th draws, so I decided to stop pulling and start saving Dreamballs from upcoming events to have a better chance of getting the player I want.</p>
</div>

<div class="project-card">
<h3>Main Team</h3>
<img src="others/Formation1-1.jpg" class="small-data">

<p>This is my main team. The formation I'm using is: 4-2-3-1 (S) Gold Formation. I mainly use Japanese players, with two Brazilian players. I use three team skills to boost players’ stats by 92%. For bonds, I have 82% stat increase and 8% shield. I don’t have higher bond stats or meta players because I didn’t play the game a lot. If you play more, you can do more transfer draws, and with good luck you can build a much better team than your old one. I’m using Roberto Hongo (old Dream Festival version) because the company buffed him, and he’s playable right now.</p>
</div>

<div class="project-card">
<h3>Formation</h3>
<img src="others/Formation1-2.jpg" class="small-data">

<p>This Gold Formation increases physical by 12% and stamina by 10% for Japanese and South American players.</p>
</div>

<div class="project-card">
<h3>Second Team</h3>
<img src="others/Formation2.jpg" class="small-data">

<p>This is my second team. I’m using the same formation as my main team. I mainly use South American players, with three Japanese players. I use three team skills that boost stats by 90%. For bonds, I have an 82% stat increase and a 12.5% shield.</p>
</div>

<div class="project-card">
<h3>Genzo Wakabayashi</h3>
<img src="others/Wakabayashi1.jpg" class="big-data">

<p>My favorite Goalkeeper of all time.</p>
</div>

<div class="project-card">
<h3>Radunga</h3>
<img src="others/Radunga1.jpg" class="big-data">

<p>My favorite Defender of all time.</p>
</div>

<div class="project-card">
<h3>Hikaru Matsuyama</h3>
<img src="others/Matsuyama1.jpg" class="big-data">

<p>My favorite Defensive Midfielder of all time.</p>
</div>

<div class="project-card">
<h3>Tsubasa Ozora</h3>
<img src="others/TsubasaOzora1.jpg" class="big-data">

<p>My favorite Player of all time.</p>
</div>

<div class="project-card">
<h3>Taro Misaki</h3>
<img src="others/Misaki1.jpg" class="big-data">

<p>My favorite Attack Midfielder of all time.</p>
</div>

<div class="project-card">
<h3>Shun Nitta</h3>
<img src="others/Nitta1.jpg" class="big-data">

<p>My second favorite Striker of all time.</p>
</div>

<div class="project-card">
<h3>Roberto Hongo</h3>
<img src="others/RobertoHongo1.jpg" class="big-data">
<img src="others/RobertoHongo2.jpg" class="big-data">

<p>My favorite Legendary Player of all time.</p>
</div>
`
                },
                
                {
                    id: 'traffic_lights',
                    title: 'Traffic lights - Arduino',
                    image: 'others/image_11~0.png',
					description: `
					<div class="project-card">
<embed width="100%" height="750px" src="https://wokwi.com/projects/448434280155456513">
<p>For the Arduino, I used a website called Wokwi. I found a Traffic Lights project there, used it as a base, and then made some changes to improve how the traffic lights work.</p>
</div>
					`
                }
            ]
        }
    };

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const backToTopBtn = document.getElementById('back-to-top-btn');
    const scrollToBottomBtn = document.getElementById('scroll-to-bottom-btn');

	 // --- FUNCTIONS ---

    /**
     * Builds and sets up the interactive video player.
     * @param {object} videoData - The video data object from pageData.
     */
    function setupVideoPlayer(videoData) {
        const videoDisplay = document.getElementById('video-display-area');
        if (!videoDisplay || !videoData.videoList || videoData.videoList.length === 0) return;

        const navButtonsHTML = videoData.videoList.map((video, index) =>
            `<button class="video-nav-btn ${index === 0 ? 'active' : ''}" data-video-id="${video.videoId}">${video.title}</button>`
        ).join('');

        const firstVideoId = videoData.videoList[0].videoId;

        const playerHTML = `
			<div class="video-container">
                <iframe id="youtube-player" src="https://www.youtube.com/embed/${firstVideoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="video-nav-container">
                ${navButtonsHTML}
            </div>
        `;

        videoDisplay.innerHTML = playerHTML;

        const videoNavButtons = videoDisplay.querySelectorAll('.video-nav-btn');
        videoNavButtons.forEach(button => {
            button.addEventListener('click', () => {
                const videoId = button.getAttribute('data-video-id');
                const playerFrame = document.getElementById('youtube-player');
                playerFrame.src = `https://www.youtube.com/embed/${videoId}`;

                videoNavButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    /**
     * Builds and sets up the interactive content for the 'Others' page.
     * @param {object} othersData - The 'others' data object from pageData.
     */
    function setupOthersPage(othersData) {
        const displayArea = document.getElementById('others-display-area');
        if (!displayArea || !othersData.games || othersData.games.length === 0) return;

        const navButtonsHTML = othersData.games.map((game, index) =>
            `<button class="others-nav-btn ${index === 0 ? 'active' : ''}" data-game-id="${game.id}">${game.title}</button>`
        ).join('');

        const firstGame = othersData.games[0];

        const contentHTML = `
            <div class="others-nav-container">
                ${navButtonsHTML}
            </div>
            <div class="others-content-display">
                
                <div id="others-game-description" class="others-content-text">
                    ${firstGame.description}
                </div>
            </div>
        `;

        displayArea.innerHTML = contentHTML;

        const navButtons = displayArea.querySelectorAll('.others-nav-btn');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const gameId = button.getAttribute('data-game-id');
                const gameData = othersData.games.find(g => g.id === gameId);
                if (!gameData) return;

                document.getElementById('others-game-description').innerHTML = gameData.description;

                navButtons.forEach(btn => btn.classList.remove('active'));
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
            } else if (pageKey === 'others') {
                contentHTML = `${data.intro}<div id="others-display-area"></div>`;
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
            } else if (pageKey === 'others') {
                setupOthersPage(data);
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

    /**
     * Shows or hides the scroll buttons based on the user's scroll position.
     */
    function handleScrollButtons() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop > 200) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }

        if (scrollTop + clientHeight < scrollHeight - 50) {
            scrollToBottomBtn.classList.add('show');
        } else {
            scrollToBottomBtn.classList.remove('show');
        }
    }

     /**
     * Smoothly scrolls the window to the top.
     */
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Smoothly scrolls the window to the bottom.
     */
    function scrollToBottom() {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
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
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) botMessage = "Hello! I'm CipherBot. How can I help you today?";
        if (lowerCaseMessage.includes('cipher')) botMessage = "Cipher is a web developer and digital archivist, passionate about creating new web experiences and preserving classic video games.";
        if (lowerCaseMessage.includes('website') || lowerCaseMessage.includes('project')) botMessage = "Cipher has worked on several projects, including websites for Mega Man Star Force and Ace Combat Zero. You can navigate to the 'Websites' page to see them all.";
        if (lowerCaseMessage.includes('video')) botMessage = "You can find a collection of retro gaming longplays and clips on the 'Videos' page.";
        if (lowerCaseMessage.includes('thank')) botMessage = "You're welcome!";
		if (lowerCaseMessage.includes('how are you')) botMessage = "I'm a set of scripts and code, but I'm functioning perfectly! Thanks for asking. How can I assist you?";
		if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('what can i ask')) botMessage = "You can ask me about Cipher, his web development projects, his video archives, or specific games like 'Mega Man' and 'Ace Combat'.";
		if (lowerCaseMessage.includes('mega man')) botMessage = "Cipher has created two fan websites for the Mega Man Star Force series. You can find links to them on the 'Websites' page.";
		if (lowerCaseMessage.includes('ace combat')) botMessage = "There's an immersive, story-focused website for 'Ace Combat Zero: The Belkan War' in the showcase. He also has longplays of several Ace Combat games in the 'Videos' section.";
		if (lowerCaseMessage.includes('mechwarrior')) botMessage = "Yes, there is a retro-themed tribute site for 'MechWarrior 2: 31st Century Combat'. It even has the classic MIDI soundtrack!";
		if (lowerCaseMessage.includes('skill') || lowerCaseMessage.includes('technolog')) botMessage = "Cipher specializes in front-end web development, creating dynamic and intelligent websites. The projects showcase skills in HTML, CSS, JavaScript, and UI/UX design.";
		if (lowerCaseMessage.includes('contact') || lowerCaseMessage.includes('email')) botMessage = "I don't have access to Cipher's personal contact information. For now, the best way to see his work is by exploring this website.";
		if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) botMessage = "Goodbye! Feel free to ask if you have more questions.";
        
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

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    contentArea.addEventListener('click', (event) => {
        if (event.target.id === 'gemini-submit-btn') {
            handleGeminiPrompt();
        }
    });

    window.addEventListener('scroll', handleScrollButtons);
    backToTopBtn.addEventListener('click', scrollToTop);
    scrollToBottomBtn.addEventListener('click', scrollToBottom);
    
    // Initialize the page
    switchContent('home');
    updateClock();
    setInterval(updateClock, 1000);
});
