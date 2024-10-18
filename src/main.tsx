
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "./components/ui/theme-provider"
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}




createRoot(document.getElementById('root')!).render(

  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ClerkProvider  appearance={{
        baseTheme: dark,
      }}
       publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
    </ClerkProvider>
  </ThemeProvider> 

)
