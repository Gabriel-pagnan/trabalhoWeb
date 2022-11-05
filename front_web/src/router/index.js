import React from "react";
import { Route, Switch } from "react-router-dom";
import Voto from "../pages/Voto/Voto";
import Form from '../components/Form/Form';
import Resultado from '../pages/Result/Result'
export default function Routes(){
    return (
        <Switch>
            <Route path='/formulario' component={Form}/>
            <Route exact path='/voto' component={Voto}/>
            <Route path='/resultados' component={Resultado}/>
        </Switch>
    )
}