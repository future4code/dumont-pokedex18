import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/Home/Home"
import Details from "../components/Details/DetailsPage"
import Pokedex from "../components/Pokedex/PokedexPage"
import {goToHome, goToPokedex} from "./coordinator"
import Header from "../components/Header/Header"

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Header 
                    leftButtonHeader={goToPokedex} 
                    leftButtonName={"Ir para a Pokedex"}
                    />
                    <Home/>
                </Route>
                <Route exact path={"/Details/:id/:name"} >
                    <Header 
                    leftButtonHeader={goToHome}
                    leftButtonName={"Voltar"}
                    rightButtonName={"Ir para pokedex"}
                    rightButtonHeader={goToPokedex}
                    />
                    <Details/>
                </Route>
                <Route exact path={"/Pokedex"}>
                    <Header leftButtonHeader={goToHome}
                    leftButtonName={"Voltar para lista de pokemons"}
                    />
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