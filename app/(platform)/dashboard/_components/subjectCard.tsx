'use client'

import { useState } from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

export enum SubjectStatus {
    DROPPED,
    APPROVED,
    FAILED,
    ENROLLED,
    ENROLLED2,
    ENROLLED3
}
export const SubjectCard = ({ code, dict, enroll, showSet, showSetter }) => {

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

    const cardStyle = {
        width: 120,
        height: 60,
        borderRadius: '0',
        border: '1px solid black',
        outline: getOutline(enroll, code),
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        opacity: checkShowability(code, showSet) ? 1 : 0.2,
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

const checkShowability = (code, showSet) => {
    if (showSet.showAll == true) {
        return true
    }
    return showSet.showByCode.has(code)
}

const getOutline = (dict, code) => {
    switch (dict[code]) {
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

