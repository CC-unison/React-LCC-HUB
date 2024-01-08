import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const greenBorder: React.CSSProperties = {
  border: '2px solid green',
};

const curriculumArray: string[] = [
  "6881-6886-9100-9440-9441-0120-0123",
  "6884-8151-9102-9442-9443-9444-0121",
  "6889-6895-8156-9282-9447-9448",
  "8161-9445-9446-9449-9450-0124-Selec",
  "9156-9454-9451-9452-9453-Selec",
  "9458-9455-9456-9457-Esp-Intg",
  "9459-9460-9461-Esp-Esp-Intg",
  "Esp-Esp-Intg",
];

interface SubjectCardProps {
  code: string;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ code }) => (
  <Grid item>
    <Card style={greenBorder}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h9" align="center">
          {code}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const CurriculumMap: React.FC = () => (
    <Grid container spacing={2}>
      {curriculumArray.map((semester, semesterIndex) => (
        <Grid container item key={semesterIndex} justifyContent="center" spacing={2}>
          {semester.split('-').map((subjectCode, subjectIndex) => (
            <SubjectCard key={subjectIndex} code={subjectCode} />
          ))}
        </Grid>
      ))}
    </Grid>
  );

export default CurriculumMap;
