import React from 'react'
import { GroupHeadingProps } from 'react-select'
import styles from './CustomSelectGroupHeader.module.scss'

const CustomSelectGroupHeader: React.FC<GroupHeadingProps> = ({ data: { label } }) => {
    return (
        <p className={styles.label}>{label}</p>
    )
}

export default CustomSelectGroupHeader