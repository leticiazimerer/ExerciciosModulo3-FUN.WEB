import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../servicos/Servicos";
import Usuario from "../../modelos/Usuario";
import './Login.css';


function Login() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [usuario, setUsuario] = useState<Usuario>(
        {
            id: 0,
            nome: "",
            email: "",
            senha: "",
            foto: "",
            tipo: "NORMAL"
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {

        if (token !== '') {
            navigate('../login/home');
        }

    }, [token, navigate]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {

        e.preventDefault();

        try {

            await login(`/api/Usuarios/logar`, usuario, setToken);
            alert('Aeee Pedrinho, foi criado!');
        } catch (error) {
            alert('Vish, deu zebra! Dados do usuário inconsistentes.');
        }
    }



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
                                <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: "#F5ED30", color: "black" }} >
                                    Agora sim, BORA!
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center'>Vish, não tem conta? </Typography>
                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant='subtitle1' gutterBottom align='center' className="textos1"> Faz uma aqui</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className="imagem">
            </Grid>
        </Grid>
    );
}

export default Login;