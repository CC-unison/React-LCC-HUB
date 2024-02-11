"use client"

import {
    Container,
    Typography,
    Grid,
    TableContainer,
    TableHead,
    TableBody,
    TableCell,
    TableRow,
    Card,
    CardHeader,
    CardContent
} from "@mui/material";

import UniversidadSonora from "@//public/Escudo_Unison.png"
import LccLogo from "@/public/logo-lcc-letras.svg"

import { getSemesterMap, generateSemesterMapDict } from "@/lib/firestore";
import { SubjectStatus, SubjectCard } from "./subjectCard";
import { useState, useEffect } from "react";

interface CurriculumProps {
    mapCode: string,
    credited: string,
    dropped: string,
    failed: string,
    enrolled: string,
    senrolled: string,
    tenrolled: string,
}

export const CurriculumMap = (props: CurriculumProps) => {
    const { mapCode, credited, dropped, failed, enrolled, senrolled, tenrolled } = props;
    const [semesterProgram, setSemesterProgram] = useState([]);
    const [programDict, setProgramDict] = useState({});
    const [subjectEnrollment, setSubjectEnrollment] = useState({})
    const [showSet, setShowDict] = useState({ showAll: true, showByCode: new Set() });

    useEffect(() => {
        const prepareData = async () => {
            const LCCmap = await getSemesterMap(mapCode)
            const semesterProgram: string[][] = generateSemesterMap(LCCmap.semesters)
            const subjEnroll = generateSubjectEnrollment(credited, dropped, failed, enrolled, senrolled, tenrolled);
            const programDict = await generateSemesterMapDict(semesterProgram);
            setSemesterProgram(semesterProgram);
            setProgramDict(programDict);
            setSubjectEnrollment(subjEnroll);
            console.log("Semester Program", semesterProgram)
            console.log("Program Dict", programDict)
            console.log("Subj Enroll", subjEnroll)
        }

        prepareData();
    }, []);


    return (
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
    );
}

function generateSemesterMap(inferior_map: string[]) {
    let semesterProgram = []
    for (const semester of inferior_map) {
        semesterProgram.push(semester.split("-"));
    }
    return semesterProgram;
}

function generateSubjectEnrollment(credited: string, dropped: string, failed: string, enrolled: string, senrolled: string, tenrolled: string) {
    const enrollment = {};
    credited.split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.APPROVED
    });

    dropped.split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.DROPPED
    });

    failed.split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.FAILED
    });

    enrolled.split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.ENROLLED
    });

    senrolled.split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.ENROLLED2
    });

    tenrolled.split('-').forEach((key) => {
        enrollment[key.split(" ").at(-1)] = SubjectStatus.ENROLLED3
    });

    return enrollment
}

function romanize(num: number) {
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

