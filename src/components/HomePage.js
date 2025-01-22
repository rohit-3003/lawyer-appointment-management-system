import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFirms } from "../redux/actions/FirmActions";
import { TextField, AppBar, Toolbar, Typography, InputAdornment, CircularProgress, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const HomePage = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const firms = useSelector((state) => state.firms);
  const isLoading = useSelector((state) => state.isLoading); // Assuming you have a loading state

  useEffect(() => {
    dispatch(fetchFirms());
  }, [dispatch]);

  const filteredFirms = firms
    .map((firm) => ({
      ...firm,
      lawyers: firm.lawyers.filter((lawyer) =>
        lawyer.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((firm) =>
      firm.name.toLowerCase().includes(search.toLowerCase()) || firm.lawyers.length > 0
    );

  return (
    <div style={{ backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      
      <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
            Law Firm Companies
          </Typography>
        </Toolbar>
      </AppBar>

      
      <Box sx={{ maxWidth: 800, margin: "20px auto" }}>
        <TextField
          label="Search Law Firms or Lawyers"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            borderRadius: "25px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "9px",
            backgroundColor: "#fff",
          }}
          aria-label="Search Law Firms or Lawyers"
        />
      </Box>

      
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", padding: "20px" }}>
          <CircularProgress sx={{ color: "#3f51b5" }} />
        </Box>
      )}

      
      <Box sx={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
        {filteredFirms.length === 0 ? (
          <Typography variant="h6" sx={{ textAlign: "center", color: "#555" }}>
            No results found
          </Typography>
        ) : (
          <ul style={{ paddingLeft: "0", listStyle: "none" }}>
            {filteredFirms.map((firm) => (
              <li key={firm.id} style={{ margin: "10px 0" }}>
                <Link
                  to={`/firm/${firm.id}`}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    padding: "15px",
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    color: "#1976d2",
                    fontWeight: "bold",
                    fontSize: "18px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {firm.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Box>
    </div>
  );
};

export default HomePage;
