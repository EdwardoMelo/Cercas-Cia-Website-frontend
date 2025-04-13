
import './App.css'
import { Box } from '@mui/material'

import Header from './sections/Header'

import Footer from './sections/Footer'
// Removed unused import of FaInstagram and FaWhatsapp

import { Outlet } from "react-router-dom"; // Importe o Outlet
import FixedLinks from './components/FixedLinks'
import Navbar from './components/Navbar'


interface AppProps {
  children?: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  console.log("children: ", children);
  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    > 
      <Navbar />
      <Header />
       <Outlet />
      <Footer />
      <FixedLinks />
    </Box>
  );
};

export default App
