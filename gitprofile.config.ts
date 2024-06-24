// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ricky9667', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {},
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Ricky Hu',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ricky9667',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'ricky_hu_0110',
    reddit: '',
    threads: 'ricky_hu_0110',
    youtube: 'ricky9667', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'ricky9667',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://blog.ricky-hu.com',
    phone: '',
    email: 'ricky9667@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.enquestor.com/d/s/10xLLGv3eCkgegwLb70rdHGhP5mSHlAf/25kyvjjPUC-3ZJDVJtzY6erARjvP4x0n-MbZgv9pe1As', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Android',
    'Flutter',
    'Kotlin',
    'Java',
    'Dart',
    'Jetpack Compose',
    'Git',
    'Vim',
    'Design Patterns',
    'OOP',
    'Python',
    'Appium',
    'Scrum',
  ],
  experiences: [
    {
      company: 'Appier',
      position: 'Quality Assurance Intern',
      from: 'Jul 2024',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/appier/',
    },
    {
      company: 'LINE Taiwan Limited',
      position: 'Android Developer Intern',
      from: 'Jul 2022',
      to: 'Jun 2024',
      companyLink: 'https://www.linkedin.com/company/linetaiwan/',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'National Taipei University of Technology',
      degree: 'CSIE Master\'s Degree',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'National Taipei University of Technology',
      degree: 'EECS Bachelor\'s Degree',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'ricky9667', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
