import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"en" | "es">("en");
  const location = useLocation();

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }

    const savedLang = localStorage.getItem("language") as "en" | "es";
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    // Here you would typically redirect to the corresponding language route
  };

  return (
    <div className="fixed top-4 right-4 flex items-center gap-4 z-50">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleLanguage}
        className="relative"
      >
        <Globe className="h-4 w-4" />
        <span className="absolute -bottom-1 right-0 text-xs font-bold">
          {language.toUpperCase()}
        </span>
      </Button>
      <div className="flex items-center gap-2">
        <Sun className="h-4 w-4" />
        <Switch
          checked={isDarkMode}
          onCheckedChange={toggleDarkMode}
          aria-label="Toggle dark mode"
        />
        <Moon className="h-4 w-4" />
      </div>
      <nav className="flex items-center gap-4">
        {location.pathname !== "/" && (
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
        )}
        <Link to="/about">
          <Button variant="ghost">About</Button>
        </Link>
        <Link to="/projects">
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link to="/featured-work">
          <Button variant="ghost">Featured Work</Button>
        </Link>
        <Link to="/contact">
          <Button variant="ghost">Contact</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;