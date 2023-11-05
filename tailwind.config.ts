import { type Config } from 'tailwindcss';

import { shadcnPreset } from './src/lib/shadcn-preset';

module.exports = {
  presets: [shadcnPreset],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
} satisfies Config;
