import{ColorModeContext,useMode} from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import TopBar from "./global/TopBar";
import SideBar from './global/SideBar';




function App() {
  const[theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
          <main className="content">
            <TopBar />
            <SideBar />
          </main>
        </div>

    
    </ThemeProvider>
    </ColorModeContext.Provider>
   
  )
}

export default App
