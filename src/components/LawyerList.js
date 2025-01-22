import React from "react";
import "../assets/LawyerList.css";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LawyerList = ({ lawyers }) => {
  return (
    <div>
      {lawyers.map((lawyer) => (
        <Card key={lawyer.id} style={{ margin: "15px" }}>
          <CardContent>
            <Typography variant="h6">
              <Link to={`/lawyers/${lawyer.id}`} style={{ textDecoration: "none", color: "blue" }}>
                {lawyer.name}
              </Link>
            </Typography>
            <Typography>Specialty: {lawyer.specialty}</Typography>
            <Typography>Availability: {lawyer.availability} hours</Typography>
            <Typography>Cost per Appointment: ${lawyer.cost}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default LawyerList;
