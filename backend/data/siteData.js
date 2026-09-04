// ============================================================
// Site Data — Editable content store for the Course Point learning site
// Edit this file (or use the Admin API endpoints) to update
// the website content in the future.
// All prices are in INR (Indian Rupees).
// ============================================================

export const siteData = {
  trainer: {
    name: "Joy",
    title: "Expert Instructor/Trainer for practical, career-ready learning",
    tagline: "Build skills with confidence!",
    bio: "Course Point is a practical learning platform designed for learners with different goals, backgrounds and experience levels. Our expert instructors combine clear foundations, guided practice and useful feedback to make learning engaging, accessible and effective. Whether you are building new skills, preparing for an exam, advancing your career or exploring a new subject, Course Point helps you learn with confidence and apply your knowledge in real-world situations.",
    highlights: [
      "Courses for different goals and experience levels",
      "Clear, structured learning paths",
      "Practical projects and guided practice",
      "Personalized learning support",
      "Outcome-focused instruction"
    ],
    photo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    email: "meenupkc@gmail.com",
    phone: "+91 98765 43210",
    location: "Online classes worldwide",
    socials: {
      youtube: "https://youtube.com/@coursepoint-german",
      instagram: "https://instagram.com/coursepoint.german",
      linkedin: "https://linkedin.com/in/coursepoint-german"
    }
  },

  courses: [
    {
      id: 1,
      level: "BEGINNER",
      title: "Foundations for Beginners",
      description: "Start from zero with clear foundations, useful vocabulary, core concepts and guided practice.",
      duration: "8 weeks · 3 classes/week",
      mode: "Live Online (Zoom)",
      price: "₹9,999",
      features: ["Live interactive classes", "Study material included", "Weekly assignments", "Practice projects", "Certificate of completion"]
    },
    {
      id: 2,
      level: "INTERMEDIATE",
      title: "Skills Builder",
      description: "Build on your basics through practical exercises, real-world scenarios and confident communication.",
      duration: "10 weeks · 3 classes/week",
      mode: "Live Online (Zoom)",
      price: "₹12,499",
      features: ["Live interactive classes", "Practice sessions", "Guided workbook", "Progress checks", "Certificate of completion"]
    },
    {
      id: 3,
      level: "ADVANCED",
      title: "Advanced Application Lab",
      description: "Apply your knowledge independently, solve realistic problems and communicate ideas with clarity.",
      duration: "12 weeks · 3 classes/week",
      mode: "Live Online (Zoom)",
      price: "₹14,999",
      features: ["Outcome-focused training", "Peer practice access", "Personalized feedback", "Capstone projects", "Certificate of completion"]
    },
    {
      id: 4,
      level: "PROFESSIONAL",
      title: "Professional Mastery",
      description: "Master complex topics and build the confidence to use your skills in academic and professional settings.",
      duration: "14 weeks · 3 classes/week",
      mode: "Live Online (Zoom)",
      price: "₹17,499",
      features: ["Advanced topic mastery", "Professional vocabulary", "Portfolio guidance", "1 free consultation call", "Certificate of completion"]
    },
    {
      id: 5,
      level: "EXAM",
      title: "Exam Preparation Sprint",
      description: "Intensive preparation focused on exam strategy, mock tests and personalized feedback across every section.",
      duration: "4 weeks · 5 classes/week",
      mode: "Live Online (Zoom)",
      price: "₹8,999",
      features: ["Full mock exams", "Timed simulations", "Response templates", "Expert insights", "Progress tracking"]
    },
    {
      id: 6,
      level: "YOUTH",
      title: "Creative Learning for Kids & Teens",
      description: "Fun, engaging classes for young learners aged 8–16 with projects, stories and interactive activities.",
      duration: "Ongoing · 2 classes/week",
      mode: "Live Online (Zoom)",
      price: "₹4,999/month",
      features: ["Age-appropriate materials", "Gamified learning", "Progress reports for parents", "Small batches (max 6)", "Fit for school goals"]
    },
    {
      id: 7,
      level: "PRACTICE",
      title: "Communication Fluency",
      description: "A practice-first course to build real communication fluency through role-plays, coaching and structured speaking drills.",
      duration: "6 weeks · 3 classes/week (60 min)",
      mode: "Live Online (Zoom) · Max 6 students",
      price: "₹7,999",
      features: [
        "80% speaking time in every class",
        "Clear pronunciation & delivery coaching",
        "Real-life role-plays (work, travel, service and social situations)",
        "Weekly 1-on-1 speaking assessment",
        "Free access to the Speaking Club for 3 months",
        "Certificate of conversational proficiency"
      ]
    }
  ],

  // ------------------------------------------------------------
  // Spoken German — dedicated landing section content
  // (rendered by frontend/src/components/SpokenGerman.jsx)
  // ------------------------------------------------------------
  spokenGerman: {
    enabled: false,
    // Links this section to the course above so the "Enroll" button
    // reuses the same price + coupon logic.
    courseId: 7,
    eyebrow: "New Course",
    title: "Spoken German",
    titleAccent: "Conversation Fluency",
    tagline: "Stop translating in your head. Start speaking German.",
    description:
      "Most learners spend years on grammar and still can't order a coffee in Berlin. This course flips that: from day one you speak, get corrected in real time, and build the reflexes that make German come out automatically.",
    forWhom: [
      "You've finished A1/A2 (or self-studied) but can't hold a conversation",
      "You understand German but hesitate and translate before speaking",
      "You have a visa, job or university interview coming up",
      "You're moving to a German-speaking country and want survival fluency"
    ],
    outcomes: [
      "Speak for 5+ minutes on everyday topics without freezing",
      "Handle real situations: shops, doctors, landlords, colleagues",
      "Pronounce ä / ö / ü / r / ch and word stress correctly",
      "Use natural filler words and connectors like a native speaker",
      "Think directly in German instead of translating from English"
    ],
    modules: [
      {
        week: "Week 1",
        title: "Breaking the Silence",
        points: ["Introductions & small talk", "Pronunciation reset (umlauts, R, CH)", "Survival phrases you'll use daily"]
      },
      {
        week: "Week 2",
        title: "Everyday Errands",
        points: ["Shopping, ordering food, asking prices", "Numbers, quantities & time in speech", "Polite requests with 'könnte / würde'"]
      },
      {
        week: "Week 3",
        title: "People & Opinions",
        points: ["Describing people, places & routines", "Agreeing / disagreeing naturally", "Connectors: weil, aber, deshalb, obwohl"]
      },
      {
        week: "Week 4",
        title: "Problems & Solutions",
        points: ["Doctor, pharmacy & emergencies", "Complaints, returns & apologies", "Phone calls and appointments"]
      },
      {
        week: "Week 5",
        title: "Work & Study German",
        points: ["Introducing yourself professionally", "Meetings, small talk with colleagues", "Interview questions & strong answers"]
      },
      {
        week: "Week 6",
        title: "Fluency Sprint",
        points: ["Debates & storytelling", "Speed-speaking drills", "Final 1-on-1 fluency assessment"]
      }
    ],
    format: [
      { icon: "🗣", label: "80% speaking", detail: "You talk more than the trainer, every single class." },
      { icon: "👥", label: "Max 6 students", detail: "Small batches so everyone gets airtime." },
      { icon: "🎧", label: "Recorded feedback", detail: "Voice notes correcting your pronunciation weekly." },
      { icon: "📅", label: "Flexible batches", detail: "Morning (7–8 AM IST) and evening (8–9 PM IST) options." }
    ],
    faqs: [
      {
        q: "Do I need to know grammar before joining?",
        a: "A basic A1 foundation helps, but you don't need perfect grammar. We correct grammar inside conversation rather than teaching it in isolation."
      },
      {
        q: "What if I'm too shy to speak?",
        a: "That's exactly who this course is for. Week 1 is designed to remove the fear, starting with short guided exchanges before moving to free conversation."
      },
      {
        q: "Is this enough to pass the Goethe speaking exam?",
        a: "It significantly improves your speaking module score. For full exam preparation, pair it with the Goethe/TELC Exam Crash Course."
      },
      {
        q: "Will I get a certificate?",
        a: "Yes — a Certificate of Conversational Proficiency after you complete the final 1-on-1 fluency assessment."
      }
    ],
    ctaLabel: "Enroll in Spoken German"
  },

  consultation: {
    title: "One-on-One Paid Consultation",
    description: "Get personalized guidance tailored to your learning goals — whether it's exam strategy, career planning, interview preparation, or a customized study roadmap.",
    sessions: [
      {
        id: 1,
        name: "Quick Guidance Call",
        duration: "30 minutes",
        price: "₹1,299",
        includes: ["Level assessment", "Learning roadmap advice", "Q&A on courses & exams"]
      },
      {
        id: 2,
        name: "Deep-Dive Session",
        duration: "60 minutes",
        price: "₹2,299",
        includes: ["Detailed level assessment", "Personalized study plan", "Exam strategy session", "Resource recommendations"]
      },
      {
        id: 3,
        name: "Interview / Relocation Prep",
        duration: "90 minutes",
        price: "₹3,299",
        includes: ["German job interview practice", "Visa interview preparation", "CV & cover letter review", "Cultural orientation tips"]
      }
    ],
    bookingNote: "Pick an available slot from the Instructor/Trainer's live Google Calendar below and provide your contact details. You'll receive a calendar invite at your email. Payment in INR via UPI / bank transfer. Slots available Mon–Sat, 9:00–19:00."
  },

  // ------------------------------------------------------------
  // FLASH SALE — the site-wide promotional banner.
  // Set `active: false` (or let `endsAt` pass) to hide the banner.
  // `code` should match one of the coupons below.
  // ------------------------------------------------------------
  flashSale: {
    active: true,
    headline: "Autumn Flash Sale — 25% OFF all courses",
    subtext: "Limited seats per batch. Apply the code at checkout to lock in your discount.",
    code: "COURSE25",
    // ISO 8601 with timezone. The banner shows a live countdown to this instant
    // and hides itself automatically once it passes.
    endsAt: "2026-09-30T23:59:59+05:30",
    ctaLabel: "Browse courses",
    ctaHref: "#courses"
  },

  // ------------------------------------------------------------
  // COUPONS — validated SERVER-SIDE only (see backend/coupons.js).
  //   type      : "percent" | "flat"
  //   value     : percent (0–100) or flat rupees off
  //   appliesTo : "all" | "courses" | "consultation"
  //   courseIds : optional whitelist of course ids (empty = any course)
  //   minAmount : minimum order value in rupees for the code to apply
  //   maxDiscount: rupee cap on a percent discount (null = uncapped)
  //   usageLimit: max total redemptions (null = unlimited)
  //   hidden    : true = never advertised publicly, only works if typed
  // ------------------------------------------------------------
  coupons: [
    {
      code: "GERMAN25",
      type: "percent",
      value: 25,
      description: "25% off any course (Autumn Flash Sale)",
      appliesTo: "courses",
      courseIds: [],
      minAmount: 0,
      maxDiscount: 5000,
      expiresAt: "2026-09-30T23:59:59+05:30",
      usageLimit: null,
      usedCount: 0,
      active: true,
      hidden: false
    },
    {
      code: "SKILL500",
      type: "flat",
      value: 500,
      description: "₹500 off the Communication Fluency course",
      appliesTo: "courses",
      courseIds: [7],
      minAmount: 2000,
      maxDiscount: null,
      expiresAt: "2026-12-31T23:59:59+05:30",
      usageLimit: null,
      usedCount: 0,
      active: true,
      hidden: false
    },
    {
      code: "TALK10",
      type: "percent",
      value: 10,
      description: "10% off any one-on-one consultation",
      appliesTo: "consultation",
      courseIds: [],
      minAmount: 0,
      maxDiscount: 1000,
      expiresAt: "2026-12-31T23:59:59+05:30",
      usageLimit: null,
      usedCount: 0,
      active: true,
      hidden: false
    },
    {
      code: "COURSEPOINT1000",
      type: "flat",
      value: 1000,
      description: "₹1,000 referral discount (shared privately by the Instructor/Trainer)",
      appliesTo: "all",
      courseIds: [],
      minAmount: 5000,
      maxDiscount: null,
      expiresAt: "2027-03-31T23:59:59+05:30",
      usageLimit: 100,
      usedCount: 0,
      active: true,
      hidden: true
    }
  ],

  // ------------------------------------------------------------
  // COURSE MODULE SEEDS — keyed by course id.
  // Written into the `course_modules` table on first run against an
  // empty database (see backend/learning.js → seedLearningContent).
  // After that the database is the source of truth and the Instructor/Trainer edits
  // modules from Admin Panel → 📚 Modules.
  // Also used read-only as the syllabus when no database is set up.
  // ------------------------------------------------------------
  moduleSeeds: {
    1: [
      { title: "The German Alphabet & Sounds", summary: "Letters, umlauts and pronunciation rules.", durationLabel: "45 min", content: "Learn all 26 letters plus ä, ö, ü and ß. Practise the ch, r and z sounds that English speakers find hardest." },
      { title: "Greetings & Introducing Yourself", summary: "Hallo, ich heiße… — your first real conversation.", durationLabel: "60 min", content: "Formal vs informal greetings, asking someone's name, saying where you're from and how old you are." },
      { title: "Numbers, Dates & Time", summary: "Counting, telling the time and saying the date.", durationLabel: "50 min", content: "Numbers 0–1000, days, months, and how Germans say half past (halb drei = 2:30, not 3:30!)." },
      { title: "Articles & Noun Genders", summary: "der, die, das — and how to guess correctly.", durationLabel: "70 min", content: "Why every noun has a gender, the patterns that predict it, and definite vs indefinite articles." },
      { title: "Present Tense Verbs", summary: "Regular verbs plus sein and haben.", durationLabel: "65 min", content: "Conjugating -en verbs, the two most important irregular verbs, and basic sentence word order." },
      { title: "Everyday Situations", summary: "Shopping, ordering and asking for help.", durationLabel: "60 min", content: "Put it all together: buy a coffee, ask for directions and handle a simple shop conversation." }
    ],
    2: [
      { title: "Accusative & Dative Cases", summary: "The two cases you use constantly.", durationLabel: "75 min", content: "Which case follows which verb and preposition, and how articles change in each." },
      { title: "Perfect Tense — Talking About the Past", summary: "haben/sein + past participle.", durationLabel: "70 min", content: "Forming the perfect tense, choosing the right auxiliary, and irregular participles." },
      { title: "Modal Verbs", summary: "können, müssen, wollen, dürfen, sollen, mögen.", durationLabel: "60 min", content: "How modals push the main verb to the end of the sentence." },
      { title: "Separable Verbs", summary: "aufstehen, einkaufen, anrufen.", durationLabel: "55 min", content: "Why the prefix jumps to the end, and the most common separable verbs." },
      { title: "Describing People & Places", summary: "Adjectives and comparisons.", durationLabel: "60 min", content: "Adjective endings, comparative and superlative forms." }
    ],
    3: [
      { title: "Subordinate Clauses", summary: "weil, dass, wenn, obwohl.", durationLabel: "70 min", content: "Verb-final word order and how to link ideas into longer sentences." },
      { title: "Genitive Case & Relative Clauses", summary: "Possession and 'the man who…'.", durationLabel: "65 min", content: "Genitive forms plus relative pronouns in all cases." },
      { title: "Expressing Opinions", summary: "Agreeing, disagreeing and justifying.", durationLabel: "60 min", content: "Phrases for discussion, and structuring an argument in German." },
      { title: "Workplace German", summary: "Emails, phone calls and meetings.", durationLabel: "70 min", content: "Formal register, standard email openings and closings, telephone etiquette." },
      { title: "Passive Voice", summary: "werden + past participle.", durationLabel: "55 min", content: "Present and past passive, and when Germans prefer it." },
      { title: "B1 Exam Strategy", summary: "What the four modules test.", durationLabel: "60 min", content: "Reading, listening, writing and speaking — timing and marking criteria." }
    ],
    4: [
      { title: "Konjunktiv II", summary: "Hypotheticals and polite requests.", durationLabel: "70 min", content: "würde, hätte, wäre and könnte — for 'would', 'could' and diplomacy." },
      { title: "Advanced Connectors", summary: "Nuance with je…desto, sowohl…als auch.", durationLabel: "60 min", content: "Two-part connectors and formal linking phrases." },
      { title: "Nominalisation & Academic Style", summary: "Writing like a native.", durationLabel: "65 min", content: "Turning verbs into nouns — the hallmark of formal written German." },
      { title: "Professional Vocabulary", summary: "Business, technical and academic fields.", durationLabel: "70 min", content: "Field-specific vocabulary and register-appropriate phrasing." },
      { title: "Idioms & Register", summary: "Colloquial vs formal.", durationLabel: "55 min", content: "Common idioms and knowing when NOT to use them." },
      { title: "TestDaF / Goethe B2 Practice", summary: "Full-length practice under timing.", durationLabel: "90 min", content: "Complete mock paper with self-marking guidance." }
    ],
    5: [
      { title: "Exam Format Deep-Dive", summary: "Exactly what each module asks of you.", durationLabel: "50 min", content: "Structure, timing and marking for Goethe and TELC." },
      { title: "Reading Under Time Pressure", summary: "Skimming and scanning techniques.", durationLabel: "60 min", content: "How to find answers without reading every word." },
      { title: "Listening Tactics", summary: "Catching detail on one hearing.", durationLabel: "60 min", content: "Prediction, keyword spotting and note-taking shorthand." },
      { title: "Letter & Email Templates", summary: "Reusable structures that score well.", durationLabel: "65 min", content: "Complaint, request and apology templates with the phrases examiners reward." },
      { title: "Speaking Exam Simulation", summary: "Full mock with examiner commentary.", durationLabel: "60 min", content: "Presentation and discussion phases, plus recovery phrases when you get stuck." }
    ],
    6: [
      { title: "Hallo! Erste Wörter", summary: "First words through games.", durationLabel: "30 min", content: "Colours, animals and greetings via songs and picture matching." },
      { title: "Meine Familie", summary: "Talking about family.", durationLabel: "30 min", content: "Family words and simple sentences about who lives at home." },
      { title: "Zahlen & Farben", summary: "Numbers and colours.", durationLabel: "30 min", content: "Counting games and colour hunts." },
      { title: "In der Schule", summary: "School objects and subjects.", durationLabel: "30 min", content: "Classroom vocabulary and asking simple questions." },
      { title: "Mein Tag", summary: "Daily routine.", durationLabel: "30 min", content: "Telling the time simply and describing a normal day." }
    ],
    7: [
      { title: "Breaking the Silence", summary: "Introductions, small talk and pronunciation reset.", durationLabel: "3 × 60 min", content: "Week 1. Survival phrases you'll use daily, plus fixing the umlaut, R and CH sounds." },
      { title: "Everyday Errands", summary: "Shopping, ordering food, asking prices.", durationLabel: "3 × 60 min", content: "Week 2. Numbers and quantities in speech, polite requests with könnte/würde." },
      { title: "People & Opinions", summary: "Describing people and agreeing/disagreeing.", durationLabel: "3 × 60 min", content: "Week 3. Connectors: weil, aber, deshalb, obwohl — used out loud, at speed." },
      { title: "Problems & Solutions", summary: "Doctor, pharmacy, complaints, phone calls.", durationLabel: "3 × 60 min", content: "Week 4. Handling things going wrong, and making appointments by phone." },
      { title: "Work & Study German", summary: "Professional introductions and interviews.", durationLabel: "3 × 60 min", content: "Week 5. Meetings, colleague small talk, and strong interview answers." },
      { title: "Fluency Sprint", summary: "Debates, storytelling and speed drills.", durationLabel: "3 × 60 min", content: "Week 6. Final preparation for the oral assessment." }
    ]
  },

  // ------------------------------------------------------------
  // ASSESSMENT SEEDS — keyed by course id, written on first run.
  // The Instructor/Trainer can edit these and build the rest from
  // Admin Panel → 📝 Assessments.
  //   format "written" -> auto-scored (mcq / multi / text)
  //   format "oral"    -> mic answers, scored by the trainer
  // ------------------------------------------------------------
  assessmentSeeds: {
    1: {
      title: "A1 Beginner Assessment",
      description: "Twelve points covering the alphabet, articles, numbers and present-tense verbs. You need 80% to pass.",
      format: "written",
      passPercent: 80,
      timeLimitMinutes: 20,
      maxAttempts: 3,
      questions: [
        { type: "mcq", prompt: "Which article goes with „Mädchen“?", options: ["der", "die", "das"], correctOptions: [2], points: 1, helperText: "Careful — this one breaks the obvious rule." },
        { type: "mcq", prompt: "How do you say „I am from India“?", options: ["Ich bin aus Indien.", "Ich komme Indien.", "Ich bin Indien aus."], correctOptions: [0], points: 1 },
        { type: "mcq", prompt: "„halb drei“ is what time?", options: ["3:30", "2:30", "3:15"], correctOptions: [1], points: 2, helperText: "German counts towards the next hour." },
        { type: "text", prompt: "Complete: Ich ____ . (verb „heißen“)", acceptedAnswers: ["heiße", "heisse"], points: 2, helperText: "Type just the verb." },
        { type: "text", prompt: "Write the number 21 in German.", acceptedAnswers: ["einundzwanzig"], points: 2 },
        { type: "multi", prompt: "Which of these are correct present-tense forms of „sein“?", options: ["ich bin", "du bist", "er sein", "wir sind"], correctOptions: [0, 1, 3], points: 2, helperText: "Choose all that apply." },
        { type: "multi", prompt: "Which words take „die“ in the singular?", options: ["Frau", "Mann", "Lampe", "Buch"], correctOptions: [0, 2], points: 2 }
      ]
    },
    7: {
      title: "Spoken German — Oral Fluency Assessment",
      description:
        "Six speaking tasks recorded with your microphone. You'll get thinking time before each one, then record your answer. The Instructor/Trainer listens to every recording and scores fluency, pronunciation and content, with written feedback.",
      format: "oral",
      passPercent: 80,
      timeLimitMinutes: null,
      maxAttempts: 2,
      questions: [
        { type: "oral", prompt: "Stellen Sie sich vor. Introduce yourself: your name, where you live, what you do, and why you're learning German.", helperText: "Aim for 60–90 seconds. Speak in full sentences.", points: 5, prepSeconds: 20, maxSeconds: 90 },
        { type: "oral", prompt: "Beschreiben Sie Ihren Tag. Describe a typical day, from waking up to going to bed.", helperText: "Use time expressions and separable verbs (aufstehen, einkaufen).", points: 5, prepSeconds: 20, maxSeconds: 90 },
        { type: "oral", prompt: "Im Café: order a coffee and a slice of cake, ask the price, and ask whether you can pay by card.", helperText: "Use polite forms — ich möchte, könnte ich.", points: 5, prepSeconds: 15, maxSeconds: 60 },
        { type: "oral", prompt: "Beim Arzt: you have a headache and a sore throat. Explain your symptoms and ask for advice.", helperText: "Body-part vocabulary plus „Ich habe … seit zwei Tagen“.", points: 5, prepSeconds: 15, maxSeconds: 75 },
        { type: "oral", prompt: "Was ist Ihre Meinung? Should schoolchildren learn a second foreign language? Give your opinion and two reasons.", helperText: "Use weil, deshalb, meiner Meinung nach.", points: 5, prepSeconds: 30, maxSeconds: 120 },
        { type: "oral", prompt: "Vorstellungsgespräch: introduce yourself professionally and explain why you're right for the job.", helperText: "Formal register. This is the hardest task — take your full prep time.", points: 5, prepSeconds: 30, maxSeconds: 120 }
      ]
    }
  },

  reviews: [
    {
      id: 1,
      name: "Priya Sharma",
      country: "India",
      rating: 5,
      course: "Advanced Application Lab",
      text: "The structured lessons and practice projects gave me real confidence and helped me apply new skills at work."
    },
    {
      id: 2,
      name: "Carlos Mendes",
      country: "Brazil",
      rating: 5,
      course: "Foundations for Beginners",
      text: "The course made a new subject feel approachable. The lessons are structured, practical and easy to follow."
    },
    {
      id: 3,
      name: "Yuki Tanaka",
      country: "Japan",
      rating: 5,
      course: "Exam Preparation Sprint",
      text: "The mock tests and expert feedback helped me improve my score and approach my exam with confidence."
    },
    {
      id: 4,
      name: "Sarah O'Connor",
      country: "Ireland",
      rating: 4,
      course: "Professional Mastery",
      text: "The professional skills training was excellent. I use what I learned every day in my work."
    },
    {
      id: 5,
      name: "Ahmed Hassan",
      country: "Egypt",
      rating: 5,
      course: "One-on-One Consultation",
      text: "The 90-minute career preparation session was worth every rupee. My CV, interview answers and professional plan all improved."
    },
    {
      id: 6,
      name: "Elena Petrova",
      country: "Russia",
      rating: 5,
      course: "Creative Learning for Kids",
      text: "My 10-year-old daughter looks forward to every class. The activities make learning feel like playtime while ensuring real progress."
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      role: "Healthcare professional",
      text: "The focused preparation helped me pass an important professional assessment. The practical feedback made a real difference.",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=80"
    },
    {
      id: 2,
      name: "Maria Gonzalez",
      role: "Postgraduate student",
      text: "I built a strong foundation and learned how to apply it in academic work. The course was one of my best investments.",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Software professional",
      text: "As a busy professional, I needed flexible, efficient learning. The structured approach and evening classes fit perfectly.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
    }
  ],

  videos: [
    {
      id: 1,
      title: "Foundations for Beginners — Lesson 1",
      description: "Start learning today with this free introductory lesson covering core concepts and a simple practice activity.",
      youtubeId: "9mNTcCwzHFc",
      videoUrl: "",
      thumbnail: "https://img.youtube.com/vi/9mNTcCwzHFc/hqdefault.jpg"
    },
    {
      id: 2,
      title: "Top 10 Learning Mistakes (and How to Fix Them)",
      description: "Avoid common mistakes with planning, practice, revision and applying new knowledge.",
      youtubeId: "0Nrb1oRXBjM",
      videoUrl: "",
      thumbnail: "https://img.youtube.com/vi/0Nrb1oRXBjM/hqdefault.jpg"
    },
    {
      id: 3,
      title: "Exam Preparation — Full Practice Session",
      description: "Watch a complete practice assessment with commentary on scoring criteria and useful preparation tips.",
      youtubeId: "vNzxeVwjYWU",
      videoUrl: "",
      thumbnail: "https://img.youtube.com/vi/vNzxeVwjYWU/hqdefault.jpg"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Online class in action",
      url: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80"
    },
    {
      id: 2,
      title: "Student workshop",
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
    },
    {
      id: 3,
      title: "Collaborative study session",
      url: "https://images.unsplash.com/photo-1560930950-5cc20e80e392?w=800&q=80"
    },
    {
      id: 4,
      title: "Certificate ceremony",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
    },
    {
      id: 5,
      title: "Learning beyond the classroom",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
    },
    {
      id: 6,
      title: "Group conversation practice",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
    }
  ]
};

export default siteData;
