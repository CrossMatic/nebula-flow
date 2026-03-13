/**
 * Prerender entry for vite-prerender-plugin.
 * Runs at build time to generate static HTML for crawlers.
 * Do not import this file in client code.
 */
import "./index.css";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Termin from "./pages/Termin";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const PRERENDER_ROUTES = ["/", "/termin", "/impressum", "/datenschutz"];

const queryClient = new QueryClient();

function AppForPrerender({ location }: { location: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <StaticRouter location={location}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/termin" element={<Termin />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export async function prerender(data: { url: string }) {
  const url = data.url || "/";
  const html = renderToString(<AppForPrerender location={url} />);
  return {
    html,
    links: new Set(PRERENDER_ROUTES),
  };
}
