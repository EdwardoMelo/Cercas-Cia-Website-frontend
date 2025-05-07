import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  Modal,
  IconButton,
  Fade,
} from "@mui/material";
import styles from "../App.styles";
import { brown, red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import { useLocation } from "react-router-dom";

// Imagens fixas
import pattern from "../assets/minimal-background-pattern-wordpress-3.jpg";
import technologyImage from "../assets/cercas-e-cia-tecnologia-de-pintura-desenho-527x305xc.png";

// Importação dinâmica de todas as imagens do diretório assets
const images = import.meta.glob("../assets/*.jpg", { eager: true });

// Interface para o tipo ProductCard
interface ProductCard {
  id: number;
  title: string;
  image: string;
  description: string;
  applications: string[];
}

// Função para mapear o nome do produto para o nome do arquivo da imagem
const getImageForProduct = (title: string) => {
  let baseName = title
    .replace("Belgo ", "belgo-")
    .toLowerCase()
    .replace(/\s+/g, "-");

  if (title === "Belgo Móvel") {
    baseName = "Belgo Movel"
      .replace("Belgo ", "belgo-")
      .toLowerCase()
      .replace(/\s+/g, "-");
  }
  let imageName = `../assets/${baseName}-banner.jpg`;

  if (title === "Belgo Alambrado") {
    imageName =
      "../assets/belgo-alambrado-bezinal-e-belgo-alambrado-galvanizado-banner.jpg";
  }
  if (title === "Belgo Plastic") {
    imageName = "../assets/belgo-alambrado-plastic-banner.jpg";
  }
  if (title === "Belgo Serralheiro") {
    imageName = "../assets/belgo-serralheiro-br-fence.jpg";
  }

  if (images[imageName]) {
    return (images[imageName] as { default: string }).default;
  }

  console.warn(`Imagem não encontrada para o produto: ${title}`);
  return "";
};

// Lista de produtos
const productCards: ProductCard[] = [
  {
    id: 1,
    title: "Belgo Securifor",
    image: "",
    applications: [
      "Anti-escalada",
      "Favorece a vigilância",
      "Excelente visibilidade",
      "Arenas esportivas",
      "Indústrias e almoxarifados",
      "Escolas, universidades",
      "Edifícios residenciais e comerciais",
      "Subestações elétricas",
      "Áreas militares e presídios",
      "Estações rodoviárias, metroviárias e ferroviárias, etc.",
    ],
    description:
      "O Belgo Securifor é uma solução de alta segurança, ideal para proteger áreas sensíveis e de acesso restrito. Com design robusto e resistente, oferece máxima proteção contra invasões e vandalismo.",
  },
  {
    id: 2,
    title: "Belgo Nylofor",
    image: "",
    applications: [
      "Sistema modular",
      "Resistência mecânica",
      "Elevada durabilidade",
      "Rápida instalação",
      "Empreendimentos residenciais, comerciais, industriais",
      "Escolas, universidades, arenas esportivas",
      "Hospitais, igrejas e templos",
      "Condomínios, shoppings, hotéis, supermercados",
      "Praças, parques, clubes, proteção de piscinas",
      "Concessionária de veículos, estacionamentos",
      "Aeroportos, metrôs, terminais rodoviários, etc.",
    ],
    description:
      "O Belgo Nylofor é uma cerca versátil e durável, perfeita para delimitar espaços com elegância e segurança.",
  },
  {
    id: 3,
    title: "Belgo Slim",
    image: "",
    applications: [
      "Painéis mais leves",
      "Sistema modular",
      "Rápida instalação",
      "Empreendimentos residenciais, comerciais, industriais",
      "Escolas, universidades",
      "Hospitais, igrejas e templos",
      "Praças, parques, clubes, proteção de piscinas",
      "Concessionária de veículos, estacionamentos",
    ],
    description:
      "O Belgo Slim combina leveza e resistência, sendo ideal para aplicações residenciais e comerciais. Seu design moderno se adapta a diferentes estilos de arquitetura.",
  },
  {
    id: 4,
    title: "Belgo Open",
    image: "",
    applications: [
      "Versatilidade",
      "Sistema modular",
      "Rápida instalação",
      "Empreendimentos residenciais, comerciais, industriais",
      "Almoxarifados e depósitos",
      "Escolas, universidades",
      "Praças e parques",
      "Concessionária de veículos, estacionamentos",
      "Direcionamento de público em eventos",
      "Delimitação de área de circulação.",
    ],
    description:
      "O Belgo Open é uma cerca prática e funcional, projetada para oferecer segurança sem comprometer a visibilidade. Ideal para áreas públicas e privadas.",
  },
  {
    id: 5,
    title: "Belgo Durafor",
    image: "",
    applications: [
      "Alta resistência à corrosão",
      "Elevada durabilidade",
      "Rápida instalação",
      "Regiões litorâneas",
      "Empreendimentos residenciais, comerciais, industriais",
      "Escolas, universidades",
      "Condomínios, shoppings, hotéis",
      "Arenas esportivas, praças, parques",
      "Concessionária de veículos, estacionamentos",
      "Aeroportos, metrôs, terminais rodoviários, etc.",
    ],
    description:
      "O Belgo Durafor é sinônimo de durabilidade e resistência. Desenvolvido para suportar condições extremas, é a escolha perfeita para cercar áreas industriais e rurais.",
  },
  {
    id: 6,
    title: "Belgo Protec",
    image: "",
    applications: [
      "Dispensa utilização de solda",
      "Elevada durabilidade",
      "Proteção de máquinas e equipamentos (NR12)",
      "Delimitação/demarcação de áreas de circulação e trânsito de pessoas.",
    ],
    description:
      "O Belgo Protec oferece proteção confiável com um design discreto. Ideal para quem busca segurança e estética em um único produto.",
  },

  {
    id: 8,
    title: "Belgo Alambrado",
    image: "",
    applications: [
      "Arames galvanizados ou com revestimento Bezinal® (zinco + alumínio): garantia de maior durabilidade",
      "Cercamento de áreas residenciais, comerciais e industriais",
      "Delimitação de terrenos e propriedades",
      "Proteção de áreas esportivas, escolas e parques",
      "Uso em áreas rurais e urbanas",
    ],
    description:
      "O Belgo Alambrado é uma solução clássica e eficiente para cercar terrenos e propriedades. Sua estrutura resistente garante longa durabilidade.",
  },
  {
    id: 9,
    title: "Belgo Plastic",
    image: "",
    applications: [
      "Arame galvanizado e revestido em PVC alta aderência",
      "Elevada durabilidade",
      "Resistência à corrosão",
      "Uso em áreas residenciais, comerciais e industriais",
      "Proteção de áreas esportivas e parques",
    ],
    description:
      "O Belgo Plastic é uma cerca revestida em plástico, oferecendo maior proteção contra corrosão e um acabamento visual diferenciado. Ideal para áreas residenciais e comerciais.",
  },
  {
    id: 11,
    title: "Belgo Practica",
    image: "",
    applications: [
      "Facilidade de instalação",
      "Casas de campo e chácaras",
      "Empreendimentos industriais",
      "Conjuntos Habitacionais",
      "Lotes urbanos e rurais",
    ],
    description:
      "O Belgo Practica é uma cerca prática e econômica, ideal para delimitar espaços com eficiência e simplicidade. Sua instalação é rápida e fácil.",
  },
  {
    id: 12,
    title: "Belgo Fortinet",
    description:
      "O Belgo Fortinet é uma solução completa e durável, ideal para regiões litorâneas, áreas industriais e empreendimentos comerciais. Oferece alta resistência à corrosão e rápida instalação, adaptando-se a diferentes topografias.",
    image: "",
    applications: [
      "Arame galvanizado e revestido em PVC de alta aderência",
      "Elevada vida útil",
      "Sistema completo: tela e postes",
      "Adequada para toda topografia de terreno",
      "Rápida instalação",
      "Obras em regiões litorâneas",
      "Áreas industriais de atmosfera corrosiva",
      "Portos",
      "Condomínios residenciais",
      "Praças, parques, playgrounds, áreas de lazer",
      "Empreendimentos comerciais e industriais",
    ]
  }
];

// Preenche dinamicamente as imagens dos produtos
const productsWithImages = productCards.map((product) => ({
  ...product,
  image: getImageForProduct(product.title),
}));

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCard | null>(
    null
  );
  const location = useLocation();

  // Referências para as seções que queremos animar
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const technologyRef = useRef<HTMLDivElement>(null);

  // Estados para controlar a visibilidade de cada seção
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isTechnologyVisible, setIsTechnologyVisible] = useState(false);

  // Configurar o IntersectionObserver para cada seção
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Dispara quando 20% da seção estiver visível
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) setIsTitleVisible(true);
          if (entry.target === gridRef.current) setIsGridVisible(true);
          if (entry.target === technologyRef.current)
            setIsTechnologyVisible(true);
          observer.unobserve(entry.target); // Para de observar após a animação ser disparada
        }
      });
    }, observerOptions);

    // Observa cada seção
    if (titleRef.current) observer.observe(titleRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    if (technologyRef.current) observer.observe(technologyRef.current);

    // Limpeza do observer ao desmontar o componente
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
      if (technologyRef.current) observer.unobserve(technologyRef.current);
    };
  }, []);

  const handleOpenModal = (product: ProductCard) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    if (document.activeElement instanceof HTMLElement) {
      console.log('active element: ', document.activeElement)
      document.activeElement.blur();
    }
    setOpenModal(false);
    setSelectedProduct(null);
  
  };

  useEffect(() => {
    if (location.pathname === "/produtos") {
      const contactSection = document.getElementById("products");
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 1000);
      }
    }
  }, [location]); // Executa o efeito sempre que a rota mudar

  return (
    <Box sx={styles.products} id="products">
      {/* Título e Divisores */}
      <Stack ref={titleRef} sx={{ position: "relative", gap: 1 }}>
        <Typography
          variant="h2"
          sx={{
            animation: isTitleVisible ? "fadeInDown 0.8s ease-in-out" : "none",
            "@keyframes fadeInDown": {
              "0%": { opacity: 0, transform: "translateY(-20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          Nossos Produtos
        </Typography>
        <Divider
          sx={{
            backgroundColor: "#D4A017",
            height: "4px",
            width: "150px",
            marginBottom: "10px",
            animation: isTitleVisible ? "expandWidth 0.8s ease-in-out" : "none",
            "@keyframes expandWidth": {
              "0%": { width: "0px", opacity: 0 },
              "100%": { width: "150px", opacity: 1 },
            },
          }}
        />
        <Divider
          sx={{
            backgroundColor: "#8B0000",
            height: "4px",
            width: "200px",
            position: "absolute",
            left: 15,
            bottom: 0,
            animation: isTitleVisible ? "expandWidth 1s ease-in-out" : "none",
            "@keyframes expandWidth": {
              "0%": { width: "0px", opacity: 0 },
              "100%": { width: "200px", opacity: 1 },
            },
          }}
        />
      </Stack>

      {/* Grid de Produtos */}
      <Box ref={gridRef} sx={styles.products.grid}>
        {productsWithImages.map((product, index) => (
          <Box
            key={product.id}
            sx={{
              position: "relative",
              cursor: "pointer",
              overflow: "hidden",
              width: { xs: "100%", sm: 300 },
              height: 250,
              "&:hover": {
                "& .hover-overlay": {
                  transform: "translateY(0)",
                },
                "& .hover-title": {
                  transform: "translateY(-200px)",
                  transition: "transform 0.5s ease-in-out",
                },
              },
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
              animation: isGridVisible
                ? `fadeInUp 0.5s ease-in-out ${index * 0.1}s`
                : "none",
              animationFillMode: "forwards",
              opacity: 0,
              "@keyframes fadeInUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "100%",
                zIndex: 20,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            />
            <Box
              className="hover-overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(139, 0, 0, 0.5)",
                zIndex: 25,
                transform: "translateY(250px)",
                transition: "all 0.5s ease-in-out",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: 2,
                padding: 1,
                alignItems: "center",
                color: "white",
              }}
            >
              <Typography fontSize="small">
                {product.description.length > 100
                  ? `${product.description.substring(0, 100)}...`
                  : product.description}
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#efa14e",
                  borderRadius: 0,
                  color: "white",
                  "&:hover": {
                    color: "white",
                    scale: 1.2,
                  },
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={(e : React.MouseEvent<HTMLButtonElement>) => { 
                  e.currentTarget.blur();
                  handleOpenModal(product)
                }}
              >
                <Typography textTransform="capitalize">Ver Mais</Typography>
              </Button>
            </Box>
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 10,
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10,
                }}
              >
                <Typography>Imagem não encontrada</Typography>
              </Box>
            )}
            <Typography
              className="hover-title"
              variant="h6"
              sx={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                color: "white",
                fontWeight: "bold",
                textShadow: "1px 1px 2px black",
                zIndex: 30,
              }}
            >
              {product.title}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Seção "Nossa Tecnologia" */}
      <Box ref={technologyRef} sx={styles.products.content}>
        <Box
          component="img"
          src={pattern}
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 0,
          }}
        />
        <Box sx={styles.products.text}>
          <Typography
            variant="h2"
            sx={{
              animation: isTechnologyVisible
                ? "fadeInDown 0.8s ease-in-out"
                : "none",
              "@keyframes fadeInDown": {
                "0%": { opacity: 0, transform: "translateY(-20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Nossa Tecnologia
          </Typography>
          <Divider
            sx={{
              backgroundColor: red[800],
              height: "4px",
              width: "150px",
              marginBottom: "10px",
              animation: isTechnologyVisible
                ? "expandWidth 0.8s ease-in-out"
                : "none",
              "@keyframes expandWidth": {
                "0%": { width: "0px", opacity: 0 },
                "100%": { width: "150px", opacity: 1 },
              },
            }}
          />
          <Typography
            fontSize="large"
            fontWeight={400}
            color={brown[800]}
            sx={{
              animation: isTechnologyVisible
                ? "slideInLeft 0.8s ease-in-out"
                : "none",
              "@keyframes slideInLeft": {
                "0%": { opacity: 0, transform: "translateX(-50px)" },
                "100%": { opacity: 1, transform: "translateX(0)" },
              },
            }}
          >
            A pintura eletrostática oferece um acabamento superior, com
            superfície lisa, brilhante e sem imperfeições. Ela é altamente
            resistente a impactos, corrosão, radiação e produtos químicos,
            garantindo uma durabilidade excepcional. Diferente dos métodos
            tradicionais, não utiliza solventes e é livre de TGIC, um composto
            cancerígeno presente em outras tintas, tornando-a mais segura para a
            saúde e o meio ambiente.
          </Typography>
        </Box>
        <Box
          sx={{
            ...styles.products.image,
            animation: isTechnologyVisible
              ? "slideInRight 0.8s ease-in-out"
              : "none",
            "@keyframes slideInRight": {
              "0%": { opacity: 0, transform: "translateX(50px)" },
              "100%": { opacity: 1, transform: "translateX(0)" },
            },
          }}
        >
          <Box
            component="img"
            src={technologyImage}
            sx={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </Box>
      </Box>

      {/* Modal para exibir detalhes do produto */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="product-modal-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(5px)", // Efeito de desfoque no fundo
        }}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: "relative",
              bgcolor: "white",
              width: { xs: "90%", md: "80%" },
              maxWidth: "900px",
              maxHeight: "90vh",
              borderRadius: "12px",
              boxShadow: 24,
              p: { xs: 2, md: 4 },
              overflowY: "auto",
              animation: "modalFadeIn 0.5s ease-in-out",
              "@keyframes modalFadeIn": {
                "0%": {
                  opacity: 0,
                  transform: "scale(0.8)",
                },
                "100%": {

        
                  opacity: 1,
                  transform: "scale(1)",
                },
              },
            }}
          >
            {/* Botão para fechar o modal */}
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 2,
                right: 2,
                color: "#666",
                backgroundColor: 'white',
              
                "&:hover": { backgroundColor: red[900], color: 'white' },
                zIndex: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Conteúdo do modal */}
            {selectedProduct && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {/* Imagem do produto */}
                <Box sx={{ width: "100%", height: 400 }}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                </Box>

                {/* Informações do produto */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography
                    id="product-modal-title"
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      color: "#333",
                      animation: "slideIn 0.5s ease-in-out",
                      "@keyframes slideIn": {
                        "0%": { opacity: 0, transform: "translateY(-20px)" },
                        "100%": { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    {selectedProduct.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      animation: "slideIn 0.7s ease-in-out",
                      "@keyframes slideIn": {
                        "0%": { opacity: 0, transform: "translateY(-20px)" },
                        "100%": { opacity: 1, transform: "translateY(0)" },
                      },
                    }}
                  >
                    {selectedProduct.description}
                  </Typography>

                  {/* Lista de aplicações */}
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{
                        color: "#333",
                        mb: 2,
                        borderBottom: `2px solid #efa14e`,
                        pb: 1,
                        animation: "slideIn 0.9s ease-in-out",
                        "@keyframes slideIn": {
                          "0%": { opacity: 0, transform: "translateY(-20px)" },
                          "100%": { opacity: 1, transform: "translateY(0)" },
                        },
                      }}
                    >
                      Aplicações
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, m: 0, listStyle: "none" }}>
                      {selectedProduct.applications.map(
                        (application, index) => (
                          <Box
                            component="li"
                            key={index}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              py: 0.5,
                              color: "text.secondary",
                              animation: `fadeIn 0.5s ease-in-out ${
                                index * 0.1
                              }s`,
                              animationFillMode: "forwards",
                              opacity: 0,
                              "@keyframes fadeIn": {
                                "0%": {
                                  opacity: 0,
                                  transform: "translateX(-20px)",
                                },
                                "100%": {
                                  opacity: 1,
                                  transform: "translateX(0)",
                                },
                              },
                            }}
                          >
                            <CircleIcon
                              sx={{ fontSize: "10px", color: "#efa14e" }}
                            />
                            <Typography variant="body2">
                              {application}
                            </Typography>
                          </Box>
                        )
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Products;
