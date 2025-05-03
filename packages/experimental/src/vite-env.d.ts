/// <reference types="vite/client" />

declare module '@fontsource-variable/roboto-mono'

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
