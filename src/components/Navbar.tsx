import { AppBar, Toolbar, Box, Link } from '@mui/material';
import logo from '../assets/Logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { red } from '@mui/material/colors';

    // <Router>
    //   <Routes>
    //     <Route element={<App />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/produtos" element={<Products />} />
    //       <Route path="/produto/:id" element={<AboutUs />} />
    //       <Route path="/sobre" element={<AboutUs />} />
    //       <Route path="/contato" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </Router>;

    const Navbar = () => {
        const [hoveredLink, setHoveredLink] = useState<string | null>(null);
        const [drawerOpen, setDrawerOpen] = useState(false);
        const location = useLocation();

        useEffect(() => {
            const path = location.pathname.split('/')[1];
            const currentRoute = path.charAt(0).toUpperCase() + path.slice(1);
            console.log('currentRoute: ', currentRoute)
            setHoveredLink(currentRoute || "Home");
        }, [location]);
        
        return (
          <AppBar
            position="static"
            sx={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              position: "fixed",
              top: 0,
              minHeight: 100,
              zIndex: 50,
              padding: 3,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{
                position: "absolute",
                left: 0,
                marginLeft: {
                  xs: 2,
                  md: "1rem",
                },
                maxWidth: {
                  xs: 250,
                  md: 400,
                },
              }}
            ></Box>

            <Toolbar
              sx={{
                position: { 
                  xs: 'absolute',
                  md: 'relative'
                },
                right: { 
                  md: 0,
                  xs: 0,
                  top: 0
                },
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Logo Section */}

              {/* Navigation Links */}
              <Box
                sx={{
                  display: {
                    md: "flex",
                    xs: "none",
                  },
                  gap: 2,
                }}
              >
                {["Home", "Produtos", "Sobre", "Contato"].map((text) => (
                  <Link
                    key={text}
                    href={`/${text.toLowerCase()}`}
                    underline="none"
                    onMouseEnter={() => setHoveredLink(text)}
                    onMouseLeave={() => setHoveredLink(null)}
                    sx={{
                      color:
                        hoveredLink === text ? "rgb(183, 28, 28)" : "black",
                      fontWeight: "500",
                      transition: "color 0.3s",
                    }}
                  >
                    {text}
                  </Link>
                ))}
              </Box>
              {/*Hamburguer Menu */}
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                  },
               
                  color: red[900],
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                >
                  <List>
                    {["Home", "Produtos", "Sobre", "Contato"].map((text) => (
                      <ListItem
                        key={text}
                        onClick={() => setDrawerOpen(false)}
                        component="a"
                        href={`/${text.toLowerCase()}`}
                      >
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Drawer>
              </Box>
            </Toolbar>
          </AppBar>
        );
    };

    export default Navbar;
