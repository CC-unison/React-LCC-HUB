import React from 'react';
import { Grid, Card, CardContent, Typography, TableContainer, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

async function getSubjectInfo(key: string) {
    const docRef = doc(db, "subjects", key);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

async function getSemesterMap(key: string) {
    const docRef = doc(db,"curriculumMaps", key);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

function generateSemesterMap(inferior_map: string[]) {
  let semesterProgram = []
  for (const semester of inferior_map) {
    semesterProgram.push(semester.split("-"));
  }
  return semesterProgram;
}

const LCCMap = await getSemesterMap("2052");
const semesterProgram: string[][] = generateSemesterMap(LCCMap.semesters)


interface SubjectCardProps {
  code: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ code }) => (
    <Card sx={{width: 140, height: 75}}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{fontFamily: 'Arial', fontSize: 10, alignSelf: 'flex-end'}}>
          {code}
        </Typography>
        <Typography sx={{fontFamili: 'Arial', fontSize: 10, justifyContent: 'center'}}>
          Introduccion a las Cs. de la computacion
        </Typography>
      </CardContent>
    </Card>
);

const SemesterHeadingCard: React.FC<SubjectCardProps> = ({ code }) => (
    <Card sx={{width: 140, height: 75}}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography align="center">
          {code}
        </Typography>
      </CardContent>
    </Card>
);

const CurriculumMap: React.FC = () => (
  <TableContainer sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
    <TableHead sx={{display: 'flex',  justifyContent: 'space-around',}}>
      <TableRow>
        {semesterProgram.map((_, i) => (
          <TableCell>
            <SemesterHeadingCard code={i+1} />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody sx={{display: 'flex',  justifyContent: 'space-around', }}>
        <TableRow>
          {semesterProgram.map((semester, semesterIndex) => (
            <TableCell>
            <Grid container direction={"column"} spacing={1.5} justifyContent={'flex-start'}>
                  {semester.map((subjectCode, subjectIndex) => (
                  <Grid item key={semesterIndex} justifyContent="center">
                      <SubjectCard key={subjectIndex} code={subjectCode} />
                  </Grid>
                  ))}
              </Grid>
            </TableCell>
          ))}
        </TableRow>
    </TableBody>
  </TableContainer>
)

/* TODO
   - Semester up to top
   - Fetch info from key in firebase
   - Add colors
   - Add header
   - Add images and logos
   - Review``


*/

export default CurriculumMap;
