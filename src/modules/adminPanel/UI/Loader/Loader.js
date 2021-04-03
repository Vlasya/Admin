import Spinner from "react-loader-spinner";
import React from 'react';

export function Loader() {
    return (
        <>
            <Spinner
                type="ThreeDots"
                color="#05386B"
                height={100}
                width={100}
                timeout={3000}
            />
        </>
    );
}

