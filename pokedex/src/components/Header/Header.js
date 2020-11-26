import React from "react"
import {HeaderMainDiv, LeftButtonHeader, PokedexTitle} from "./styled"
import {useHistory} from "react-router-dom"
import Logo from '../../assets/Logo.png'

const Header = (props) => {
    const history = useHistory();
    const changeButton = props.rightButtonHeader ? <button onClick={()=>props.rightButtonHeader(history)}>{props.rightButtonName}</button> : <div></div>

    return(
        <HeaderMainDiv>
            <LeftButtonHeader onClick={()=>props.leftButtonHeader(history)}>{props.leftButtonName}</LeftButtonHeader>
            {changeButton}
            <div>
            <PokedexTitle src={Logo}  alt='logo'  />
            </div>
        </HeaderMainDiv>
    )
}

export default Header