import type { SlideData } from '../types/Slide';

export const slideData: SlideData[] = [
  {
    id: 0,
    title: "Quantum Computing Hardware: Comparing Research Directions",
    type: "title",
    subtitle: "A Comprehensive Analysis of Current Approaches and Future Predictions",
    meta: {
      date: "June 2025"
    },
    content: {
      bulletPoints: ["Exploring the race to build practical quantum computers"]
    }
  },
  {
    id: 1,
    title: "Quantum Computing Fundamentals",
    type: "content",
    content: {
      bulletPoints: [
        "Classical computers use bits (0 or 1) while quantum computers use qubits",
        "Qubits can exist in superposition of 0 and 1 simultaneously",
        "Quantum entanglement allows qubits to be correlated across distances",
        "These properties enable quantum computers to solve certain problems exponentially faster",
        "Main challenge: qubits are extremely fragile and prone to errors"
      ]
    }
  },
  {
    id: 2,
    title: "Superconducting Qubits",
    type: "content",
    description: "Uses tiny electrical circuits made from superconducting materials that must be kept at extremely low temperatures",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Fast gate operations (microsecond timescales)",
            "Leverages existing semiconductor fabrication technology",
            "Mature ecosystem with established manufacturing processes",
            "Strong industry backing from IBM, Google, Rigetti"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "Very short coherence times (microseconds)",
            "Requires expensive dilution refrigeration (below 100mK)",
            "Each qubit slightly different, needs individual calibration",
            "Limited connectivity between non-adjacent qubits"
          ]
        }
      },
      statusInfo: {
        companies: "IBM, Google, Rigetti, IQM, Quantum Computing Inc",
        status: "Most mature technology with 1000+ qubit systems demonstrated"
      }
    }
  },
  {
    id: 3,
    title: "Trapped Ion Qubits",
    type: "content",
    description: "Uses electrically charged atoms (ions) trapped by electromagnetic fields and manipulated with lasers",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Exceptional coherence times (minutes to hours)",
            "Very high fidelity (>99.99% single-qubit, >99% two-qubit)",
            "All-to-all connectivity between qubits in same trap",
            "Identical qubits (atoms are naturally uniform)"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "Slow gate operations (~1000x slower than superconducting)",
            "Complex laser systems required for control",
            "Scaling challenges with multiple trap zones",
            "Requires ultrahigh vacuum environment"
          ]
        }
      },
      statusInfo: {
        companies: "Quantinuum, IonQ, Alpine Quantum Technologies, Oxford Ionics",
        status: "Demonstrated high-fidelity operations, leading in logical qubit demonstrations"
      }
    }
  },
  {
    id: 4,
    title: "Photonic Qubits",
    type: "content",
    description: "Uses photons (particles of light) to encode and process quantum information through optical circuits",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Room temperature operation (no cooling required)",
            "Natural immunity to many noise sources",
            "Excellent for quantum networking over fiber optics",
            "Long coherence times for photons in flight"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "High photon loss rates requiring error correction",
            "Probabilistic gates make scaling challenging",
            "Some components still require cryogenic detection",
            "Lower gate fidelities compared to matter-based qubits"
          ]
        }
      },
      statusInfo: {
        companies: "PsiQuantum, Xanadu, ORCA Computing, Atos",
        status: "Promising for large-scale systems, focus on fault-tolerant architectures"
      }
    }
  },
  {
    id: 5,
    title: "Neutral Atom Qubits",
    type: "content",
    description: "Uses neutral atoms trapped by laser optical tweezers and excited to Rydberg states for interactions",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Highly scalable with flexible 2D/3D arrangements",
            "Long coherence times (10s of milliseconds)",
            "Reconfigurable connectivity during computation",
            "All atoms naturally identical"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "Complex laser control systems required",
            "Lower gate fidelities than trapped ions",
            "Relatively new technology with less maturity",
            "Requires precise atomic manipulation"
          ]
        }
      },
      statusInfo: {
        companies: "QuEra, Pasqal, Atom Computing, Infleqtion",
        status: "Rapidly advancing with 300+ qubit demonstrations, targeting 1000+ qubits by 2025"
      }
    }
  },
  {
    id: 6,
    title: "Quantum Dot Qubits",
    type: "content",
    description: "Uses electron spins confined in semiconductor quantum dots, typically in silicon or gallium arsenide",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Leverages existing semiconductor technology",
            "Potential for dense integration and scaling",
            "Operates at higher temperatures than superconducting",
            "Compatible with classical electronics"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "Short coherence times compared to other approaches",
            "Sensitivity to electrical noise and charge fluctuations",
            "Complex control requirements for multi-qubit gates",
            "Still in early research phase"
          ]
        }
      },
      statusInfo: {
        companies: "Intel, Diraq, SiQure, Quantum Motion",
        status: "Emerging technology with recent breakthroughs in fidelity and control"
      }
    }
  },
  {
    id: 7,
    title: "Topological Qubits",
    type: "content",
    description: "Uses exotic particles called Majorana fermions that store quantum information non-locally for inherent error protection",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Built-in error protection from topology",
            "Potentially very long coherence times",
            "Reduced need for error correction overhead",
            "Theoretically optimal qubit design"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "Majorana particles don't occur naturally",
            "Extremely difficult to create and control",
            "Still largely theoretical with limited demonstrations",
            "Requires complex heterostructure materials"
          ]
        }
      },
      statusInfo: {
        companies: "Microsoft, QuTech",
        status: "Microsoft recently demonstrated first 8-qubit topological processor in 2025"
      }
    }
  },
  {
    id: 8,
    title: "NV Center (Diamond) Qubits",
    type: "content",
    description: "Uses nitrogen-vacancy defects in synthetic diamond crystals as qubits",
    content: {
      twoColumn: {
        left: {
          title: "✓ Advantages",
          items: [
            "Room temperature operation possible",
            "Very long coherence times at room temperature",
            "Excellent for sensing applications",
            "Diamond provides natural protection from environment"
          ]
        },
        right: {
          title: "✗ Disadvantages",
          items: [
            "Difficult to scale due to fabrication challenges",
            "Limited connectivity between distant qubits",
            "Lower gate fidelities compared to trapped ions",
            "Complex optical control requirements"
          ]
        }
      },
      statusInfo: {
        companies: "SaxonQ, XeedQ, Quantum Brilliance",
        status: "Niche applications in sensing, limited quantum computing demonstrations"
      }
    }
  },
  {
    id: 9,
    title: "Comparative Analysis",
    type: "comparison",
    content: {
      table: {
        headers: ["Approach", "Maturity", "Scalability", "Coherence", "Fidelity", "Temperature"],
        rows: [
          {
            approach: "Superconducting",
            values: [
              { text: "High", status: "high" },
              { text: "Good", status: "good" },
              { text: "Low", status: "low" },
              { text: "Good", status: "good" },
              { text: "Cryogenic" }
            ]
          },
          {
            approach: "Trapped Ion",
            values: [
              { text: "High", status: "high" },
              { text: "Moderate", status: "moderate" },
              { text: "Excellent", status: "excellent" },
              { text: "Excellent", status: "excellent" },
              { text: "Room/Vacuum" }
            ]
          },
          {
            approach: "Photonic",
            values: [
              { text: "Moderate", status: "moderate" },
              { text: "High", status: "high" },
              { text: "Good", status: "good" },
              { text: "Moderate", status: "moderate" },
              { text: "Room" }
            ]
          },
          {
            approach: "Neutral Atom",
            values: [
              { text: "Moderate", status: "moderate" },
              { text: "Excellent", status: "excellent" },
              { text: "Good", status: "good" },
              { text: "Good", status: "good" },
              { text: "Room/Vacuum" }
            ]
          },
          {
            approach: "Quantum Dot",
            values: [
              { text: "Low", status: "low" },
              { text: "High", status: "high" },
              { text: "Low", status: "low" },
              { text: "Moderate", status: "moderate" },
              { text: "Cryogenic" }
            ]
          },
          {
            approach: "Topological",
            values: [
              { text: "Very Low", status: "very-low" },
              { text: "Unknown", status: "unknown" },
              { text: "Excellent", status: "excellent" },
              { text: "Unknown", status: "unknown" },
              { text: "Cryogenic" }
            ]
          },
          {
            approach: "NV Center",
            values: [
              { text: "Low", status: "low" },
              { text: "Low", status: "low" },
              { text: "Excellent", status: "excellent" },
              { text: "Moderate", status: "moderate" },
              { text: "Room" }
            ]
          }
        ]
      }
    }
  },
  {
    id: 10,
    title: "Current Challenges Across All Approaches",
    type: "content",
    content: {
      challenges: [
        {
          icon: "🔧",
          title: "Quantum Error Correction",
          description: "Need thousands of physical qubits per logical qubit"
        },
        {
          icon: "📈",
          title: "Scaling",
          description: "Moving from hundreds to millions of qubits while maintaining quality"
        },
        {
          icon: "⏰",
          title: "Decoherence",
          description: "Quantum states are extremely fragile and short-lived"
        },
        {
          icon: "🎛️",
          title: "Control Complexity",
          description: "Precise manipulation of quantum states at scale"
        },
        {
          icon: "💰",
          title: "Cost",
          description: "Current systems are extremely expensive to build and operate"
        },
        {
          icon: "👥",
          title: "Talent Shortage",
          description: "Limited pool of quantum experts globally"
        }
      ]
    }
  },
  {
    id: 11,
    title: "Market Predictions: Which Approach Will Win?",
    type: "content",
    content: {
      predictions: {
        mainPoints: [
          "Expert consensus: No single winner expected in near term",
          "Different approaches may excel in different applications",
          "Current leaders: Superconducting and trapped ions most mature",
          "Rising stars: Neutral atoms showing rapid progress",
          "Dark horses: Photonic and topological for long-term potential",
          "Timeline: Practical quantum advantage expected within 5-10 years",
          "Market size: $10B+ quantum hardware market by 2045"
        ],
        expertOpinions: [
          { label: "Electron-based qubits", percentage: 39 },
          { label: "Atom-based approaches", percentage: 35 },
          { label: "Photonic quantum computing", percentage: 26 }
        ]
      }
    }
  },
  {
    id: 12,
    title: "Future Research Directions",
    type: "content",
    content: {
      twoColumn: {
        left: {
          title: "Research Focus Areas",
          items: [
            "Fault-Tolerant Quantum Computing: Achieving error rates below critical thresholds",
            "Hybrid Systems: Combining different qubit types for optimal performance",
            "Quantum Networking: Connecting quantum computers via quantum internet",
            "Algorithm Development: Creating quantum algorithms for real-world problems",
            "Materials Science: Developing better quantum materials and fabrication",
            "Control Systems: Advancing quantum control and calibration methods"
          ]
        },
        right: {
          title: "Timeline Predictions",
          items: []
        }
      },
      timeline: [
        { year: "2025-2027", description: "First practical quantum advantage demonstrations" },
        { year: "2027-2030", description: "Commercial quantum applications in optimization and simulation" },
        { year: "2030-2035", description: "Fault-tolerant quantum computers with 1000+ logical qubits" },
        { year: "2035+", description: "Universal quantum computers for general-purpose computing" }
      ]
    }
  },
  {
    id: 13,
    title: "Conclusion",
    type: "conclusion",
    content: {
      conclusion: {
        mainPoints: [
          "Quantum computing is transitioning from research to practical applications",
          "Multiple hardware approaches are advancing rapidly with unique advantages",
          "No clear winner yet - different approaches may dominate different niches",
          "Key factors for success: scalability, error rates, and practical utility",
          "Investment and talent development crucial for continued progress",
          "Next 5-10 years will be critical for determining leading approaches"
        ],
        keyTakeaway: {
          title: "Key Takeaway",
          text: "The quantum computing race is heating up, with 2025-2030 expected to be pivotal years for determining which approaches will lead the transition to practical quantum computing."
        }
      }
    }
  }
];
