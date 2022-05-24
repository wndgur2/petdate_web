import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { darkModeVar, isLoggedInVar } from "./apollo";
import { useReactiveVar } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn?<Home/>:<Login/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;