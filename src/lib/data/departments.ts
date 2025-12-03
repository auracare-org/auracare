export interface Department {
  name: string;
  lead: string | string[];
  description?: string;
  subassignees: string[];
  subdepartments?: Department[];
}

export const departments: Department[] = [
  {
    name: 'Software and Web Dev',
    lead: 'stephen-okita',
    description: 'Web, mobile and platform engineering and operations.',
    subassignees: ['hin-lun-chen', 'ayza-zainal', 'ahnaf-kabir'],
    subdepartments: [
      {
        name: 'Web development',
        lead: 'stephen-okita',
        description: 'Frontend and backend web application development.',
        subassignees: ['ahnaf-kabir']
      },
      {
        name: 'Mobile development',
        lead: 'stephen-okita',
        description: 'Mobile app features, performance and releases.',
        subassignees: ['ahnaf-kabir']
      },
      {
        name: 'API integrations',
        lead: 'stephen-okita',
        description: 'Third-party integrations and internal service APIs.',
        subassignees: ['ahnaf-kabir']
      },
      {
        name: 'Hardware integrations',
        lead: 'stephen-okita',
        description: 'Device connectivity and SDK integrations.',
        subassignees: ['ahnaf-kabir']
      },
      {
        name: 'Database management',
        lead: 'stephen-okita',
        description: 'Data modeling, migrations and performance.',
        subassignees: ['ahnaf-kabir']
      },
      {
        name: 'UI/UX design',
        lead: 'ayza-zainal',
        description: 'Product design, UX flows and interface systems.',
        subassignees: ['hin-lun-chen', 'stephen-okita']
      },
      {
        name: 'Server and Hosting',
        lead: 'stephen-okita',
        description: 'Infra, deployments, monitoring and reliability.',
        subassignees: ['ahnaf-kabir', 'nicholas-chae']
      }
    ]
  },

  {
    name: 'AI Dev',
    lead: 'nicholas-chae',
    description: 'AI research and development from data to model deployment.',
    subassignees: ['stephen-okita'],
    subdepartments: [
      {
        name: 'Model architecture',
        lead: ['nicholas-chae', 'stephen-okita'],
        description: 'Design and evaluation of model architectures and baselines.',
        subassignees: []
      },
      {
        name: 'Model training',
        lead: 'nicholas-chae',
        description: 'Training, validation and optimization of models.',
        subassignees: ['stephen-okita']
      },
      {
        name: 'Training data collection',
        lead: ['hin-lun-chen', 'stephen-okita', 'nicholas-chae'],
        description: 'Sourcing, labeling and governance of training datasets.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Marketing',
    lead: ['julius-chu', 'stephen-okita'],
    description: 'Go-to-market, brand, creative and demand generation.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Paid ads',
        lead: 'julius-chu',
        description: 'Performance marketing across paid channels.',
        subassignees: []
      },
      {
        name: 'Organic',
        lead: 'stephen-okita',
        description: 'Content, SEO and community-led awareness.',
        subassignees: ['nicholas-chae', 'julius-chu']
      },
      {
        name: 'Creative design',
        lead: 'julius-chu',
        description: 'Creative assets and brand expression.',
        subassignees: []
      },
      {
        name: 'Funnel design',
        lead: 'hin-lun-chen',
        description: 'End-to-end funnel mapping, attribution and conversion paths.',
        subassignees: []
      },
      {
        name: 'Press',
        lead: 'linus-alpsten',
        description: 'Press relations and media outreach.',
        subassignees: ['hin-lun-chen', 'stephen-okita']
      }
    ]
  },
  {
    name: 'Hardware Dev',
    lead: 'hin-lun-chen',
    description: 'Hardware design, prototyping, manufacturing and quality.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Visual Design',
        lead: 'hin-lun-chen',
        description: 'Industrial design and product aesthetics for hardware.',
        subassignees: ['stephen-okita', 'julius-chu']
      },
      {
        name: 'Prototyping and specs',
        lead: 'hin-lun-chen',
        description: 'Hardware specifications and prototype iterations.',
        subassignees: []
      },
      {
        name: 'Logistics',
        lead: 'ahnaf-kabir',
        description: 'Supply chain, inventory and distribution logistics.',
        subassignees: []
      },
      {
        name: 'Manufacturing',
        lead: 'hin-lun-chen',
        description: 'Production planning and vendor coordination.',
        subassignees: []
      },
      {
        name: 'Quality Assurance',
        lead: 'hin-lun-chen',
        description: 'Hardware verification, validation and testing.',
        subassignees: []
      },
      {
        name: 'User Testing',
        lead: 'hin-lun-chen',
        description: 'Hardware usability studies and feedback loops.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Customer Experience',
    lead: 'hin-lun-chen',
    description: 'Customer-facing operations from partnerships to support and service quality.',
    subassignees: ['ahnaf-kabir'],
    subdepartments: [
      {
        name: 'Pharmacy relationship management',
        lead: 'hin-lun-chen',
        description: 'Build and maintain pharmacy partnerships and pilots.',
        subassignees: []
      },
      {
        name: 'Customer service',
        lead: 'ahnaf-kabir',
        description: 'Customer support, ticket triage and satisfaction follow-up.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Business Dev',
    lead: 'linus-alpsten',
    description: 'Strategic partnerships, financing, accelerators and market expansion.',
    subassignees: ['nicholas-chae', 'julius-chu', 'stephen-okita', 'hin-lun-chen'],
    subdepartments: [
      {
        name: 'Company Strategy',
        lead: 'hin-lun-chen',
        description: 'Company objectives, priorities and strategic planning.',
        subassignees: []
      },
      {
        name: 'Non-dilutive financing',
        lead: 'linus-alpsten',
        description: 'Grants and programs to fund growth without equity.',
        subassignees: ['hin-lun-chen'],
        subdepartments: [
          {
            name: 'Grants Research',
            lead: 'linus-alpsten',
            description: 'Sourcing and assessing relevant grant opportunities.',
            subassignees: []
          },
          {
            name: 'Application writing',
            lead: 'hin-lun-chen',
            description: 'Drafting and submitting non-dilutive funding applications.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Accelerators and programs',
        lead: 'linus-alpsten',
        description: 'Evaluation and participation in accelerator programs.',
        subassignees: ['hin-lun-chen'],
        subdepartments: [
          {
            name: 'Accelerator research',
            lead: 'linus-alpsten',
            description: 'Landscape review and fit analysis for accelerators.',
            subassignees: []
          },
          {
            name: 'Application writing',
            lead: ['hin-lun-chen', 'linus-alpsten'],
            description: 'End-to-end application prep for accelerator cohorts.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Dilutive financing',
        lead: 'linus-alpsten',
        description: 'Equity-based fundraising, investor relations and strategy.',
        subassignees: [],
        subdepartments: [
          {
            name: 'Application writing',
            lead: 'linus-alpsten',
            description: 'Materials and documentation for equity processes.',
            subassignees: []
          },
          {
            name: 'Strategy',
            lead: 'linus-alpsten',
            description: 'Target investor thesis, round design and timing.',
            subassignees: []
          },
          {
            name: 'Relations',
            lead: 'linus-alpsten',
            description: 'Outreach and relationship management with investors.',
            subassignees: []
          },
          {
            name: 'Research',
            lead: 'hin-lun-chen',
            description: 'Market and competitive insights for financing.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Other partnerships and Connections',
        lead: 'linus-alpsten',
        description: 'Exploration and ownership of broader partnership channels.',
        subassignees: [],
        subdepartments: [
          {
            name: 'German Market',
            lead: 'linus-alpsten',
            description: 'Germany-focused partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'Canadian Market',
            lead: 'hin-lun-chen',
            description: 'Canada-focused partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'US Market',
            lead: 'stephen-okita',
            description: 'United States partner and go-to-market development.',
            subassignees: ['nicholas-chae']
          },
          {
            name: 'HK Market',
            lead: 'hin-lun-chen',
            description: 'Hong Kong partner and go-to-market development.',
            subassignees: ['julius-chu', 'stephen-okita']
          },
          {
            name: 'Cyprus Market',
            lead: 'linus-alpsten',
            description: 'Cyprus partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'England Market',
            lead: 'linus-alpsten',
            description: 'England partner and go-to-market development.',
            subassignees: ['hin-lun-chen', 'julius-chu']
          },
          {
            name: 'Northern Ireland and Ireland',
            lead: 'linus-alpsten',
            description: 'Northern Ireland and Ireland partner development.',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Scotland Market',
            lead: 'hin-lun-chen',
            description: 'Scotland partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'UAE Market',
            lead: 'hin-lun-chen',
            description: 'United Arab Emirates partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'France Market',
            lead: 'stephen-okita',
            description: 'France partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'Macau Market',
            lead: 'hin-lun-chen',
            description: 'Macau partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'New Zealand Market',
            lead: 'stephen-okita',
            description: 'New Zealand partner and go-to-market development.',
            subassignees: []
          }
        ]
      }
    ]
  },
  {
    name: 'Research and Data',
    lead: 'linus-alpsten',
    description: 'Primary and secondary research, study design and insight synthesis.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Primary market research',
        lead: 'hin-lun-chen',
        description: 'Interviews, surveys and fieldwork to validate needs.',
        subassignees: ['stephen-okita', 'linus-alpsten']
      },
      {
        name: 'Secondary market research',
        lead: 'stephen-okita',
        description: 'Desk research on markets, competitors and regulations.',
        subassignees: ['hin-lun-chen', 'linus-alpsten']
      },
      {
        name: 'Study design',
        lead: 'linus-alpsten',
        description: 'Clinical and product study methodology and protocols.',
        subassignees: ['hin-lun-chen']
      }
    ]
  },
  {
    name: 'HRLF',
    lead: 'hin-lun-chen',
    description: 'Top-level corporate functions hub covering HR, legal, finance and governance.',
    subassignees: ['stephen-okita', 'linus-alpsten'],
    subdepartments: [
      {
        name: 'Accounting',
        lead: 'hin-lun-chen',
        description: 'Cashflow, payroll, bookkeeping and financial reporting.',
        subassignees: []
      },
      {
        name: 'Legal',
        lead: 'hin-lun-chen',
        description: 'Contracts, compliance, IP and regulatory affairs.',
        subassignees: [],
        subdepartments: [
          {
            name: 'External Contracts',
            lead: 'linus-alpsten',
            description: 'Vendor, partner and client agreements negotiated and maintained.',
            subassignees: []
          },
          {
            name: 'Internal Contracts',
            lead: 'hin-lun-chen',
            description: 'Employment, NDAs and internal policy documentation.',
            subassignees: []
          },
          {
            name: 'General Compliance',
            lead: 'hin-lun-chen',
            description: 'Company-wide compliance processes and record-keeping.',
            subassignees: []
          },
          {
            name: 'Medical Devices',
            lead: 'stephen-okita',
            description: 'Medical device-related legal considerations and documentation.',
            subassignees: []
          },
          {
            name: 'IP + Patents',
            lead: 'hin-lun-chen',
            description: 'Intellectual property strategy, filings and portfolio oversight.',
            subassignees: []
          }
        ]
      },
      {
        name: 'HR',
        lead: 'hin-lun-chen',
        description: 'People operations across hiring, onboarding, policies and incentives.',
        subassignees: [],
        subdepartments: [
          {
            name: 'Terms of Work',
            lead: 'hin-lun-chen',
            description: 'Role definitions, working terms and policy updates.',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Incentive Alignment',
            lead: 'hin-lun-chen',
            description: 'Compensation structures and performance incentives.',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Recruitment (Onboarding)',
            lead: 'linus-alpsten',
            description: 'Onboarding processes and new joiner experience.',
            subassignees: []
          },
          {
            name: 'Recruitment (Offboarding)',
            lead: 'hin-lun-chen',
            description: 'Offboarding procedures and knowledge transfer.',
            subassignees: []
          }
        ]
      }
    ]
  }
];
