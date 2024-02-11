import { Divider, Grid, Card, CardContent, TableContainer, TableCell, TableRow, TableHead, TableBody, Table, Paper } from "@mui/material";

interface AvanceProps {
    approvedCredits: number,
    requiredCredits: number,
    cultCredits: number,
    englishLevel: number
}

export const Avance = (props: AvanceProps) => {
    const { approvedCredits, requiredCredits, englishLevel, cultCredits } = props;
    const avance = Math.round(approvedCredits / requiredCredits * 100);
    return (
        <div>
            <div style={{ "textAlign": "left", "marginLeft": "30px", "marginBottom": "0px" }}>
                <h2>Resumen</h2>
            </div>
            <Divider className="separator" sx={{ ml: "30px", width: "95%", "marginBottom": "25px" }} />
            <Grid container spacing={2} justifyContent="space-evenly">
                <Grid item>
                    <Card style={{ width: 300 }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h2>Porcentaje de avance</h2>
                            <h1>{avance}%</h1>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card style={{ width: 300 }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Your card content */}
                            <h2>Créditos culturest</h2>
                            <h1>{cultCredits}</h1>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card style={{ width: 300 }}>
                        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Your card content */}
                            <h2>Nivel de inglés</h2>
                            <h1>{englishLevel}</h1>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
            <div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                <h2>Servicio social</h2>

            </div>
            <Divider className="separator" sx={{ ml: "30px", width: "95%", "marginBottom": "20px" }} />
            {avance > 70 ?
                (<div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                    <p> Cumples con suficientes créditos para comenzar tu servicio social, aquí se encuentran algunos proyectos recomendados:</p>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Proyecto</TableCell>
                                    <TableCell>Responsable</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Proyecto 1
                                    </TableCell>
                                    <TableCell>
                                        Responsable 1
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        Proyecto 2
                                    </TableCell>
                                    <TableCell>
                                        Responsable 2
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>


                )
                :
                (<div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                    <p> El servicio social solo se encuentra disponible si tienes más del 70% de tus créditos y si has asistido a la platica de inducción.</p>
                </div>)}
        </div>
    );
};
