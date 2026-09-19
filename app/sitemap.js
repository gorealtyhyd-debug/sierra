import { SITE } from '@/lib/data';

export default function sitemap() {
  const now = new Date();
  const anchors = ['', '#overview', '#master-layout', '#plans', '#amenities', '#location', '#specifications', '#gallery', '#faq'];
  return anchors.map((a, i) => ({
    url: SITE.url + '/' + a,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: i === 0 ? 1 : 0.7
  }));
}
