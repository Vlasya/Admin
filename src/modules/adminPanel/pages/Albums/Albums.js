import React from 'react';
import './Albums.css'
import {Container} from "../../UI/Container";
import {ADMIN_URLS} from "../../services/constants";
import {UseData} from "../../hooks/useData";
import {Loader} from "../../UI/Loader/Loader";
import {List} from "../../components/List/List";
import {AlbumItem} from "./AlbumItem/AlbumItem";

export function Albums() {
    const {list, isLoading} = UseData(ADMIN_URLS.ALBUMS_URL)
    return (
        <Container>
            {isLoading ? <Loader/> : <List data={list} renderContent={(data) => <AlbumItem item={data}/>}/>}
        </Container>
    );
}

