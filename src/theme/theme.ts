import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react'

import '@fontsource/noto-sans-jp'

const { Link, FormLabel, Input, Textarea, Button, Card, Radio, Progress, Skeleton } =
  chakraTheme.components

export const theme = extendBaseTheme({
  fonts: {
    heading: `'Noto Sans JP', sans-serif`,
    body: `'Noto Sans JP', sans-serif`
  },
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0
      }
    }
  },
  semanticTokens: {
    colors: {
      text: {
        default: 'gray.600'
      },
      error: {
        default: 'red.500'
      }
    }
  },
  components: {
    Button,
    Card,
    FormLabel,
    Input,
    Link,
    Progress,
    Radio,
    Skeleton,
    Textarea
  }
})
