import { Box } from "@mui/material";
import AboutUsSection from "../sections/AboutUs"




const AboutUs = () => {
  return (
    <Box sx={{marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
           <AboutUsSection />
    </Box>
  );
}

export default AboutUs