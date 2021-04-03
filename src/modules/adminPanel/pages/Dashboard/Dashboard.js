import React from "react";
import './Dashboard.css';
import {UseRenderButtons} from '../../hooks/useRenderButtons'
import {DASHBOARD_PAGE_LINKS} from "../../navigation/constants";
import {Container} from "../../UI/Container";

export function Dashboard() {
    const buttons = UseRenderButtons(DASHBOARD_PAGE_LINKS)
    return (
        <Container>
            <div className='dashboard-header'>
                {buttons}
            </div>
        </Container>
    );
}

