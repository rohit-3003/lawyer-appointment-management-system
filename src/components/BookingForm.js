import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../assets/BookingForm.css";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { bookAppointment } from "../redux/actions/LawyerActions";

const BookingForm = ({ lawyer }) => {
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate function

  const handleBooking = () => {
    if (lawyer.availability > 0) {
      const appointment = { clientName, date, time };
      dispatch(bookAppointment(lawyer.firmId, lawyer.id, appointment));
      alert("Appointment booked successfully!");
      setClientName("");
      setDate("");
      setTime("");
    } else {
      alert("Appointment not available");
    }
  };

  // Handle back button navigation
  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  // Handle home button navigation
  const handleHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <Card style={{ marginTop: "20px" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Book an Appointment with {lawyer.name}
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Client Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <TextField
            label="Date"
            type="date"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Time"
            type="time"
            variant="outlined"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleBooking}
          >
            Book Appointment
          </Button>
        </form>
        
        {/* Back and Home buttons */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
          style={{ marginTop: "20px", marginRight: "10px" }}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleHome}
          style={{ marginTop: "20px" }}
        >
          Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
