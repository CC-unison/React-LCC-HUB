"use client";
import { getStudentById } from "@/lib/firestore";
import NoDataPage from "./_components/noDataPage";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Avance } from "./_components/avance";
import { Trayectoria } from "./_components/trayectoria";
import { CurriculumMap } from "./_components/curriculumMap";
import { useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Loading from "../loading";
const DashboardPage = () => {
  const { instance, accounts, inProgress } = useMsal();
  const username = instance.getActiveAccount().username;
  const id = username?.split("@")[0].slice(1);

  const [student, setStudent] = useState({});

  useEffect(() => {
    const getStudent = async () => {
      const student = await getStudentById(id);
      setStudent(student);
    };

    getStudent();
  }, []);

  if (inProgress == "logout") {
    return <Loading />;
  } else if (accounts.length > 0) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Image
              src="/logo-lcc-blanco.svg"
              alt="Logo LCC"
              width={145}
              height={54}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Mi avance
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                onClick={async () =>
                  await instance.logoutRedirect({ mainWindowRedirectUri: "/" })
                }
                size="large"
                aria-label="salir"
                color="inherit"
              >
                <LogoutIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {!student.name ? (
          <NoDataPage />
        ) : (
          <>
            <Avance
              approvedCredits={student.approvedCredits}
              requiredCredits={student.requiredCredits}
              englishLevel={parseInt(
                student.levelAndCycleEnglish.split("-")[0],
              )}
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
          </>
        )}
      </Box>
    );
  }
};

export default DashboardPage;
