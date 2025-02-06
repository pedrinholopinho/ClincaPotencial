import { forwardRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Importando todas as imagens corretamente
import joao_silva from "../assets/images/joao_silva.jpg";
import maria_souza from "../assets/images/maria_souza.jpg";
import carlos_lima from "../assets/images/carlos_lima.jpg";
import ana_pereira from "../assets/images/ana_pereira.jpg";
import pedro_rocha from "../assets/images/pedro_rocha.jpg";
import fernanda_costa from "../assets/images/fernanda_costa.jpg";

// Simulação dos dados dos profissionais
const teamMembers = [
  { name: "Dr. João Silva", role: "Fonoaudiólogo", image: joao_silva },
  { name: "Dra. Maria Souza", role: "Nutricionista", image: maria_souza },
  { name: "Dr. Carlos Lima", role: "Psicopedagogo", image: carlos_lima },
  { name: "Dra. Ana Pereira", role: "Psicóloga", image: ana_pereira },
  { name: "Prof. Pedro Rocha", role: "Reforço Escolar", image: pedro_rocha },
  { name: "Dra. Fernanda Costa", role: "Terapeuta Ocupacional", image: fernanda_costa },
];

// Componente personalizado para a seta anterior
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      color: "#105f85",
    }}
  >
    <ArrowBackIosIcon />
  </IconButton>
);

// Componente personalizado para a próxima seta
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: "-50px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      color: "#105f85",
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const Equipe = forwardRef<HTMLDivElement>((_props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box
      ref={ref}
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4, color: "#105f85" }}>
        Nossa Equipe
      </Typography>
      <Slider {...settings} style={{ maxWidth: "80%" }}>
        {teamMembers.map((member, index) => (
          <Box key={index} sx={{ textAlign: "center", padding: 2 }}>
            <img
              src={member.image}
              alt={member.name}
              style={{
                width: "100%",
                maxWidth: "250px",
                height: "250px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
              {member.name}
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              {member.role}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
});

Equipe.displayName = "Equipe";

export default Equipe;