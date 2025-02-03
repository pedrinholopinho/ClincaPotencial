import React, { forwardRef } from "react";
import { Box } from "@mui/material";
import feedback from "../assets/images/feedback.png";

// Usando forwardRef para permitir a passagem da referência
const Equipe = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Box
      ref={ref} // Associando a referência ao Box
      sx={{
        width: "100%",
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
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          transform: "scale(0.6)",
        }}
      />
    </Box>
  );
});

// Definindo o nome do componente para melhor legibilidade no React DevTools
Equipe.displayName = "Equipe";

export default Equipe;