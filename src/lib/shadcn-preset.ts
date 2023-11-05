import animatePlugin from 'tailwindcss-animate';
import { type Config } from 'tailwindcss';

import { shadcnPlugin } from './shadcn-plugin';

const shadcnPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [animatePlugin, shadcnPlugin],
} satisfies Config;

export { shadcnPreset };
