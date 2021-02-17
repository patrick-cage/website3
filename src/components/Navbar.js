import React from 'react';
import styled, { css} from 'styled-components/macro';
import {Link} from 'react-router-dom';
import { menuData } from './../data/MenuData';
import { Button } from './Button';
import {FaBars} from 'react-icons/fa';
 
const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
     /*uncomment line below to make nav transparent*/
     background-color:#000d1a;
    /* position: fixed; */
    position: absolute;
    width: 100%;
 `;

const NavLink = css`
     color: #fff;
     display: flex;
     align-items: center;
     padding: 0 1rem;
     height: 100%;
     cursor: pointer;
     text-decoration: none;

`;

const Logo = styled(Link)`
     ${NavLink}
     font-style: italic;
`;

const MenuBars = styled(FaBars)`
    display: none;
    fill: white;
    margin-top: -1px;
    height: 30px;
    width: 22px;

   
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    animation-name: shakeMe;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes shakeMe {
    2%, 18% {
        transform: translate3d(-5px, 0, 0);
    }

    4%, 16% {
        transform: translate3d(5px, 0, 0);
    }

    6%, 10%, 14% {
        transform: translate3d(-5px, 0, 0);
    }

    8%, 12% {
        transform: translate3d(5px, 0, 0);
    }
    
    18.1% {
        transform: translate3d(0px, 0, 0);
    }
}
    
    @media screen and (max-width: 768px) {
        display block;
    }
   
`

const NavMenu = styled.div`
   display: flex;
   align-items: center;
   margin-right: -48px;

   @media screen and (max-width: 768px){
       display: none;
   }
`;

const NavMenuLinks = styled(Link)`
       ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
       display: none;
   }
  `;
const Navbar = ({ toggle}) => {
    return (
        <Nav>
            <Logo to="/">LVNG</Logo>
            <MenuBars onClick={toggle}/>
                <NavMenu>
                    {menuData.map((item, index) => (
                         <NavMenuLinks to={item.link} key={index}>
                         {item.title}
                        </NavMenuLinks>
                    ))}
                </NavMenu>
                <NavBtn>
                    <Button to="/contact" primary='true'>Contact Us</Button>
                </NavBtn>
        </Nav>
    );
};
export default Navbar;