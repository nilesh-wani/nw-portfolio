import * as React from 'react'
import Grid from '@mui/material/Grid'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Paper from '@mui/material/Paper'
import { Box, Typography } from '@mui/material'
import styles from './index.module.scss'
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode'

const Skills = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box>
          <Typography>Skills</Typography>
          <Typography>
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </Typography>
        </Box>
        {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={8}>
              <Grid item>
                <Paper
                  sx={{
                    height: 140,
                    width: 100,
                    backgroundColor: 'transparent'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </Box>
    </>
  )
}

export default Skills
