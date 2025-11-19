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
    lead: 'Stephen Okita',
    description: 'Web, mobile and platform engineering and operations.',
    subassignees: ['Hin Lun Chen', 'Ayza Zainal', 'Ahnaf Kabir'],
    subdepartments: [
      {
        name: 'Web development',
        lead: 'Stephen Okita',
        description: 'Frontend and backend web application development.',
        subassignees: ['Ahnaf Kabir']
      },
      {
        name: 'Mobile development',
        lead: 'Stephen Okita',
        description: 'Mobile app features, performance and releases.',
        subassignees: ['Ahnaf Kabir']
      },
      {
        name: 'API integrations',
        lead: 'Stephen Okita',
        description: 'Third-party integrations and internal service APIs.',
        subassignees: ['Ahnaf Kabir']
      },
      {
        name: 'Hardware integrations',
        lead: 'Stephen Okita',
        description: 'Device connectivity and SDK integrations.',
        subassignees: ['Ahnaf Kabir']
      },
      {
        name: 'Database management',
        lead: 'Stephen Okita',
        description: 'Data modeling, migrations and performance.',
        subassignees: ['Ahnaf Kabir']
      },
      {
        name: 'UI/UX design',
        lead: 'Ayza Zainal',
        description: 'Product design, UX flows and interface systems.',
        subassignees: ['Hin Lun Chen', 'Stephen Okita']
      },
      {
        name: 'Server and Hosting',
        lead: 'Stephen Okita',
        description: 'Infra, deployments, monitoring and reliability.',
        subassignees: ['Ahnaf Kabir', 'Nicholas Chae']
      }
    ]
  },

  {
    name: 'AI Dev',
    lead: 'Nicholas Chae',
    description: 'AI research and development from data to model deployment.',
    subassignees: ['Stephen Okita'],
    subdepartments: [
      {
        name: 'Model architecture',
        lead: ['Nicholas Chae', 'Stephen Okita'],
        description: 'Design and evaluation of model architectures and baselines.',
        subassignees: []
      },
      {
        name: 'Model training',
        lead: 'Nicholas Chae',
        description: 'Training, validation and optimization of models.',
        subassignees: ['Stephen Okita']
      },
      {
        name: 'Training data collection',
        lead: ['Hin Lun Chen', 'Stephen Okita', 'Nicholas Chae'],
        description: 'Sourcing, labeling and governance of training datasets.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Marketing',
    lead: ['Julius Chu', 'Stephen Okita'],
    description: 'Go-to-market, brand, creative and demand generation.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Paid ads',
        lead: 'Julius Chu',
        description: 'Performance marketing across paid channels.',
        subassignees: []
      },
      {
        name: 'Organic',
        lead: 'Stephen Okita',
        description: 'Content, SEO and community-led awareness.',
        subassignees: ['Nicholas Chae', 'Julius Chu']
      },
      {
        name: 'Creative design',
        lead: 'Julius Chu',
        description: 'Creative assets and brand expression.',
        subassignees: []
      },
      {
        name: 'Funnel design',
        lead: 'Hin Lun Chen',
        description: 'End-to-end funnel mapping, attribution and conversion paths.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Hardware Dev',
    lead: 'Hin Lun Chen',
    description: 'Hardware design, prototyping, manufacturing and quality.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Visual Design',
        lead: 'Hin Lun Chen',
        description: 'Industrial design and product aesthetics for hardware.',
        subassignees: ['Stephen Okita', 'Julius Chu']
      },
      {
        name: 'Prototyping and specs',
        lead: 'Hin Lun Chen',
        description: 'Hardware specifications and prototype iterations.',
        subassignees: []
      },
      {
        name: 'Logistics',
        lead: 'Ahnaf Kabir',
        description: 'Supply chain, inventory and distribution logistics.',
        subassignees: []
      },
      {
        name: 'Manufacturing',
        lead: 'Hin Lun Chen',
        description: 'Production planning and vendor coordination.',
        subassignees: []
      },
      {
        name: 'Quality Assurance',
        lead: 'Hin Lun Chen',
        description: 'Hardware verification, validation and testing.',
        subassignees: []
      },
      {
        name: 'User Testing',
        lead: 'Hin Lun Chen',
        description: 'Hardware usability studies and feedback loops.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Customer Experience',
    lead: 'Hin Lun Chen',
    description: 'Customer-facing operations from partnerships to support and service quality.',
    subassignees: ['Ahnaf Kabir', 'Daryna Nykyforiv'],
    subdepartments: [
      {
        name: 'Pharmacy relationship management',
        lead: 'Hin Lun Chen',
        description: 'Build and maintain pharmacy partnerships and pilots.',
        subassignees: ['Daryna Nykyforiv']
      },
      {
        name: 'Customer service',
        lead: 'Ahnaf Kabir',
        description: 'Customer support, ticket triage and satisfaction follow-up.',
        subassignees: []
      }
    ]
  },
  {
    name: 'Business Dev',
    lead: 'Linus Alpsten',
    description: 'Strategic partnerships, financing, accelerators and market expansion.',
    subassignees: ['Nicholas Chae', 'Julius Chu', 'Stephen Okita', 'Hin Lun Chen'],
    subdepartments: [
      {
        name: 'Company Strategy',
        lead: 'Hin Lun Chen',
        description: 'Company objectives, priorities and strategic planning.',
        subassignees: []
      },
      {
        name: 'Non-dilutive financing',
        lead: 'Linus Alpsten',
        description: 'Grants and programs to fund growth without equity.',
        subassignees: ['Daryna Nykyforiv', 'Hin Lun Chen'],
        subdepartments: [
          {
            name: 'Grants Research',
            lead: 'Linus Alpsten',
            description: 'Sourcing and assessing relevant grant opportunities.',
            subassignees: ['Daryna Nykyforiv']
          },
          {
            name: 'Application writing',
            lead: 'Hin Lun Chen',
            description: 'Drafting and submitting non-dilutive funding applications.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Accelerators and programs',
        lead: 'Linus Alpsten',
        description: 'Evaluation and participation in accelerator programs.',
        subassignees: ['Hin Lun Chen', 'Daryna Nykyforiv'],
        subdepartments: [
          {
            name: 'Accelerator research',
            lead: 'Linus Alpsten',
            description: 'Landscape review and fit analysis for accelerators.',
            subassignees: ['Daryna Nykyforiv']
          },
          {
            name: 'Application writing',
            lead: ['Hin Lun Chen', 'Linus Alpsten'],
            description: 'End-to-end application prep for accelerator cohorts.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Dilutive financing',
        lead: 'Linus Alpsten',
        description: 'Equity-based fundraising, investor relations and strategy.',
        subassignees: ['Daryna Nykyforiv'],
        subdepartments: [
          {
            name: 'Application writing',
            lead: 'Linus Alpsten',
            description: 'Materials and documentation for equity processes.',
            subassignees: []
          },
          {
            name: 'Strategy',
            lead: 'Linus Alpsten',
            description: 'Target investor thesis, round design and timing.',
            subassignees: []
          },
          {
            name: 'Relations',
            lead: 'Linus Alpsten',
            description: 'Outreach and relationship management with investors.',
            subassignees: []
          },
          {
            name: 'Research',
            lead: 'Hin Lun Chen',
            description: 'Market and competitive insights for financing.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Other partnerships and Connections',
        lead: 'Linus Alpsten',
        description: 'Exploration and ownership of broader partnership channels.',
        subassignees: [],
        subdepartments: [
          {
            name: 'German Market',
            lead: 'Linus Alpsten',
            description: 'Germany-focused partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'Canadian Market',
            lead: 'Hin Lun Chen',
            description: 'Canada-focused partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'US Market',
            lead: 'Stephen Okita',
            description: 'United States partner and go-to-market development.',
            subassignees: ['Nicholas Chae']
          },
          {
            name: 'HK Market',
            lead: 'Hin Lun Chen',
            description: 'Hong Kong partner and go-to-market development.',
            subassignees: ['Julius Chu', 'Stephen Okita']
          },
          {
            name: 'Cyprus Market',
            lead: 'Linus Alpsten',
            description: 'Cyprus partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'England Market',
            lead: 'Linus Alpsten',
            description: 'England partner and go-to-market development.',
            subassignees: ['Hin Lun Chen', 'Julius Chu']
          },
          {
            name: 'Northern Ireland and Ireland',
            lead: 'Linus Alpsten',
            description: 'Northern Ireland and Ireland partner development.',
            subassignees: ['Stephen Okita']
          },
          {
            name: 'Scotland Market',
            lead: 'Hin Lun Chen',
            description: 'Scotland partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'UAE Market',
            lead: 'Hin Lun Chen',
            description: 'United Arab Emirates partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'France Market',
            lead: 'Stephen Okita',
            description: 'France partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'Macau Market',
            lead: 'Hin Lun Chen',
            description: 'Macau partner and go-to-market development.',
            subassignees: []
          },
          {
            name: 'New Zealand Market',
            lead: 'Stephen Okita',
            description: 'New Zealand partner and go-to-market development.',
            subassignees: []
          }
        ]
      }
    ]
  },
  {
    name: 'Research and Data',
    lead: 'Linus Alpsten',
    description: 'Primary and secondary research, study design and insight synthesis.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Primary market research',
        lead: 'Hin Lun Chen',
        description: 'Interviews, surveys and fieldwork to validate needs.',
        subassignees: ['Stephen Okita', 'Linus Alpsten']
      },
      {
        name: 'Secondary market research',
        lead: 'Stephen Okita',
        description: 'Desk research on markets, competitors and regulations.',
        subassignees: ['Hin Lun Chen', 'Linus Alpsten']
      },
      {
        name: 'Study design',
        lead: 'Linus Alpsten',
        description: 'Clinical and product study methodology and protocols.',
        subassignees: ['Hin Lun Chen']
      }
    ]
  },
  {
    name: 'HRLF',
    lead: 'Hin Lun Chen',
    description: 'Top-level corporate functions hub covering HR, legal, finance and governance.',
    subassignees: ['Stephen Okita', 'Linus Alpsten'],
    subdepartments: [
      {
        name: 'Accounting',
        lead: 'Hin Lun Chen',
        description: 'Cashflow, payroll, bookkeeping and financial reporting.',
        subassignees: []
      },
      {
        name: 'Legal',
        lead: 'Hin Lun Chen',
        description: 'Contracts, compliance, IP and regulatory affairs.',
        subassignees: [],
        subdepartments: [
          {
            name: 'External Contracts',
            lead: 'Linus Alpsten',
            description: 'Vendor, partner and client agreements negotiated and maintained.',
            subassignees: []
          },
          {
            name: 'Internal Contracts',
            lead: 'Hin Lun Chen',
            description: 'Employment, NDAs and internal policy documentation.',
            subassignees: []
          },
          {
            name: 'General Compliance',
            lead: 'Hin Lun Chen',
            description: 'Company-wide compliance processes and record-keeping.',
            subassignees: []
          },
          {
            name: 'Medical Devices',
            lead: 'Stephen Okita',
            description: 'Medical device-related legal considerations and documentation.',
            subassignees: []
          },
          {
            name: 'IP + Patents',
            lead: 'Hin Lun Chen',
            description: 'Intellectual property strategy, filings and portfolio oversight.',
            subassignees: []
          }
        ]
      },
      {
        name: 'HR',
        lead: 'Hin Lun Chen',
        description: 'People operations across hiring, onboarding, policies and incentives.',
        subassignees: [],
        subdepartments: [
          {
            name: 'Terms of Work',
            lead: 'Hin Lun Chen',
            description: 'Role definitions, working terms and policy updates.',
            subassignees: ['Stephen Okita']
          },
          {
            name: 'Incentive Alignment',
            lead: 'Hin Lun Chen',
            description: 'Compensation structures and performance incentives.',
            subassignees: ['Stephen Okita']
          },
          {
            name: 'Recruitment (Onboarding)',
            lead: 'Linus Alpsten',
            description: 'Onboarding processes and new joiner experience.',
            subassignees: []
          },
          {
            name: 'Recruitment (Offboarding)',
            lead: 'Hin Lun Chen',
            description: 'Offboarding procedures and knowledge transfer.',
            subassignees: []
          }
        ]
      }
    ]
  }
];
