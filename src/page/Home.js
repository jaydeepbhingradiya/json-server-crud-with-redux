import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "./../redux/actions";
import { Button, ButtonGroup } from "@mui/material";
import { useHistory } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Home() {
  const { users } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(loadUsers());
    // console.log("loading");
  }, [dispatch]);

  const handleDatele = (id) => {
    if (window.confirm("are you sure you want to delete ?")) {
      dispatch(deleteUser(id));
    }
  };

  console.log("env", process.env.REACT_APP_API);
  return (
    <TableContainer component={Paper}>
      <Button
        onClick={() => history.push("/adduser")}
        style={{ margin: "20px" }}
        variant="contained"
      >
        Add user
      </Button>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">{row.contact}</StyledTableCell>
              <StyledTableCell align="right">
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      handleDatele(row.id);
                    }}
                    variant="contained"
                    style={{ marginRight: "10px", backgroundColor: "tomato" }}
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={() => {
                      history.push(`/edituser/${row.id}`);
                    }}
                    variant="contained"
                  >
                    Edit
                  </Button>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;
