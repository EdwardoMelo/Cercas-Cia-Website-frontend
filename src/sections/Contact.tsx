import React, { useEffect, useState } from "react";
import contactImage from "../assets/Gemini_Generated_Image_sy9znqsy9znqsy9z.jpeg";
import { Box, Typography, TextField, Button, Paper, Fade } from "@mui/material";
import { useLocation } from "react-router-dom";
import { sendEmail } from "../utils";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

import {CircularProgress} from "@mui/material";


const Contact = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const [showErrorMessage, setShowErrorMessage] = useState(false);


  const location = useLocation(); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true); 
    try {
      await sendEmail({ name, email, phone, subject, message });
      setShowSuccessMessage(true);
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setTimeout(() => setShowSuccessMessage(false), 3000);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setShowErrorMessage(true)
      setTimeout(() => setShowErrorMessage(false), 3000);
    } finally {
      setLoading(false);
    }
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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

          {!loading && (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Campo Nome */}
              <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              {/* Campo Telefone */}
              <TextField
                label="Telefone"
                variant="outlined"
                type="tel"
                fullWidth
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
          )}
          {loading && <CircularProgress />}
          {/* Mensagem de Sucesso */}
          <Fade in={showSuccessMessage}>
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                p: 4,
                borderRadius: "12px",
                boxShadow: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                zIndex: 1000,
                animation: "fadeInScale 0.5s ease-in-out",
                "@keyframes fadeInScale": {
                  "0%": {
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0.8)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1)",
                  },
                },
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 50, color: "#4caf50" }} />
              <Typography variant="h6" fontWeight="bold" color="#333">
                Mensagem Enviada com Sucesso!
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
              >
                Nossa equipe entrará em contato em breve.
              </Typography>
            </Box>
          </Fade>
          <Fade in={showErrorMessage}>
            <Box
              sx={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "white",
                p: 4,
                borderRadius: "12px",
                boxShadow: 24,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                zIndex: 1000,
                animation: "fadeInScale 0.5s ease-in-out",
                "@keyframes fadeInScale": {
                  "0%": {
                    opacity: 0,
                    transform: "translate(-50%, -50%) scale(0.8)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translate(-50%, -50%) scale(1)",
                  },
                },
              }}
            >
              <ErrorIcon sx={{ fontSize: 50, color: "#d32f2f" }} />
              <Typography variant="h6" fontWeight="bold" color="#333">
                Erro ao Enviar Mensagem
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                textAlign="center"
              >
                Ocorreu um erro. Tente novamente mais tarde.
              </Typography>
            </Box>
          </Fade>
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
