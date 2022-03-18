import {Portfolio} from '../src/types/types'
import {guid} from '../src/utils'

export const cdnDomain = 'd1jdqfkicm13py.cloudfront.net'

export const portfolioData: Portfolio = {
  blogs: [],
  domain: 'https://teaguestockwell.com',
  githubProjectName: 'portfolio-v2-nextjs',
  heroM3u8Src: `https://${cdnDomain}/level-2-hls/master.m3u8`,
  icons: [],
  id: guid(),
  jobs: [
    {
      bullets: ["Check back later to see what I've been working on"],
      company: 'Microsoft',
      dateRange: 'January 2022 - Present',
      description:
        'Creating a new user friendly software design tool that enables end-users to ship low code programs',
      id: guid(),
      imgSrc: '/company-icons/microsoft.png',
      location: 'Redmond, WA',
      name: 'Software Engineer 2',
      src: 'https://powerplatform.microsoft.com',
    },
    {
      bullets: [
        `Securely deployed Levels as Air force web app`,
        `Pioneered software dev capability for JBLM spark cell. 1 new developer onboarded`,
        `Lead software dev team by communication user needs to key stakeholders`,
      ],
      company: 'Rainier Spark Tron',
      dateRange: 'June 2021 - November 2021',
      description:
        'Mentor new developers to stand up software development team for JBLM',
      id: guid(),
      imgSrc: '/company-icons/rainier-spark-tron.png',
      location: 'Joint Base Lewis McChord (JBLM), WA',
      name: 'Lead Software Engineer',
      src: 'https://www.linkedin.com/company/tron-air-force',
    },
    {
      bullets: [
        `Implemented user stories while maintaining code standards with 2 CI pipelines with a total of 34 stages`,
        `Wrote unit, component, and or e2e tests for 2 services to hit target of 80% line coverage`,
        `Configured docker compose scripts with Nginx proxy to mock production jwt auth service`,
        `Created docker imgs for containerized builds using department of defense hardened imgs`,
        'Led cyber review and accreditation of hardened app for deployment to a secure cluster',
        `Air Mobility Command's nominee for 2021 Gen. Spencer's individual innovation award`,
      ],
      company: 'Aloha Spark Tron',
      dateRange: 'November 2020 - June 2021',
      description: `Test, implement, and deliver accredited software to include pipeline management and stakeholder validation`,
      id: guid(),
      imgSrc: '/company-icons/aloha-spark-tron.png',
      location: 'Remote',
      name: 'Software Engineer',
      src: 'https://www.linkedin.com/company/tron-air-force',
    },
    {
      bullets: [
        'Plan / conduct task certification for personnel in upgrade status to meet technical advancement',
        'Discovered 2 worn brakes during post flight inspection and replaced them in < 3hrs for 10 patient medevac',
        'Issue, inspect, and control 48k tools valued at $18M to sustain maintenance ops',
      ],
      company: 'United States Air Force',
      dateRange: 'October 2017 - October 2020',
      description:
        'Lead & perform repairs / inspections on 20 assigned C-17 aircraft valued at $3.2B',
      id: guid(),
      imgSrc: '/company-icons/us-air-force.png',
      location: 'Joint Base Lewis McChord, WA',
      name: 'Aerospace Mechanic',
      src: 'https://www.airforce.com/careers/detail/airlift-special-mission-aircraft-maintenance',
    },
  ],
  person: {
    email: 'teaguestockwell@gmail.com',
    firstName: 'Teague',
    githubSrc: 'https://github.com/teaguestockwell',
    id: guid(),
    jobTitle: 'Software Engineer',
    lastName: 'Stockwell',
    linkedInSrc: 'https://www.linkedin.com/in/teague-stockwell',
    location: 'Seattle, WA',
    shortAbout: `Hello i'm Teague, and I have a passion for developing software that `,
    typeWriterCallToActions: [
      'solves problems',
      'is easy to use',
      'empowers users',
      'is lightning fast',
      'is maintainable',
    ],
  },
  projects: [
    {
      bullets: [
        'Designed social features like: threaded comments, subreddits, moderators, rich text editing, likes, saves, followers, and mentions',
        'Utilized Next.js to create a scalable collection of user content that is incrementally statically regenerated and served on edge',
        'Implemented a serverless REST API that the manages the lifecycle of securely uploading images from the client using presigned urls',
      ],
      dateRange: 'Apr 2021 - Present',
      deploymentSrc: 'http://hello-next-auth.vercel.app',
      id: 'buildable',
      m3u8Src: `https://${cdnDomain}/pre-hls/buildable-2021-12-14.mp4`,
      name: 'Buildable 🚧 WIP 🚧 ',
      repos: [
        {
          name: 'Private mono repo - email me',
          src: 'mailto:name@tsappdevelopment@gmail.com',
        },
      ],
      subHeading:
        'Creating a social media platform for exploring and sharing buildable items utilizing React, S3, Postgres, Oauth 2.0, and a Next.js serverless API',
      svgs: [
        'amazonaws',
        'css3',
        'docker',
        'git',
        'github',
        'html5',
        'mysql',
        'nextdotjs',
        'nodedotjs',
        'prisma',
        'react',
        'reactquery',
        'typescript',
        'vercel',
      ],
    },
    {
      bullets: [
        'Leveraged CI/CD pipelines, TDD, hardened Docker imgs, and Agile to accredit and deploy a prod app in < 5 months to a secure network',
        'Utilized Node.js to create a REST API that manages cargo and loading configurations against multiple aircraft and user roles',
        'Created containerized React UI for real time aircraft data management, and cargo loading with offline persistence',
      ],
      dateRange: 'March 2021 - November 2021',
      deploymentSrc: 'https://levels.apps.dso.mil',
      id: 'levels',
      m3u8Src: `https://${cdnDomain}/levels-2021-10-07-encoded-hq.mp4`,
      name: 'Levels',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/teaguestockwell/levels-v3-react',
        },
        {
          name: 'Backend',
          src: 'https://github.com/teaguestockwell/levels-v2v3-express',
        },
      ],
      subHeading: `Developed a production full stack web app to manage aircraft cargo loading for the Air Force`,
      svgs: [
        'amazonaws',
        'css3',
        'cypress',
        'docker',
        'express',
        'figma',
        'git',
        'gitlab',
        'html5',
        'jest',
        'jira',
        'nginx',
        'nodedotjs',
        'postgresql',
        'prisma',
        'react',
        'reactquery',
        'sonarqube',
        'testinglibrary',
        'typescript',
      ],
    },
    {
      bullets: [
        'Established CI/CD pipeline for static code analysis, linting, testing, and containerized builds',
        'Wrote 160 Flutter component & unit tests for > 90% code coverage',
        'Developed custom admin dashboard to manage cargo data from a REST API in < 10 days',
        'Utilized Google Firestore (BaaS / document db) for offline data persistence on mobile',
      ],
      dateRange: 'Sep 2020 - Mar 2021',
      deploymentSrc: 'https://fivelevel.web.app',
      id: 'five-level',
      m3u8Src: `https://${cdnDomain}/pre-hls/five-level.mp4`,
      name: 'Five Level',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/teaguestockwell/levels-v2-flutter',
        },
        {
          name: 'Backend Server',
          src: 'https://github.com/teaguestockwell/levels-v2v3-express',
        },
      ],
      subHeading: `Developed a X-Platform native UI to manage aircraft cargo loading`,
      svgs: [
        'dart',
        'docker',
        'express',
        'figma',
        'firebase',
        'flutter',
        'git',
        'nginx',
        'nodedotjs',
        'postgresql',
        'prisma',
      ],
    },
    {
      bullets: [],
      dateRange: 'Sep 2020 - March 2020',
      deploymentSrc:
        'https://play.google.com/store/apps/details?id=com.teaguestockwell.c17mac',
      id: '5-level',
      m3u8Src: `https://${cdnDomain}/pre-hls/5-level-2-encoded.mp4`,
      name: '5 Level',
      repos: [
        {
          name: 'Android UI',
          src: 'https://github.com/teaguestockwell/levels-v1-android',
        },
      ],
      subHeading: `Developed, and deployed A native android application with Java for aircraft weight and balance`,
      svgs: ['android', 'git', 'github', 'java'],
    },
  ],
  schools: [
    {
      dateRange: 'May 2021',
      href: 'https://www.sckans.edu/',
      id: guid(),
      imgSrc: '/education-icons/southwestern-college.png',
      name: 'Southwestern College',
      subHeading: `Bachelor of Science, Computer Programming`,
    },
    {
      dateRange: 'August 2019',
      href: 'https://www.ccaf.af.mil/',
      id: guid(),
      imgSrc: '/education-icons/ccaf.png',
      name: 'Community College of the Air Force',
      subHeading: `Associate of Applied Science, Aviation Maintenance Technology`,
    },
  ],
  skills: [
    'amazonaws',
    'android',
    'androidstudio',
    'antdesign',
    'azuredevops',
    'css3',
    'cypress',
    'dart',
    'docker',
    'express',
    'figma',
    'firebase',
    'flutter',
    'git',
    'github',
    'gitlab',
    'html5',
    'java',
    'javascript',
    'jest',
    'jira',
    'mui',
    'mysql',
    'nextdotjs',
    'nginx',
    'nodedotjs',
    'npm',
    'postgresql',
    'prisma',
    'react',
    'reactquery',
    'redux',
    'sonarqube',
    'testinglibrary',
    'typescript',
    'vercel',
    'visualstudiocode',
  ],
  subTitles: {
    about: undefined,
    blog: undefined,
    contact: ``,
    education: undefined,
    experience: undefined,
    projects: 'Mobile first web apps that are micro service oriented',
    tech: 'Tools that I have worked with. See my projects to learn more',
  },
  titles: {
    about: 'About',
    tech: 'Stack',
    projects: 'Projects',
    blog: 'Blog',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
}
