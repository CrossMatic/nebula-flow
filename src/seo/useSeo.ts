import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/language";

type SeoInput = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
};

function upsertMeta(selector: string, createAttrs: Record<string, string>, content: string) {
  let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => meta?.setAttribute(key, value));
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertLink(selector: string, createAttrs: Record<string, string>, href: string) {
  let link = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    Object.entries(createAttrs).forEach(([key, value]) => link?.setAttribute(key, value));
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function useSeo(input: SeoInput) {
  const { language } = useLanguage();
  const location = useLocation();
  const ogTitle = input.ogTitle ?? input.title;
  const ogDescription = input.ogDescription ?? input.description;
  const twitterTitle = input.twitterTitle ?? ogTitle;
  const twitterDescription = input.twitterDescription ?? ogDescription;

  useEffect(() => {
    document.title = input.title;

    upsertMeta('meta[name="description"]', { name: "description" }, input.description);
    upsertMeta('meta[property="og:title"]', { property: "og:title" }, ogTitle);
    upsertMeta('meta[property="og:description"]', { property: "og:description" }, ogDescription);
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, twitterTitle);
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, twitterDescription);
    upsertMeta(
      'meta[property="og:locale"]',
      { property: "og:locale" },
      language === "de" ? "de_CH" : "en_US"
    );

    if (typeof window !== "undefined") {
      const canonicalUrl = `${window.location.origin}${location.pathname}`;
      upsertLink('link[rel="canonical"]', { rel: "canonical" }, canonicalUrl);
      upsertMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    }
  }, [input.title, input.description, ogTitle, ogDescription, twitterTitle, twitterDescription, language, location.pathname]);
}
