import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ImageAvatar from "../../components/Avatar";
import { Button } from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function PerfilUsuario() {
  const [editando, setEditando] = useState<boolean>(false);
  const { user } = useAuth();

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
      <Grid container spacing={4} sx={{ maxWidth: 1100, width: "100%" }}>
        <Grid size={4}>
          <Stack spacing={2}>
            <Item
              sx={{ padding: 1, display: "flex", justifyContent: "center" }}
            >
              {ImageAvatar()}
            </Item>
            <Item sx={{ fontWeight: "bold" }}>{user?.nome}</Item>
            <Item>Informações</Item>
          </Stack>
        </Grid>
        <Grid size={8}>
          <Item sx={{ padding: 5, height: "100%" }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                "& .MuiTextField-root": {
                  width: "100%",
                },
                "& .MuiInputBase-root": {
                  fontSize: "1.2rem",
                  padding: "10px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "1.1rem",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container spacing={3}>
                <Grid size={6}>
                  <TextField
                    disabled={!editando}
                    id="outlined-required"
                    label="Nome:"
                    defaultValue="Antonio"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    disabled={!editando}
                    id="sobreNome"
                    label="Sobre Nome"
                    defaultValue="Nunes"
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Grid size={12}>
                <TextField
                  disabled={!editando}
                  id="email"
                  label="Email:"
                  defaultValue="teste@teste.com"
                  variant="outlined"
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  disabled={!editando}
                  id="cpf"
                  label="CPF:"
                  defaultValue="000.000.000-00"
                  variant="outlined"
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField
                    disabled={!editando}
                    id="outlined-read-only-input"
                    label="Telefone Contato:"
                    defaultValue="41999898009"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={6}>
                  <TextField
                    disabled={!editando}
                    id="outlined-read-only-input"
                    label="Segundo Telefone Contato:"
                    defaultValue="41999898009"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid
                size={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  // gap: 2,
                  mt: 1,
                }}
              >
                {!editando ? (
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 2 }}
                    onClick={() => setEditando(true)}
                  >
                    Editar Perfil
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="text"
                      size="large"
                      sx={{ borderRadius: 2 }}
                      onClick={() => setEditando(false)}
                    >
                      Cancelar
                    </Button>
                    <Button variant="contained" color="success">
                      Salvar Alterações
                    </Button>
                  </>
                )}
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
