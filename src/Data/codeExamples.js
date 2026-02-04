export const exampleCodes = {
    "App.jsx":
    `import Navbar from './componens/Navbar.jsx';
    import Hero from './componens/Hero.jsx';
    import Features from './componens/Feature.jsx';
    import Pricing from './componens/Pricing.jsx';
    import Testimonials from './componens/Testimonials.jsx';
    import Footer from './componens/Footer.jsx';  
    
    function App() {
    
      return (
        <>
          <div className="min-h-screen bg-slate-950 overflow-hidden text-white">
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
          </div>
        </>
      )
    };
    
    export default App`,
    "Hero.jsx": `
    import { ChevronDown } from "lucide-react";
    import { useEffect, useState } from "react"`,
    "Navbar.jsx": `
    import { Menu, X } from "lucide-react";
    import { useState } from "react";
    
    export default function Navbar() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
        return (
            <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-920/20 backdrop-blur-sm  border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                        <div className="flex items-center space-x-1 group cursor-pointer">     
                            <div>
                                <img src="Logo.png" alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <span className="text-lg sm:text-xl sm:text-2xl font-medium">
                                <span className="text-white">Code</span>
                                <span className="text-blue-400">Flow</span>
                            </span>
                        </div>`
};

export const floatingcards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart completion",
        content: "AI-powered code suggestion in real-time"
    },
    "Hero.jsx": {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "AI",
        title: "Smart completion",
        content: "Dynamic typing effects general avtomatic"
    },

    "Navbar.jsx": {
        bgColor: "bg-green-500/20",
        iconColor: "text-green-400",
        textColor: "text-green-200",
        contentColor: "text-green-300",
        icon: "AI",
        title: "Smart completion",
        content: "Hello world"
    }
}