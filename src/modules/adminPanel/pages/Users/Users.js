import React from "react";
import './Users.css';
import {Container} from "../../UI/Container";
import {UseData} from "../../hooks/useData";
import {ADMIN_URLS} from "../../services/constants";
import {Loader} from "../../UI/Loader/Loader";
import {List} from "../../components/List/List";
import {UserItem} from "./UserItem/UserItem";


export function Users() {
    const {list, isLoading} = UseData(ADMIN_URLS.USERS_URL)
    return (
        <Container>
            {isLoading ? <Loader/> : <List data={list} renderContent={(data) => <UserItem item={data}/>}/>}
        </Container>
    );
}

