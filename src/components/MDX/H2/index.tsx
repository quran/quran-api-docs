import React from 'react'

import styles from './H2.module.scss'

/**
 * Sluggify the header text. For example, "Obtaining OAuth 2.0 client credentials"
 * would be converted into "obtaining-oauth-20-client-credentials".
 * 
 * @param {string} text 
 * @returns {string}
 */
const getAnchor = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-');
}

type Props = {
    children: JSX.Element,
};

const H2: React.FC<Props> = ({ children }) => {
    const anchor = getAnchor(children as unknown as string);
    const link = `#${anchor}`;
    return (
        <h2 id={anchor}>
            <a href={link} className={styles['anchor-link']}>
                §
            </a>
            {children}
        </h2>
    );
}

export default H2