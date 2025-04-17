// File: components/ProjectCard.jsx
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Server, Globe, BookOpen } from "lucide-react";

export default function ProjectCard({ title, description, tags = [], links = {}, details }) {
  // 根据链接类型返回对应图标组件
  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case "github": return Github;
      case "frontend": return ExternalLink;
      case "backend": return Server;
      case "demo": return Globe;
      case "medium": return BookOpen;
      default: return ExternalLink;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-all">
          <CardContent className="p-4 space-y-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <Badge key={idx} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            {/* 在卡片上直接展示链接图标 */}
            <div className="flex items-center space-x-3 mt-2">
              {Object.entries(links).map(([label, url], idx) => {
                const Icon = getIcon(label);
                return (
                  <a
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-500"
                    title={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogTitle>{title}</DialogTitle>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {Object.entries(links).map(([label, url], idx) => {
            const Icon = getIcon(label);
            return (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-blue-500 hover:underline"
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
        {details && (
          <div className="mt-2">
            <h4 className="font-medium mb-1">Details</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
              {details}
            </p>
          </div>
        )}
        <div className="mt-4 text-right">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
