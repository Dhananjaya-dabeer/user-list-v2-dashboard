import { CssBaseline, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { createCustomTheme } from "./theme";
import "./i18n";
import UserList from "./pages/user-list/user-list-view-v2";
import RTL from "./components/RTL";
import useSettings from "./hooks/useSettings";
import DashboardLayout from "./layouts/layout-v3/DashboardLayout";

const App = () => {
  const {
    settings
  } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes
  });
  return <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <RTL>
        <CssBaseline />
        <DashboardLayout />
        <UserList />
      </RTL>
    </ThemeProvider>
  </StyledEngineProvider>;
};

export default App;