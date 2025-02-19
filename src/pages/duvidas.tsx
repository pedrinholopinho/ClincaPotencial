import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Simulação de dados das dúvidas frequentes
const faq = [
  {
    pergunta: "Como agendar uma consulta?",
    resposta:
      "Você pode agendar uma consulta diretamente pelo nosso site ou entrar em contato conosco pelo telefone.",
  },
  {
    pergunta: "Quais são os métodos de pagamento aceitos?",
    resposta:
      "Aceitamos cartões de crédito, débito, PIX e transferência bancária.",
  },
  {
    pergunta: "Qual é a política de cancelamento?",
    resposta:
      "Você pode cancelar ou remarcar sua consulta com até 24 horas de antecedência.",
  },
  {
    pergunta: "Os planos de saúde são aceitos?",
    resposta:
      "Sim, aceitamos os principais planos de saúde. Entre em contato para verificar se o seu convênio é atendido.",
  },
];

const DuvidasFrequentes = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--light-grey)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: { xs: 7, md: 7 },
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
        Dúvidas Frequentes
      </Typography>

      <Box
        sx={{
          maxWidth: { xs: "100%", md: "800px" },
          width: "100%",
          margin: "0 auto",
          px: { xs: 2, md: 0 },
        }}
      >
        {faq.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "var(--white)",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
              border: "1px solid #2196F3", // Aplicando a borda com a cor solicitada
              marginBottom: "16px",
              transition: "all 0.3s ease",
              "&:before": {
                display: "none", // Remove a linha padrão do Accordion
              },
              "&:hover": {
                boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-2px)",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#2196F3" }} />}
              sx={{
                backgroundColor: "var(--white)",
                borderRadius: "12px",
                padding: { xs: "12px 16px", md: "16px 24px" },
                "&:hover": {
                  backgroundColor: "rgba(33, 150, 243, 0.05)",
                },
                "&.Mui-expanded": {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#105f85",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                {item.pergunta}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "var(--white)",
                borderRadius: "0 0 12px 12px",
                padding: { xs: "16px", md: "24px" },
              }}
            >
              <Typography
                sx={{
                  color: "var(--dark-grey)",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                {item.resposta}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default DuvidasFrequentes;
