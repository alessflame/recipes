import React from 'react'
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box,Typography,Link, BottomNavigation, BottomNavigationAction } from '@mui/material'

function FooterComponent() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
        Francesco Alessi
    </Typography>
    <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
    >


<BottomNavigation sx={{ width: "100%", display:"flex", backgroundColor: "transparent", alignItems:"center" }}>
<a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/francesco-aless/"
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<LinkedInIcon sx={{ fontSize: 40, color: "teal" }} />}
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
            icon={<GitHubIcon sx={{ fontSize: 40, color: "black" }} />}
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
            icon={<RocketLaunchIcon sx={{ fontSize: 40, color: "green" }} />}
          />
        </a>
      </BottomNavigation>

    </Typography>
</Box>
  )
}

export default FooterComponent