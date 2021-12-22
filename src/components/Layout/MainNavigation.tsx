import {
  MDBNavbar, MDBNavbarBrand
  } from "mdbreact";


const MainNavigation = () => {


  return (
    <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Image Gallery</strong>
        </MDBNavbarBrand>
      </MDBNavbar>
  );
};

export default MainNavigation;
