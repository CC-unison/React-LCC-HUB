import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography, TableContainer, TableHead, TableBody, TableRow, TableCell} from '@mui/material';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "./firebase";

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

async function generateSemesterMapDict(program: string[][]) {
  const programDict = {}
  const flattenProgram = new Set([].concat(...program));
  const docSnap = await getDocs(collection(db, "subjects"));
  docSnap.forEach((doc) => {
    if (flattenProgram.has(doc.id)) {
      programDict[doc.id] = {
        "branch": doc.data().branch,
        "credits": doc.data().credits,
        "subjectName": doc.data().subjectName,
      }
    }
  });
  return programDict;
}

interface SubjectCardProps {
  code: number,
  dict,
}

const SubjectCard: React.FC<SubjectCardProps> = ({ code, dict }) => (
    <Card sx={{width: 140, height: 75}}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{fontFamily: 'Arial', fontSize: 10, alignSelf: 'flex-end'}}>
          {dict[code].credits}
        </Typography>
        <Typography sx={{fontFamili: 'Arial', fontSize: 10, justifyContent: 'center'}}>
          {dict[code].subjectName}
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

const CurriculumMap: React.FC = () => {

  const [semesterProgram, setSemesterProgram] = useState([]);
  const [programDict, setProgramDict] = useState({});

  useEffect(() => {
    const prepareData = async () => {
       const LCCMap = await getSemesterMap("2052");
       const semesterProgram: string[][] = generateSemesterMap(LCCMap.semesters)
       const programDict = await generateSemesterMapDict(semesterProgram);
       setSemesterProgram(semesterProgram);
       setProgramDict(programDict);
    }

    prepareData();
  }, []);

  return (
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
                      <SubjectCard key={subjectIndex} code={subjectCode} dict={programDict} />
                  </Grid>
                  ))}
              </Grid>
            </TableCell>
          ))}
        </TableRow>
    </TableBody>
  </TableContainer>
);
}

/* TODO
   - Semester up to top
   - Fetch info from key in firebase
   - Add colors
   - Add header
   - Add images and logos
   - Review``


*/

export default CurriculumMap;
