import React, { useEffect } from "react";
import contactImage from "../assets/Gemini_Generated_Image_sy9znqsy9znqsy9z.jpeg";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation(); // Hook para obter a localização atual
  // Função handleSubmit deixada para sua implementação
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Sua lógica aqui
  };

  useEffect(() => {
    console.log('currentLocation: ', location.pathname);
    if (location.pathname === "/contato") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        setTimeout(() =>  {
           contactSection.scrollIntoView({
             behavior: "smooth",
             block: "start",
           });
        }, 1000);
      }
    }
  }, [location]); // Executa o efeito sempre que a rota mudar

  return (
    <Box
    id="contact"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        py: 8,
        px: { xs: 2, md: 4 },
        position: "relative",
      }}
    >
      {/* Overlay para melhorar a legibilidade */}

      {/* Container principal com formulário e imagem */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Empilha em telas pequenas, lado a lado em telas grandes
          maxWidth: "1200px",
          width: "100%",
          gap: 4,
          zIndex: 1,
        }}
      >
        {/* Formulário dentro de um Paper */}
        <Paper
          elevation={1}
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "600px" },
            width: "100%",
            p: { xs: 3, md: 5 },
            borderRadius: 0,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textAlign: "center",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Entre em Contato
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 4,
              textAlign: "center",
              color: "#666",
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Preencha o formulário abaixo e nossa equipe entrará em contato em
            breve.
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Campo Nome */}
            <TextField
              label="Nome"
              variant="outlined"
              fullWidth
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#d32f2f",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d32f2f",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d32f2f",
                },
              }}
            />

            {/* Campo E-mail */}
            <TextField
              label="E-mail"
              variant="outlined"
              type="email"
              fullWidth
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#d32f2f",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d32f2f",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d32f2f",
                },
              }}
            />

            {/* Campo Assunto */}
            <TextField
              label="Assunto"
              variant="outlined"
              fullWidth
              required
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#d32f2f",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d32f2f",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d32f2f",
                },
              }}
            />

            {/* Campo Mensagem */}
            <TextField
              label="Mensagem"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              sx={{
                mb: 4,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                  "&:hover fieldset": {
                    borderColor: "#d32f2f",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#d32f2f",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#d32f2f",
                },
              }}
            />

            {/* Botão de Envio */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 0,
                backgroundColor: "#d32f2f",
                "&:hover": {
                  backgroundColor: "#b71c1c",
                },
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Enviar Mensagem
            </Button>
          </form>
        </Paper>

        {/* Imagem */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "600px" },
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-5px)",
            },
          }}
        >
          <Box
            component="img"
            src={contactImage}
            alt="Imagem de contato"
            sx={{
              width: "100%",
              height: { xs: "300px", md: "100%" }, // Altura ajustada para telas pequenas
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
