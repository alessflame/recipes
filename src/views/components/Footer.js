import { Box, Typography } from "@mui/material";
import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    // <div className='footer'>
    //      <span>
    //           Per visualizzare altri progetti vai al mio account <a href='https://github.com/alessflame'>GitHub</a>
    //      </span>
    // </div>
    <Box className="footer">
      <Typography as="h4">Francesco Alessi</Typography>

      <BottomNavigation sx={{ width: 500, backgroundColor: "transparent" }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/francesco-aless/"
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<LinkedInIcon sx={{ fontSize: 40, color: "white" }} />}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alessflame"
        >
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<GitHubIcon sx={{ fontSize: 40, color: "white" }} />}
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://talent.start2impact.it/profile/francesco-alessi"
        >
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<RocketLaunchIcon sx={{ fontSize: 40, color: "white" }} />}
          />
        </a>
      </BottomNavigation>
    </Box>
  );
}

export default Footer;
