import React, { useState } from "react";
import { AppBar, Button, IconButton, Toolbar, Box, Menu, MenuList, MenuItem, Typography, Grid, Card, CardContent, CardActions, CardMedia } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import MenuIcon from "@mui/icons-material/Menu";
import "../global.css";

// Simulação dos dados dos serviços
const services = [
  { title: "Serviço 1", description: "Descrição do serviço 1", image: "https://via.placeholder.com/345x140?text=Serviço+1" },
  { title: "Serviço 2", description: "Descrição do serviço 2", image: "https://via.placeholder.com/345x140?text=Serviço+2" },
  { title: "Serviço 3", description: "Descrição do serviço 3", image: "https://via.placeholder.com/345x140?text=Serviço+3" },
  { title: "Serviço 4", description: "Descrição do serviço 4", image: "https://via.placeholder.com/345x140?text=Serviço+4" },
  { title: "Serviço 5", description: "Descrição do serviço 5", image: "https://via.placeholder.com/345x140?text=Serviço+5" },
  { title: "Serviço 6", description: "Descrição do serviço 6", image: "https://via.placeholder.com/345x140?text=Serviço+6" },
  { title: "Serviço 7", description: "Descrição do serviço 7", image: "https://via.placeholder.com/345x140?text=Serviço+7" },
  { title: "Serviço 8", description: "Descrição do serviço 8", image: "https://via.placeholder.com/345x140?text=Serviço+8" },
];

const Header = () => {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <>
      {/* Header */}
      <AppBar
        position="fixed" // Fixa o AppBar no topo
        sx={{ top: 0, left: 0, right: 0, backgroundColor: "green", minHeight: "100px" }} // Garante que ocupe todo o topo
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ marginTop: 3, display: { xs: "none", md: "flex" } }}>
            <GroupsIcon />
          </IconButton>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              alignItems: "center",
              marginTop: 3,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">Serviços</Button>
            <Button color="inherit">Equipe</Button>
            <Button color="inherit">Contato</Button>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
              sx={{ marginTop: 3 }}
            >
              <MenuIcon />
            </IconButton>

            <Menu open={Boolean(anchorNav)} onClose={closeMenu}>
              <MenuList>
                <MenuItem>Home</MenuItem>
                <MenuItem>Serviços</MenuItem>
                <MenuItem>Equipe</MenuItem>
                <MenuItem>Contato</MenuItem>
              </MenuList>
            </Menu>
          </Box>

          <IconButton sx={{ marginTop: 3, display: { xs: "flex", md: "none" } }}>
            <GroupsIcon />
          </IconButton>
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
          boxSizing: "border-box", // Inclui as bordas no cálculo
        }}
      >
        <Typography variant="h5">Carrossel de fotos</Typography>
      </Box>

      <Box
        sx={{
          marginTop: "50px", // Espaçamento entre o carrossel e os cardss
          padding: 2,
        }}
      >
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={service.image} // A imagem do serviço
                  title={service.title} // O título do serviço
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title} {/* Título do serviço */}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {service.description} {/* Descrição do serviço */}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Compartilhar</Button>
                  <Button size="small">Saiba Mais</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

     
    </>
  );
};

export default Header;
