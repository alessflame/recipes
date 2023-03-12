import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../images/logo.png";
import { Image } from "@mui/icons-material";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";
import { Link as RouteLink } from "react-router-dom";
const pages = [
    ["Home", "/"],
    ["Ricette", "/recipes"],
    ["Corsi", "/products"],
];

function ResponsiveAppBar() {
    const { cart } = useSelector((state) => state);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ backgroundColor: "#558b2f" }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <img src={logo} alt="logo" style={{ width:"60px", borderRadius:"50%", padding:"5px" }}/>
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page[0]}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                    <RouteLink to={page[1]} style={{ color:"black", textDecoration:"none" }}>

                                            {page[0]}
                                        </RouteLink>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        <img src={logo} alt="logo" style={{ width:"50px", borderRadius:"50%", padding:"5px" }}/>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page[0]}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                    fontSize: "18px",
                                    marginLeft: "12px",
                                }}
                            >
                            <RouteLink to={page[1]} style={{ color:"white", textDecoration:"none" }}>
                                    {page[0]}
                                </RouteLink>
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton sx={{ p: 0 }}>
                            <RouteLink to="cart" style={{ color:"white", textDecoration:"none" }}>
                                <AiOutlineShoppingCart />
                                {cart.total}
                            </RouteLink>
                        </IconButton>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        ></Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
