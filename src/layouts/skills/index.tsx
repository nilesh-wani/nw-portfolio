import {
  Box,
  Grid,
  Paper,
  Typography
} from '@mui/material'
import Icons from '../../components/icons'
import { skillsData } from '../../constants/skills'
import styles from './index.module.scss'
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode'

const Skills = () => {
  return (
    <>
      <Box className={styles.container}>
        <Box>
          <Typography className={styles.containerContent}>Skills</Typography>
          <Typography className={styles.containerContent}>
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </Typography>
        </Box>
        <Grid container spacing={2} >
          <Grid item xs={12}>
            <Grid container justifyContent='center' spacing={2}>
              <Grid item>
                <Paper
                  sx={{
                    backgroundColor: 'transparent'
                  }}
                  className={styles.paper}
                >
                  <h2 className={styles.title}>Frontend</h2>
                  <div className={styles.icons}>
                    {skillsData.map((res: any) => <Icons label={res.label} svg={res.svg} />)}

                  </div>

                </Paper>
              </Grid>

              <Grid item>
                <Paper
                  sx={{
                    backgroundColor: 'transparent'
                  }}
                  className={styles.paper}
                >
                  <h2 className={styles.title}>Others</h2>
                  <div className={styles.icons}>
                    {skillsData.map((res: any) => <Icons label={res.label} svg={res.svg} />)}

                  </div>

                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box >
    </>
  )
}

export default Skills
