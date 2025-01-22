import React from "react";
import { useSelector } from "react-redux";
import "../assets/AppointmentHistory.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const AppointmentHistory = ({ lawyerId }) => {
  const firms = useSelector((state) => state.firms);
  const lawyer = firms.flatMap((firm) => firm.lawyers).find((l) => l.id === lawyerId);

  if (!lawyer || !lawyer.appointments || lawyer.appointments.length === 0) {
    return <Typography variant="h6">No appointments detail available</Typography>;
  }

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Client Name</strong></TableCell>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell><strong>Time</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lawyer.appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell>{appointment.clientName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentHistory;
