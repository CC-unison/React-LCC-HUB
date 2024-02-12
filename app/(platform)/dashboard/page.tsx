import { currentUser, UserButton } from "@clerk/nextjs";
import { getStudentById } from "@/lib/firestore";
import NoDataPage from "./_components/noDataPage";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Avance } from "./_components/avance";
import { Trayectoria } from "./_components/trayectoria";
import { CurriculumMap } from "./_components/curriculumMap";


const DashboardPage = async () => {
    const user = await currentUser();
    const email = user?.emailAddresses[0].emailAddress;
    const id = email?.split('@')[0].substring(1);
    const student = await getStudentById(id || '');

    return (
        <Container disableGutters sx={{ color: "black", minWidth: "100vw", minHeight: "100vh", backgroundColor: "white" }}>
            <Toolbar sx={{ justifyContent: "flex-end" }}>
                <Typography mr={3}>
                    Usuario
                </Typography>
                <UserButton afterSignOutUrl="/" />
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
