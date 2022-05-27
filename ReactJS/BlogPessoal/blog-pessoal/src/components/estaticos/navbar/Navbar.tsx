import React from "react";
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{backgroundColor: "#000000"}}>
                    <Box style={{ cursor: "pointer" ,color: "black"  }} >
                        <Typography variant="h5" color="initial">
                        <a href="https://imgur.com/gWicD5c"><img src="https://i.imgur.com/gWicD5c.png" title="source: imgur.com" width={60} height={60}/></a>
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;