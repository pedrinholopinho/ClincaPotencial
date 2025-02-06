import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

// Simulação dos dados dos serviços
const services = [
    { title: "Fonoaudiologia", description: "Avaliação e tratamento de distúrbios da comunicação, fala, voz e deglutição, auxiliando no desenvolvimento e reabilitação.", icon: "🗣️" }, // Ícone de fala
    { title: "Nutrição", description: "Orientação nutricional personalizada para promover saúde, bem-estar e equilíbrio alimentar, atendendo às necessidades individuais.", icon: "🥗" }, // Ícone de salada
    { title: "Psicopedagogia", description: "Acompanhamento especializado para superar dificuldades de aprendizagem, desenvolvendo estratégias eficazes de ensino.", icon: "📚" }, // Ícone de livro
    { title: "Psicologia", description: "Atendimento psicológico para promover bem-estar emocional, autoconhecimento e enfrentamento de desafios pessoais.", icon: "🧠" }, // Ícone de cérebro
    { title: "Reforço Escolar", description: "Apoio educacional para potencializar o aprendizado, reforçando conteúdos e melhorando o desempenho acadêmico.", icon: "✏️" }, // Ícone de lápis
    { title: "Terapia Ocupacional", description: "Intervenção para melhorar habilidades motoras, cognitivas e sociais, promovendo autonomia e qualidade de vida.", icon: "👐" }, // Ícone de mãos abertas
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
        minHeight: "100vh",
        backgroundColor: "var(--light-grey)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 4, md: 8 }, // Padding vertical ajustado para mobile
        px: { xs: 2, md: 0 }, // Padding horizontal ajustado para mobile
        marginTop: 0,
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 4,
          color: "#105f85",
          fontFamily: "'Raleway', sans-serif",
          fontSize: { xs: "1.75rem", md: "3rem" }, // Tamanho de fonte menor para mobile
        }}
      >
        Nossos Serviços
      </Typography>
      <Grid
            container
            spacing={3}
            sx={{
                maxWidth: { xs: "100%", md: "var(--container-width-lg)" }, // Usa toda a largura em mobile
                margin: "0 auto",
                px: { xs: 2, md: 0 },
                justifyContent: "center",
            }}
            >

        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">

            <Card
              sx={{
                height: { xs: "auto", md: "400px" }, // Altura automática em mobile
                width: { xs: "100%", md: "90%" }, // Largura total em mobile
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: { md: "scale(1.05)" } }, // Efeito hover apenas em desktop
                backgroundColor: "var(--white)",
                m: { xs: 1, md: 0 }, // Margem ajustada para mobile
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  textAlign: "center",
                  padding: { xs: 2, md: 3 }, // Padding interno ajustado para mobile
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
                    fontSize: { xs: "1.25rem", md: "1.5rem" }, // Tamanho de fonte ajustado para mobile
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: { xs: 1, md: 2 },
                    color: "var(--dark-grey)",
                    fontSize: { xs: "0.875rem", md: "1rem" }, // Tamanho de fonte ajustado para mobile
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
                      fontSize: { xs: "0.75rem", md: "0.875rem" }, // Tamanho de fonte ajustado para mobile
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
                    fontSize: { xs: "0.75rem", md: "0.875rem" }, // Tamanho de fonte ajustado para mobile
                    padding: { xs: "6px 12px", md: "10px 22px" }, // Padding ajustado para mobile
                    width: { xs: "100%", md: "auto" }, // Largura total em mobile
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