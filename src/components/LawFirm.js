import React from "react";
import "../assets/LawFirm.css";
import { Card, CardContent, Typography } from "@mui/material";
import LawyerList from "./LawyerList";

const LawFirm = ({ firm }) => {
  return (
    <Card style={{ margin: "20px", padding: "20px" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {firm.name}
        </Typography>
        <LawyerList lawyers={firm.lawyers} />
      </CardContent>
    </Card>
  );
};

export default LawFirm;
