'use client'
import { getStudentById } from "@/lib/firestore";
import NoDataPage from "./_components/noDataPage";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Avance } from "./_components/avance";
import { Trayectoria } from "./_components/trayectoria";
import { CurriculumMap } from "./_components/curriculumMap";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";

const DashboardPage = () => {
    const { instance, accounts, inProgress } = useMsal();
    const username = instance.getActiveAccount().username;
    const id = username.split("@")[0].slice(1);

    const [student, setStudent] = useState({});

    useEffect(() => {
        const getStudent = async () => {
            const student = await getStudentById(id);
            setStudent(student)
        }

        getStudent();
    }, []);

    return (
        <Container disableGutters sx={{ color: "black", minWidth: "100vw", minHeight: "100vh", backgroundColor: "white" }}>
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <Typography mr={3}>
                    <button onClick={async () => await instance.logoutPopup({ mainWindowRedirectUri: '/' })}>
                        LOGOUT
                    </button>
                </Typography>
            </Toolbar>
            {
                !student.name ?
                    <NoDataPage /> :
                    <Container disableGutters>
                        <Avance
                            approvedCredits={student.approvedCredits}
                            requiredCredits={student.requiredCredits}
                            englishLevel={parseInt(student.levelAndCycleEnglish.split('-')[0])}
                            cultCredits={student.cultCredits}
                        />
                        <Trayectoria />
                        <CurriculumMap
                            mapCode={student.studyPlan.toString()}
                            credited={student.creditedSubjects}
                            dropped={student.droppedSubjects}
                            failed={student.failedSubjects}
                            enrolled={student.enrolledSubjects}
                            senrolled={student.secondEnrolledSubjects}
                            tenrolled={student.thirdEnrolledSubjects}
                        />
                    </Container>
            }

        </Container>
    );

}

export default DashboardPage;
