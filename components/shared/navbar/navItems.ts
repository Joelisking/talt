export interface NavItem {
  text: string;
  url?: string;
  subItems?: NavItem[];
  isScrollLink?: boolean;
}

export const navItems: NavItem[] = [
  {
    text: 'Home',
    url: '#hero',
    isScrollLink: true,
  },
  {
    text: 'About Us',
    subItems: [
      { text: 'Who We Are', url: '#about', isScrollLink: true },
      { text: 'Our Values', url: '#values', isScrollLink: true },
      { text: 'Our Pillars', url: '#pillars', isScrollLink: true },
    ],
  },
  {
    text: 'Selection',
    subItems: [
      {
        text: 'Selection Process',
        url: '#selection-process',
        isScrollLink: true,
      },
      {
        text: 'Selection Standards',
        url: '#selection-standards',
        isScrollLink: true,
      },
      {
        text: 'Selection Criteria',
        url: '#selection-criteria',
        isScrollLink: true,
      },
    ],
  },
  {
    text: 'Testimonials',
    url: '#testimonials',
    isScrollLink: true,
  },
  {
    text: 'Contact',
    url: '#contact',
    isScrollLink: true,
  },
];
