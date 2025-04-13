import { Box, Typography } from "@mui/material";
import AboutUsSection from "../sections/AboutUs"
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import pattern from "../assets/minimal-background-pattern-wordpress-3.jpg";


const certifications = [
  {
    title: "OHSAS 18001",
    description:
      "Certifica que a empresa adota as melhores práticas em gestão de saúde e segurança do trabalho.",
  },
  {
    title: "ISO 14001",
    description:
      "Certifica que a empresa respeita o meio ambiente e é comprometida com o desenvolvimento sustentável e com a redução de impactos ambientais.",
  },
  {
    title: "ISO 9001",
    description:
      "Certifica que a empresa adota um sistema de gestão da qualidade.",
  },
  {
    title: "Rótulo Ecológico ABNT",
    description:
      "Certifica o desempenho ambiental das empresas que trabalham com produtos menos agressivos ao meio ambiente.",
  },
];

const CertificationsGrid = () => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      padding: 2.5,
      justifyContent: "center",
      gap: 3,
      backgroundColor: "#f5f5f5", // Fundo claro para a seção
    }}
  >
    {certifications.map((cert, index) => (
      <Box
        key={index}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", sm: 250 },
          minHeight: 200,
          p: 3,
          borderRadius: "12px",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
          },
          overflow: "hidden",
        }}
      >
        {/* Textura de fundo */}
        <Box
          component="img"
          src={pattern}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.1, // Baixa opacidade para não interferir no texto
            zIndex: 0,
            objectFit: "cover",
          }}
        />

        {/* Conteúdo do card */}
        <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <CheckCircleIcon sx={{ color: "red", fontSize: 40, mb: 1 }} />
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ color: "#333", mb: 1 }}
          >
            {cert.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            {cert.description}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
);

const AboutUs = () => {
  return (
    <Box sx={{marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4}}>
      <Typography variant="h2" textAlign="center">Segurança e qualidade é a a nossa prioridade!</Typography>
      <CertificationsGrid />
      <AboutUsSection />
    </Box>
  );
}

export default AboutUs