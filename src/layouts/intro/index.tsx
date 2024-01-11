import React from 'react'
import { Avatar, Box, IconButton, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './index.module.scss'
// import image from '../../utils/images/testimg.png'

const Intro = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.intro}>
          <Typography className={styles.name}>Nilesh Wani</Typography>
          {/* <Typography className={styles.name}>Frontend Developer</Typography> */}
          <Typography className={styles.summary}>
            Passionate React Developer with extensive experience in crafting
            user-friendly interfaces. Proficient in JavaScript, TypeScript,
            React Hook Form, Material UI, React Query, and Chart.js. Adept at
            delivering high-quality features and building scalable applications.
          </Typography>
        </Box>
        <Box className={styles.socialIcons}>
          <IconButton sx={{ p: 0 }}>
            <LinkedInIcon style={{height:"50px"}}/>
          </IconButton>
          <IconButton sx={{ p: 0 }}>
            <LinkedInIcon style={{height:"50px"}}/>
          </IconButton>
          <IconButton sx={{ p: 0 }}>
            <LinkedInIcon style={{height:"50px"}}/>
          </IconButton>

        </Box>
      </Box>
    </>
  )
}

export default Intro
