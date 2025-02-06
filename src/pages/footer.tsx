import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Ícone de localização

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--dark-primary)",
        color: "var(--white)",
        padding: "20px 10px", // Reduzi o padding
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "start",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: 4,
        }}
      >
        {/* Contato com WhatsApp */}
        <Box sx={{ flex: 1, minWidth: "250px", mb: { xs: 3, sm: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Contato:
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: "24px", height: "24px" }}
            />
            <Typography variant="body1">
              <a
                href="https://wa.me/5521983099482"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--white)", textDecoration: "none" }}
              >
                (21) 98309-9482
              </a>
            </Typography>
          </Box>
        </Box>

        {/* Endereço */}
        <Box sx={{ flex: 1, minWidth: "250px", mb: { xs: 3, sm: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Endereço:
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon sx={{ color: "var(--white)" }} />
            <Typography variant="body1">
            Av. Carlos Marighella, Shopping 13, lojas 203 e 204 - São Bento da Lagoa, Itaipuaçu
            </Typography>
          </Box>
        </Box>

        {/* Redes Sociais */}
        <Box sx={{ flex: 1, minWidth: "250px", mb: { xs: 3, sm: 0 } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            Siga-nos nas Redes Sociais:
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <a
              href="https://www.facebook.com/profile.php?id=61553329927286"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={{ width: "32px", height: "32px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/potencialitaipuacu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                style={{ width: "32px", height: "32px" }}
              />
            </a>
          </Box>
        </Box>
      </Box>

      {/* Créditos */}
      <Box
        sx={{
          textAlign: "center",
          marginTop: "40px", // Reduzi a margem superior
          paddingTop: "5px",
          borderTop: "2px solid rgba(255, 255, 255, 0.1)",
          padding: "10px", // Reduzi o padding interno
        }}
      >
        <Typography variant="body2">
        © 2025 Todos os direitos reservados | Clínica Potencial 
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
