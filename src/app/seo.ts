import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  slug?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private readonly baseUrl = 'https://senderosdepaz.com.pe';
  private readonly defaultImage = 'https://senderosdepaz.com.pe/logo-2.png';

  updateSeo(config: SeoConfig): void {
    const fullTitle = `${config.title} | Funeraria Senderos de Paz`;
    const fullUrl = config.slug ? `${this.baseUrl}/${config.slug}` : this.baseUrl;
    const imageUrl = config.image ? config.image : this.defaultImage;

    this.titleService.setTitle(fullTitle);

    this.metaService.updateTag({ name: 'description', content: config.description });

    // Open Graph (WhatsApp, Facebook, Twitter, LinkedIn)
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:image', content: imageUrl });
    this.metaService.updateTag({ property: 'og:url', content: fullUrl });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    this.metaService.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
