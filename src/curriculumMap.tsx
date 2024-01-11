import React from 'react';
import { Grid, Card, CardContent, Typography, TableContainer, TableHead, TableBody, TableRow, TableCell} from '@mui/material';

const greenBorder: React.CSSProperties = {
  border: '2px solid green',
};

enum Eje {
  Selec,
  Integ,
  Esp,
}

const mapEje2str = new Map<number, string>([
  [Eje.Selec, "Selectivo"],
  [Eje.Integ,"Integrador"],
  [Eje.Esp, "Especializante"]
]);

const semesterProgram: number[][] =  [
  [6881,6886,9100,9440,9441,120,123],
  [6884,8151,9102,9442,9443,9444,121],
  [6889,6895,8156,9282,9447,9448],
  [8161,9445,9446,9449,9450,124,Eje.Selec],
  [9156,9454,9451,9452,9453,Eje.Selec],
  [9458,9455,9456,9457,Eje.Esp,Eje.Integ],
  [9459,9460,9461,Eje.Esp,Eje.Esp,Eje.Integ],
  [Eje.Esp,Eje.Esp,Eje.Integ],
];

interface SubjectCardProps {
  code: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ code }) => (
    <Card style={greenBorder}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography>
          Creditos
        </Typography>
        <Typography variant="h9" align="center">
          {code in Eje ? mapEje2str.get(code): String(code).padStart(4, '0')}
        </Typography>
      </CardContent>
    </Card>
);

const CurriculumMap: React.FC = () => (
  <>
    <CurriculumMapv2 />
  <Grid container direction="row" justifyContent="center" spacing={2} columns={semesterProgram.length}>
      {semesterProgram.map((semester, semesterIndex) => (
        <Grid item key={semesterIndex} direction={"column"} justifyContent="center">
          {semester.map((subjectCode, subjectIndex) => (
            <SubjectCard key={subjectIndex} code={subjectCode} />
          ))}
        </Grid>
      ))}
    </Grid>
  </>
  );

const CurriculumMapv2: React.FC = () => (
  <TableContainer>
    <TableHead>
      <TableRow>
        {semesterProgram.map((_, i) => (
          <TableCell>
            <Typography>
              {i+1}
            </Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
          {semesterProgram.map((semester, semesterIndex) => (
            <TableCell>
              <Grid container direction={"column"}>
                  {semester.map((subjectCode, subjectIndex) => (
                  <Grid item key={semesterIndex} direction={"column"} justifyContent="center">
                      <SubjectCard key={subjectIndex} code={subjectCode} />
                  </Grid>
                  ))};
              </Grid>
            </TableCell>
          ))};
        </TableRow>
    </TableBody>
  </TableContainer>
)

export default CurriculumMap;
