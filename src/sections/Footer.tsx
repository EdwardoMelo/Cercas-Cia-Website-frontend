import { useEffect, useState } from "react";
import footerImage from "../assets/Gemini_Generated_Image_8yjv0h8yjv0h8yjv.jpeg";
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  IconButton,
  Fab,
  Zoom,
} from "@mui/material";

// Icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {  useNavigate } from "react-router-dom";

  const navItems = [
    { label: "Início", href: "home" },
    { label: "Sobre", href: "sobre" },
    { label: "Produtos", href: "produtos" },
    { label: "Contato", href: "contato" },
  ];

// Styles
  const styles = {
    // Footer
    footer: {
      width: "100%",
      position: "relative",
      bottom: 0,
      backgroundImage: `url(${footerImage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      backgroundAttachment: "fixed",
      color: "white", // Define a cor padrão do texto como branco
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)", // Overlay escuro semi-transparente
      zIndex: 10,
    },
    container: {
      zIndex: 30,
      width: "100%",
      padding: "48px 16px",
      position: "relative",
    },

    // Main content container
    mainContent: {
      padding: 10,
      display: "flex",
      zIndex: 20,
      flexDirection: { xs: "column", md: "row" },
      alignItems: { 
        xs: 'center',
      },
      gap: 4,
    },

    // Seção individual
    section: {
      flex: { xs: "1 1 100%", md: "1 1 50%", lg: "1 1 33.333%" }, // Ajustado para 3 colunas em telas grandes
      minWidth: 0,
      width: { 
        xs: 250,
        md: 'auto'
      },
    },

    // Logo section
    logoText: {
      color: "white", // Texto branco
      fontWeight: "bold",
      fontSize: "1.875rem",
    },
    subText: {
      fontSize: "0.875rem",
      color: "white",
      display: "block",
      marginBottom: "4px",
    },
    description: {
      fontSize: "0.875rem",
      color: "white", // Texto branco
    },
    socialIcons: {
      display: "flex",
      gap: "16px",
      marginTop: "16px",
    },
    socialIcon: {
      color: "white", // Ícones brancos
      "&:hover": {
        color: "#ff9800", // Cor de hover laranja para contraste
      },
    },

    // Navigation section
    navContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    redDivider: {
      borderColor: "#ff9800", // Divisor laranja para contraste
      width: "100%",
      marginBottom: "8px",
    },
    listItem: {
      padding: 0,
      margin: 0,
    },
    listItemButton: {
      padding: "4px 0",
      color: "white", // Links brancos
      "&:hover": {
        backgroundColor: "transparent",
        color: "#ff9800", // Cor de hover laranja
      },
    },

    // Contact section
    contactContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    contactTitle: {
      color: "white", // Título branco
      fontWeight: 700,
      fontSize: "1.25rem",
      marginBottom: "16px",
    },
    contactItem: {
      display: "flex",
      gap: "12px",
      alignItems: "flex-start",
    },
    icon: {
      color: "#ff9800", // Ícones laranja para contraste
      fontSize: "1.25rem",
      flexShrink: 0,
      marginTop: "2px",
    },
    text: {
      fontSize: "0.875rem",
      color: "white", // Texto branco
    },
    link: {
      fontSize: "0.875rem",
      color: "white", // Links brancos
      textDecoration: "none",
      "&:hover": {
        color: "#ff9800", // Cor de hover laranja
      },
    },

    // Copyright section
    copyrightContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.8)", // Fundo escuro para contraste
      width: "100%",
      zIndex: 20,
      color: "white",
      padding: "16px 0",
    },
    copyrightContent: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-between",
      alignItems: { xs: "center", md: "center" },
      fontSize: "0.875rem",
    },
    developerText: {
      marginTop: { xs: "8px", md: 0 },
    },
    companyName: {
      fontWeight: 500,
    },

    // Back to top button
    fab: {
      position: "fixed",
      bottom: "32px",
      right: "32px",
      backgroundColor: "white",
      color: "#666",
      border: "1px solid #ddd",
      "&:hover": {
        backgroundColor: "#ff9800",
        color: "white",
      },
    },
  };

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <Box component="footer" sx={styles.footer}>
      {/* Overlay escuro */}
      <Box sx={styles.overlay} />

      {/* Conteúdo do rodapé */}
      <Box sx={styles.container}>
        {/* Main Content */}
        <Box sx={styles.mainContent}>
          {/* Logo Section */}
          <Box sx={styles.section}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography sx={styles.logoText}>
                <Typography component="span" sx={styles.subText}>
                  BELGO
                </Typography>
                Cercas & Cia Refer
              </Typography>

              <Typography sx={styles.description}>
                A Cercas e Cia Refer é a sua fornecedora especializada em
                cercamentos no Rio Grande do Sul, tornando-se a melhor opção
                para cercar com segurança, beleza, durabilidade e muitos outros
                benefícios.
              </Typography>

              <Stack direction="row" spacing={2} sx={styles.socialIcons}>
                <IconButton
                  aria-label="Instagram"
                  size="small"
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/refercercasecia/",
                      "_blank"
                    )
                  }
                  sx={styles.socialIcon}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  size="small"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/cercaseciarefer/?locale=pt_BR",
                      "_blank"
                    )
                  }
                  sx={styles.socialIcon}
                >
                  <FacebookIcon />
                </IconButton>
              </Stack>
            </Box>
          </Box>

          {/* Navigation Section */}
          <Box sx={styles.section}>
            <Box sx={styles.navContainer}>
              <Divider sx={styles.redDivider} />
              <List disablePadding>
                {navItems.map((item, index) => (
                  <ListItem key={index} disablePadding sx={styles.listItem}>
                    <ListItemButton
                      onClick={() => navigate(`/${item.href}`)}
                      component="a"
                      href={item.href}
                      sx={styles.listItemButton}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>

          {/* Contact Section */}
          <Box sx={styles.section}>
            <Box sx={styles.contactContainer}>
              <Typography sx={styles.contactTitle}>
                Cercas & Cia Refer
              </Typography>
              <Stack spacing={2}>
                <Box sx={styles.contactItem}>
                  <LocationOnIcon sx={styles.icon} />
                  <Typography sx={styles.text}>
                    Av. Pompílio Gomes Sobrinho, 22856 Centro . CEP 94380-000 .
                    Glorinha . RS
                  </Typography>
                </Box>

                <Box sx={styles.contactItem}>
                  <PhoneIcon sx={styles.icon} />
                  <Box component="a" href="tel:+555134871354" sx={styles.link}>
                    +55 51-34871354
                  </Box>
                </Box>

                <Box sx={styles.contactItem}>
                  <EmailIcon sx={styles.icon} />
                  <Box
                    component="a"
                    href="mailto:contato@cercaseciarefer.com.br"
                    sx={styles.link}
                  >
                    contato@cercaseciarefer.com.br
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box sx={styles.copyrightContainer}>
        <Container>
          <Box sx={styles.copyrightContent}>
            <Typography variant="body2">
              Copyright © {currentYear} BELGO Cercas e Cia Refer. Todos os
              direitos reservados.
            </Typography>
            <Typography variant="body2" sx={styles.developerText}>
              Desenvolvimento:{" "}
              <Box component="span" sx={styles.companyName}>
                MeloTech
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Back to Top Button */}
      <Zoom in={isVisible}>
        <Fab
          size="small"
          aria-label="Voltar ao topo"
          onClick={scrollToTop}
          sx={styles.fab}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
};

export default Footer;
