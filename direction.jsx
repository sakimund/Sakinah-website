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
