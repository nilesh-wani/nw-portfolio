import { Grid, Paper } from "@mui/material"
import { skillsData } from "../../constants/skills"
import Icons from "../icons"
import styles from "./index.module.scss"

const SkillsContainer = (() => {

    return <>

        <Grid container justifyContent='center' >
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
        </Grid>


    </>

})

export default SkillsContainer