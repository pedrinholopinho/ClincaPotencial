import React, { useState, useRef } from "react";
import { AppBar, Button, IconButton, Toolbar, Box, Menu, MenuList, MenuItem, Container, Card, CardContent, Typography, Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuIcon from "@mui/icons-material/Menu";
import "../global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importe as imagens da pasta assets/images
import teste from "../assets/images/teste.jpeg";
import teste2 from "../assets/images/teste2.jpeg";

// Simulação dos dados dos serviços
const services = [
  { title: "Produção de Vídeo", description: "Nial purus em mollis nunc sed id semper. Rhoncus ceneam vel elit scelerisque mauris.", icon: "🎥" },
  { title: "Clientes Felizes", description: "Nial purus em mollis nunc sed id semper. Rhoncus ceneam vel elit scelerisque mauris.", icon: "😊" },
  { title: "Otimização de SEO", description: "Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.", icon: "🔍" },
  { title: "Estratégia de Marketing", description: "Nial purus em mollis nunc sed id semper. Rhoncus ceneam vel elit scelerisque mauris.", icon: "📈" },
  { title: "Soluções em Nuvem", description: "Nial purus em mollis nunc sed id semper. Rhoncus ceneam vel elit scelerisque mauris.", icon: "☁️" },
  { title: "Podcast Talks", description: "Nial purus em mollis nunc sed id semper. Rhoncus ceneam vel elit scelerisque mauris.", icon: "🎙️" },
];

const Header = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Ref para a seção de serviços
  const servicesRef = useRef<HTMLDivElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  const handleExpandCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Função para rolar até a seção de serviços
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Configurações do carrossel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // Use as imagens importadas (teste.jpeg e teste2.jpeg)
  const carouselImages = [teste, teste2];

  return (
    <>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(to right, #1976d2, #2196f3)", // Gradiente azul
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra suave
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo ou Ícone */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: "white", display: { xs: "none", md: "flex" } }}>
              <GroupsIcon sx={{ fontSize: "2rem" }} /> {/* Ícone moderno */}
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "bold",
                ml: 2,
                display: { xs: "none", md: "block" },
              }}
            >
              Nome da Empresa
            </Typography>
          </Box>

          {/* Menu para Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4, // Espaçamento entre os botões
            }}
          >
            <Button
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Efeito hover suave
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              onClick={scrollToServices} // Adiciona a função de rolagem
            >
              Serviços
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Equipe
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Contato
            </Button>
          </Box>

          {/* Menu para Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Menu open={Boolean(anchorNav)} onClose={closeMenu}>
              <MenuList>
                <MenuItem onClick={closeMenu}>Home</MenuItem>
                <MenuItem onClick={() => { closeMenu(); scrollToServices(); }}>Serviços</MenuItem>
                <MenuItem onClick={closeMenu}>Equipe</MenuItem>
                <MenuItem onClick={closeMenu}>Contato</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Container abaixo do header */}
      <Box
        sx={{
          width: "100%",
          height: "600px",
          border: "1px solid #000",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          padding: 0,
          boxSizing: "border-box",
          marginBottom: "50px",
          overflow: "hidden",
        }}
      >
        {/* Carrossel de fotos */}
        <Box sx={{ width: "100%", height: "100%" }}>
          <Slider {...carouselSettings}>
            {carouselImages.map((image, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "8px" }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Seção de Serviços */}
      <Container ref={servicesRef} sx={{ py: 8 }}> {/* Adiciona a ref aqui */}
        <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 8, color: "#333" }}>
          Nossos Serviços
        </Typography>
        <Grid container spacing={8}> {/* Espaçamento entre os cards aumentado para 8 */}
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "400px", // Aumentei a altura do card
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  backgroundColor: "#f9f9f9",
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center", padding: 3 }}>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    {service.icon}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mb: 3 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  {expandedCard === index && (
                    <Typography variant="body2" sx={{ mb: 3 }}>
                      Mais detalhes sobre o serviço...
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3 }}
                    onClick={() => handleExpandCard(index)}
                  >
                    {expandedCard === index ? "Ver Menos" : "Saiba Mais"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Header;