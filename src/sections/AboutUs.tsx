import { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const AboutUs = () => {
  const location = useLocation();

  // Referências para as seções que queremos animar
  const titleRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const missionVisionValuesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  // Estados para controlar a visibilidade de cada seção
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isCompanyVisible, setIsCompanyVisible] = useState(false);
  const [isMissionVisionValuesVisible, setIsMissionVisionValuesVisible] =
    useState(false);
  const [isLocationVisible, setIsLocationVisible] = useState(false);

  // Configurar o IntersectionObserver para cada seção
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Dispara quando 20% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) setIsTitleVisible(true);
          if (entry.target === experienceRef.current)
            setIsExperienceVisible(true);
          if (entry.target === companyRef.current) setIsCompanyVisible(true);
          if (entry.target === missionVisionValuesRef.current)
            setIsMissionVisionValuesVisible(true);
          if (entry.target === locationRef.current) setIsLocationVisible(true);
          observer.unobserve(entry.target); // Para de observar após a animação ser disparada
        }
      });
    }, observerOptions);

    // Observa cada seção
    if (titleRef.current) observer.observe(titleRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (companyRef.current) observer.observe(companyRef.current);
    if (missionVisionValuesRef.current)
      observer.observe(missionVisionValuesRef.current);
    if (locationRef.current) observer.observe(locationRef.current);

    // Limpeza do observer ao desmontar o componente
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
      if (companyRef.current) observer.unobserve(companyRef.current);
      if (missionVisionValuesRef.current)
        observer.unobserve(missionVisionValuesRef.current);
      if (locationRef.current) observer.unobserve(locationRef.current);
    };
  }, []);

  useEffect(() => {
    console.log("currentLocation: ", location.pathname);
    if (location.pathname === "/sobre") {
      const contactSection = document.getElementById("about");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 1000);
      }
    }
  }, [location]);

  return (
    <Box
      id="about"
      sx={{
        py: 8,
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: { xs: 1, sm: 2, md: 4 },
        maxWidth: "1200px",
        mx: "auto",
      }}
    >
      {/* Título "Sobre Nós" */}
      <Box ref={titleRef} sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            display: "inline-block",
            position: "relative",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            animation: isTitleVisible ? "fadeInDown 0.8s ease-in-out" : "none",
            "@keyframes fadeInDown": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Sobre Nós
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            justifyContent: "center",
            gap: 1,
            animation: isTitleVisible ? "fadeIn 0.8s ease-in-out" : "none",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          <Box sx={{ height: "3px", width: "100px", bgcolor: "#d32f2f" }} />
          <Box sx={{ height: "3px", width: "100px", bgcolor: "#ff9800" }} />
        </Box>
      </Box>

      {/* Seção principal com texto e descrição da empresa */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          mb: 4,
          px: { xs: 1, md: 0 },
        }}
      >
        {/* Seção "Décadas de Experiência" */}
        <Box
          ref={experienceRef}
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 41.666%" },
            minWidth: 0,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              bgcolor: "#444",
              color: "white",
              p: { xs: 3, md: 4 },
              height: "100%",
              borderRadius: 0,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              animation: isExperienceVisible
                ? "slideInLeft 0.8s ease-in-out"
                : "none",
              "@keyframes slideInLeft": {
                "0%": { opacity: 0, transform: "translateX(-50px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: "bold",
                mb: 1,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              Décadas
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                mb: 2,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "150px",
                  height: "3px",
                  bgcolor: "#d32f2f",
                },
              }}
            >
              de experiência
            </Typography>

            <Box sx={{ mt: 5 }}>
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", md: "1rem", fontWeight: 300 },
                }}
              >
                Hoje a empresa conta com novos produtos e uma equipe ainda mais
                especializada e treinada para atender seus clientes, procurando
                suprir suas necessidades de cercamentos com acabamentos
                diferenciados e resistentes.
              </Typography>
            </Box>
          </Paper>
        </Box>

        {/* Seção "Sobre a Empresa" */}
        <Box
          ref={companyRef}
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 58.333%" },
            minWidth: 0,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              border: "1px solid #e0e0e0",
              p: { xs: 3, md: 4 },
              position: "relative",
              overflow: "hidden",
              borderRadius: 0,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)",
              },
              animation: isCompanyVisible
                ? "slideInRight 0.8s ease-in-out"
                : "none",
              "@keyframes slideInRight": {
                "0%": { opacity: 0, transform: "translateX(50px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                width: "10px",
                bgcolor: "#d32f2f",
              }}
            />

            <Typography
              variant="h4"
              component="h3"
              sx={{
                fontWeight: "bold",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Sobre a empresa
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                  fontWeight: 400,
                  color: "#263238",
                },
              }}
            >
              A Belgo Cercas e Cia é uma empresa dedicada a oferecer soluções
              completas em cercamentos e arames, combinando tradição e inovação
              para atender às demandas de seus clientes com excelência e
              qualidade.
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "0.9rem",
                  md: "1rem",
                  fontWeight: 400,
                  color: "#263238",
                },
              }}
            >
              A Belgo Cercas e Cia é parceira da Belgo, uma empresa com uma
              história sólida que remonta a 1971, quando foi firmada a primeira
              parceria estratégica entre a ArcelorMittal, uma das maiores
              produtoras de aço do mundo, e a Bekaert, líder mundial em arames.
              Essa união deu origem à Belgo-Mineira Bekaert, dedicada à produção
              de steel cord e hose wire, consolidando-se como referência em
              qualidade e inovação no setor.
            </Typography>
          </Paper>
        </Box>
      </Box>

      {/* Seção de Missão, Valores e Visão */}
      <Box
        ref={missionVisionValuesRef}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 4,
          px: { xs: 1, md: 0 },
        }}
      >
        {[
          {
            num: "01",
            title: "Missão",
            content:
              "Proporcionar soluções criativas e de alta performance em cercamentos e arames, atendendo às expectativas dos nossos clientes com excelência.",
          },
          {
            num: "02",
            title: "Visão",
            content:
              "Ser reconhecida como líder global em soluções de cercamentos, ampliando nossa atuação internacional com produtos sustentáveis e inovadores.",
          },
          {
            num: "03",
            title: "Valores",
            content:
              "Ética, inovação, responsabilidade ambiental, colaboração e foco no cliente são os princípios que norteiam nossas ações no mercado.",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: { xs: "1 1 100%", md: "1 1 33.333%" },
              minWidth: 0,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                border: "1px solid #e0e0e0",
                borderLeft: "8px solid #d32f2f",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
                animation: isMissionVisionValuesVisible
                  ? `fadeInUp 0.5s ease-in-out ${index * 0.2}s`
                  : "none",
                animationFillMode: "forwards",
                opacity: 0,
                "@keyframes fadeInUp": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "semibold" }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    md: "1rem",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#263238",
                  },
                }}
              >
                {item.content}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Subseção Localização */}
      <Box ref={locationRef} sx={{ mt: 8, textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "bold",
            mb: 3,
            position: "relative",
            fontSize: { xs: "1.5rem", md: "2rem" },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "150px",
              height: "3px",
              bgcolor: "#d32f2f",
            },
            animation: isLocationVisible
              ? "fadeInDown 0.8s ease-in-out"
              : "none",
            "@keyframes fadeInDown": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Localização
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            fontSize: { xs: "0.9rem", md: "1rem" },
            animation: isLocationVisible ? "fadeIn 0.8s ease-in-out" : "none",
            "@keyframes fadeIn": {
              "0%": { opacity: 0 },
              "100%": { opacity: 1 },
            },
          }}
        >
          Av. Pompílio Gomes Sobrinho, 22856 Centro . CEP 94380-000 . Glorinha .
          RS
        </Typography>

        {/* Widget do Google Maps */}
        <Box
          sx={{
            maxWidth: "100%",
            height: "400px",
            borderRadius: "8px",
            overflow: "hidden",
            animation: isLocationVisible ? "zoomIn 0.8s ease-in-out" : "none",
            "@keyframes zoomIn": {
              "0%": { opacity: 0, transform: "scale(0.9)" },
              "100%": { opacity: 1, transform: "scale(1)" },
            },
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.447896550851!2d-50.79534292358969!3d-29.8801923236807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951906e522704c65%3A0x923fec8127d03d8a!2sAv.%20Dr.%20Pompilio%20Gomes%20Sobrinho%2C%2022856%2C%20Glorinha%20-%20RS%2C%2094380-000!5e0!3m2!1spt-BR!2sbr!4v1744331272937!5m2!1spt-BR!2sbr"
            width="100%"
            height="600"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
