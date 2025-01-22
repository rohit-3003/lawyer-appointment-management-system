import React from "react";
import "../assets/LawyersPage.css";
import { useParams, Link } from "react-router-dom";
import { lawFirms } from "../mockData";
import { Typography, List, ListItem, ListItemText, Button, Box } from "@mui/material";

const LawyersPage = () => {
  const { id } = useParams();
  const selectedFirm = lawFirms.find((firm) => firm.id === Number(id));

  if (!selectedFirm) {
    return (
      <Box textAlign="center" mt={5} className="not-found" style={{
        backgroundColor: "#fdecea",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}>
        <Typography variant="h4" color="error" style={{ fontWeight: "bold" }}>
          Law Firm Not Found
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          sx={{ mt: 3 }}
        >
          Back to Home
        </Button>
      </Box>
    );
  }

  return (
    <Box p={3} className="lawyers-page">
      <Typography variant="h2" className="firm-heading" gutterBottom style={{
        position: "relative",
        display: "inline-block",
        paddingBottom: "0.5rem",
        borderBottom: "3px solid #3498db"
      }}>
        {selectedFirm.name}
      </Typography>
      <Typography variant="h3" className="lawyers-heading" gutterBottom>
        Meet Our Lawyers
      </Typography>
      <List>
        {selectedFirm.lawyers.map((lawyer) => (
          <ListItem 
            key={lawyer.id} 
            className="list-item" 
            divider 
            style={{
              padding: "15px 20px",
              margin: "10px 0",
              borderRadius: "8px",
              transition: "background-color 0.3s, transform 0.2s",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f1f1";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <ListItemText
              primary={
                <Link
                  to={`/lawyers/${lawyer.id}`}
                  className="lawyer-link"
                  style={{
                    color: "#1976d2",
                    textDecoration: "none",
                    transition: "color 0.3s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1565c0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1976d2";
                  }}
                >
                  {lawyer.name}
                </Link>
              }
              secondary={`Specialty: ${lawyer.specialty}`}
            />
          </ListItem>
        ))}
      </List>
      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          className="back-button"
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default LawyersPage;
