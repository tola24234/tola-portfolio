/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Base surfaces ────────────────────────────────────────────
        primary:  { DEFAULT: '#080e0d', dark: '#050a09', light: '#0d1514' },
        surface:  { DEFAULT: '#0f1a18', card: '#121f1c', hover: '#172421' },
        // ── Green accent ─────────────────────────────────────────────
        green: {
          DEFAULT:   '#22c55e',   // main green
          light:     '#4ade80',   // lighter green
          dark:      '#16a34a',   // darker green
          muted:     '#15803d',   // muted
          glow:      'rgba(34,197,94,0.25)',
          faint:     'rgba(34,197,94,0.08)',
          border:    'rgba(34,197,94,0.2)',
          'border-strong': 'rgba(34,197,94,0.4)',
        },
        // ── Keep legacy tokens ────────────────────────────────────────
        brand: {
          blue: '#3b82f6', 'blue-light': '#60a5fa', violet: '#8b5cf6',
          cyan: '#06b6d4', 'cyan-light': '#22d3ee',
        },
        accent: { green: '#22c55e', 'green-light': '#4ade80', 'green-dark': '#16a34a', cyan: '#06b6d4' },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(34,197,94,0.14), transparent)',
        'card-glow': 'radial-gradient(ellipse at top, rgba(34,197,94,0.06), transparent)',
        'green-gradient': 'linear-gradient(135deg, #22c55e, #4ade80)',
      },
      animation: {
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'float':       'float 6s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'spin-conic':  'spin 7s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      boxShadow: {
        'glow-green':  '0 0 28px rgba(34,197,94,0.28)',
        'glow-green-sm': '0 0 16px rgba(34,197,94,0.2)',
        'glow-green-lg': '0 0 48px rgba(34,197,94,0.35)',
        'card':        '0 4px 24px rgba(0,0,0,0.5)',
        'card-lg':     '0 8px 40px rgba(0,0,0,0.6)',
        // legacy
        'glow-blue':   '0 0 24px rgba(59,130,246,0.25)',
        'glow-violet': '0 0 24px rgba(139,92,246,0.25)',
      },
    },
  },
  plugins: [],
}
