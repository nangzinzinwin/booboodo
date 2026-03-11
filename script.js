document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. FULL 10-LANGUAGE DICTIONARY ---
    const translations = {
        en: {
            "nav-tasks": "Tasks", "nav-calendar": "Calendar", "nav-boo": "Boo",
            "menu-header": "Menu",
            "menu-all-tasks": "📝 All Tasks", "menu-starred": "⭐ Starred", "menu-category": "🗂️ Category",
            "menu-create-list": "＋ Create New Category", "menu-theme": "🎨 Theme", "menu-settings": "⚙️ Settings", "menu-signout": "🚪 Sign Out",
            "menu-family": "👨‍👩‍👧‍👦 Family App", "menu-widgets": "🧩 Widgets",
            "lang-select-title": "Select Language", "create-task-title": "Create New Task", "task-input-ph": "What needs to be done?", "save-to-cat": "Save to Category:", "save-to-date": "Due Date:", "cancel-btn": "Cancel", "add-task-btn": "Add Task",
            "tasks-for": "Tasks for ", "cal-sync-soon": "Tap the + button to add an event to this date!",
            "click-login": "Click to login", "support-title": "💖 Support", "support-desc": "Buy me a coffee to keep the app ad-free!", "connect-cal": "📅 Connect Google Calendar",
            "tasks-overview": "Tasks Overview", "completed-tasks": "Completed Tasks", "pending-tasks": "Pending Tasks",
            "community-title": "🌍 Boo Boo Do Community", "community-desc": "Happy users organizing their lives!",
            "settings-title": "Settings", "set-sync": "🔄 Account Sync", "set-notif": "🔔 Notifications", "set-cal": "📅 Sync Calendar", "set-manage": "Manage", "set-lang": "🗣️ Language",
            "set-support": "Support & About", "set-feedback": "💬 Feedback", "set-share": "📤 Share App", "set-follow": "📺 Follow us", "set-privacy": "📜 Privacy Policy", "set-credits": "🖼️ Image Credits", "set-version": "ℹ️ Version",
            "theme-texture": "Texture", "theme-gallery": "Your Gallery", "upload-btn": "🖼️ Upload Image",
            "no-stars": "There are no starred tasks.", "star-hint": "Tap the star icon on a task to save it here!", "more-lang-soon": "More languages will be added later...",
            "habit-btn": "Let us start with some good habits?", "habit-title": "Good Habits", "habit-desc": "Start building a better you today!",
            "hab-water": "Drink water (3x a day)", "hab-meds": "Take medicine", "hab-pray": "Daily Prayer", "hab-yoga": "Meditation & Yoga", "hab-music": "Learn an instrument", "hab-gym": "Go exercising", "hab-sleep": "Go to bed early", "hab-phone": "Less screen time",
            "detail-edit": "Edit Settings", "detail-delete": "Delete Task", "detail-done": "Mark as Done", "detail-undone": "Undo Completion", "detail-hint": "Tap the 3 dots to manage this task.", "detail-stats-title": "Total Completion Status", "detail-total": "Total Day", "detail-streak": "Streak Day", "detail-perf-cal": "Performance Calendar", "next-7-days": "Tasks in Next 7 Days",
            "booboo-says": "Boo Boo says:", "save-progress": "SAVE PROGRESS", "set-time": "Set Time",
            "today-mood": "Today's Mood", "mood-logged": "You are doing your best!", "mood-ask": "How are you feeling today?", "mood-desc": "Take a deep breath. You are doing great.",
            "confirm-signout": "Are you sure you want to sign out?", "yes-signout": "Sign Out"
        },
        my: {
            "nav-tasks": "မှတ်စုများ", "nav-calendar": "ပြက္ခဒိန်", "nav-boo": "အကောင့်",
            "menu-header": "မီနူး", "menu-all-tasks": "📝 မှတ်စုအားလုံး", "menu-starred": "⭐ အရေးကြီးသော", "menu-category": "🗂️ အမျိုးအစား",
            "menu-create-list": "＋ အမျိုးအစားအသစ်", "menu-theme": "🎨 အပြင်အဆင်", "menu-settings": "⚙️ ဆက်တင်များ", "menu-signout": "🚪 ထွက်မည်", "menu-family": "👨‍👩‍👧‍👦 မိသားစု အက်ပ်", "menu-widgets": "🧩 ဝစ်ဂျက်များ",
            "lang-select-title": "ဘာသာစကားရွေးပါ", "create-task-title": "အသစ်ရေးရန်", "task-input-ph": "ဘာလုပ်စရာရှိလဲ?", "save-to-cat": "အမျိုးအစားရွေးပါ-", "save-to-date": "ရက်စွဲ:", "cancel-btn": "ပယ်ဖျက်မည်", "add-task-btn": "မှတ်မည်",
            "tasks-for": "ဒီနေ့အတွက် မှတ်စုများ ", "cal-sync-soon": "+ ကိုနှိပ်ပြီး အသစ်ထည့်ပါ!",
            "click-login": "အကောင့်ဝင်ရန် နှိပ်ပါ", "support-title": "💖 အကူအညီပေးရန်", "support-desc": "ကော်ဖီလေးတစ်ခွက်တိုက်ပြီး ကူညီပေးပါ!", "connect-cal": "📅 Google ပြက္ခဒိန် ချိတ်ဆက်ရန်",
            "tasks-overview": "အကျဉ်းချုပ်", "completed-tasks": "ပြီးစီးသော", "pending-tasks": "ကျန်နေသေးသော",
            "community-title": "🌍 Boo Boo Do အဖွဲ့ဝင်များ", "community-desc": "အသုံးပြုသူအားလုံး ပျော်ရွှင်ကြပါစေ!",
            "settings-title": "ဆက်တင်များ", "set-sync": "🔄 အကောင့်ချိတ်ဆက်ရန်", "set-notif": "🔔 အသိပေးချက်များ", "set-cal": "📅 ပြက္ခဒိန်ချိတ်ဆက်ရန်", "set-manage": "ပြင်ဆင်ရန်", "set-lang": "🗣️ ဘာသာစကား",
            "set-support": "အကူအညီ နှင့် အက်ပ်အကြောင်း", "set-feedback": "💬 အကြံပြုရန်", "set-share": "📤 မျှဝေရန်", "set-follow": "📺 Follow လုပ်ရန်", "set-privacy": "📜 ကိုယ်ရေးကိုယ်တာမူဝါဒ", "set-credits": "🖼️ ပုံအတွက်ကျေးဇူးတင်လွှာ", "set-version": "ℹ️ ဗားရှင်း",
            "theme-texture": "နောက်ခံပုံစံ", "theme-gallery": "သင့်ဖုန်းထဲမှပုံများ", "upload-btn": "🖼️ ပုံထည့်မည်",
            "no-stars": "အရေးကြီးမှတ်စု မရှိသေးပါ။", "star-hint": "အရေးကြီးတဲ့အရာတွေကို ကြယ်လေးနှိပ်ပြီး မှတ်ထားပါ!", "more-lang-soon": "နောက်ပိုင်းမှာ ဘာသာစကားအသစ်တွေ ထပ်ထည့်ပေးသွားပါမယ်...",
            "habit-btn": "အလေ့အကျင့်ကောင်းများ စတင်ကြစို့", "habit-title": "အလေ့အကျင့်ကောင်းများ", "habit-desc": "ဒီနေ့ပဲ စတင်လိုက်ပါ!",
            "hab-water": "ရေသောက်ရန် (၃ ကြိမ်)", "hab-meds": "ဆေးသောက်ရန်", "hab-pray": "ဘုရားရှိခိုးရန်", "hab-yoga": "တရားထိုင် / ယောဂ", "hab-music": "တူရိယာတီးခတ်ရန်", "hab-gym": "လေ့ကျင့်ခန်းလုပ်ရန်", "hab-sleep": "စောစောအိပ်ရန်", "hab-phone": "ဖုန်းသုံးတာလျှော့ရန်",
            "detail-edit": "ပြင်ဆင်ရန်", "detail-delete": "ဖျက်ရန်", "detail-done": "ပြီးပြီဟု မှတ်ရန်", "detail-undone": "မပြီးသေးပါ", "detail-hint": "ပြင်ဆင်ရန် အစက် ၃ စက်ကိုနှိပ်ပါ။", "detail-stats-title": "ပြီးမြောက်မှု အခြေအနေ", "detail-total": "စုစုပေါင်း ရက်", "detail-streak": "ဆက်တိုက် ရက်", "detail-perf-cal": "ပြီးမြောက်မှု ပြက္ခဒိန်", "next-7-days": "လာမည့် ၇ ရက်အတွင်း",
            "booboo-says": "Boo Boo ကပြောသည်:", "save-progress": "သိမ်းဆည်းပါ", "set-time": "အချိန်သတ်မှတ်ရန်",
            "today-mood": "ယနေ့ခံစားချက်", "mood-logged": "အကောင်းဆုံး ကြိုးစားနေပါတယ်!", "mood-ask": "ဒီနေ့ ဘယ်လိုခံစားနေရလဲ?", "mood-desc": "အသက်ပြင်းပြင်းရှူပါ။ အရာရာ အဆင်ပြေပါတယ်။",
            "confirm-signout": "သေချာပြီလား အကောင့်ထွက်မှာလား?", "yes-signout": "ထွက်မည်"
        },
        es: { "nav-tasks": "Tareas", "menu-header": "Menú", "menu-family": "👨‍👩‍👧‍👦 App Familiar", "menu-widgets": "🧩 Widgets", "detail-edit": "Editar", "detail-done": "Marcar", "detail-undone": "Deshacer", "booboo-says": "Boo Boo dice:", "save-progress": "GUARDAR", "confirm-signout": "¿Estás seguro de que quieres salir?", "yes-signout": "Salir" }
    };

    let currentLang = localStorage.getItem('booboodo-lang') || 'en';
    function applyLanguage(lang) {
        const dict = translations[lang] || translations['en'];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) { if(el.tagName === 'INPUT' && el.type === 'text') { el.placeholder = dict[key]; } else { el.textContent = dict[key]; } }
        });
        const langDisplay = document.getElementById('current-lang-display');
        if(langDisplay) {
            const langNames = { en: "English", my: "မြန်မာ", es: "Español", ko: "한국어", zh: "中文", ja: "日本語", th: "ไทย", de: "Deutsch", vi: "Tiếng Việt", hi: "हिन्दी" };
            langDisplay.textContent = langNames[lang] + " >";
        }
    }
    applyLanguage(currentLang);


    // --- 2. BEAUTIFUL CUSTOM ALERTS & PROMPTS ---
    function checkOverlay() {
        const anyOpen = document.querySelectorAll('.custom-modal.show').length > 0;
        if(!anyOpen) document.getElementById('overlay').classList.remove('show');
    }

    function booAlert(msg) {
        document.getElementById('booboo-alert-msg').innerHTML = msg; 
        document.getElementById('booboo-alert').classList.add('show');
        document.getElementById('overlay').classList.add('show');
    }
    const booAlertOkBtn = document.getElementById('booboo-alert-ok');
    if(booAlertOkBtn) booAlertOkBtn.addEventListener('click', () => { document.getElementById('booboo-alert').classList.remove('show'); checkOverlay(); });

    let promptCallback = null;
    function booPrompt(msg, defaultText, callback) {
        document.getElementById('booboo-prompt-msg').textContent = msg;
        document.getElementById('booboo-prompt-input').value = defaultText || "";
        promptCallback = callback;
        document.getElementById('booboo-prompt').classList.add('show');
        document.getElementById('overlay').classList.add('show');
        document.getElementById('booboo-prompt-input').focus();
    }
    const booPromptOkBtn = document.getElementById('booboo-prompt-ok');
    if(booPromptOkBtn) booPromptOkBtn.addEventListener('click', () => {
        const val = document.getElementById('booboo-prompt-input').value;
        document.getElementById('booboo-prompt').classList.remove('show'); checkOverlay();
        if(promptCallback) promptCallback(val);
    });
    const booPromptCancelBtn = document.getElementById('booboo-prompt-cancel');
    if(booPromptCancelBtn) booPromptCancelBtn.addEventListener('click', () => {
        document.getElementById('booboo-prompt').classList.remove('show'); checkOverlay();
        if(promptCallback) promptCallback(null);
    });

    let confirmCallback = null;
    function booConfirm(msg, callback) {
        document.getElementById('booboo-confirm-msg').textContent = msg;
        confirmCallback = callback;
        document.getElementById('booboo-confirm').classList.add('show');
        document.getElementById('overlay').classList.add('show');
    }
    const confirmOkBtn = document.getElementById('booboo-confirm-yes');
    if(confirmOkBtn) confirmOkBtn.addEventListener('click', () => {
        document.getElementById('booboo-confirm').classList.remove('show'); checkOverlay();
        if(confirmCallback) confirmCallback(true);
    });
    const confirmCancelBtn = document.getElementById('booboo-confirm-cancel');
    if(confirmCancelBtn) confirmCancelBtn.addEventListener('click', () => {
        document.getElementById('booboo-confirm').classList.remove('show'); checkOverlay();
        if(confirmCallback) confirmCallback(false);
    });


    // --- 3. GLOBAL DATE LOGIC ---
    let globalSelectedDate = ""; 
    function getTodayString() {
        const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    }
    globalSelectedDate = getTodayString();


    // --- 4. MOOD TRACKER LOGIC ---
    const moodModal = document.getElementById('mood-modal');
    const profileMoodDisplay = document.getElementById('profile-mood-display');
    const savedMoodToday = localStorage.getItem('booboodo-mood-' + globalSelectedDate);

    if (!savedMoodToday && moodModal) {
        setTimeout(() => { moodModal.classList.add('show'); document.getElementById('overlay').classList.add('show'); }, 1000);
    } else if (savedMoodToday && profileMoodDisplay) {
        profileMoodDisplay.textContent = savedMoodToday;
    }

    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedMood = e.target.getAttribute('data-mood') || e.target.textContent;
            localStorage.setItem('booboodo-mood-' + globalSelectedDate, selectedMood);
            if(profileMoodDisplay) profileMoodDisplay.textContent = selectedMood;
            moodModal.classList.remove('show'); checkOverlay();
            setTimeout(() => { booAlert("Mood saved! Remember, Boo Boo is always here for you. 💕"); }, 300);
        });
    });


    // --- 5. SIDEBAR LOGIC & SWIPE ---
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    function toggleSidebar() { sidebar.classList.toggle('open'); overlay.classList.toggle('show'); }
    if(menuBtn) menuBtn.addEventListener('click', toggleSidebar);
    if(overlay) overlay.addEventListener('click', () => { if (sidebar.classList.contains('open')) toggleSidebar(); });

    let touchStartX = 0; let touchEndX = 0; const swipeThreshold = 50; 
    document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; });
    document.addEventListener('touchend', e => { 
        touchEndX = e.changedTouches[0].screenX; 
        if (touchEndX - touchStartX > swipeThreshold && touchStartX < 40) { if (!sidebar.classList.contains('open')) toggleSidebar(); }
        if (touchStartX - touchEndX > swipeThreshold) { if (sidebar.classList.contains('open')) toggleSidebar(); }
    });

    const navItems = document.querySelectorAll('.nav-item');
    const backBtns = document.querySelectorAll('.back-to-tasks-btn');
    const screens = { 
        'nav-tasks': document.getElementById('tasks-screen'), 'nav-calendar': document.getElementById('calendar-screen'), 'nav-profile': document.getElementById('profile-screen'), 
        'settings': document.getElementById('settings-screen'), 'theme': document.getElementById('theme-screen'), 'widgets': document.getElementById('widgets-screen'), 
        'starred': document.getElementById('starred-screen'), 'habit-detail': document.getElementById('habit-detail-screen') 
    };
    
    history.replaceState({ screen: 'nav-tasks' }, '', '#tasks');

    function showScreen(screenId, addToHistory = true) {
        Object.values(screens).forEach(screen => { if(screen) screen.style.display = 'none'; });
        if(screens[screenId]) screens[screenId].style.display = 'block';
        navItems.forEach(nav => nav.classList.remove('active'));
        const activeNav = document.getElementById(screenId); if (activeNav) activeNav.classList.add('active');
        if (addToHistory) { history.pushState({ screen: screenId }, '', '#' + screenId.replace('nav-', '')); }
    }

    window.addEventListener('popstate', (e) => {
        const modals = document.querySelectorAll('.custom-modal');
        let modalOpen = false; modals.forEach(m => { if(m.classList.contains('show')) modalOpen = true; m.classList.remove('show'); });
        if (sidebar.classList.contains('open') || modalOpen) { sidebar.classList.remove('open'); overlay.classList.remove('show'); history.pushState(e.state, '', window.location.hash); return; }
        if (e.state && e.state.screen) { showScreen(e.state.screen, false); } else { showScreen('nav-tasks', false); }
    });

    navItems.forEach(item => { item.addEventListener('click', () => { showScreen(item.id); if(item.id === 'nav-calendar') { renderCalendar(); renderCalendarTasks(globalSelectedDate); } if(item.id === 'nav-profile') { updateStats(); } }); });
    
    backBtns.forEach(btn => { 
        btn.addEventListener('click', () => {
            const editSec = document.getElementById('task-edit-section');
            if(editSec && editSec.style.display === 'block') { editSec.style.display = 'none'; document.getElementById('task-stats-section').style.display = 'block'; } else { history.back(); }
        }); 
    });

    const openSettingsBtn = document.getElementById('open-settings-btn'); if(openSettingsBtn) openSettingsBtn.addEventListener('click', () => { toggleSidebar(); showScreen('settings'); });
    const openThemeBtn = document.getElementById('open-theme-btn'); if(openThemeBtn) openThemeBtn.addEventListener('click', () => { toggleSidebar(); showScreen('theme'); });
    const openWidgetsBtn = document.getElementById('open-widgets-btn'); if(openWidgetsBtn) openWidgetsBtn.addEventListener('click', () => { toggleSidebar(); showScreen('widgets'); });
    const openStarredBtn = document.getElementById('open-starred-btn'); if(openStarredBtn) openStarredBtn.addEventListener('click', () => { toggleSidebar(); showScreen('starred'); renderStarredTasks(); });
    const menuAllTasksBtn = document.getElementById('menu-all-tasks'); if(menuAllTasksBtn) menuAllTasksBtn.addEventListener('click', () => { toggleSidebar(); setCategoryFilter('All'); showScreen('nav-tasks'); });

    const familyAppBtn = document.getElementById('family-app-btn');
    if(familyAppBtn) familyAppBtn.addEventListener('click', () => { toggleSidebar(); booAlert("👨‍👩‍👧‍👦 Family App is coming soon!\n\nThis will be a brand new app create by me later, where you can link accounts and share things with your family! Stay tuned! 💕"); });

    document.querySelectorAll('.widget-add-btn').forEach(btn => {
        btn.addEventListener('click', () => { booAlert("📱 Native Home Screen Widgets require the official Android App version of Boo Boo Do!\n\nI am working hard to build the Android App (APK) soon. For now, enjoy this sneak peek of how they will look!"); });
    });


    // --- 6. THEME LOGIC ---
    const sunMoonToggle = document.getElementById('theme-toggle'); 
    let savedTheme = localStorage.getItem('booboodo-theme') || 'default';
    let lastLightTheme = localStorage.getItem('booboodo-last-light') || 'default';
    
    if(sunMoonToggle) {
        if(savedTheme === 'dark' || savedTheme.includes('night') || savedTheme.includes('starry')) { sunMoonToggle.textContent = '☀️'; } else { sunMoonToggle.textContent = '🌙'; }
        sunMoonToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (!currentTheme.includes('dark') && !currentTheme.includes('night') && !currentTheme.includes('starry')) { document.documentElement.setAttribute('data-theme', 'dark'); localStorage.setItem('booboodo-theme', 'dark'); sunMoonToggle.textContent = '☀️'; } 
            else { document.documentElement.setAttribute('data-theme', lastLightTheme); localStorage.setItem('booboodo-theme', lastLightTheme); sunMoonToggle.textContent = '🌙'; }
        });
    }

    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const chosenTheme = option.getAttribute('data-theme-choice'); document.documentElement.setAttribute('data-theme', chosenTheme); localStorage.setItem('booboodo-theme', chosenTheme);
            if(!chosenTheme.includes('dark') && !chosenTheme.includes('night') && !chosenTheme.includes('starry')) { localStorage.setItem('booboodo-last-light', chosenTheme); lastLightTheme = chosenTheme; if(sunMoonToggle) sunMoonToggle.textContent = '🌙'; } else { if(sunMoonToggle) sunMoonToggle.textContent = '☀️'; }
        });
    });

    const bgUploadInput = document.getElementById('custom-bg-upload'); const triggerUploadBtn = document.getElementById('trigger-upload-btn'); const customBgPreview = document.getElementById('custom-bg-preview');
    if (triggerUploadBtn) triggerUploadBtn.addEventListener('click', () => { if(bgUploadInput) bgUploadInput.click(); });
    if (bgUploadInput) bgUploadInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                try { localStorage.setItem('booboodo-custom-bg', imageUrl); } catch(err) {}
                document.documentElement.style.setProperty('--custom-user-image', `url(${imageUrl})`); 
                if(customBgPreview) { customBgPreview.style.backgroundImage = `url(${imageUrl})`; customBgPreview.style.display = 'block'; }
                document.documentElement.setAttribute('data-theme', 'custom-user-bg'); localStorage.setItem('booboodo-theme', 'custom-user-bg');
            }; reader.readAsDataURL(file);
        }
    });

    // --- 7. SETTINGS & SUPPORT ---
    const feedbackBtn = document.getElementById('feedback-btn'); const shareAppBtn = document.getElementById('share-app-btn');
    const privacyBtn = document.getElementById('privacy-btn'); const creditsBtn = document.getElementById('credits-btn');
    const languageBtn = document.getElementById('language-btn'); const languageModal = document.getElementById('language-modal');
    const closeLangBtn = document.getElementById('close-lang-btn'); const followUsBtn = document.getElementById('follow-us-btn');
    const sidebarSupportBtn = document.getElementById('sidebar-support-btn');

    if(followUsBtn) followUsBtn.addEventListener('click', () => { window.open('https://youtube.com/@nangzzw?si=WAf_oaq_RhZq2alz', '_blank'); });
    if(feedbackBtn) feedbackBtn.addEventListener('click', () => { const a = document.createElement('a'); a.href = "mailto:nangzinzinwin04@gmail.com?subject=Feedback for Boo Boo Do App"; a.target = "_blank"; document.body.appendChild(a); a.click(); document.body.removeChild(a); }); 
    if(shareAppBtn) shareAppBtn.addEventListener('click', async () => { if (navigator.share) { try { await navigator.share({ title: 'Boo Boo Do', text: 'Organize your life with this cute app!', url: 'https://booboodo.app' }); } catch (err) {} } else { booAlert("Native sharing is not supported on this browser."); } }); 
    if(languageBtn) languageBtn.addEventListener('click', () => { if(languageModal) { languageModal.classList.add('show'); overlay.classList.add('show'); } }); 
    if(closeLangBtn) closeLangBtn.addEventListener('click', () => { if(languageModal) { languageModal.classList.remove('show'); checkOverlay(); } }); 
    
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang'); currentLang = selectedLang; localStorage.setItem('booboodo-lang', selectedLang); applyLanguage(selectedLang);
            renderCategoryPills(); renderCategoryDropdown(); if(languageModal) languageModal.classList.remove('show'); checkOverlay();
        });
    });

    if(privacyBtn) privacyBtn.addEventListener('click', () => { booAlert("Privacy Policy:\n\nYour data is 100% private and saved locally on your device. We do not track you!"); }); 
    if(creditsBtn) creditsBtn.addEventListener('click', () => { booAlert("Image Credits:\n\nThank you to the amazing artists on Pinterest, Unsplash, and Freepik for making Boo Boo Do beautiful! 🎨✨"); }); 
    if (sidebarSupportBtn) sidebarSupportBtn.addEventListener('click', () => { toggleSidebar(); booAlert("Thank you so much! 💖 When the app goes live, this will link to your Ko-fi or BuyMeACoffee page."); }); 
    document.querySelectorAll('.toggle-btn').forEach(btn => { btn.addEventListener('click', () => { btn.classList.toggle('active'); btn.textContent = btn.classList.contains('active') ? 'On' : 'Off'; }); });


    // --- 8. CATEGORY LOGIC ---
    let myCategories = ['Health', 'Personal', 'Work', 'Study', 'Wishlist']; 
    try { const savedCats = JSON.parse(localStorage.getItem('booboodoCategories')); if(savedCats && Array.isArray(savedCats) && savedCats.length > 0) { myCategories = savedCats; } } catch(e) {} 
    
    let currentFilter = 'All'; 
    const categoryFiltersContainer = document.getElementById('category-filters');
    const taskCategorySelect = document.getElementById('new-task-category');
    const toggleCategoryBtn = document.getElementById('toggle-category-btn');
    const categoryFolder = document.getElementById('category-folder');
    const categoryArrow = document.getElementById('category-arrow');
    const sidebarCategoriesList = document.getElementById('sidebar-categories-list');
    const addNewCategoryBtn = document.getElementById('add-new-category-btn');

    if(toggleCategoryBtn && categoryFolder && categoryArrow) {
        toggleCategoryBtn.addEventListener('click', () => {
            categoryFolder.classList.toggle('open');
            if(categoryFolder.classList.contains('open')) { categoryArrow.style.transform = 'rotate(180deg)'; } else { categoryArrow.style.transform = 'rotate(0deg)'; }
        });
    }

    function renderCategoryPills() {
        if(!categoryFiltersContainer) return;
        categoryFiltersContainer.innerHTML = '';
        const allText = translations[currentLang] && translations[currentLang]["menu-all-tasks"] ? translations[currentLang]["menu-all-tasks"].replace('📝 ', '') : 'All';
        const allPill = document.createElement('button'); allPill.className = `cat-pill ${currentFilter === 'All' ? 'active' : ''}`; allPill.textContent = allText; allPill.addEventListener('click', () => setCategoryFilter('All')); categoryFiltersContainer.appendChild(allPill);
        myCategories.forEach(cat => { const pill = document.createElement('button'); pill.className = `cat-pill ${currentFilter === cat ? 'active' : ''}`; pill.textContent = cat; pill.addEventListener('click', () => setCategoryFilter(cat)); categoryFiltersContainer.appendChild(pill); });
    }
    function renderCategoryDropdown() {
        if(!taskCategorySelect) return;
        taskCategorySelect.innerHTML = `<option value="None">No Category</option>`;
        myCategories.forEach(cat => { taskCategorySelect.innerHTML += `<option value="${cat}">${cat}</option>`; });
    }
    function renderSidebarCategories() {
        if(!sidebarCategoriesList) return;
        sidebarCategoriesList.innerHTML = '';
        let allTasks = []; try { allTasks = JSON.parse(localStorage.getItem('booboodoTasks')) || []; } catch(e){}
        const allCountEl = document.getElementById('sidebar-all-count'); const starCountEl = document.getElementById('sidebar-star-count');
        if(allCountEl) allCountEl.textContent = allTasks.length; if(starCountEl) starCountEl.textContent = allTasks.filter(t => t.starred).length;

        myCategories.forEach(cat => {
            const count = allTasks.filter(t => t.category === cat).length;
            const li = document.createElement('li'); li.className = 'sidebar-item'; li.innerHTML = `📑 ${cat} <span class="sidebar-badge">${count}</span>`;
            li.addEventListener('click', () => { setCategoryFilter(cat); toggleSidebar(); showScreen('nav-tasks'); }); sidebarCategoriesList.appendChild(li);
        });
    }
    function setCategoryFilter(catName) {
        currentFilter = catName; renderCategoryPills(); 
        document.querySelectorAll('#task-list li').forEach(li => { if (currentFilter === 'All' || li.dataset.category === currentFilter) { li.style.display = 'flex'; } else { li.style.display = 'none'; } });
    }
    
    if(addNewCategoryBtn) {
        addNewCategoryBtn.addEventListener('click', () => {
            booPrompt("Enter new Category name:", "", (newCat) => {
                if (newCat && newCat.trim() !== '') {
                    myCategories.push(newCat.trim()); try { localStorage.setItem('booboodoCategories', JSON.stringify(myCategories)); } catch(e){}
                    renderCategoryPills(); renderCategoryDropdown(); renderSidebarCategories();
                }
            });
        });
    }
    renderCategoryPills(); renderCategoryDropdown();

    // --- 9. GOOGLE API SYNC MAGIC ---
    const GOOGLE_CLIENT_ID = '340484669276-2vmhnu567lnv2c20bunhj5oh28t00gp6.apps.googleusercontent.com';
    let tokenClient;

    function initGoogleClient() {
        if (!tokenClient && window.google && window.google.accounts) {
            tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: GOOGLE_CLIENT_ID,
                scope: 'https://www.googleapis.com/auth/calendar.events',
                callback: (tokenResponse) => {
                    if (tokenResponse && tokenResponse.access_token) {
                        localStorage.setItem('booboodo-gcal-token', tokenResponse.access_token);
                        updateProfileUI(true);
                        booAlert("🎉 Google Calendar Connected Successfully!\n\nWhenever you create a new task, Boo Boo will now instantly send it to your real Google Calendar!");
                    } else if (tokenResponse.error) {
                        booAlert("Google Sign-In Error 400 🛑\n\nGoogle blocked the login because i am testing on 'localhost' or a private editor. This will work perfectly once uploaded to my live GitHub link!");
                    }
                },
                error_callback: () => {
                    booAlert("Google Sign-In Error 400 🛑\n\nGoogle blocked the login because I am testing on Spck Editor. Upload my code to my live GitHub link to login successfully!");
                }
            });
        }
        return tokenClient;
    }

    function updateProfileUI(isLoggedIn) {
        const authBtn = document.getElementById('authorize_button');
        const signoutBtn = document.getElementById('signout_button');
        const userName = document.querySelector('.user-info h3');
        const userDesc = document.querySelector('.user-info p');
        const settingsSyncBtn = document.querySelector('#sync-calendar-btn .action-btn'); 
        
        if(isLoggedIn) {
            if(authBtn) authBtn.style.display = 'none';
            if(signoutBtn) signoutBtn.style.display = 'flex'; 
            if(userName) userName.textContent = "VIP Synced User";
            if(userDesc) userDesc.textContent = "📅 Google Calendar Active";
            if(settingsSyncBtn) { settingsSyncBtn.textContent = "Connected ✅"; settingsSyncBtn.style.color = "var(--primary-btn)"; }
        } else {
            if(authBtn) authBtn.style.display = 'flex';
            if(signoutBtn) signoutBtn.style.display = 'none';
            if(userName) userName.textContent = "Boo Boo Do User";
            if(userDesc) userDesc.textContent = "Click to login";
            if(settingsSyncBtn) { settingsSyncBtn.textContent = "Manage"; settingsSyncBtn.style.color = "var(--completed-text)"; }
        }
    }

    if (localStorage.getItem('booboodo-gcal-token')) { updateProfileUI(true); }

    const authBtnEl = document.getElementById('authorize_button');
    if(authBtnEl) {
        authBtnEl.addEventListener('click', () => {
            const client = initGoogleClient();
            if (client) { client.requestAccessToken({prompt: 'consent'}); } 
            else { booAlert("Google Security module is still loading. Please wait 2 seconds and try again!"); }
        });
    }

    const syncCalendarSettingBtn = document.getElementById('sync-calendar-btn');
    if(syncCalendarSettingBtn) {
        syncCalendarSettingBtn.addEventListener('click', () => {
            if (localStorage.getItem('booboodo-gcal-token')) {
                booAlert("Your Google Calendar is already connected! 🌟\n\nTo disconnect, please go to your Boo Profile page.");
            } else {
                const client = initGoogleClient();
                if (client) { client.requestAccessToken({prompt: 'consent'}); } 
                else { booAlert("Google Security module is still loading. Please wait 2 seconds and try again!"); }
            }
        });
    }

    function performSignOut() {
        const token = localStorage.getItem('booboodo-gcal-token');
        if (token && window.google) {
            google.accounts.oauth2.revoke(token, () => {
                localStorage.removeItem('booboodo-gcal-token');
                updateProfileUI(false);
                booAlert("Disconnected from Google Calendar.");
            });
        } else {
            localStorage.removeItem('booboodo-gcal-token');
            updateProfileUI(false);
            booAlert("You are already signed out!");
        }
    }

    const signoutBtnEl = document.getElementById('signout_button');
    if(signoutBtnEl) {
        signoutBtnEl.addEventListener('click', () => {
            const confirmMsg = translations[currentLang] && translations[currentLang]["confirm-signout"] ? translations[currentLang]["confirm-signout"] : "Are you sure you want to sign out?";
            booConfirm(confirmMsg, (confirmed) => {
                if(confirmed) performSignOut();
            });
        });
    }
    
    const sidebarSignoutBtn = document.getElementById('sidebar-signout-btn');
    if(sidebarSignoutBtn) {
        sidebarSignoutBtn.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) toggleSidebar(); 
            setTimeout(() => {
                const confirmMsg = translations[currentLang] && translations[currentLang]["confirm-signout"] ? translations[currentLang]["confirm-signout"] : "Are you sure you want to sign out?";
                booConfirm(confirmMsg, (confirmed) => {
                    if(confirmed) performSignOut();
                });
            }, 300);
        });
    }

    async function syncToGoogleCalendar(taskText, dateString) {
        const token = localStorage.getItem('booboodo-gcal-token');
        if (!token) return; 

        const event = {
            'summary': `Boo Boo Do: ${taskText}`,
            'description': 'This task was scheduled using your beautiful Boo Boo Do planner! 👾✨',
            'start': { 'date': dateString },
            'end': { 'date': dateString }
        };

        try {
            const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                body: JSON.stringify(event)
            });
            
            if (response.status === 401 || response.status === 403) {
                localStorage.removeItem('booboodo-gcal-token'); updateProfileUI(false);
                booAlert("Your Google connection expired! Please go to your Profile and connect it again.");
            } else if (response.ok) {
                console.log("Successfully beamed to Google Calendar! 🚀");
            }
        } catch (e) { console.error("GCal Sync Error:", e); }
    }


    // --- 10. MAIN TASK LOGIC ---
    const fabAddTask = document.getElementById('fab-add-task');
    const addTaskModal = document.getElementById('add-task-modal');
    const taskInput = document.getElementById('new-task-input');
    const taskDateInput = document.getElementById('new-task-date');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    function updateStats() {
        let tasks = []; try { tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || []; } catch(e){}
        const completedTasks = tasks.filter(task => task.completed).length; 
        const pendingTasks = tasks.filter(task => !task.completed).length;
        
        const completedEl = document.getElementById('completed-count'); const pendingEl = document.getElementById('pending-count');
        if (completedEl && pendingEl) { completedEl.textContent = completedTasks; pendingEl.textContent = pendingTasks; }
        
        const today = new Date(); today.setHours(0,0,0,0);
        const nextWeek = new Date(today); nextWeek.setDate(today.getDate() + 7);
        
        let upcomingCount = 0;
        tasks.forEach(t => {
            if(!t.completed && t.date) {
                const tDate = new Date(t.date); tDate.setHours(0,0,0,0);
                if(tDate >= today && tDate <= nextWeek) upcomingCount++;
            }
        });
        
        const h4s = document.querySelectorAll('.extra-stats-card h4');
        let sevenDaysP = null;
        h4s.forEach(h => { if(h.getAttribute('data-i18n') === 'next-7-days') sevenDaysP = h.nextElementSibling; });
        if(sevenDaysP) {
            sevenDaysP.textContent = `You have ${upcomingCount} tasks coming up soon!`;
            sevenDaysP.style.color = "var(--primary-btn)";
            sevenDaysP.style.fontWeight = "bold";
        }
        
        renderSidebarCategories(); 
    }

    function openModal() {
        if(overlay) overlay.classList.add('show');
        if(addTaskModal) addTaskModal.classList.add('show');
        if(taskInput) taskInput.focus();
        if(taskDateInput) taskDateInput.value = globalSelectedDate || getTodayString();
    }

    if(fabAddTask) fabAddTask.addEventListener('click', openModal);
    const calendarFab = document.getElementById('calendar-fab');
    if(calendarFab) calendarFab.addEventListener('click', openModal);
    
    const cancelTaskBtn = document.getElementById('cancel-task-btn');
    if(cancelTaskBtn) cancelTaskBtn.addEventListener('click', () => { 
        if(addTaskModal) addTaskModal.classList.remove('show'); 
        checkOverlay(); 
        if(taskInput) taskInput.value = ''; 
    });

    const openHabitBtn = document.getElementById('open-habit-btn');
    const habitModal = document.getElementById('habit-modal');
    if(openHabitBtn) { openHabitBtn.addEventListener('click', () => { if(habitModal) habitModal.classList.add('show'); if(overlay) overlay.classList.add('show'); }); }
    const closeHabitBtn = document.getElementById('close-habit-btn');
    if(closeHabitBtn) { closeHabitBtn.addEventListener('click', () => { if(habitModal) habitModal.classList.remove('show'); checkOverlay(); }); }

    // THE SMALLER, CUTER QUICK TIPS HTML STRING
    const quickTipsHTML = `
        <b style="font-size: 13px;">Awesome! Task Added! 🌟</b><br><br>
        <div style="background: var(--input-bg); padding: 8px; border-radius: 10px; font-size: 11px; color: var(--text-color); text-align: left; border: 1px dashed var(--border-color); line-height: 1.4;">
            <b>💡 Quick Tips:</b><br>
            👉 <b>Swipe Right</b> to Complete<br>
            👈 <b>Swipe Left</b> to Delete<br>
            👆 <b>Tap a task</b> for Details
        </div>
    `;

    document.querySelectorAll('.habit-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const habitText = e.currentTarget.getAttribute('data-habit');
            const habitCat = e.currentTarget.getAttribute('data-cat');
            if(!myCategories.includes(habitCat)) { myCategories.push(habitCat); try { localStorage.setItem('booboodoCategories', JSON.stringify(myCategories)); } catch(err){} renderCategoryPills(); renderCategoryDropdown(); renderSidebarCategories(); }
            
            let defaultTimes = [];
            if(habitText.toLowerCase().includes('water')) defaultTimes = ['08:00 am', '12:00 pm', '06:00 pm'];
            else if(habitText.toLowerCase().includes('medicine')) defaultTimes = ['08:30 am', '06:30 pm'];
            else defaultTimes = ['08:00 am'];

            renderTask({text: habitText, completed: false, starred: false, category: habitCat, date: globalSelectedDate, totalDays: 0, streakDays: 0, times: defaultTimes}); 
            saveTasks();
            
            syncToGoogleCalendar(habitText, globalSelectedDate);
            
            if(habitModal) habitModal.classList.remove('show'); checkOverlay();
            
            booAlert(quickTipsHTML); 
        });
    });

    function saveTasks() {
        const tasks = [];
        if(taskList) {
            document.querySelectorAll('#task-list li').forEach(li => {
                if (!li.classList.contains('fade-out')) {
                    let existingTotal = parseInt(li.dataset.totalDays || 0); let existingStreak = parseInt(li.dataset.streakDays || 0);
                    let existingTimes = li.dataset.times ? li.dataset.times.split(',') : [];
                    tasks.push({
                        text: li.querySelector('.task-text').childNodes[0].nodeValue.trim(), 
                        completed: li.querySelector('.complete-checkbox').checked,
                        starred: li.dataset.starred === 'true', category: li.dataset.category,
                        date: li.dataset.date || getTodayString(), 
                        totalDays: existingTotal, streakDays: existingStreak, times: existingTimes
                    });
                }
            });
            localStorage.setItem('booboodoTasks', JSON.stringify(tasks));
        }
        updateStats(); 
        const calScreen = document.getElementById('calendar-screen');
        if(calScreen && calScreen.style.display === 'block') { renderCalendarTasks(globalSelectedDate); renderCalendar(); }
    }

    function renderTask(taskObj, isStarredView = false) {
        const targetList = isStarredView ? document.getElementById('starred-task-list') : document.getElementById('task-list');
        if(!targetList) return;

        const li = document.createElement('li');
        li.dataset.starred = taskObj.starred; li.dataset.category = taskObj.category || 'None'; 
        li.dataset.totalDays = taskObj.totalDays || 0; li.dataset.streakDays = taskObj.streakDays || 0;
        li.dataset.date = taskObj.date || getTodayString(); 
        li.dataset.times = taskObj.times && taskObj.times.length > 0 ? taskObj.times.join(',') : '';

        const starIcon = taskObj.starred === true || taskObj.starred === 'true' ? '⭐' : '☆';
        const checkboxState = taskObj.completed ? 'checked' : '';
        const cleanText = taskObj.text.replace(/<span.*<\/span>/, '').trim();

        li.innerHTML = `<div style="display: flex; align-items: center; width: 100%;">
            <input type="checkbox" class="complete-checkbox" ${checkboxState} style="margin-right: 12px; transform: scale(1.2); accent-color: var(--primary-btn);">
            <span class="task-text ${taskObj.completed ? 'completed' : ''}" style="flex: 1; font-size: 15px; color: var(--task-text); cursor: pointer;">${cleanText}</span>
            <button class="star-btn" style="background: none; border: none; font-size: 20px; cursor: pointer; padding: 0 5px; color: var(--text-color);">${starIcon}</button></div>`;
        
        if (!isStarredView && currentFilter !== 'All' && currentFilter !== li.dataset.category) { li.style.display = 'none'; }
        
        let startX = 0; let currentX = 0;
        li.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
        li.addEventListener('touchmove', e => {
            currentX = e.touches[0].clientX - startX;
            if(currentX > 150) currentX = 150; 
            if(currentX < -150) currentX = -150;
            li.style.transform = `translateX(${currentX}px)`;
            if(currentX > 60) li.style.backgroundColor = '#c8e6c9'; 
            else if(currentX < -60) li.style.backgroundColor = '#ffcdd2'; 
            else li.style.backgroundColor = 'var(--container-bg)';
        });
        li.addEventListener('touchend', e => {
            li.style.transform = `translateX(0px)`;
            li.style.backgroundColor = 'var(--container-bg)';
            if(currentX > 100) { 
                const cb = li.querySelector('.complete-checkbox');
                if(cb) cb.click(); 
            } else if (currentX < -100) {
                li.classList.add('fade-out');
                setTimeout(() => { li.remove(); saveTasks(); }, 400);
            }
            currentX = 0;
        });

        targetList.appendChild(li);
    }

    function loadTasks() {
        let savedTasks = JSON.parse(localStorage.getItem('booboodoTasks'));
        
        if (savedTasks === null) {
            savedTasks = [
                { text: "👈 Swipe me left to delete!", completed: false, starred: false, category: "Personal", date: globalSelectedDate, totalDays: 0, streakDays: 0, times: [] },
                { text: "👉 Swipe me right to complete!", completed: false, starred: false, category: "Personal", date: globalSelectedDate, totalDays: 0, streakDays: 0, times: [] },
                { text: "👆 Tap me to edit details and set a reminder!", completed: false, starred: true, category: "Personal", date: globalSelectedDate, totalDays: 0, streakDays: 0, times: ['08:00 am'] }
            ];
            localStorage.setItem('booboodoTasks', JSON.stringify(savedTasks));
        }
        
        savedTasks.forEach(task => { renderTask(task, false); });
    }

    function renderStarredTasks() {
        const starredTaskList = document.getElementById('starred-task-list');
        const emptyStarredState = document.getElementById('empty-starred-state');
        if(!starredTaskList) return;
        
        starredTaskList.innerHTML = '';
        let tasks = []; try { tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || []; } catch(e){}
        const starredTasks = tasks.filter(t => t.starred === true || t.starred === 'true');
        
        if (starredTasks.length === 0) { if(emptyStarredState) emptyStarredState.style.display = 'block'; } 
        else { if(emptyStarredState) emptyStarredState.style.display = 'none'; starredTasks.forEach(task => { renderTask(task, true); }); }
    }

    loadTasks(); updateStats(); 

    if(addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            const taskText = taskInput ? taskInput.value.trim() : ""; 
            const selectedCat = taskCategorySelect ? taskCategorySelect.value : "None"; 
            const selectedDate = taskDateInput ? taskDateInput.value : globalSelectedDate; 
            if (taskText !== '') { 
                renderTask({text: taskText, completed: false, starred: false, category: selectedCat, date: selectedDate, totalDays: 0, streakDays: 0, times: ['08:00 am']}); 
                saveTasks(); 
                syncToGoogleCalendar(taskText, selectedDate);
                
                booAlert(quickTipsHTML); 
            }
            if(taskInput) taskInput.value = ''; 
            if(addTaskModal) addTaskModal.classList.remove('show'); 
        });
    }

    // --- 11. TASK DETAIL, STREAKS & DYNAMIC INTERACTIVE BARS ---
    let currentActiveTaskText = ""; 
    const habitOptionsBtn = document.getElementById('habit-options-btn');
    const habitOptionsMenu = document.getElementById('habit-options-menu');
    const taskStatsSection = document.getElementById('task-stats-section');
    const taskEditSection = document.getElementById('task-edit-section');
    const editPhraseInput = document.getElementById('edit-phrase-input');
    const reminderTimeContainer = document.getElementById('reminder-time-container');

    function handleTaskClick(event) {
        const target = event.target;
        const li = target.closest('li');
        if (!li) return; 
        const taskTextSpan = li.querySelector('.task-text');

        if (target.classList.contains('complete-checkbox')) {
            let taskString = taskTextSpan.childNodes[0].nodeValue; 
            let match = taskString.match(/\((\d+)\/(\d+)\)/);
            if (match && target.checked) {
                let current = parseInt(match[1]); let max = parseInt(match[2]);
                if (current < max) {
                    current++;
                    taskTextSpan.childNodes[0].nodeValue = taskString.replace(/\(\d+\/\d+\)/, `(${current}/${max}) `);
                    if (current < max) { target.checked = false; booAlert(`Great job! You have completed ${current} out of ${max} times! Keep going! 💧`); } 
                    else { taskTextSpan.classList.add('completed'); booAlert(`Amazing! You fully completed this habit! 🎉`); }
                    saveTasks(); return; 
                }
            }
            if (target.checked) taskTextSpan.classList.add('completed'); else taskTextSpan.classList.remove('completed');
            saveTasks(); return;
        }
        
        if (target.classList.contains('star-btn')) {
            const isStarred = li.dataset.starred === 'true'; li.dataset.starred = !isStarred; 
            target.textContent = !isStarred ? '⭐' : '☆'; 
            saveTasks(); 
            if(document.getElementById('starred-screen') && document.getElementById('starred-screen').style.display === 'block') { renderStarredTasks(); }
            return;
        }

        if (target.classList.contains('task-text') || target === li) {
            const cleanText = taskTextSpan.childNodes[0].nodeValue.trim();
            currentActiveTaskText = cleanText; 
            
            const detailTitle = document.getElementById('habit-detail-title');
            if(detailTitle) detailTitle.textContent = cleanText;

            let icon = '📝';
            if(cleanText.toLowerCase().includes('water')) { icon = '💧'; }
            else if(cleanText.toLowerCase().includes('medicine')) { icon = '💊'; }
            else if(cleanText.toLowerCase().includes('pray')) { icon = '🙏'; }
            else if(cleanText.toLowerCase().includes('yoga')) { icon = '🧘‍♀️'; }
            else if(cleanText.toLowerCase().includes('exercis')) { icon = '🏋️'; }
            
            const detailIcon = document.getElementById('habit-detail-icon');
            if(detailIcon) detailIcon.textContent = icon;
            
            let tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || [];
            let foundTask = tasks.find(t => t.text === currentActiveTaskText);
            
            let total = foundTask && foundTask.totalDays ? foundTask.totalDays : 0;
            let streak = foundTask && foundTask.streakDays ? foundTask.streakDays : 0;
            let timesArr = foundTask && foundTask.times ? foundTask.times : [];
            
            const detailSub = document.getElementById('habit-detail-subtitle');
            if(detailSub) {
                if(timesArr.length > 0) { detailSub.textContent = "Reminder at " + timesArr.join(', '); } 
                else { detailSub.textContent = translations[currentLang]["detail-hint"] || "Tap the 3 dots to manage this task."; }
            }

            const totalStat = document.getElementById('detail-total-stat');
            const streakStat = document.getElementById('detail-streak-stat');
            if(totalStat) totalStat.textContent = total;
            if(streakStat) streakStat.textContent = streak;

            const doneBtn = document.getElementById('detail-done-btn');
            if(doneBtn) {
                if(foundTask && foundTask.completed) {
                    doneBtn.textContent = translations[currentLang] && translations[currentLang]["detail-undone"] ? translations[currentLang]["detail-undone"] : "Undo Completion";
                } else {
                    doneBtn.textContent = translations[currentLang] && translations[currentLang]["detail-done"] ? translations[currentLang]["detail-done"] : "Mark as Done";
                }
            }

            if(taskStatsSection) taskStatsSection.style.display = 'block'; 
            if(taskEditSection) taskEditSection.style.display = 'none';
            showScreen('habit-detail'); renderDetailCalendar(); 
        }
    }

    if(taskList) taskList.addEventListener('click', handleTaskClick);
    const starredTaskListEl = document.getElementById('starred-task-list');
    if(starredTaskListEl) starredTaskListEl.addEventListener('click', handleTaskClick);

    if(habitOptionsBtn) { habitOptionsBtn.addEventListener('click', () => { if(habitOptionsMenu) { habitOptionsMenu.style.display = habitOptionsMenu.style.display === 'none' || habitOptionsMenu.style.display === '' ? 'block' : 'none'; } }); }

    const detailEditBtn = document.getElementById('detail-edit-btn');
    if(detailEditBtn) {
        detailEditBtn.addEventListener('click', () => {
            if(habitOptionsMenu) habitOptionsMenu.style.display = 'none'; 
            if(taskStatsSection) taskStatsSection.style.display = 'none'; 
            if(taskEditSection) taskEditSection.style.display = 'block'; 
            if(editPhraseInput) editPhraseInput.value = currentActiveTaskText.replace(/\s*\(\d+\/\d+\)/, ''); 

            let tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || [];
            let foundTask = tasks.find(t => t.text === currentActiveTaskText);
            let timesArr = foundTask && foundTask.times ? foundTask.times : [];

            if(reminderTimeContainer) {
                const oldPills = reminderTimeContainer.querySelectorAll('.time-pill:not(#add-time-btn)');
                oldPills.forEach(p => p.remove());

                const addBtn = document.getElementById('add-time-btn');
                timesArr.forEach(tStr => {
                    const pill = document.createElement('button');
                    pill.className = 'time-pill'; pill.textContent = tStr;
                    pill.addEventListener('click', function() { this.remove(); });
                    reminderTimeContainer.insertBefore(pill, addBtn);
                });
            }
        });
    }

    const saveTaskSettingsBtn = document.getElementById('save-task-settings-btn');
    if(saveTaskSettingsBtn) {
        saveTaskSettingsBtn.addEventListener('click', () => {
            const newText = editPhraseInput ? editPhraseInput.value.trim() : "";
            if (newText !== '') {
                const timeNodes = document.querySelectorAll('#reminder-time-container .time-pill:not(#add-time-btn)');
                let newTimes = [];
                timeNodes.forEach(n => newTimes.push(n.textContent));
                const timeCount = newTimes.length;

                let currProg = 0;
                let match = currentActiveTaskText.match(/\((\d+)\/\d+\)/);
                if(match) currProg = parseInt(match[1]);
                if(currProg > timeCount) currProg = timeCount; 

                const appendGoal = timeCount > 0 ? ` (${currProg}/${timeCount})` : ''; 
                const finalNewText = newText + appendGoal;

                let tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || [];
                let foundTask = tasks.find(t => t.text === currentActiveTaskText);
                if (foundTask) {
                    foundTask.text = finalNewText; 
                    foundTask.times = newTimes; 
                    localStorage.setItem('booboodoTasks', JSON.stringify(tasks));
                    
                    currentActiveTaskText = finalNewText; 
                    const htTitle = document.getElementById('habit-detail-title');
                    if(htTitle) htTitle.textContent = finalNewText;
                    
                    const detailSub = document.getElementById('habit-detail-subtitle');
                    if(detailSub) {
                        if(newTimes.length > 0) { detailSub.textContent = "Reminder at " + newTimes.join(', '); } 
                        else { detailSub.textContent = translations[currentLang]["detail-hint"] || "Tap the 3 dots to manage this task."; }
                    }

                    if(taskList) { taskList.innerHTML = ''; loadTasks(); }
                    renderStarredTasks();
                }
            }
            if(taskEditSection) taskEditSection.style.display = 'none'; 
            if(taskStatsSection) taskStatsSection.style.display = 'block';
        });
    }

    const detailDeleteBtn = document.getElementById('detail-delete-btn');
    if(detailDeleteBtn) {
        detailDeleteBtn.addEventListener('click', () => {
            if(habitOptionsMenu) habitOptionsMenu.style.display = 'none';
            let tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || [];
            tasks = tasks.filter(t => t.text !== currentActiveTaskText);
            localStorage.setItem('booboodoTasks', JSON.stringify(tasks));
            if(taskList) { taskList.innerHTML = ''; loadTasks(); }
            updateStats(); history.back(); 
        });
    }

    const markDoneModal = document.getElementById('mark-done-modal');
    let modalCurrentProgress = 0;
    let modalMaxProgress = 1;

    function renderInteractiveTubes() {
        const barsContainer = document.getElementById('dynamic-progress-bars');
        if(!barsContainer) return;
        barsContainer.innerHTML = ''; 
        const markDoneText = document.getElementById('mark-done-times-text');
        if(markDoneText) markDoneText.textContent = `${modalCurrentProgress} / ${modalMaxProgress} times`;

        for(let i=0; i<modalMaxProgress; i++) {
            const bar = document.createElement('div');
            bar.style.height = '10px'; bar.style.flex = '1'; bar.style.borderRadius = '5px';
            bar.style.transition = 'background-color 0.2s, opacity 0.2s';
            
            if (i < modalCurrentProgress) { bar.style.backgroundColor = 'var(--primary-btn)'; bar.style.opacity = '1'; } 
            else { bar.style.backgroundColor = 'var(--input-bg)'; bar.style.opacity = '1'; } 
            
            bar.addEventListener('click', () => {
                if (modalCurrentProgress === i + 1) { modalCurrentProgress = i; } 
                else { modalCurrentProgress = i + 1; }
                renderInteractiveTubes();
            });

            barsContainer.appendChild(bar);
        }
    }

    const detailDoneBtn = document.getElementById('detail-done-btn');
    if(detailDoneBtn) {
        detailDoneBtn.addEventListener('click', (e) => {
            if(habitOptionsMenu) habitOptionsMenu.style.display = 'none';
            const mdSubtitle = document.getElementById('mark-done-subtitle');
            if(mdSubtitle) mdSubtitle.textContent = currentActiveTaskText;
            
            let match = currentActiveTaskText.match(/\((\d+)\/(\d+)\)/);
            modalMaxProgress = match ? parseInt(match[2]) : 1;
            modalCurrentProgress = match ? parseInt(match[1]) : 0;
            
            if(e.target.textContent.includes("Undo") || e.target.textContent.includes("Deshacer") || e.target.textContent.includes("မပြီးသေးပါ") || e.target.textContent.includes("撤销") || e.target.textContent.includes("元に戻す") || e.target.textContent.includes("เลิกทำ") || e.target.textContent.includes("Rückgängig") || e.target.textContent.includes("Hủy") || e.target.textContent.includes("पूर्ववत")) {
                let tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || [];
                let foundTask = tasks.find(t => t.text === currentActiveTaskText);
                if(foundTask) {
                    foundTask.completed = false;
                    if (match) {
                        const newText = currentActiveTaskText.replace(/\(\d+\/\d+\)/, `(0/${modalMaxProgress})`);
                        foundTask.text = newText; currentActiveTaskText = newText;
                        const hdTitle = document.getElementById('habit-detail-title');
                        if(hdTitle) hdTitle.textContent = newText;
                    }
                    localStorage.setItem('booboodoTasks', JSON.stringify(tasks));
                    if(taskList) { taskList.innerHTML = ''; loadTasks(); }
                    updateStats();
                    e.target.textContent = translations[currentLang] && translations[currentLang]["detail-done"] ? translations[currentLang]["detail-done"] : "Mark as Done";
                    booAlert("Task has been unmarked!");
                }
                return; 
            }

            renderInteractiveTubes();
            if(markDoneModal) markDoneModal.classList.add('show'); 
            if(overlay) overlay.classList.add('show');
        });
    }

    const cancelCompleteBtn = document.getElementById('cancel-complete-btn');
    if(cancelCompleteBtn) { cancelCompleteBtn.addEventListener('click', () => { if(markDoneModal) markDoneModal.classList.remove('show'); checkOverlay(); }); }

    const confirmCompleteBtn = document.getElementById('confirm-complete-btn');
    if(confirmCompleteBtn) {
        confirmCompleteBtn.addEventListener('click', () => {
            let tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || [];
            let foundTask = tasks.find(t => t.text === currentActiveTaskText);
            
            if (foundTask) {
                if (modalCurrentProgress === modalMaxProgress) {
                    if(!foundTask.completed) {
                        foundTask.completed = true;
                        foundTask.totalDays = (foundTask.totalDays || 0) + 1;
                        foundTask.streakDays = (foundTask.streakDays || 0) + 1; 
                    }
                } else {
                    foundTask.completed = false;
                }

                let match = currentActiveTaskText.match(/\((\d+)\/(\d+)\)/);
                if(match) {
                    const newText = currentActiveTaskText.replace(/\(\d+\/\d+\)/, `(${modalCurrentProgress}/${modalMaxProgress})`);
                    foundTask.text = newText; currentActiveTaskText = newText;
                    const hdTitle = document.getElementById('habit-detail-title');
                    if(hdTitle) hdTitle.textContent = newText;
                }

                localStorage.setItem('booboodoTasks', JSON.stringify(tasks));
                
                const dTotal = document.getElementById('detail-total-stat');
                const dStreak = document.getElementById('detail-streak-stat');
                if(dTotal) dTotal.textContent = foundTask.totalDays;
                if(dStreak) dStreak.textContent = foundTask.streakDays;
                
                if(detailDoneBtn) detailDoneBtn.textContent = foundTask.completed ? (translations[currentLang]["detail-undone"] || "Undo Completion") : (translations[currentLang]["detail-done"] || "Mark as Done");

                if(taskList) { taskList.innerHTML = ''; loadTasks(); }
                updateStats();
            }
            if(markDoneModal) markDoneModal.classList.remove('show'); 
            checkOverlay();
        });
    }

    document.querySelectorAll('.day-pill').forEach(pill => { pill.addEventListener('click', () => { pill.classList.toggle('active'); }); });


    // --- 12. INTERACTIVE CLOCK LOGIC ---
    const addTimeBtn = document.getElementById('add-time-btn');
    const timePickerModal = document.getElementById('time-picker-modal');
    const cancelTimeBtn = document.getElementById('cancel-time-btn');
    const doneTimeBtn = document.getElementById('done-time-btn');
    
    let currentClockHour = "8";
    let currentClockAmPm = "AM";

    if(addTimeBtn) { addTimeBtn.addEventListener('click', () => { if(timePickerModal) timePickerModal.classList.add('show'); if(overlay) overlay.classList.add('show'); }); }
    if(cancelTimeBtn) { cancelTimeBtn.addEventListener('click', () => { if(timePickerModal) timePickerModal.classList.remove('show'); checkOverlay(); }); }

    document.querySelectorAll('.clock-number').forEach(numBtn => {
        numBtn.addEventListener('click', (e) => {
            const val = e.target.getAttribute('data-val');
            currentClockHour = val;
            const hrDisplay = document.getElementById('clock-display-hour');
            if(hrDisplay) hrDisplay.textContent = val;
            const angle = (val * 30) - 90; 
            const hand = document.getElementById('clock-hand');
            if(hand) hand.style.transform = `translateY(-50%) rotate(${angle}deg)`;
        });
    });

    const clockAm = document.getElementById('clock-am-btn');
    const clockPm = document.getElementById('clock-pm-btn');
    if(clockAm) clockAm.addEventListener('click', (e) => { currentClockAmPm = "AM"; e.target.style.color = "var(--primary-btn)"; if(clockPm) clockPm.style.color = "var(--completed-text)"; });
    if(clockPm) clockPm.addEventListener('click', (e) => { currentClockAmPm = "PM"; e.target.style.color = "var(--primary-btn)"; if(clockAm) clockAm.style.color = "var(--completed-text)"; });

    if(doneTimeBtn) {
        doneTimeBtn.addEventListener('click', () => {
            if(timePickerModal) timePickerModal.classList.remove('show'); checkOverlay();
            
            const minDisplay = document.getElementById('clock-display-min');
            let mins = minDisplay ? minDisplay.textContent : "00";
            let displayHour = currentClockHour.length === 1 ? "0" + currentClockHour : currentClockHour;
            let finalTime = `${displayHour}:${mins} ${currentClockAmPm.toLowerCase()}`;

            const newTimePill = document.createElement('button');
            newTimePill.className = 'time-pill'; newTimePill.textContent = finalTime; 
            newTimePill.addEventListener('click', function() { this.remove(); });
            
            const container = document.getElementById('reminder-time-container');
            if(container && addTimeBtn) container.insertBefore(newTimePill, addTimeBtn);
        });
    }

    // --- 13. SMART CALENDAR LOGIC ---
    const monthYearText = document.getElementById('month-year');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const selectedDateText = document.getElementById('selected-date-text');
    let currentDate = new Date(); 

    function renderCalendarTasks(dateString) {
        const calList = document.getElementById('calendar-task-list');
        const emptyState = document.getElementById('empty-calendar-state');
        if(!calList) return;
        calList.innerHTML = '';
        
        let tasks = []; try { tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || []; } catch(e){}
        const dateTasks = tasks.filter(t => t.date === dateString);
        
        if(dateTasks.length === 0) {
            if(emptyState) emptyState.style.display = 'block';
        } else {
            if(emptyState) emptyState.style.display = 'none';
            dateTasks.forEach(taskObj => {
                const li = document.createElement('li');
                const starIcon = taskObj.starred === true || taskObj.starred === 'true' ? '⭐' : '☆';
                const checkedState = taskObj.completed ? 'checked' : '';
                const completedClass = taskObj.completed ? 'completed' : '';
                const catTag = taskObj.category !== 'None' ? `<span class="task-category-tag">${taskObj.category}</span>` : '';
                
                li.innerHTML = `<div style="display: flex; align-items: center; width: 100%;">
                    <input type="checkbox" class="complete-checkbox" disabled ${checkedState} style="margin-right: 12px; transform: scale(1.2); accent-color: var(--primary-btn);">
                    <span class="task-text ${completedClass}" style="flex: 1; font-size: 15px; color: var(--task-text); cursor: default;">${taskObj.text} ${catTag}</span>
                    <span style="font-size: 18px; color: var(--text-color);">${starIcon}</span></div>`;
                calList.appendChild(li);
            });
        }
    }

    function renderCalendar() {
        if(!calendarGrid) return;
        calendarGrid.innerHTML = ''; 
        const year = currentDate.getFullYear(); 
        const month = currentDate.getMonth(); 
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        if(monthYearText) monthYearText.textContent = `${monthNames[month]} ${year}`;
        
        const firstDayIndex = new Date(year, month, 1).getDay(); 
        const totalDays = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

        let tasks = []; try { tasks = JSON.parse(localStorage.getItem('booboodoTasks')) || []; } catch(e){}

        for (let i = 0; i < firstDayIndex; i++) { 
            const emptyDiv = document.createElement('div'); emptyDiv.classList.add('calendar-day', 'empty'); calendarGrid.appendChild(emptyDiv); 
        }

        for (let i = 1; i <= totalDays; i++) {
            const dayDiv = document.createElement('div'); 
            dayDiv.classList.add('calendar-day'); 
            dayDiv.textContent = i;
            
            const checkDateString = `${year}-${String(month+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
            
            const hasTasksForDay = tasks.some(t => t.date === checkDateString);
            if (hasTasksForDay) { dayDiv.classList.add('has-tasks'); }

            if (checkDateString === globalSelectedDate) { dayDiv.classList.add('selected'); }
            if (isCurrentMonth && i === today.getDate()) { dayDiv.classList.add('today'); }
            
            dayDiv.addEventListener('click', () => { 
                document.querySelectorAll('#calendar-grid .calendar-day').forEach(d => d.classList.remove('selected')); 
                dayDiv.classList.add('selected'); 
                if(selectedDateText) selectedDateText.textContent = `${monthNames[month]} ${i}`; 
                
                globalSelectedDate = `${year}-${String(month+1).padStart(2,'0')}-${String(i).padStart(2,'0')}`;
                renderCalendarTasks(globalSelectedDate);
            });
            calendarGrid.appendChild(dayDiv);
        }
        renderCalendarTasks(globalSelectedDate);
    }
    
    if(prevMonthBtn) prevMonthBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); }); 
    if(nextMonthBtn) nextMonthBtn.addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); }); 
    renderCalendar();

    const detailCalendarGrid = document.getElementById('detail-calendar-grid'); 
    const detailMonthYearText = document.getElementById('detail-month-year'); 
    function renderDetailCalendar() {
        if(!detailCalendarGrid) return;
        detailCalendarGrid.innerHTML = ''; 
        const d = new Date(); 
        if(detailMonthYearText) detailMonthYearText.textContent = `MARCH ${d.getFullYear()}`;
        for (let i = 1; i <= 31; i++) {
            const dayDiv = document.createElement('div'); dayDiv.classList.add('calendar-day'); dayDiv.textContent = i;
            if (i === d.getDate()) { dayDiv.classList.add('today'); }
            detailCalendarGrid.appendChild(dayDiv);
        }
    }
});
