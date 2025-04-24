import { createSystem, defaultConfig } from '@chakra-ui/react'
import '@fontsource/noto-sans-jp'

export const system = createSystem(defaultConfig, {
  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0
    }
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Noto Sans JP', sans-serif` },
        body: { value: `'Noto Sans JP', sans-serif` }
      }
    },
    semanticTokens: {
      colors: {
        text: {
          value: 'gray.600'
        },
        error: {
          value: 'red.500'
        }
      }
    }
  }
})
