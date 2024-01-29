import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, CardHeader, Typography, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../../(landingPage)/_components/firebase";
import { Container, Divider } from "@mui/material"
import UniversidadSonora from "../../../public/Escudo_Unison.png"
import LccLogo from "../../../public/logo-lcc-letras.svg"

async function getSemesterMap(key: string) {
    const docRef = doc(db, "curriculumMaps", key);
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
                "tracklist": doc.data().tracklistSubject
            }
        }
    });
    return programDict;
}

enum SubjectStatus {
    DROPPED,
    APPROVED,
    FAILED,
    ENROLLED,
    ENROLLED2,
    ENROLLED3
}
async function generateSubjectEnrollment(alumnId: string) {
    const enrollment = {};
    const docSnap = await getDoc(doc(db, "students", String(alumnId)));
    docSnap.data()["creditedSubjects"].split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.APPROVED
    })
    docSnap.data()["droppedSubjects"].split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.DROPPED
    })
    docSnap.data()["failedSubjects"].split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.FAILED
    })
    docSnap.data()["enrolledSubjects"].split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.ENROLLED
    })
    docSnap.data()["secondEnrolledSubjects"].split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.ENROLLED2
    })
    docSnap.data()["thirdEnrolledSubjects"].split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.ENROLLED3
    })
    return enrollment
}

function getColor(code, dict) {
    switch (dict[code].branch) {
        case "Basico":
            return "#E8EEF7";
        case "Comun":
            return "#FFFF66";
        case "Profesional":
            return "#FF9966";
        case "Especializante":
            return "#99FF66";
        case "Integrador":
            return "#9966FF";
        default:
            return "white"
    }
}

