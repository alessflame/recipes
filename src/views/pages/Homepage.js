import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img1 from "../../images/pasta.jpg";
import img2 from "../../images/vegetable.jpg";
import Slider from "../components/Slider";
import Section from "../components/Section";
import CardHome from "../components/CardHome";
import image3 from "../../images/diet.jpg";
import { Link as RouteLink } from "react-router-dom";

const theme = createTheme();

export default function Homepage() {
    return (
        <ThemeProvider theme={theme}>
            <main style={{ width: "100%" }}>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: "background.paper",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            100Green
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="text.secondary"
                            paragraph
                        >
                            Una raccolta di 100 ricette vegetariane per i tuoi
                            pasti sani. Inoltre puoi conoscere tutti i segreti
                            di una dieta Green seguendo i corsi che abbiamo
                            creato per aiutarti a raggiungere i tuoi obiettivi.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button color="success" variant="contained">
                                <RouteLink
                                    to="/recipes"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                    }}
                                >
                                    Le ricette
                                </RouteLink>
                            </Button>
                            <Button color="success" variant="outlined">
                                <RouteLink
                                    to="/products"
                                    style={{
                                        
                                        textDecoration: "none",
                                        color:"green"
                                    }}
                                >
                                    I nostri corsi
                                </RouteLink>
                            </Button>
                        </Stack>
                    </Container>
                </Box>
                <Container>
                    <Grid
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        <CardHome
                            img={img1}
                            title="Dieta sana"
                            text="Non credere mai ai pregiudizi. I piatti 'green' contengono le stesse quantità di nutrienti che assumeresti in piatti 
      di carne."
                        />
                        <CardHome
                            img={image3}
                            title="Ricette green"
                            text="Abbiamo selezionato le migliori 100 ricette per permettere ai nostri utenti di conoscere la cucina 'GREEN'"
                        />
                        <CardHome
                            img={img2}
                            title="Forma fisica"
                            text="Potrai tenere allenato e in forma il tuo corpo con piatti ricchi di proteine
      ma privi di grassi."
                        />
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
        </ThemeProvider>
    );
}
