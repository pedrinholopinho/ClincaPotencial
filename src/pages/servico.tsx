import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

// Simulação dos dados dos serviços
const services = [
  { title: "Fonoaudiologia", description: "Avaliação e tratamento de distúrbios da comunicação, fala, voz e deglutição, auxiliando no desenvolvimento e reabilitação.", icon: "🗣️" },
  { title: "Nutrição", description: "Orientação nutricional personalizada para promover saúde, bem-estar e equilíbrio alimentar, atendendo às necessidades individuais.", icon: "🥗" },
  { title: "Psicopedagogia", description: "Acompanhamento especializado para superar dificuldades de aprendizagem, desenvolvendo estratégias eficazes de ensino.", icon: "📚" },
  { title: "Psicologia", description: "Atendimento psicológico para promover bem-estar emocional, autoconhecimento e enfrentamento de desafios pessoais.", icon: "🧠" },
  { title: "Reforço Escolar", description: "Apoio educacional para potencializar o aprendizado, reforçando conteúdos e melhorando o desempenho acadêmico.", icon: "✏️" },
  { title: "Terapia Ocupacional", description: "Intervenção para melhorar habilidades motoras, cognitivas e sociais, promovendo autonomia e qualidade de vida.", icon: "👐" },
];

const Servico = ({ servicesRef }: { servicesRef: React.RefObject<HTMLDivElement> }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleExpandCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <Box
      ref={servicesRef}
      sx={{
        width: "100%",
        backgroundColor: "var(--light-grey)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: 2, md: 4 },
        pb: { xs: 4, md: 8 },
        px: { xs: 2, md: 0 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#105f85",
          fontFamily: "'Raleway', sans-serif",
          fontSize: { xs: "1.75rem", md: "3rem" },
        }}
      >
        Nossos Serviços
      </Typography>

      <Grid
        container
        sx={{
          maxWidth: { xs: "100%", md: "var(--container-width-lg)" },
          margin: "0 auto",
          px: { xs: 2, md: 0 },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 2, md: 3 }, // Espaçamento entre os cards
        }}
      >
        {services.map((service, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            key={index}
          >
            <Card
              sx={{
                height: { xs: "auto", md: "400px" },
                width: { xs: "90%", md: "90%" }, // Largura ajustada para mobile
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: { md: "scale(1.05)" } },
                backgroundColor: "var(--white)",
                borderRadius: "12px",
                border: "1px solid #2196F3",
                margin: "0 auto", // Centraliza o card
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  padding: { xs: 2, md: 3 },
                }}
              >
                <Typography variant="h4" sx={{ mb: { xs: 1, md: 2 }, fontSize: { xs: "2rem", md: "2.5rem" } }}>
                  {service.icon}
                </Typography>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    mb: { xs: 1, md: 2 },
                    color: "var(--dark-primary)",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 1, md: 2 },
                    color: "var(--dark-grey)",
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                >
                  {service.description}
                </Typography>
                {expandedCard === index && (
                  <Typography
                    variant="body2"
                    sx={{
                      mb: { xs: 1, md: 2 },
                      color: "var(--grey)",
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  >
                    Mais detalhes sobre o serviço...
                  </Typography>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    mt: { xs: 1, md: 2 },
                    backgroundColor: "var(--dark)",
                    "&:hover": { backgroundColor: "var(--light-dark)" },
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                    padding: { xs: "6px 12px", md: "10px 22px" },
                    width: { xs: "100%", md: "auto" },
                    borderRadius: "8px",
                  }}
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
  );
};

export default Servico;