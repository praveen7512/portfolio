/* ==========================================================
   PORTFOLIO DATA — edit this file only to update content.
   All content lives here.
   ========================================================== */
window.PORTFOLIO = {
  name: "Praveen Sahu",
  role: "Android Engineer @ Swiggy Instamart",
  location: "Bhopal, India",
  tagline: "SDE 1 – Android at Swiggy Instamart. I build fast, polished Android experiences with Kotlin & Jetpack Compose — and I'm exploring AI/ML on the side.",
  about: [
    "I speak fluent Java, occasionally cheat on it with Python, and have a love-hate relationship with JavaScript.",
    "I dream of teaching AI to make the perfect cup of chai — until then, my mission is building apps that don't crash (too often).",
    "My focus: Android, AI/ML, React and Flutter. I also teach — from leading Android at GDSC MSIT to my in-progress 'Android for Beginners' course."
  ],
  email: "praveen.sahu7512@gmail.com",
  github: "https://github.com/praveen7512",
  githubUser: "praveen7512",
  linkedin: "https://www.linkedin.com/in/praveen-sahu-1821861ba",
  resume: "",

  experience: [
    { title: "SDE 1 – Android", company: "Instamart (Swiggy)", period: "Jul 2025 – Present", points: [
      "Built the Festive OIC component, used across all festival campaigns.",
      "AI Conversational Search: search-bar animations and a custom gradient-text component.",
      "Wishlist: tooltip, top-nav entry and home-to-presearch animation.",
      "Auto Add-to-Cart, which increased AOV; Cart Auto-Sync.",
      "Backend-driven SRP filters that ship without an app release.",
      "SRP payload optimisation — ~100 ms lower processing latency.",
      "Fraud project: JS bridge to restrict gallery access for flagged users.",
      "Browsable Query category tabs on search, banner timer on Collection pages, Recipe page contract, App Experience UI/UX improvements.",
      "Migrated Gson to kotlinx.serialization."] },
    { title: "Associate SDE – Android", company: "Instamart (Swiggy) · Remote", period: "Jul 2024 – Jul 2025", points: [
      "Migrated MXN and Collection pages to native.",
      "Ratings project on Account/Track pages plus a rating component used across Instamart.",
      "Added PDP badge support; built reusable OICv2 and Category Widget components."] },
    { title: "Lead Android Developer", company: "GDSC MSIT, Delhi", period: "Oct 2022 – Jul 2024", points: [
      "Taught Android development to students.",
      "Worked on the Flutter project Hunger-Free-App."] },
    { title: "Android Developer Intern", company: "Cessini", period: "Aug 2021 – Oct 2021", points: [
      "Worked on a multi-module architecture with Data Binding, ViewModels, Room and Retrofit."] },
    { title: "Android Developer Intern", company: "Tech Reinvented", period: "Jul 2021 – Aug 2021", points: [
      "Built a complete app end to end using ConstraintLayout, RecyclerView, Retrofit, Services and MVVM."] },
    { title: "Course Creator — Android for Beginners", company: "Udemy (in progress)", period: "2026 – Present",
      points: ["Creating a beginner-friendly Android course."] }
  ],
  education: [
    { degree: "B.Tech, Electronics & Communication Engineering", school: "Maharaja Surajmal Institute of Technology, Delhi", period: "2020 – 2024" },
    { degree: "Certification: Android Application Development", school: "Great Learning", period: "Jun 2021" }
  ],

  skills: {
    "Android": ["Kotlin", "Jetpack Compose", "Coroutines", "Android (LinkedIn assessment ✓)", "Multi-module architecture", "Dependency Injection", "kotlinx.serialization"],
    "Cross-platform & Web": ["Flutter", "React", "TypeScript", "JavaScript", "HTML / CSS"],
    "Backend & Data": ["REST APIs", "Firebase", "SQL", "Node.js", "Docker"],
    "Languages & AI": ["Java", "Python", "Claude API / LLMs", "AI/ML"]
  },

  projects: [
    { name: "grok-bot-clone", featured: true,
      desc: "Multi-bot AI platform: each bot gets isolated context, persistent memory and its own Docker sandbox. Voice chat, noVNC screen share with remote control, and a native Kotlin/Compose Android app.",
      tags: ["React + TS", "TypeScript backend", "Docker", "Claude API", "Kotlin / Compose"],
      repo: "https://github.com/praveen7512/grok-bot-clone" },
    { name: "supports-ksp-and-kapt",
      desc: "Dagger 2 graph visualizer for Android supporting both Kapt and KSP — shows component names, scopes, parents and a component tree. Inspired by Scabbard.",
      tags: ["Kotlin", "KSP", "Dagger 2"], repo: "https://github.com/praveen7512/supports-ksp-and-kapt" },
    { name: "Backbencher",
      desc: "Android app that uses LLMs to generate notes, summaries and question papers from YouTube links.",
      tags: ["Kotlin", "Android", "LLMs"], repo: "https://github.com/praveen7512/BackBencher" },
    { name: "MSIT Unofficial",
      desc: "College companion app for MSIT students, published on Google Play.",
      tags: ["Android", "Google Play"], repo: "https://play.google.com/store/apps/details?id=com.msitunofficall.emsit", label: "Play Store" },
    { name: "Hunger-Free-App",
      desc: "Flutter app built with GDSC MSIT.",
      tags: ["Flutter", "Dart"], repo: "https://github.com/dscmsit/Hunger-Free-App" },
    { name: "smart-fitness-site", desc: "Responsive marketing website for a fitness business.",
      tags: ["HTML", "CSS", "JS"], repo: "https://github.com/praveen7512/smart-fitness-site" },
    { name: "vip-fitness-gallery", desc: "Photo gallery site for VIP Fitness Club, Bhopal.",
      tags: ["HTML", "CSS"], repo: "https://github.com/praveen7512/vip-fitness-gallery" },
    { name: "AnupamaSite", desc: "Custom static website built for a client.",
      tags: ["HTML", "CSS"], repo: "https://github.com/praveen7512/AnupamaSite" },
    { name: "ServerDrivenUIApp", desc: "Android app exploring server-driven UI rendering.",
      tags: ["Kotlin", "Android"], repo: "https://github.com/praveen7512/ServerDrivenUIApp" },
    { name: "CICDAndroid", desc: "CI/CD pipeline for an Android app using GitHub Actions.",
      tags: ["Kotlin", "GitHub Actions"], repo: "https://github.com/praveen7512/CICDAndroid" },
    { name: "AndroidBhaiya", desc: "React platform aggregating Medium articles, YouTube tutorials and Google docs for Android learners.",
      tags: ["React", "JavaScript"], repo: "https://github.com/praveen7512/AndroidBhaiya" },
    { name: "video-calling-app-webRTC", desc: "Peer-to-peer video calling web app built on WebRTC.",
      tags: ["WebRTC", "JavaScript"], repo: "https://github.com/praveen7512/video-calling-app-webRTC" },
    { name: "StudyNotion", desc: "Full-stack ed-tech web app.",
      tags: ["React", "Node.js"], repo: "https://github.com/praveen7512/StudyNotion" }
  ],

  // Fallback stats (snapshot 20 Oct 2026); live values are fetched from the GitHub API at runtime.
  stats: { repos: 71, followers: 11, since: 2020,
    topLanguages: ["Kotlin", "JavaScript", "Java", "HTML", "Python"] }
};
