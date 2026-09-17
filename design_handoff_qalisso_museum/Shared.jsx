// Shared components used across pages

const StarOrnament = ({ size = 32, color = 'currentColor', style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 34 35" fill={color} style={style}>
    <path d="M18.909 7.299L17.091 0L15.091 7.299C13.818 11.604 11.273 14.225 7.091 15.535L0 17.594L7.091 19.465C11.273 20.775 13.818 23.396 15.091 27.701L17.091 35L18.909 27.701C20.182 23.396 22.727 20.775 26.909 19.465L34 17.594L26.909 15.535C22.727 14.225 20.182 11.604 18.909 7.299Z" />
  </svg>
);

const ArrowRight = ({ color = '#5F2E13', length = 52 }) => (
  <svg width={length + 10} height={12} viewBox={`0 0 ${length + 10} 12`} fill="none">
    <line x1="0" y1="6" x2={length - 2} y2="6" stroke={color} strokeWidth="1.4" />
    <path d={`M${length - 2} 1 L${length + 8} 6 L${length - 2} 11`} stroke={color} strokeWidth="1.4" fill="none" />
  </svg>
);

const BadgeCurrent = ({ color = '#fff' }) => (
  <div style={{
    display: 'inline-block', border: `1.5px solid ${color}`, borderRadius: 28,
    padding: '3px 14px', fontFamily: 'Roboto, sans-serif', fontSize: 12,
    color, letterSpacing: '0.08em', marginBottom: 18,
  }}>CURRENT</div>
);

const C = {
  brownDark: '#5F2E13',
  brownHero: '#9F7C53',
  cultureSection: '#EFD2B0',
  storiesSection: '#C2A786',
  collectionsSection: '#544534',
  exhibitionsBg: '#DCC1A1',
  collectionsBg: '#C2A786',
  eventsBg: '#B28F65',
  visitBg: '#EFD2B0',
  contactBg: '#EFD7BB',
  footer: '#222222',
  white: '#FFFFFF',
};

Object.assign(window, { StarOrnament, ArrowRight, BadgeCurrent, C });
