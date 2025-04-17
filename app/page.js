// File: app/page.js
"use client";
import React, { useState } from "react";
import ProjectTabs from "@/components/ProjectTabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // 用来做搜索框
import { Mail, Linkedin, Github, Globe, BookOpen } from "lucide-react";
export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white p-6">
      <div className="max-w-6xl mx-auto space-y-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
        {/* ====== Header + Bio + Download Resume ====== */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            Shou-Tzu Han – Project Portfolio
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            AI for cognition, trust, and emotional learning.
          </p>
          {/* Bio & Contact */}
          <div className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto flex justify-center items-center gap-4 flex-wrap">
            I’m a full‑stack AI security & education researcher—building
            emotional literacy tools, adversarial defenses, and human‑centered
            systems. Reach me at
            <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-center items-center gap-6">
              {/* Email */}
              <a
                href="mailto:debrah@bu.edu"
                title="Email me"
                className="hover:text-blue-500"
              >
                <Mail className="w-5 h-5" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                title="LinkedIn"
                className="hover:text-blue-500"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/52147"
                title="GitHub"
                className="hover:text-blue-500"
              >
                <Github className="w-5 h-5" />
              </a>
              {/* Personal Site */}
              <a
                href="https://debrahan.io"
                title="Personal Site"
                className="hover:text-blue-500"
              >
                <Globe className="w-5 h-5" />
              </a>
              {/* Medium */}
              <a
                href="https://medium.com/@ainotfound404321"
                title="Medium"
                className="hover:text-blue-500"
              >
                <BookOpen className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Download Resume */}
          <Button
            as="a"
            href="/DebraHan_Resume_2025.pdf"
            download
            variant="outline"
            className="mt-2"
          >
            Download Resume
          </Button>
        </header>

        {/* ====== Search / Filter ====== */}
        <div className="flex justify-center">
          <Input
            placeholder="Search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-md"
          />
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuery("")}
              className="ml-2"
            >
              Clear
            </Button>
          )}
        </div>

        {/* ====== Project Tabs （传入 query 以便内部做 filter） ====== */}
        <ProjectTabs searchQuery={query} />

        <footer className="text-center text-sm text-gray-400 mt-20">
          &copy; 2025 Shou-Tzu Han. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
