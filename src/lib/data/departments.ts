export interface Department {
  name: string;
  lead: string | string[];
  description?: string;
  subassignees: string[];
  subdepartments?: Department[];
}

export const departments: Department[] = [
  {
    name: 'Software Development',
    lead: 'stephen-okita',
    description: 'Software development and engineering.',
    subassignees: [],
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
        description: 'User interface and user experience design.',
        subassignees: ['hinlin-chen', 'stephen-okita']
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
        lead: ['hinlin-chen', 'stephen-okita', 'nicholas-chae'],
        description: 'Collecting training data for AI models.',
        subassignees: []
      },
      {
        name: 'AI Infrastructure',
        lead: ['stephen-okita', 'nicholas-chae'],
        description: 'AI infrastructure and platform development.',
        subassignees: ['ahnaf-kabir']
      }
    ]
  },
  {
    name: 'Marketing',
    lead: 'julius-chu',
    description: 'Marketing strategy and campaigns.',
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
        lead: 'hinlin-chen',
        description: 'Designing customer acquisition and conversion funnels.',
        subassignees: []
      },
      {
        name: 'Press',
        lead: 'linus-alpsten',
        description: 'Press relations and media outreach.',
        subassignees: ['hinlin-chen']
      }
    ]
  },
  {
    name: 'Hardware Dev',
    lead: 'hinlin-chen',
    description: 'Hardware development and engineering.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Visual Design',
        lead: 'hinlin-chen',
        description: 'Visual design for branding and communications.',
        subassignees: ['stephen-okita', 'sara-villaveces-latorre']
      },
      {
        name: 'Prototyping and sourcing',
        lead: 'hinlin-chen',
        description: 'Hardware prototyping and component sourcing.',
        subassignees: ['sara-villaveces-latorre']
      },
      {
        name: 'Logistics',
        lead: 'ahnaf-kabir',
        description: 'Supply chain and logistics operations.',
        subassignees: []
      },
      {
        name: 'Manufacturing',
        lead: 'hinlin-chen',
        description: 'Manufacturing operations and production.',
        subassignees: []
      },
      {
        name: 'Quality Assurance',
        lead: 'hinlin-chen',
        description: 'Quality assurance and testing.',
        subassignees: ['sara-villaveces-latorre']
      },
      {
        name: 'User Testing',
        lead: 'hinlin-chen',
        description: 'User testing and feedback collection.',
        subassignees: ['sara-villaveces-latorre']
      }
    ]
  },
  {
    name: 'Customer Experience',
    lead: 'hinlin-chen',
    description: 'Customer experience strategy and improvement.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Pharmacy relationship management',
        lead: 'hinlin-chen',
        description: 'Managing relationships with pharmacy partners.',
        subassignees: ['linus-alpsten']
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
    description: 'Business development, partnerships, and growth initiatives.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Company Strategy',
        lead: 'hinlin-chen',
        description: 'Overall strategic planning and direction for the company.',
        subassignees: []
      },
      {
        name: 'Non-dilutive financing',
        lead: 'linus-alpsten',
        description: 'Grants and programs to fund growth without equity.',
        subassignees: ['hinlin-chen'],
        subdepartments: [
          {
            name: 'Grants Research',
            lead: 'linus-alpsten',
            description: 'Researching grant opportunities and requirements.',
            subassignees: ['tanush-pandey']
          },
          {
            name: 'Application writing',
            lead: 'tanush-pandey',
            description: 'Writing grant applications.',
            subassignees: ['linus-alpsten', 'hinlin-chen', 'stella-goeschl']
          }
        ]
      },
      {
        name: 'Accelerators and programs',
        lead: 'linus-alpsten',
        description: 'Evaluation and participation in accelerator programs.',
        subassignees: ['hinlin-chen'],
        subdepartments: [
          {
            name: 'Accelerator research',
            lead: 'linus-alpsten',
            description: 'Landscape review and fit analysis for accelerators.',
            subassignees: []
          },
          {
            name: 'Application writing',
            lead: ['hinlin-chen', 'linus-alpsten'],
            description: 'Application writing and proposal development.',
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
            name: 'Financing Research',
            lead: 'linus-alpsten',
            description: 'Researching financing opportunities and strategies.',
            subassignees: ['hinlin-chen']
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
            name: 'Germany (Wishlist)',
            lead: 'linus-alpsten',
            description: 'Germany market operations and partnerships (potential future market).',
            subassignees: []
          },
          {
            name: 'Canada',
            lead: 'hinlin-chen',
            description: 'Canada market operations and partnerships.',
            subassignees: []
          },
          {
            name: 'US (Wishlist)',
            lead: 'stephen-okita',
            description: 'US market operations and partnerships (potential future market).',
            subassignees: []
          },
          {
            name: 'HK',
            lead: 'hinlin-chen',
            description: 'Hong Kong market operations and partnerships.',
            subassignees: ['julius-chu', 'stephen-okita']
          },
          {
            name: 'Cyprus',
            lead: 'linus-alpsten',
            description: 'Cyprus market operations and partnerships.',
            subassignees: []
          },
          {
            name: 'England',
            lead: 'linus-alpsten',
            description: 'England market operations and partnerships.',
            subassignees: ['hinlin-chen']
          },
          {
            name: 'Northern Ireland (Wishlist)',
            lead: 'linus-alpsten',
            description: 'Northern Ireland market operations and partnerships (potential future market).',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Scotland',
            lead: 'hinlin-chen',
            description: 'Scotland market operations and partnerships.',
            subassignees: []
          },
          {
            name: 'UAE',
            lead: 'hinlin-chen',
            description: 'UAE market operations and partnerships.',
            subassignees: []
          },
          {
            name: 'Macau',
            lead: 'hinlin-chen',
            description: 'Macau market operations and partnerships.',
            subassignees: []
          },
          {
            name: 'New Zealand (wishlist)',
            lead: 'stephen-okita',
            description: 'New Zealand market operations and partnerships (potential future market).',
            subassignees: []
          }
        ]
      }
    ]
  },
  {
    name: 'Research and Data',
    lead: 'linus-alpsten',
    description: 'Research operations and data management.',
    subassignees: [],
    subdepartments: [
      {
        name: 'Primary market research',
        lead: 'hinlin-chen',
        description: 'Primary market research and customer insights.',
        subassignees: ['stephen-okita', 'linus-alpsten']
      },
      {
        name: 'Secondary market research',
        lead: 'linus-alpsten',
        description: 'Secondary market research and competitive analysis.',
        subassignees: ['stephen-okita', 'hinlin-chen']
      },
      {
        name: 'Study design',
        lead: 'tanush-pandey',
        description: 'Clinical study design and protocols.',
        subassignees: ['hinlin-chen', 'linus-alpsten']
      },
      {
        name: 'Medical research',
        lead: 'tanush-pandey',
        description: 'Medical and clinical research.',
        subassignees: ['stella-goeschl']
      }
    ]
  },
  {
    name: 'HRLF',
    lead: 'hinlin-chen',
    description: 'Human resources, legal, and finance functions.',
    subassignees: ['stephen-okita', 'linus-alpsten'],
    subdepartments: [
      {
        name: 'Accounting',
        lead: 'hinlin-chen',
        description: 'Accounting operations and financial management.',
        subassignees: [],
        subdepartments: [
          {
            name: 'Tax Returns',
            lead: 'hinlin-chen',
            description: 'Tax return preparation and filing.',
            subassignees: []
          },
          {
            name: 'Payroll',
            lead: 'hinlin-chen',
            description: 'Payroll processing and salary administration.',
            subassignees: []
          },
          {
            name: 'Cashflow analysis',
            lead: 'hinlin-chen',
            description: 'Cashflow analysis and financial planning.',
            subassignees: []
          }
        ]
      },
      {
        name: 'Legal',
        lead: 'hinlin-chen',
        description: 'Legal affairs and contract management.',
        subassignees: [],
        subdepartments: [
          {
            name: 'External Contracts',
            lead: 'linus-alpsten',
            description: 'External contracts and vendor agreements.',
            subassignees: []
          },
          {
            name: 'Internal Contracts',
            lead: 'hinlin-chen',
            description: 'Internal contracts and employment agreements.',
            subassignees: []
          },
          {
            name: 'General Compliance',
            lead: 'hinlin-chen',
            description: 'General regulatory compliance and legal requirements.',
            subassignees: []
          },
          {
            name: 'Medical Devices',
            lead: 'stephen-okita',
            description: 'Medical device development and compliance.',
            subassignees: []
          },
          {
            name: 'IP + Patents',
            lead: 'hinlin-chen',
            description: 'Intellectual property and patent management.',
            subassignees: []
          },
          {
            name: 'GDPR and Privacy',
            lead: 'tanush-pandey',
            description: 'GDPR compliance and data privacy management.',
            subassignees: ['stephen-okita']
          }
        ]
      },
      {
        name: 'HR',
        lead: 'hinlin-chen',
        description: 'Human resources management and operations.',
        subassignees: [],
        subdepartments: [
          {
            name: 'Terms of Work',
            lead: 'hinlin-chen',
            description: 'Employment terms and work agreements.',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Incentive Alignment',
            lead: 'hinlin-chen',
            description: 'Aligning team incentives and compensation.',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Relationship Management',
            lead: 'linus-alpsten',
            description: 'Building and maintaining key relationships.',
            subassignees: ['stephen-okita']
          },
          {
            name: 'Recruitment (Onboarding)',
            lead: 'hinlin-chen',
            description: 'Recruitment and onboarding of new team members.',
            subassignees: []
          },
          {
            name: 'Offboarding',
            lead: 'hinlin-chen',
            description: 'Offboarding processes and exit procedures.',
            subassignees: []
          }
        ]
      }
    ]
  }
];
