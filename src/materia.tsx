import { Card, CardContent } from "@mui/material";

interface MyComponentProps {
    numero: string;
    nombre: string;
}

export default function materia({numero, nombre}: MyComponentProps) {
    <Card style={{ width: 300 }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>{nombre}</h1>
            <h2>{numero}</h2>
        </CardContent>
    </Card>
}