import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import About from "./pages/About";
import FeaturedWork from "./pages/FeaturedWork";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => {
  const defaultLanguage = localStorage.getItem("language") || "en";

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Default redirect */}
            <Route path="/" element={<Navigate to={`/${defaultLanguage}`} replace />} />
            
            {/* English routes */}
            <Route path="/en" element={<Index />} />
            <Route path="/en/projects" element={<Projects />} />
            <Route path="/en/about" element={<About />} />
            <Route path="/en/featured-work" element={<FeaturedWork />} />
            <Route path="/en/contact" element={<Contact />} />
            
            {/* Spanish routes */}
            <Route path="/es" element={<Index />} />
            <Route path="/es/projects" element={<Projects />} />
            <Route path="/es/about" element={<About />} />
            <Route path="/es/featured-work" element={<FeaturedWork />} />
            <Route path="/es/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;