import React from 'react';
import {Button} from "../components/Button/Button";

export function UseRenderButtons(arrOfPages) {
   const buttons = arrOfPages && arrOfPages
        .map((item) => <Button key={item.name} name={item.name} path={item.path}/>)

    return buttons
}

