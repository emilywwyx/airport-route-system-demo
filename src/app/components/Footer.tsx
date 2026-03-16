import { Github, Mail, FileText, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Project</h3>
            <p className="text-sm mb-4">
              A portfolio demonstration of graph algorithms and optimization
              techniques applied to real-world route planning.
            </p>
            <p className="text-xs text-gray-500">Built with React, TypeScript, and Recharts</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li>• Graph Theory & Algorithms</li>
              <li>• Data Structure Optimization</li>
              <li>• Performance Benchmarking</li>
              <li>• System Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                Resume / CV
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                contact@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© 2024 Airport Route Optimization System. Educational portfolio project.</p>
        </div>
      </div>
    </footer>
  );
}
