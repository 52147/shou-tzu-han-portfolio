// File: components/ProjectTabs.jsx
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

// 所有项目数据，分类存放
const projects = {
  educational: [
    {
      title: "Emotion Explorer",
      description: "Emotion classification and AI storytelling for kids.",
      tags: ["NLP", "Education", "React", "GPT-3.5"],
      links: {
        Frontend: "https://emotion-explorer-frontend.vercel.app/",
        Backend: "https://github.com/52147/Emotion-Explorer-Backend",
        Medium:
          "https://medium.com/@ainotfound404321/how-i-designed-an-emotion-classifier-for-girls-who-code-0b337401401d",
      },
      details: `A platform for teaching emotional literacy to young students. Uses DistilBERT and GPT-3.5.`,
    },
    {
      title: "Emotion-Guided Feedback System",
      description:
        "LLM-powered feedback based on student emotion (in progress).",
      tags: ["LLM", "Feedback"],
      links: { Placeholder: "#" },
      details: `This tool will generate AI writing feedback aligned with students' emotional states.`,
    },
  ],
  trustworthy: [
    {
      title: "Adversarial Defense Toolkit",
      description: "Real-time model testing and visualization.",
      tags: ["AI Security", "Visualization"],
      links: {
        Demo: "https://adversarial-defense-frontend.vercel.app/",
        GitHub: "https://github.com/52147/adversarial-defense-toolkit",
      },
      details: `Demonstrates how small perturbations affect model output. Supports FGSM, Gaussian noise, and median filtering.`,
    },
    {
      title: "Prompt Injection & Backdoor Attacks",
      description:
        "Evaluating safety vulnerabilities in student-facing LLM tools.",
      tags: ["LLM", "Security"],
      links: {
        GitHub:
          "https://github.com/52147/Adversarial-Robustness-of-NLP-Models-Evaluating-Prompt-Injection-and-Backdoor-Attacks",
      },
      details: `Systematic testing of GPT-4, Alpaca, and more to assess prompt injection success rate.`,
    },
  ],
  human: [
    {
      title: "Reflexion",
      description: "AI for self-reflection and emotional resilience.",
      tags: ["Mental Health", "NLP"],
      links: {
        LandingPage: "https://reflexion-landing-page.vercel.app/",
        GitHub:
          "https://github.com/52147/Sentiment-Psychology-Analysis-Backend",
        Medium:
          "https://medium.com/@ainotfound404321/designing-reflexion-building-a-self-reflection-system-with-gpt-emotion-analysis-55952e610c33",
      },
      details: `Includes emotion parsing, prompt chaining, and long-term user history for reflective journaling.`,
    },
    // {
    //   title: "404 AI Not Found",
    //   description: "AI blog, toolkit hub, and dev service portal.",
    //   tags: ["Platform", "Blog"],
    //   links: {
    //     Website: "https://404-ai-not-found-i6h1.vercel.app/",
    //     GitHub: "https://github.com/52147/404-ai-not-found",
    //   },
    //   details: `A hub for AI resources, code examples, and consultation offerings.`,
    // },
  ],
  ux: [
    {
      title: "NiuNiuBox",
      description: "E‑commerce site built with React + SpringBoot.",
      tags: ["Full‑Stack", "Java", "React"],
      links: {
        Website: "https://niuniubox.com/",
        Figma:
          "https://www.figma.com/design/NbUJj7C6A7Hes45MG31Uqc/niuniubox-ui",
      },
      details: `Wallet integration, coupon system, shopping flows, and analytics dashboard.`,
    },
    {
      title: "MET Lab Website",
      description: "Academic research site UX design in Figma.",
      tags: ["UX", "Figma"],
      links: {
        Figma:
          "https://www.figma.com/design/m2TdmySwZzqdyhjYrey1hg/MET-Health-Informatics-Research-Lab-Website",
      },
      details: `Structured layout for research publication clarity and navigation.`,
    },
  ],
  others: [
    {
      title: "Diamond Tofu Careers",
      description:
        "Career portal with application management and automated offer/rejection emails.",
      tags: ["Full-Stack", "Portal", "Notifications"],
      links: {
        Client: "https://github.com/52147/Diamond-Tofu-Careers-Client",
        Server: "https://github.com/52147/Diamond-Tofu-Careers-Server",
        Figma:
          "https://www.figma.com/design/7nmES3ahsk4OwH1By6jvON/DT-Career-UI?t=2BBuIz0r0kPXHTpt-1",
      },
      details: `Built a recruitment portal for Diamond Tofu, including candidate site, admin dashboard for status tracking, and automated email workflows.`,
    },
    {
      title: "Personal Portfolio Website",
      description: "Showcases projects, blog, and source code.",
      tags: ["Web Dev", "Portfolio"],
      links: {
        Live: "https://portfolio-52147s-projects.vercel.app/",
        GitHub: "https://github.com/52147/Portfolio",
      },
      details: `Modern site built with Next.js and Tailwind, deployed on Vercel.`,
    },
    {
      title: "UPW Non-Profit Referral System",
      description: "Volunteer aid request routing platform.",
      tags: ["Non-Profit", "Full-Stack"],
      links: {
        Live: "https://referral-form-fronted.vercel.app/referral",
        GitHub: "https://github.com/52147/Referral-Form-Backend",
      },
      details: `Allows volunteers to log and route aid requests efficiently.`,
    },
    {
      title: "Emma Portfolio Website",
      description: "Personal brand site designed in Figma.",
      tags: ["Design", "Figma"],
      links: {
        Figma:
          "https://www.figma.com/design/S6vxElMftTjHLopiQE3QDg/Emma-portfolio",
      },
      details: `Visual branding and CTA-focused user flow.`,
    },
    {
      title: "E-Foodie Web UI",
      description: "Online food ordering interface.",
      tags: ["UI", "Figma"],
      links: {
        Figma:
          "https://www.figma.com/design/lhd2Zdh7r5ZF2V100JzY3F/E-Foodie-Web",
      },
      details: `Clean layout and intuitive ordering flow.`,
    },
    {
      title: "Go2POS Marketing Site",
      description: "POS product marketing UX design.",
      tags: ["UX", "Marketing"],
      links: {
        Figma:
          "https://www.figma.com/design/LGy9BME6TtBe9jOrbqvMOO/Go2pos-Marketing",
      },
      details: `Feature highlights and effective call-to-action.`,
    },
    {
      title: "Seekway Website UI",
      description: "Modern interface for tech company.",
      tags: ["UI", "Figma"],
      links: {
        Figma: "https://www.figma.com/design/KnpMkNrvYc3zvv0JbfPexw/Seekway",
      },
      details: `Product-focused layout with hierarchy of information.`,
    },
    {
      title: "AI Workplace Monitoring System",
      description: "Internal HR incident & team health platform.",
      tags: ["HR Tech", "GPT"],
      links: { Flowchart: "#" },
      details: `GPT-based risk evaluation, incident reporting, and dashboard insights.`,
    },
  ],
};

const categories = [
  { key: "educational", label: "🧠 Educational AI" },
  { key: "trustworthy", label: "🧬 Trustworthy AI" },
  { key: "human", label: "🧍 Human-Centered" },
  { key: "ux", label: "🎨 UX / Full-Stack" },
  { key: "others", label: "🔧 Other Projects" },
];

export default function ProjectTabs({ searchQuery = "" }) {
  // 全局搜索
  if (searchQuery) {
    const flat = categories.flatMap((cat) => projects[cat.key]);
    const filtered = flat.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Search Results for "{searchQuery}"
        </h2>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    );
  }

  // 默认分类标签页
  return (
    <Tabs defaultValue="educational" className="w-full">
      <TabsList className="flex sm:grid sm:grid-cols-5 gap-2 mb-6 force-h-auto">
        {categories.map((cat) => (
          <TabsTrigger key={cat.key} value={cat.key}>
            {cat.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map((cat) => (
        <TabsContent key={cat.key} value={cat.key}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects[cat.key].map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
