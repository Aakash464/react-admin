import{ColorModeContext,useMode} from './theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import TopBar from "./global/TopBar";
import SideBar from './global/SideBar';
import { Route,Routes } from 'react-router-dom';

import Team from "./scenes/team/index";
import Dashboard from "./scenes/dashboard/index"
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts/index";
import Bar from "./scenes/bar/index";
import Form from "./scenes/form/index";
import Line from "./scenes/line/index";
import Pie from "./scenes/pie/index";
import FAQ from "./scenes/faq/index";
import Geography from "./scenes/geo/index";
import Calendar from "./scenes/calendar/index";







function App() {
  const[theme,colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/invoices" element={<Invoices />}></Route>
              <Route path="/form" element={<Form />}></Route>
              <Route path="/bar" element={<Bar />}></Route>
              <Route path="/pie" element={<Pie />}></Route>
              <Route path="/line" element={<Line />}></Route>
              <Route path="/faq" element={<FAQ />}></Route>
              <Route path="/geo" element={<Geography />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
            </Routes>
           
          </main>
        </div>

    
    </ThemeProvider>
    </ColorModeContext.Provider>
   
  )
}

export default App
