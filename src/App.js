import React from "react";
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Header} from "./modules/adminPanel/pages/Header/Header";
import {Dashboard} from "./modules/adminPanel/pages/Dashboard/Dashboard";

import {Albums} from "./modules/adminPanel/pages/Albums/Albums";
import {Users} from "./modules/adminPanel/pages/Users/Users";

function App() {
    return (
        <div className="App">
        <Header/>
        <Switch>
            {/*Тут проблемка возникает,если поставить роут на dashboard по default (/) с exact,
             ссылка всегда считается активной и подчеркивается, пришлось прописать ей путь,
             но теперь нет страницы изначальной*/}
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/users' component={Users}/>
            <Route path='/albums' component={Albums }/>
        </Switch>
        </div>
    );
}
export default App;
