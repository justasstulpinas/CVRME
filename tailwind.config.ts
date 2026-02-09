import type { Config } from 'tailwindcss'
import tokens from './src/design/tokens/design-tokens.json'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [tokens.fontFamily.primary, 'system-ui'],
      },
      fontSize: Object.fromEntries(
        Object.entries(tokens.scale).map(([k, v]: any) => [
          k,
          [`${v.size}px`, { lineHeight: `${v.lineHeight}px`, fontWeight: v.weight }],
        ])
      ),
      spacing: Object.fromEntries(
        Object.entries(tokens.spacing).map(([k, v]: any) => [k, `${v}px`])
      ),
      borderRadius: Object.fromEntries(
        Object.entries(tokens.radius).map(([k, v]: any) => [k, `${v}px`])
      ),
      boxShadow: tokens.elevation,
      transitionDuration: {
        fast: tokens.motion.duration.fast,
        base: tokens.motion.duration.base,
        slow: tokens.motion.duration.slow,
      },
      transitionTimingFunction: {
        standard: tokens.motion.easing.standard,
        decelerate: tokens.motion.easing.decelerate,
        accelerate: tokens.motion.easing.accelerate,
      },
    },
  },
  plugins: [],
}
export default config
