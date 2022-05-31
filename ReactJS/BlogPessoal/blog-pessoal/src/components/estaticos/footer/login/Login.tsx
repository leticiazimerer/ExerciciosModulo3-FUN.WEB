import React from "react";
import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" >
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20} >
                    <form>

                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="textos1">Bora entrar?</Typography>
                        <TextField id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField id="senha" label="senha" variant="outlined" name="senha" margin="normal" fullWidth />
                        <Box margin={2} textAlign="center">
                            <Link to="home" className="text-decorator-none">
                                <Button type="submit" variant="contained" color="primary" style={{backgroundColor: "#000000"}} >
                                    Agora sim, BORA!
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center'>Vish, não tem conta? </Typography>
                        </Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos1"> Faz uma aqui</Typography>
                    </Box>
                </Box>
                </Grid>
                <Grid xs={6} className="imagem">
            </Grid>
        </Grid>
    );
}

export default Login;