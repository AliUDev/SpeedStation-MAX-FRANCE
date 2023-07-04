import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/AuthSlice";

const AdminNav = (props) => {
  const { AdminToggler } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(authSliceActions.handleLogoutUser());
    navigate("login");
  };

  return (
    <div className="Admin_navbar_top">
      <div className="Menu_Icon_div" onClick={AdminToggler}>
        <MenuIcon />
      </div>
      <div className="admin_top_nav_user_dropdown">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="user_button"
        >
          Benutzer <PersonIcon />
        </Button>
        <Menu
          id="basic-menu"
          className="user_menu_li"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/idea">Mein Konto</Link>
          </MenuItem>
          <MenuItem onClick={() => handleLogout()}>Ausloggen</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default AdminNav;
