import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "API Reference", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
}

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">

          {/* Brand section */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <div className="rounded-lg">
                <img
                  src="Logo.png"
                  alt="CodeFlow Logo"
                  className="w-8 h-8"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-white">Code</span>
                <span className="text-blue-400">Flow</span>
              </span>
            </div>

            <p className="text-gray-400 mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>

            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-white mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
