// Direction Zacka — Bold serif, centered top nav, magenta accent.
// Manages all 5 pages: About / Research / Teaching / CV / Contact.

function DirZacka({ darkMode, accent }) {
  const [page, setPage] = React.useState('home');
  const [openPaper, setOpenPaper] = React.useState(-1);
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 680px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const S = SAKINAH;

  const c = darkMode ?
  {
    bg: '#0e0e0e', text: '#f1eeea', muted: '#8a847d',
    rule: '#262422', accent: accent || '#e25b9b', link: '#7ea7ff',
    photoBg: '#1c1a18'
  } :
  {
    bg: '#ffffff', text: '#0e0e0e', muted: '#6e6e6e',
    rule: '#e6e2db', accent: accent || '#c7297f', link: '#2c63d6',
    photoBg: '#eee'
  };

  const CV_URL = 'https://mitprod-my.sharepoint.com/:b:/g/personal/sakimund_mit_edu/IQCZrhNZT47eTqnxYvgBhbI5ASTPiC1sl2eI_J_WhpYIs4s?e=sudRJt';

  const z = {
    page: {
      width: '100%', minHeight: '100vh', boxSizing: 'border-box',
      background: c.bg, color: c.text,
      fontFamily: '"Source Serif 4", Georgia, serif',
      padding: isMobile ? '32px 20px 60px' : '40px 56px 80px',
      transition: 'background .3s, color .3s'
    },
    inner: { maxWidth: '1080px', margin: '0 auto' },
    nav: {
      display: 'flex', justifyContent: 'center', gap: isMobile ? '20px' : '36px', alignItems: 'baseline',
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontSize: '13px', letterSpacing: '0.08em',
      textTransform: 'uppercase', fontWeight: 600,
      marginBottom: isMobile ? '36px' : '56px',
      flexWrap: 'wrap'
    },
    name: {
      fontSize: isMobile ? '40px' : '56px', fontWeight: 700, margin: '-8px 0 24px',
      letterSpacing: '-0.015em', lineHeight: 1.0,
      color: c.text
    },
    h2: {
      fontSize: '13px', letterSpacing: '0.08em',
      textTransform: 'uppercase', fontWeight: 600,
      color: c.accent, margin: '40px 0 18px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '320px 1fr',
      gap: isMobile ? '24px' : '56px',
      alignItems: 'start'
    },
    photoWrap: {
      width: isMobile ? '100%' : '320px',
      height: isMobile ? '260px' : '380px',
      overflow: 'hidden', background: c.photoBg
    },
    photo: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: '35% 15%' },
    bio: { fontSize: '18px', lineHeight: 1.55 },
    p: { margin: '0 0 18px' },
    pageBody: { fontSize: '18px', lineHeight: 1.55, maxWidth: '720px' },
    pageH1: {
      fontSize: isMobile ? '32px' : '40px', fontWeight: 700, margin: '0 0 32px 0',
      marginLeft: '-2px',
      letterSpacing: '-0.015em', lineHeight: 1.1
    },
    row: {
      display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '120px 1fr',
      gap: isMobile ? '4px' : '24px', padding: '14px 0',
      borderTop: `1px solid ${c.rule}`,
      alignItems: 'baseline'
    },
    rowMeta: {
      fontSize: '14px', color: c.muted,
      fontVariantNumeric: 'tabular-nums'
    },
    rowTitle: { fontSize: '17px', fontWeight: 500, margin: 0, color: c.text },
    rowSub: { fontSize: '15px', color: c.muted, margin: '4px 0 0', lineHeight: 1.5, fontStyle: 'italic' }
  };

  const NavLink = ({ id, label }) => {
    const active = page === id;
    return (
      
        href="#"
        onClick={(e) => {e.preventDefault();setPage(id);}}
        style={{
          textDecoration: 'none',
          color: active ? c.accent : darkMode ? '#5a4a52' : '#cdb0c1',
          fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
          textTransform: 'inherit', fontWeight: 'inherit'
        }}>
        
        {label}
      </a>);

  };

  const Link = ({ children, href = '#' }) =>
  
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    style={{ color: c.link, textDecoration: 'none' }}>
    
      {children}
    </a>;

  // Email reassembled from parts at runtime (anti-scraper); shows and
  // clicks exactly like a normal mailto link.
  const Email = ({ children }) => {
    const addr = `${S.emailUser}@${S.emailDomain}`;
    return (
      <a href={`mailto:${addr}`} style={{ color: c.link, textDecoration: 'none' }}>
        {children || addr}
      </a>
    );
  };


  return (
    <div style={z.page}>
      <div style={z.inner}>
        <nav style={z.nav}>
          <NavLink id="home" label="About" />
          <NavLink id="research" label="Research" />
          <NavLink id="teaching" label="Teaching" />
          <NavLink id="cv" label="CV" />
        </nav>

        {page === 'home' &&
        <div style={z.grid}>
            <div style={z.photoWrap}>
              <img src="pepper-cropped.png" alt="" style={z.photo} />
            </div>
            <div style={z.bio}>
              <h1 style={z.name}>{S.name}</h1>
              {S.bio.map((p, i) => <p key={i} style={z.p}>{p}</p>)}
              <p style={z.p}>
                You can reach me at <Email />.
              </p>
            </div>
          </div>
        }

        {page === 'research' &&
        <div style={z.pageBody}>
            <h1 style={z.pageH1}>Research</h1>

            <h2 style={z.h2}>Papers</h2>
            {S.papers.map((p, i) => {
              const isOpen = openPaper === i;
              return (
                <div key={i} style={{ borderTop: `1px solid ${c.rule}`, padding: '16px 0' }}>
                  <button
                    onClick={() => setOpenPaper(isOpen ? -1 : i)}
                    style={{
                      all: 'unset', cursor: 'pointer', width: '100%', boxSizing: 'border-box',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '16px',
                    }}
                  >
                    <span style={z.rowTitle}>
                      {p.title} <span style={{ color: c.muted, fontWeight: 400 }}>({p.status})</span>
                    </span>
                    <span style={{
                      color: c.accent, fontSize: '14px', flexShrink: 0,
                      transition: 'transform .2s', transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}>▾</span>
                  </button>
                  <div style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows .25s ease',
                  }}>
                    <div style={{ overflow: 'hidden' }}>
                      <p style={{ ...z.rowSub, fontStyle: 'normal', maxWidth: '54ch', margin: '12px 0 4px' }}>{p.synopsis}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <p style={{ ...z.rowSub, fontStyle: 'normal', margin: '18px 0 0' }}>
              Drafts available upon request — please <Email>email me</Email>.
            </p>

            <h2 style={z.h2}>Upcoming Presentations</h2>
            {S.upcoming.map((t, i) =>
          <div key={i} style={z.row}>
                <span style={z.rowMeta}>{t.when}</span>
                <div>
                  <p style={z.rowTitle}><Link href={t.url}>{t.title}</Link></p>
                  <p style={z.rowSub}>{t.venue}</p>
                </div>
              </div>
          )}
          </div>
        }

        {page === 'teaching' &&
        <div style={z.pageBody}>
            <h1 style={z.pageH1}>Teaching</h1>

            <h2 style={z.h2}>Instructor</h2>
            {S.teachingInstructor.map((t, i) =>
          <div key={i} style={{ marginBottom: '16px' }}>
                <p style={z.rowTitle}>{t.name}</p>
                <p style={{ ...z.rowSub, fontStyle: 'normal' }}>{t.where} · {t.term}</p>
              </div>
          )}

            <div style={{ borderTop: `1px solid ${c.rule}`, margin: '28px 0' }} />

            <h2 style={z.h2}>Teaching Assistant</h2>
            {S.teachingAssist.map((t, i) =>
          <div key={i} style={{ marginBottom: '16px' }}>
                <p style={z.rowTitle}>{t.name}</p>
                <p style={{ ...z.rowSub, fontStyle: 'normal' }}>{t.where} · {t.term}</p>
              </div>
          )}
          </div>
        }

        {page === 'cv' &&
        <div style={{ ...z.pageBody, maxWidth: '1000px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '24px' : '40px',
              alignItems: 'start',
            }}>
              <div>
                <h1 style={z.pageH1}>Curriculum vitae</h1>
                <p style={{ ...z.p, fontSize: '15px', maxWidth: '34ch' }}>
                  Here is a <Link href={CV_URL}>link to my CV</Link> and some 35mm photos of an MIT outing to the seaside.
                </p>
                <img
                  src="seaside-2.jpg"
                  alt="View across the harbor toward the city skyline"
                  style={{ width: '100%', display: 'block', marginTop: isMobile ? '24px' : '64px', background: c.photoBg }}
                />
              </div>
              <div>
                <img
                  src="seaside-1.jpg"
                  alt="People sitting on rocks by the sea"
                  style={{ width: '100%', display: 'block', marginTop: isMobile ? '0px' : '24px', background: c.photoBg }}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </div>);

}

window.DirZacka = DirZacka;
