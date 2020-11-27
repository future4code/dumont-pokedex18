import React from "react"
import {HeaderMainDiv, LeftButtonHeader, RightButtonHeader, PokedexTitle} from "./styled"
import {useHistory} from "react-router-dom"
import Logo from '../../assets/Logo.png'

const Header = (props) => {
    const history = useHistory();
    const changeButton = props.rightButtonHeader ? <RightButtonHeader onClick={()=>props.rightButtonHeader(history)}>{props.rightButtonName}</RightButtonHeader> : <div></div>

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