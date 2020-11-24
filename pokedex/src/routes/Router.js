import React from "react";
import {BrowserRouter, Switch, Route, useHistory} from "react-router-dom";
import Home from "../components/Home/Home"
import Details from "../components/Details/DetailsPage"
import Pokedex from "../components/Pokedex/PokedexPage"
import {goToHome, goToPokedex} from "./coordinator"
import Header from "../components/Header/Header"

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} >
                    <Header leftButtonHeader={goToPokedex} leftButtonName={"Ir para a Pokedex"}/>
                    <Home/>
                </Route>
                <Route exact path={"/Details"} >
                    <Header leftButtonHeader={goToHome} rightButtonHeader={goToPokedex}/>
                    <Details/>
                </Route>
                <Route exact path={"/Pokedex"}>
                    <Header leftButtonHeader={goToPokedex}/>
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