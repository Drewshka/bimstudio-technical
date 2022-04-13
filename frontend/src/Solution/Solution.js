/*

Following a team meeting, you were asked to create a table to display
building data from a newly written endpoint (see backend /buildings/all route)

Just as you are about to go home, the team leader adds:
"I want to be able to filter data by company name"

You have the freedom to solve the problem in any way you want.

(OPTIONAL) Use the MaterialUI table: https://mui.com/material-ui/react-table/
We are currently using this table in our product.
However, use of this library is optional in this assignment.

*/

// YOUR CODE BELOW
// ----------------------------------------------------------------------------
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, FormControl, TextField } from "@mui/material";

const buildingsURL = "http://localhost:9000/buildings/all";

const Solution = () => {
  const [buildingsData, setBuildingsData] = useState([]);
  const [keyWord, setKeyword] = useState("");

  useEffect(() => {
    async function getResults() {
      const results = await axios.get(buildingsURL);
      setBuildingsData(results.data);
    }
    getResults();
  }, []);
  //   console.log(buildingsData);

  const searchByCompanyHandler = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  const searchBuildingsByCompany = (keyWord) => {
    return (building) => {
      return (
        building.company.toLowerCase().includes(keyWord.toLowerCase()) ||
        !keyWord
      );
    };
  };

  return (
    <>
      <h1 style={{ padding: "0px 10px" }}>This is my table.</h1>
      <Grid container justifyContent="center">
        <FormControl margin="normal" required>
          <TextField
            type="text"
            placeholder="Search by Company..."
            className="company_input"
            onChange={searchByCompanyHandler}
            value={keyWord}
          />
        </FormControl>
      </Grid>
      <Grid container justifyContent="center">
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 950 }}
          justifyContent="center">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">State</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buildingsData
                .filter(searchBuildingsByCompany(keyWord))
                .map((row) => (
                  <TableRow
                    key={row.address}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.company}
                    </TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.city}</TableCell>
                    <TableCell align="right">{row.state}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default Solution;
