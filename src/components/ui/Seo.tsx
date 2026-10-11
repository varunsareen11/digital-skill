import { useEffect } from 'react';
import { site } from '../../data/site';

interface SeoProps {
  title: string;
  description: string;
  /** Page address, e.g. "/about". */
  path: string;
  /** Use the title exactly as given instead of appending the academy name. */
  fullTitle?: boolean;
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

export default function Seo({ title, description, path, fullTitle = false }: SeoProps) {
  useEffect(() => {
    const pageTitle = fullTitle ? title : `${title} | ${site.name}`;
    const url = `${site.url}${path === '/' ? '/' : path}`;
    document.title = pageTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', description);
    setCanonical(url);
  }, [title, description, path, fullTitle]);

  return null;
}
