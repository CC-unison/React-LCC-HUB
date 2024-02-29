import React from 'react';
import { getsNotifs } from '@/lib/firestore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
interface MaxWidthDialogProps {
    open: boolean;
    onClose: () => void;
}

export default function MaxWidthDialog({ open, onClose }: MaxWidthDialogProps) {
    const [notifs, setNotifs] = useState([] as any[]);
    const [activeTitulo, setActiveTitulo] = useState("")
    const [activeDescripcion, setActiveDescripcion] = useState("")
    useEffect(() => {
        const getNotifs = async () => {
            const notif = await getsNotifs();
            setNotifs(notif)
        }

        getNotifs();
    }, []);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'left',
        color: theme.palette.text.primary,
        height: 60,
        width: 350,
        lineHeight: '60px',
        paddingLeft: "10px",
        marginTop: 0,
        "&:hover": {
            color: 'black',
            backgroundColor: 'lightgray'
          },
      }));
    function handleText(titulo: React.SetStateAction<string>, descripcion: React.SetStateAction<string>){
        setActiveDescripcion(descripcion);
        setActiveTitulo(titulo);
        console.log(notifs)
    }
    function handleClose(){
        setActiveDescripcion("");
        setActiveTitulo("");
        onClose()
    }
    return (
        <Dialog
            fullWidth={true}
            maxWidth={"xl"}
            PaperProps={{
                sx: {
                    width: "90%",
                    height: "80%"
                }
            }}
            open={open}
            onClose={onClose}
        >
            <DialogTitle>Notificaciones</DialogTitle>
            <DialogContent>
                <Grid container rowSpacing={2} style={{ "border": '4px solid black',"height":"97%"}} marginTop={0} padding={0}>
                    <Grid item marginRight={0} padding={0}>
                        <Stack spacing={0.5}>
                            {
                                notifs.map((object) => (
                                    <>
                                    <Item elevation={0} square onClick={()=>handleText(object.title, object.body)}>{object.title}</Item>
                                    <Divider variant="inset" />
                                    </>
                                ))
                            }
                        </Stack>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={8}>
                           <div style={{"marginLeft":"20px"}}>
                           <h1>{activeTitulo}</h1>
                           <br/>
                            <p>{activeDescripcion}</p>
                           </div>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
}
