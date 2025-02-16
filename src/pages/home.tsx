import React, { useState, useRef } from "react";
import { AppBar, Button, IconButton, Toolbar, Box, Menu, MenuList, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../global.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './scroll.css';
import Footer from "../pages/footer";
import Equipe from "./equipe";
import Servico from "./servico"; // Importe o novo componente Servico
import DuvidasFrequentes from "./duvidas"; // Importe o novo componente DuvidasFrequentes


// Importe as imagens da pasta assets/images
import teste from "../assets/images/teste.jpeg";
import teste2 from "../assets/images/teste2.jpeg";
import recepp from "../assets/images/recepp.png";
import logo2 from "../assets/images/logo2.png"; // Importe o logo

const Header = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  // Refs
  const servicesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const carouselImages = [teste, teste2, recepp];

  // Funções de manipulação
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  // Funções de scroll
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCarousel = () => {
    carouselRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
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
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", "&:hover": { transform: "scale(1.05)", transition: "transform 0.3s ease" } }}>
            <Box
              component="img"
              src={logo2}
              alt="Logo"
              sx={{
                width: "150px", // Ajuste o tamanho conforme necessário
                height: "auto",
                cursor: "pointer",
              }}
            />
          </Box>

          {/* Menu Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
            {['Home', 'Serviços', 'Equipe', 'Contato'].map((item, index) => (
              <Button
                key={index}
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
                onClick={
                  index === 0 ? scrollToCarousel :
                  index === 1 ? scrollToServices :
                  index === 2 ? scrollToTeam : undefined
                }
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Menu Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton color="inherit" onClick={openMenu} sx={{ color: "var(--white)" }}>
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
                {['Home', 'Serviços', 'Equipe', 'Contato'].map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => {
                      closeMenu();
                      if (index === 0) scrollToCarousel();
                      if (index === 1) scrollToServices();
                      if (index === 2) scrollToTeam();
                    }}
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      "&:hover": { backgroundColor: "var(--dark)" },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Carrossel */}
      <Box
  ref={carouselRef}
  sx={{
    width: "100%",
    height: { xs: "50vh", sm: "60vh", md: "70vh", lg: "80vh" }, // Ajuste a altura para dispositivos móveis
    marginTop: { xs: "10vh", sm: "10vh", md: "10vh", lg: "10vh" },
    overflow: "hidden",
  }}
>
  <div aria-hidden={anchorNav ? "true" : undefined}>
    <Slider {...carouselSettings}>
      {carouselImages.map((image, index) => (
        <Box key={index} sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "contain", // Garante que a imagem apareça inteira
            }}
          />
        </Box>
      ))}
    </Slider>
  </div>
</Box>

      {/* Seção de Serviços */}
      <Box sx={{ margin: 0, padding: 0 }}>
        <Servico servicesRef={servicesRef} />
      </Box>

     

      {/* Seção da Equipe */}
      <Box sx={{ margin: 0, padding: 0 }}>
        <Equipe ref={teamRef} />
      </Box>

       {/* Seção de Dúvidas Frequentes */}
       <Box sx={{ margin: 0, padding: 0 }}>
        <DuvidasFrequentes />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Header;
