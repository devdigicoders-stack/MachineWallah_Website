export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceNavItem {
  title: string;
  shortDesc: string;
  href: string;
  badge?: string;
  colorHex: string;
  colorName: 'yellow' | 'blue' | 'green' | 'orange';
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  logoPath: string;
  contact: {
    phonePlaceholder: string;
    phoneLink: string;
    whatsappPlaceholder: string;
    whatsappLink: string;
    emailPlaceholder: string;
    addressPlaceholder: string;
    hours: string;
  };
  appLinks: {
    playStore: string;
    appStore: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}
