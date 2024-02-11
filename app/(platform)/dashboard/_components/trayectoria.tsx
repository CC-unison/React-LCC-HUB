import { Paper, Divider, TableContainer, Table, TableBody, TableRow, TableCell } from "@mui/material";
import React from "react";

export const Trayectoria = () => {
    return (
        <div>
            <Divider className="separator" sx={{ ml: "30px", width: "95%", "marginBottom": "25px", "marginTop": "25px" }} />
            <div style={{ "textAlign": "left", "marginLeft": "30px", "marginTop": "30px", "color": "black" }}>
                <h2>Mi trayectoria</h2>
                <h3>Materias inscritas:</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }}>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
