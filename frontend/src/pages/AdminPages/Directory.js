import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { GetUserDirectories } from "../../assets/apis/ApiSerives";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const Directory = () => {
  const [addresstype, setAddresstype] = useState("");
  const userData = useSelector((state) => state.auth.user);

  const [directory, setDirectory] = useState([]);

  const handleChange = (event) => {
    setAddresstype(event.target.value);
  };

  const handleGetUserDirectories = useCallback(async () => {
    try {
      const response = await GetUserDirectories(userData._id);
      if (response) {
        setDirectory(response.data.data);
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No directory found",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      if (error.response.status === 404) {
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Internal server error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }, [userData._id]);

  useEffect(() => {
    handleGetUserDirectories();
  }, [handleGetUserDirectories]);

  return (
    <div className="dashboar_body_wrapper">
      <div className="dashboar_body_heading directory_header">
        <h1>Verzeichnis</h1>
        <Link to="0">Neuer Eintrag</Link>
      </div>
      <div className="dashboard_directory">
        <div className="dashboar_directory_inner">
          <div className="Orders_table_main_container">
            <div className="sortable_table">
              <table>
                <thead>
                  <th>
                    <div className="table_input">
                      <TextField label="Name" type="search" variant="filled" />
                    </div>
                  </th>

                  <th>
                    <div className="table_input">
                      <TextField
                        label="Adresse"
                        type="search"
                        variant="filled"
                      />
                    </div>
                  </th>
                  <th>
                    <div className="table_input">
                      <TextField
                        label="Der interne Begriff"
                        type="search"
                        variant="filled"
                      />
                    </div>
                  </th>

                  <th>
                    <div className="table_input">
                      <FormControl
                        variant="filled"
                        className="table_select_input"
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Address Type
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={addresstype}
                          onChange={handleChange}
                          label="Address Type"
                        >
                          <MenuItem value={"commercial"}>commercial</MenuItem>
                          <MenuItem value={"private"}>private</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </th>
                  <th>email</th>
                </thead>
                <tbody>
                  {directory.map((data) => (
                    <tr key={data._id}>
                      <td>{data.firstName}</td>
                      <td>{data.addressSupplement}</td>
                      <td>{data.internalTerm}</td>
                      <td>{data.addressType}</td>
                      <td>{data.email}</td>
                    </tr>
                  ))}
                </tbody>
                {directory.length === 0 && (
                  <h5 className="py-4 px-3">Keine Daten zum Anzeigen</h5>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
