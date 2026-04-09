import {
  Grid,
  Typography,
  Paper,
  Card,
  Box,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";

export default function Home() {
  const { user } = useAuth();
  const [selectedCard, setSelectedCard] = React.useState(0);
  const cards = [
    {
      id: 1,
      title: "CardSaldo pontos",
      description: "1500",
    },
    {
      id: 2,
      title: "Ranking posicao",
      description: "12",
    },
    {
      id: 3,
      title: "Metas progresso",
      description: "75",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "#f5f5f7",
      }}
    >
      <Grid container spacing={3}>
        {/* 1. Saudação */}
        <Grid size={12}>
          <Paper
            sx={{
              p: 1,
              bgcolor: "primary.main",
              color: "white",
              borderRadius: 3,
            }}
          >
            <Typography variant="h4">Boas-vindas, {user?.nome}!</Typography>
            <Typography variant="body1">
              Sua performance este mês está incrível. Continue assim!
            </Typography>
          </Paper>
        </Grid>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            gap: 2,
          }}
        >
          {cards.map((card, index) => (
            <Grid size={{ xs: 25, md: 12 }}>
              <Card key={card.id}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? "" : undefined}
                  sx={{
                    height: "100%",
                    "&[data-active]": {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selectedHover",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            minHeight: "100vh",
            padding: 4,
            backgroundColor: "#f5f5f7",
          }}
        >
          <Grid container spacing={3}>
            {/* Ocupa a linha toda (12 colunas) */}
            <Grid size={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Últimas Conquistas
                </Typography>
              </Paper>
            </Grid>

            {/* Também ocupa a linha toda, forçando a descida */}
            <Grid size={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6">Prêmios Sugeridos</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
