import React, { useState, useRef } from "react";
import { AppBar, Button, IconButton, Toolbar, Box, Menu, MenuList, MenuItem, Card, CardContent, Typography, Grid } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuIcon from "@mui/icons-material/Menu";
import "../global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './scroll.css';
import Footer from "../pages/footer";


// Importe as imagens da pasta assets/images
import teste from "../assets/images/teste.jpeg";
import teste2 from "../assets/images/teste2.jpeg";
import feedback from "../assets/images/feedback.png";
import recepp from "../assets/images/recepp.png";


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
  const teamRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null); // Ref para o carrossel

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

  // Função para rolar até a seção da equipe
  const scrollToTeam = () => {
    if (teamRef.current) {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Função para rolar até o carrossel
  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Configurações do carrossel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <ArrowBackIosIcon sx={{ color: "var(--white)", fontSize: "3rem", left: "20px", zIndex: 1 }} />,
    nextArrow: <ArrowForwardIosIcon sx={{ color: "var(--white)", fontSize: "3rem", right: "20px", zIndex: 1 }} />,
  };

  // Use as imagens importadas (teste.jpeg e teste2.jpeg)
  const carouselImages = [teste, teste2, recepp];

  return (
    <><Box sx={{ overflowX: "hidden" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "var(--transparent)",
          backgroundImage: `linear-gradient(to right, var(--dark-primary), var(--dark))`,
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          minHeight: "100px",
          display: "flex",
          justifyContent: "center",
          transition: "var(--transition)",
          "&:hover": {
            backgroundImage: `linear-gradient(to right, var(--dark-primary), var(--light-dark))`,
          },
        }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "var(--container-width-lg)", margin: "0 auto", width: "100%" }}>
          {/* Logo ou Ícone */}
          <Box sx={{ display: "flex", alignItems: "center", "&:hover": { transform: "scale(1.05)", transition: "transform 0.3s ease" } }}>
            <IconButton sx={{ color: "var(--white)", display: { xs: "none", md: "flex" } }}>
              <GroupsIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Box>

          {/* Menu para Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Button
              color="inherit"
              sx={{
                color: "var(--white)",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  color: "var(--secondary)",
                  transform: "translateY(-2px)",
                  transition: "var(--transition)",
                },
              }}
              onClick={scrollToCarousel} // Adicionado aqui
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "var(--white)",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  color: "var(--secondary)",
                  transform: "translateY(-2px)",
                  transition: "var(--transition)",
                },
              }}
              onClick={scrollToServices}
            >
              Serviços
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "var(--white)",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  color: "var(--secondary)",
                  transform: "translateY(-2px)",
                  transition: "var(--transition)",
                },
              }}
              onClick={scrollToTeam}
            >
              Equipe
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "var(--white)",
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  color: "var(--secondary)",
                  transform: "translateY(-2px)",
                  transition: "var(--transition)",
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
              sx={{ color: "var(--white)" }}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "var(--dark-primary)",
                  color: "var(--white)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <MenuList>
                <MenuItem
                  onClick={() => { closeMenu(); scrollToCarousel(); } } // Adicionado aqui
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "var(--dark)",
                    },
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  onClick={() => { closeMenu(); scrollToServices(); } }
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "var(--dark)",
                    },
                  }}
                >
                  Serviços
                </MenuItem>
                <MenuItem
                  onClick={() => { closeMenu(); scrollToTeam(); } }
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "var(--dark)",
                    },
                  }}
                >
                  Equipe
                </MenuItem>
                <MenuItem
                  onClick={closeMenu}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "var(--dark)",
                    },
                  }}
                >
                  Contato
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Container abaixo do header */}
      <Box
        ref={carouselRef} // Ref associada ao carrossel
        sx={{
          width: "100%",
          height: { xs: "300px", sm: "400px", md: "500px", lg: "600px" }, // Altura responsiva
          borderRadius: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          padding: 0,
          boxSizing: "border-box",
          marginBottom: 0,
          overflow: "hidden",
        }}
      >
        {/* Carrossel de fotos */}
        <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
          <Slider {...carouselSettings}>
            {carouselImages.map((image, index) => (
              <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} // Ajustei a altura para 100%
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* Seção de Serviços */}
      <Box
        ref={servicesRef}
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "var(--light-grey)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
          marginTop: 0,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "bold", mb: 4, color: "#105f85", fontFamily: "'Raleway', sans-serif" }}
        >
          Nossos Serviços
        </Typography>
        <Grid
          container
          spacing={4} // Diminuído o espaçamento entre os cards
          sx={{ maxWidth: "var(--container-width-lg)", margin: "0 auto" }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  backgroundColor: "var(--white)",
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: "center", padding: 3 }}>
                  <Typography variant="h4" sx={{ mb: 3 }}>
                    {service.icon}
                  </Typography>
                  <Typography variant="h5" component="h2" sx={{ fontWeight: "bold", mb: 3, color: "var(--dark-primary)" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, color: "var(--dark-grey)" }}>
                    {service.description}
                  </Typography>
                  {expandedCard === index && (
                    <Typography variant="body2" sx={{ mb: 3, color: "var(--grey)" }}>
                      Mais detalhes sobre o serviço...
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, backgroundColor: "var(--dark)", "&:hover": { backgroundColor: "var(--light-dark)" } }}
                    onClick={() => handleExpandCard(index)}
                  >
                    {expandedCard === index ? "Ver Menos" : "Saiba Mais"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Seção da Equipe */}
      <Box
        ref={teamRef}
        sx={{
          width: "100%", // Alterado de 100vw para 100%
          height: "100vh",
          backgroundColor: "#f3f3f3",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={feedback}
          alt="Nossa Equipe"
          style={{
            width: "100%", // Alterado de 100vw para 100%
            height: "100vh",
            objectFit: "cover",
            transform: "scale(0.6)", // Ajuste o valor para diminuir ou aumentar o zoom
          }} />
      </Box>
    </Box>
        <>
        <Footer />
      </></>
    
  );
};

export default Header;