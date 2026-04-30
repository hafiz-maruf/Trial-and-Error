const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#research', label: 'Research' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#contact', label: 'Contact' },
];

const experiences = [
  {
    role: 'Chair, World Assembly of Acehnese Students (FORMAD)',
    period: 'Current',
    impact:
      'Led cross-border student and civic initiatives, convening stakeholders from multiple countries to align humanitarian response and youth policy advocacy.',
  },
  {
    role: 'Policy Research & Stakeholder Engagement',
    period: 'International Affairs Track',
    impact:
      'Produced policy insights on ASEAN priorities, sustainability transitions, and governance strategy while coordinating engagement with public and private actors.',
  },
  {
    role: 'Humanitarian Leadership Initiatives',
    period: 'Regional Collaboration',
    impact:
      'Directed public-facing campaigns and operational collaboration for disaster and relief actions, strengthening trust and coordination across networks.',
  },
];

const projects = [
  {
    title: 'ASEAN Disaster Resilience Policy Paper',
    description:
      'Developed recommendations for regional resilience governance, emphasizing preparedness financing and intergovernmental coordination.',
    impact: 'Contributed to sharper policy framing for multi-country risk reduction dialogues.',
  },
  {
    title: 'Development Finance for Inclusive Growth',
    description:
      'Explored blended finance pathways for social infrastructure and climate-adaptive development in emerging economies.',
    impact: 'Mapped actionable options for institutions seeking impact-driven investments.',
  },
  {
    title: 'Youth Public Engagement Strategy',
    description:
      'Designed stakeholder communication frameworks to improve public understanding of humanitarian and policy priorities.',
    impact: 'Expanded cross-sector participation and increased campaign visibility.',
  },
  {
    title: 'Sustainability & Governance Brief Series',
    description:
      'Produced concise policy briefs on sustainability governance, ASEAN collaboration, and institutional readiness.',
    impact: 'Enabled decision-makers to assess trade-offs faster with focused evidence summaries.',
  },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section fade-in">
      <div className="section-header">
        <p className="kicker">{title}</p>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand">HMA</a>
          <nav>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="home" className="container">
        <section className="hero fade-in">
          <p className="kicker">Hafiz Ma’ruf Akbar</p>
          <h1>Public Policy | Sustainability | ASEAN Affairs | Humanitarian Leadership</h1>
          <p className="hero-copy">
            Master in International Affairs candidate at the Lee Kuan Yew School of Public Policy (NUS), building policy solutions at the intersection of regional cooperation, resilience, and development.
            Hafiz works across research, leadership, and collaboration to shape practical outcomes for communities and institutions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#" aria-label="View CV">View CV</a>
            <a className="button" href="#contact">Contact</a>
          </div>
        </section>

        <Section id="about" title="About">
          <p className="lead">
            Hafiz combines policy depth with execution in high-stakes settings. His mission is to advance people-centered public policy in ASEAN through evidence, partnerships, and resilient systems.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="cards timeline">
            {experiences.map((item) => (
              <article key={item.role} className="card">
                <p className="meta">{item.period}</p>
                <h3>{item.role}</h3>
                <p>{item.impact}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" title="Research & Policy Projects">
          <div className="cards grid-2">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="impact">Impact: {project.impact}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="leadership" title="Leadership & Humanitarian Work">
          <div className="card">
            <h3>FORMAD & Cross-Border Humanitarian Action</h3>
            <p>
              As Chair of FORMAD, Hafiz coordinates international student and civic networks to mobilize support, align stakeholders, and sustain long-term engagement for humanitarian priorities.
            </p>
            <p>
              His leadership emphasizes operational clarity, coalition-building, and measurable public impact across borders.
            </p>
          </div>
        </Section>

        <Section id="speaking" title="Speaking & Media">
          <div className="cards grid-2">
            <article className="card">
              <h3>Policy Panels & Youth Diplomacy Forums</h3>
              <p>Contributor and speaker on ASEAN cooperation, sustainability strategy, and humanitarian governance.</p>
            </article>
            <article className="card">
              <h3>Public Engagement & Media Collaboration</h3>
              <p>Recognized for translating complex policy themes into compelling public dialogue and action-oriented narratives.</p>
            </article>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="card contact">
            <p>Email: <a href="mailto:hafiz@example.com">hafiz@example.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/hafizmarufakbar</a></p>
          </div>
        </Section>
      </main>
    </div>
  );
}
