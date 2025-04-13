import { Box } from '@mui/material';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
const FixedLinks = () => {
    
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        zIndex: 40,
        height: "60px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          right: 10,
          width: 300,
          gap: 2,
          height: "100%",
        }}
      >
        <Box
          component="a"
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.open("https://wa.me/555134871354?text=", "_blank")
          }
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            boxShadow: "0px 4px 10px rgba(37, 211, 102, 0.5)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 6px 15px rgba(37, 211, 102, 0.7)",
            },
          }}
        >
          <WhatsAppIcon sx={{ color: "#fff", fontSize: 28 }} />
        </Box>
        <Box
          component="a"
       
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.open("https://www.instagram.com/refercercasecia/", "_blank")
          }
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: "rgb(209, 6, 6)",
            boxShadow: "0px 4px 10px rgba(165, 1, 1, 0.7)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 6px 15px rgba(165, 1, 1, 0.7)",
            },
          }}
        >
          <InstagramIcon sx={{ color: "#fff", fontSize: 28 }} />
        </Box>
      </Box>
    </Box>
  );
}

export default FixedLinks