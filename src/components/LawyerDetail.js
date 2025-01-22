import React from "react";
import "../assets/LawyerDetail.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardContent, Typography, Box } from "@mui/material";
import AppointmentHistory from "./AppointmentHistory";
import BookingForm from "./BookingForm";

const LawyerDetail = () => {
  const { id } = useParams();
  const firms = useSelector((state) => state.firms);
  const lawyer = firms.flatMap((firm) => firm.lawyers).find((l) => l.id === parseInt(id));

  if (!lawyer) {
    return <Typography variant="h5">Lawyer not found</Typography>;
  }

  return (
    <Box>
      <Card style={{ margin: "20px", padding: "20px" }}>
        <CardContent>
          <Typography variant="h4">{lawyer.name}</Typography>
          <Typography>Specialty: {lawyer.specialty}</Typography>
          <Typography>Availability: {lawyer.availability} hours</Typography>
          <Typography>Cost per Appointment: ${lawyer.cost}</Typography>
        </CardContent>
      </Card>
      <AppointmentHistory lawyerId={lawyer.id} />
      <BookingForm lawyer={lawyer} />
    </Box>
  );
};

export default LawyerDetail;
