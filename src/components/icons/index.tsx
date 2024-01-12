import { iconProps } from '../../interface/skills'
import styles from './index.module.scss'


const Icons = ((props: iconProps) => {
    const { svg, label } = props
    return <div className={styles.iconBox}>
        <img className={styles.icons} src={svg} />
        {label}
    </div>
})

export default Icons
