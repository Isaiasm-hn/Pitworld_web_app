import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
    MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer
} from "mdbreact";
function Eventos() {
    return (

        <MDBContainer>
            <MDBRow className="pt-5 pb-4">
                <MDBCol md="12" className="text-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    );
}

export default Eventos;
