export const portfolio = {
  name: "Bijon Saha",
  initials: "BS",
  role: "Software QA Engineer",
  location: "Mymensingh, Bangladesh",
  email: "bijon176193@gmail.com",
  socialLinks: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/bijondurjoy/",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/BijonDurjoy",
    },
    {
      name: "WhatsApp",
      icon: "whatsapp",
      url: "https://wa.me/+8801602099467?text=",
    },
  ],
  summary:
    "Detail-oriented QA Engineer experienced in functional, regression, API, and cross-platform testing. Skilled in Postman, JIRA, Selenium, and AI-assisted testing, with hands-on experience testing healthcare applications across Web, iOS, and Android.",
  about: {
    image: "/about-photo.jpg",
    intro:
      "Hi! I am Bijon Saha, a Software QA Engineer and Software Engineering graduate from Shahjalal University of Science and Technology (SUST). I am passionate about software quality, problem solving, and building dependable digital experiences.",
    detailLead: "Currently, I am working as an SQA Engineer at",
    company: "Deep Mind Labs",
    companyUrl: "https://deepmindlabs.ai/",
    detailContinuation:
      ", where I contribute to healthcare, banking, and computer-vision products across web, iOS, and Android. My expertise includes functional, regression, API, cross-platform, usability, and automation testing, with tools such as Postman, Jira, Selenium, Playwright, JMeter, SQL, JavaScript, Java, Python, React, Node.js, and Git.",
    markers: [
      { label: "Based in", value: "Mymensingh, Bangladesh" },
      { label: "Currently", value: "Junior QA Engineer" },
      { label: "Education", value: "B.Sc. Software Engineering" },
    ],
  },
  skills: [
    {
      title: "Testing & QA",
      label: "01",
      items: [
        "SDLC",
        "STLC",
        "Manual Testing",
        "API Testing",
        "Testcase Writing",
      ],
    },
    {
      title: "Automation & Tools",
      label: "02",
      items: ["Jira", "Postman", "Playwright", "Selenium", "JMeter"],
    },
    {
      title: "Programming",
      label: "03",
      items: ["JavaScript", "Java", "C++", "HTML", "CSS", "Python"],
    },
    {
      title: "Development",
      label: "04",
      items: ["NodeJs", "Express", "React", "SQL", "Git"],
    },
  ],
  experience: [
    {
      role: "Junior QA Engineer",
      company: "Deep Mind Labs",
      dates: "2025 - Present",
      description:
        "Contributed to Deep Mind Labs projects through manual testing, automation testing, data verification, and usability-focused quality work across the doctor portal, DMH AI, BankQR, and computer vision projects.",
      current: true,
    },
    {
      role: "Intern Software Engineer",
      company: "Riseup Labs",
      dates: "Sep 2024 - Feb 2025",
      description:
        "Worked on a full-stack blog writing website using MERN, including user authentication and validation through a token-based system.",
    },
  ],
  projects: [
    {
      number: "01",
      name: "DML Healthcare",
      domain: "Healthcare Project",
      client: "National Pain Centers & DMH AI",
      dates: "2025 - Present",
      summary:
        "Cross-platform quality assurance for healthcare workflows spanning Web, iOS, and Android.",
      contributions: [
        "Performed functional, regression, API, and cross-platform testing.",
        "Tested patient intake, ROM assessments, risk profiles, reports, and notifications.",
        "Contributed to API testing with Postman and test automation using Selenium and Playwright.",
      ],
      tags: [
        "Manual Testing",
        "API Testing",
        "Postman",
        "Jira",
        "Selenium",
        "Playwright",
      ],
      featured: true,
      accent: "mint",
    },
    {
      number: "02",
      name: "DML Bank QR",
      domain: "Banking Project",
      client: "Prime Bank PLC",
      dates: "May 2026 - Present",
      summary:
        "Quality coverage for a token-based queue management system that lets customers book bank services online.",
      contributions: [
        "Tested token generation, service selection, queue flow, booking, and branch operations.",
        "Performed manual and automation testing for reliable end-to-end functionality.",
        "Used Postman, Selenium, and Jira for API testing, automation, defect tracking, and validation.",
      ],
      tags: [
        "Manual Testing",
        "Automation Testing",
        "API Testing",
        "Postman",
        "Selenium",
        "Jira",
      ],
      featured: true,
      accent: "amber",
    },
    {
      number: "03",
      name: "DML Polar Project",
      domain: "Computer Vision Project",
      client: "Polar BD",
      dates: "May 2026 - July 2026",
      summary:
        "Manual testing for an AI-powered box counting system built with computer vision and LLM-based processing.",
      contributions: [
        "Validated product detection and counting across Icecream Box scenarios and edge cases.",
        "Identified, documented, and verified defects in AI-generated results.",
        "Focused on reliable and consistent output across different scenarios.",
      ],
      tags: ["Manual Testing", "AI/LLM", "Jira"],
      featured: true,
      accent: "coral",
    },
  ],
  education: [
    {
      degree: "B.Sc. (Eng.) in Software Engineering",
      institution: "Shahjalal University Of Science And Technology",
      year: "2025",
      result: "CGPA: 3.25",
    },
    {
      degree: "Higher Secondary Certificate (HSC) in Science",
      institution: "Govt. Shahid Smriti College",
      year: "2018",
      result: "GPA: 4.33",
    },
    {
      degree: "Secondary Certificate (SSC) in Science",
      institution: "Muktagacha RK Model High School",
      year: "2016",
      result: "GPA: 5.00",
    },
  ],
  courses: [
    {
      name: "Fundamentals of Software Testing",
      provider: "Business Automation Ltd",
    },
    {
      name: "Professional Frontend Development Course",
      provider: "NonAcademy",
    },
    { name: "Programming Fundamentals", provider: "Duke University" },
  ],
};
