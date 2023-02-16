import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  ActionIcon,
  AppShell,
  Header,
  MantineProvider,
  Navbar,
  Text,
  createStyles
} from '@mantine/core'
import { Settings } from 'tabler-icons-react' 
import { useTodoStore } from '@/stores/bears'


const useStyles = createStyles((theme) => ({

  cuteText: {
    color: theme.colors.red[5],
    fontSize: 20,
    fontWeight: 600,
  }
}))
  

export default function App({ Component, pageProps }: AppProps) {

  const {classes} = useStyles();


  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: 'light',
      }}
    >
     
        <Component {...pageProps} />
    
    </MantineProvider>
  )
}
