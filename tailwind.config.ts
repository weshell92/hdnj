import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f0df',
        ink: '#211a16',
        cinnabar: '#a13d2d',
        ocher: '#b9822f',
        moss: '#5f6f52',
        cloud: '#efe3ca'
      },
      fontFamily: {
        serifCN: ['Songti SC', 'SimSun', 'serif'],
        sansCN: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(67, 49, 28, 0.12)'
      }
    }
  },
  plugins: []
}

export default config
