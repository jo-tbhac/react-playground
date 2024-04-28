import { theme as chakraTheme, extendBaseTheme } from '@chakra-ui/react'

const { Link } = chakraTheme.components

export const theme = extendBaseTheme({
  components: {
    Link
  }
})
