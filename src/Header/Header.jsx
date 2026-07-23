// import clasess from "./Header.module.scss";
import styled from "styled-components";

const HeaderWrapper = styled.h2`
    padding: 2em 0;
    font-size: 2em;
    text-align: center;
`



const Header = () => {
    return <HeaderWrapper>This is header</HeaderWrapper>
}

export default Header