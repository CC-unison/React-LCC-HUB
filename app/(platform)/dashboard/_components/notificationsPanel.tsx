import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
interface MaxWidthDialogProps {
    open: boolean;
    onClose: () => void;
}

export default function MaxWidthDialog({ open, onClose }: MaxWidthDialogProps) {
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
                            <Item elevation={0} square >Notif 1</Item>
                            <Divider variant="inset" />
                            <Item elevation={0} square>Notif 2</Item>
                            <Divider variant="inset" />
                            <Item elevation={0} square>Notif 3</Item>
                            <Divider variant="inset"/>
                        </Stack>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item>

                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
}
