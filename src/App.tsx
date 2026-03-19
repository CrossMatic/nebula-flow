import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/i18n/language";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));
const Termin = lazy(() => import("./pages/Termin"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));

const queryClient = new QueryClient();

const FloatingLanguageSwitch = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;
  return <LanguageSwitch variant="floating" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <LanguageProvider>
        <BrowserRouter>
          <FloatingLanguageSwitch />
          <Suspense fallback={<div className="min-h-screen bg-[#02040a]" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/termin" element={<Termin />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
