import { Box, Button, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "../App.styles";

import header_image_1 from "../assets/header_image_1.jpg";
import header_image_2 from "../assets/header_image_2.jpeg";
import header_image_3 from "../assets/header_image_3.jpeg";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import { red } from "@mui/material/colors";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const headerImages = [header_image_1, header_image_2, header_image_3];

const topCards = [
  {
    icon: <LocationOnIcon sx={{ height: 40, width: 40, color: red[800] }} />,
    title: "Localização",
    decription:
      "Av. Pompílio Gomes Sobrinho, 22856 Centro . CEP 94380-000 . Glorinha . RS",
  },
  {
    icon: <WatchLaterIcon sx={{ height: 40, width: 40, color: red[800] }} />,
    title: "Segunda à Sexta",
    decription: "8h às 12h e 13h30 às 18h",
  },
  {
    icon: <LocalPhoneIcon sx={{ height: 40, width: 40, color: red[800] }} />,
    title: "Telefone",
    decription: "51-34871354",
  },
];

const mainCards = [
  {
    icon: <HomeIcon sx={{ height: 60, width: 60, color: red[800] }} />,
    title: "Residencial",
    description:
      "Cercas para proteção de perímetros, piscinas, áreas de lazer, jardins, canis, propriedades rurais, entre outros.",
  },
  {
    icon: <BusinessIcon sx={{ height: 60, width: 60, color: red[800] }} />,
    title: "Comercial",
    description:
      "Soluções de cercamento para estacionamentos, áreas de eventos, estoques e proteção de perímetros comerciais.",
  },
  {
    icon: <FactoryIcon sx={{ height: 60, width: 60, color: red[800] }} />,
    title: "Industrial",
    description:
      "Cercamento para segurança de perímetros industriais, proteção de máquinas, estacionamentos e almoxarifados.",
  },
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % headerImages.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
  };

  return (
    <Box sx={{ ...styles.header, position: "relative" }}>
      {/* Imagem de fundo com animação */}
      <Box
        component="img"
        src={headerImages[currentImageIndex]}
        alt={`Header ${currentImageIndex + 1}`}
        sx={{
          position: "absolute",
          zIndex: 1,
          width: "100%",
          height: "100%",
          objectFit: { xs: "cover" },
          animation: "fadeZoom 1s ease-in-out",
          "@keyframes fadeZoom": {
            "0%": { opacity: 0, transform: "scale(1.1)" },
            "100%": { opacity: 1, transform: "scale(1)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          zIndex: 20,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      />

      {/* Top Container */}
      <Box sx={styles.header.topContainer}>
        <Box sx={styles.header.topCards}>
          {topCards.map((card, index) => (
            <Box
              key={index}
              sx={{
                ...styles.header.topCard,
                animation: `fadeInUp 0.5s ease-in-out ${index * 0.2}s`,
                animationFillMode: "forwards",
                opacity: 0,
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              {card.icon}
              <Box>
                <Typography>{card.title}</Typography>
                <Typography fontSize="small">{card.decription}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            ...styles.header.callToAction,
            animation: "bounceIn 0.8s ease-in-out",
            "@keyframes bounceIn": {
              "0%": { opacity: 0, transform: "scale(0.8)" },
              "60%": { opacity: 1, transform: "scale(1.1)" },
              "100%": { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <Stack direction="row" gap={2}>
            <CalendarMonthIcon
              sx={{ height: 40, width: 40, color: red[800] }}
            />
            <Typography>Solicite seu orçamento</Typography>
          </Stack>
        </Box>
      </Box>

      {/* Main Container */}
      <Box sx={styles.header.mainContainer}>
        <Box sx={styles.header.mainText}>
          <Stack>
            <Typography
              fontFamily="unset"
              variant="h2"
              sx={{
                animation: "slideInLeft 0.8s ease-in-out",
                "@keyframes slideInLeft": {
                  "0%": { opacity: 0, transform: "translateX(-50px)" },
                  "100%": { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              Cercas & Cia Refer
            </Typography>
            <Typography
              fontSize="large"
              sx={{
                animation: "slideInLeft 1s ease-in-out",
                "@keyframes slideInLeft": {
                  "0%": { opacity: 0, transform: "translateX(-50px)" },
                  "100%": { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              Qualidade que você vê, segurança que você sente
            </Typography>
          </Stack>

          <Button
            onClick={() => navigate("/contato")}
            sx={{
              backgroundColor: red[800],
              color: "white",
              height: 60,
              width: 200,
              padding: "10px 20px",
              borderRadius: 0,
              "&:hover": {
                backgroundColor: red[700],
                animation: "pulse 1s infinite",
                "@keyframes pulse": {
                  "0%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.05)" },
                  "100%": { transform: "scale(1)" },
                },
              },
              animation: "scaleIn 0.8s ease-in-out",
              "@keyframes scaleIn": {
                "0%": { opacity: 0, transform: "scale(0.8)" },
                "100%": { opacity: 1, transform: "scale(1)" },
              },
            }}
          >
            <Typography fontWeight="bold">Entre em Contato!</Typography>
          </Button>
        </Box>
        <Box sx={styles.header.mainCards}>
          {mainCards.map((card, index) => (
            <Box
              key={index}
              sx={{
              ...styles.header.mainCard,
              height: index === 1 ? 250 : 220,
              borderRadius: 0,
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)",
              borderTop: '1px solid #efa14e',
              animation: `fadeInUp 0.5s ease-in-out ${0.5 + index * 0.2}s`,
              animationFillMode: "forwards",
              opacity: 0,
              "@keyframes fadeInUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
              }}
            >
              {card.icon}
              <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginTop: 1 }}
              >
              {card.title}
              </Typography>
              <Typography fontSize="small">{card.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Barra inferior do carrossel */}
      <Box
        sx={{
          height: 60,
          width: {
            sm: "100%",
            xs: "100%",
          },
          display: "flex",
          flexWrap: "nowrap",
          backgroundColor: red[800],
          position: "absolute",
          bottom: -60,
          zIndex: 30,
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          animation: "slideInBottom 0.8s ease-in-out",
          "@keyframes slideInBottom": {
            "0%": { opacity: 0, transform: "translateY(60px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Box sx={{ width: "50%", height: 30 }}></Box>
        <IconButton
          onClick={goToNext}
          sx={{
            color: "white",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            animation: "pulse 1.5s infinite",
            "@keyframes pulse": {
              "0%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.1)" },
              "100%": { transform: "scale(1)" },
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        <Box
          sx={{
            width: "50%",
            height: 60,
            backgroundColor: "#efa14e",
            clipPath: "polygon(2% 0%, 100% 0%, 100% 99%, 0% 100%)",
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
