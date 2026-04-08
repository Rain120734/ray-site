import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // 品牌色
        brand: {
          50: '#ecfeff',
          400: '#22d3ee',     // ← 主強調色（科學青）
          500: '#06b6d4',
          900: '#ef007e',     //pink
        },
        dark: {
          900: '#0a0a12',     // ← 最深背景
          800: '#12121e',     // ← 卡片背景
          700: '#1a1a2e',     // ← 程式碼背景
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config