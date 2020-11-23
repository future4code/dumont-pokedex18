import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/Home/Home"
import Details from "../components/Details/DetailsPage"
import Pokedex from "../components/Pokedex/PokedexPage"

const Router = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>
                <Route exact path={"/Details"}>
                    <Details/>
                </Route>
                <Route exact path={"/Pokedex"}>
                    <Pokedex/>
                </Route>
                <Route>
                    <div>Erro 404 - Página não encontrada :(</div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;