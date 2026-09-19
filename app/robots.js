import { SITE } from '@/lib/data';

export default function robots() {
  const aiCrawlers = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Bingbot', 'Applebot-Extended'];
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((ua) => ({ userAgent: ua, allow: '/' }))
    ],
    sitemap: SITE.url + '/sitemap.xml',
    host: SITE.url
  };
}
