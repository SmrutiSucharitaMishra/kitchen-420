import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 3, ml: 5, "& h4": { fontWeight: "bold", mb: 1 } }}>
        <Typography variant="h3">Contact KITCHEN 420</Typography>
        <p>
          A restaurant is a place where people go to enjoy meals prepared and
          served by professionals. It is a popular social gathering spot where
          individuals, couples, families, and friends come together to dine and
          share conversations. Restaurants offer a variety of cuisines and
          dining experiences, ranging from casual eateries to fine dining
          establishments. They typically have menus featuring a wide selection
          of dishes, accommodating different tastes and dietary preferences. The
          ambiance, decor, and service of a restaurant contribute to the overall
          dining experience. Some restaurants specialize in specific types of
          cuisine, while others offer a fusion of flavors. Whether it's for a
          quick bite, a celebratory occasion, or a romantic dinner, restaurants
          provide a convenient and enjoyable way to savor delicious food while
          creating lasting memories.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 5,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> test@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
