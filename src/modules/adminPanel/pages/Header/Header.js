import React from 'react';
import './Header.css';
import {HEADER_PAGE_LINKS} from "../../navigation/constants";
import {UseRenderButtons} from "../../hooks/useRenderButtons";
import {Container} from "../../UI/Container";

export function Header() {
    const buttons = UseRenderButtons(HEADER_PAGE_LINKS)
    return (
        <div className='header_wrapper'>
            <Container>
                <div className='header_container'>
                    {buttons}
                </div>
            </Container>
        </div>
    );
}

