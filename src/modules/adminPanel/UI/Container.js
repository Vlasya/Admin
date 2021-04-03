import React from 'react';
import {styles} from "./styles";

export function Container({children, ...props}) {

    return (
        <div style={styles.container} {...props}>
            {children}
        </div>)
}