function romanize(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


interface SubjectCardProps {
    code: number,
    dict,
}

const checkShowability = (code, dict, showSet) => {
    if (showSet.showAll == true) {
        return true
    }
    return showSet.showByCode.has(code)
}

function trasverseTree(root, dict) {
    let treeMembers = new Set()
    let stack = [root]
    while (stack.length > 0) {
        let localRoot = stack.pop();
        if (treeMembers.has(localRoot))
            continue
        treeMembers.add(localRoot)
        let leaves = dict[localRoot].releases.split('-')
        if (!leaves)
            continue
        leaves.forEach(leaf => {
            if (!treeMembers.has(leaf) && dict[leaf])
                stack.push(leaf)
        })
    }
    return treeMembers
}

const SubjectCard: React.FC<SubjectCardProps> = ({ code, dict, enroll, showSet, showSetter }) => {

    const [isHovered, setHovered] = useState(false);
    const [timesClicked, setTimesClicked] = useState(0);

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => {
        setHovered(false)
        if (timesClicked) {
            showSetter({ showAll: true, showByCode: new Set() })
            setTimesClicked(0)
        }

    };

    const handleClick = () => {
        if (timesClicked == 0) {
            setTimesClicked(1)
            let subjectSet = new Set(dict[code].tracklist)
            subjectSet.add(code)
            showSetter({ showAll: false, showByCode: subjectSet })
        }
    }

    const getOutline = () => {
        switch (enroll[code]) {
            case SubjectStatus.ENROLLED:
                return '3px solid #92C5FC'
            case SubjectStatus.APPROVED:
                return '2px solid #66ff66'
            case SubjectStatus.FAILED:
                return '2px solid #DC3545'
            case SubjectStatus.DROPPED:
                return '2px solid pink'
            case SubjectStatus.ENROLLED2:
                return '2px solid yellow'
            case SubjectStatus.ENROLLED3:
                return '2px solid orange'

            default:
                return '1px solid white'
        }

    }

    const cardStyle = {
        width: 120,
        height: 60,
        borderRadius: '0',
        border: '1px solid black',
        outline: getOutline(),
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        opacity: checkShowability(code, dict, showSet) ? 1 : 0.2,
    };

    return (
        <Card
            style={{ backgroundColor: getColor(code, dict) }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            sx={cardStyle}>
            <CardContent sx={{ margin: 0, p: 0.3 }}>
                <div>
                    <Typography textAlign='end' fontSize={10} sx={{ p: 0, marginRight: 1 }} >
                        {dict[code].credits || 0}
                    </Typography>
                </div>
                {dict[code].subjectName != "Integrador" ?
                    <Divider sx={{ borderBottom: '1px solid black', marginRight: 1, marginLeft: 1 }} />
                    : <></>}
                {["Integrador", "Especializante"].includes(dict[code].subjectName) ?
                    <Typography textAlign='center' fontSize={10}>
                        {"OPTATIVA"}
                    </Typography>
                    : <></>}
                <Typography textAlign='center' fontSize={10}>
                    {dict[code].subjectName}
                </Typography>
            </CardContent>
        </Card >
    );
}

const CurriculumMap: React.FC = (user) => {

    const [semesterProgram, setSemesterProgram] = useState([]);
    const [programDict, setProgramDict] = useState({});
    const [subjectEnrollment, setSubjectEnrollment] = useState({})
    const [showSet, setShowDict] = useState({ showAll: true, showByCode: new Set() });

    useEffect(() => {
        const prepareData = async () => {
            const LCCMap = await getSemesterMap("2052");
            const semesterProgram: string[][] = generateSemesterMap(LCCMap.semesters)
            const programDict = await generateSemesterMapDict(semesterProgram);
            console.log(user)
            const subjEnroll = await generateSubjectEnrollment("220212781");
            setSemesterProgram(semesterProgram);
            setProgramDict(programDict);
            setSubjectEnrollment(subjEnroll);
        }

        prepareData();
    }, []);

    return (
        <>
            <Container>
                <Container disableGutters maxWidth="xl" sx={{ p: 0 }}>
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        gutterBottom
                    >
                        Mapa Curricular
                    </Typography>
                    <Grid container maxWidth='xs' direction="row" columns={5} justifyContent="center" alignItems="center">
                        <Grid item md={1} sx={{ p: 0, textAlign: 'center' }}>
                            <img
                                src={UniversidadSonora}
                                style={{ width: '50%', height: 'auto' }}
                            />
                        </Grid>
                        <Grid item md={3} textAlign="center">
                            <Card>
                                <CardHeader
                                    title={
                                        <Typography variant="h4">
                                            Universidad de Sonora
                                        </Typography>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="h5">
                                        Facultad Interdisciplinaria de Ciencias Exactas y Naturales
                                    </Typography>
                                    <Typography variant="h5">
                                        Licenciatura en Ciencias de la Computación
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item md={1} sx={{ textAlign: 'center' }}>
                            <img
                                src={LccLogo}
                                style={{ width: '50%', height: 'auto' }}
                            />
                        </Grid>
                    </Grid>
                </Container>
                <TableContainer>
                    <TableHead>
                        <TableRow>
                            {semesterProgram.map((_, i) => (
                                <TableCell>
                                    <Typography variant="h5" align="center" style={{ fontFamily: "Times New Roman, Times, Times" }}>
                                        {romanize(i + 1)}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {semesterProgram.map((semester, semesterIndex) => (
                                <TableCell sx={{ verticalAlign: 'top', margin: 0, p: 1 }}>
                                    <Grid container spacing={1.3}>
                                        {semester.map((subjectCode, subjectIndex) => (
                                            <Grid item key={semesterIndex}>
                                                <SubjectCard
                                                    key={subjectIndex}
                                                    code={subjectCode}
                                                    dict={programDict}
                                                    enroll={subjectEnrollment}
                                                    showSet={showSet}
                                                    showSetter={setShowDict}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableBody>
                </TableContainer>
                <Typography textAlign='end' fontSize={12} color='gray'>
                    * Actualizado hasta el periodo 2022-2, los datos pueden no corresponder a los oficiales en Servicios Escolares, y pueden estar desactualizados.
                </Typography>
            </Container >
        </>
    );
}

export default CurriculumMap;
