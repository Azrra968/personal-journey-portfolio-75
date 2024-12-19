import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, Globe, Home } from "lucide-react";
import { useState, useEffect } from "react";
import { translations } from "../utils/translations";

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
    
    // Update URL to reflect language change
    const currentPath = location.pathname.split('/').slice(2).join('/');
    window.location.href = `/${newLang}/${currentPath}`;
  };

  const t = translations[language].nav;

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
        <Link to={`/${language}`}>
          <Button variant="ghost">
            <Home className="h-4 w-4 mr-2" />
            {t.home}
          </Button>
        </Link>
        <Link to={`/${language}/about`}>
          <Button variant="ghost">{t.about}</Button>
        </Link>
        <Link to={`/${language}/projects`}>
          <Button variant="ghost">{t.projects}</Button>
        </Link>
        <Link to={`/${language}/featured-work`}>
          <Button variant="ghost">{t.featuredWork}</Button>
        </Link>
        <Link to={`/${language}/contact`}>
          <Button variant="ghost">{t.contact}</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;