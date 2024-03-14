"use client";
import { getNotifications, getStudentById } from "@/lib/firestore";
import NoDataPage from "./_components/noDataPage";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
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
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Loading from "../loading";
import React from "react";
import Link from "next/link";

const DashboardPage = () => {
  const { instance, accounts, inProgress } = useMsal();
  const username = instance.getActiveAccount().username;
  const id = username?.split("@")[0].slice(1);

  const [student, setStudent] = useState({});
  const [studentLoading, setStudentLoading] = useState(false);
  const [alarms, setAlarms] = useState([]);
  const [anchorElnotifs, setAnchorElnotifs] =
    React.useState<null | HTMLElement>(null);
  const closeNotifs = () => {
    setAnchorElnotifs(null);
  };
  const handleNotifs = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElnotifs(event.currentTarget);
  };

  useEffect(() => {
    const getStudent = async () => {
      setStudentLoading(true);
      const student = await getStudentById(id);
      setStudent(student);
      setStudentLoading(false);
    };

    const getAlerts = async () => {
      const notifs = await getNotifications();
      setAlarms(notifs);
    };

    getStudent();
    getAlerts();
  }, []);

  if (inProgress == "login" || inProgress == "logout" || studentLoading) {
    return <Loading />;
  } else if (accounts.length > 0) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link href="/" style={{ color: "inherit" }}>
              <Image
                src="/logo-lcc-blanco.svg"
                alt="Logo LCC"
                width={145}
                height={54}
              />
            </Link>
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
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNotifs}
                color="inherit"
              >
                {alarms && alarms.length > 0 ? (
                  <NotificationImportantIcon />
                ) : (
                  <NotificationsIcon />
                )}
              </IconButton>

              <Menu
                id="menu-appbar2"
                anchorEl={anchorElnotifs}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElnotifs)}
                onClose={closeNotifs}
              >
                {alarms && alarms.length > 0 ? (
                  alarms.map((object) => {
                    if (true) {
                      //la condicion va aqui lol
                      const truncatedDescripcion = object.descripcion.slice(
                        0,
                        20,
                      );
                      return (
                        <MenuItem key={object.id}>
                          <strong>{object.titulo}</strong>
                        </MenuItem>
                      );
                    }
                    return null; // Add this line to handle the case where showInPage is not true
                  })
                ) : (
                  <MenuItem>No hay notificaciones.</MenuItem>
                )}
              </Menu>
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
