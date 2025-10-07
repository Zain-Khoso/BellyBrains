// Utils
import { memo, useState } from "react";
import { useTheme } from "styled-components";

// Assets
import logo from "../../../assets/favicon.png";

// Components
import { Wrapper, StyledNavbar, StyledLink, NavList, PageLink } from "./styled";
import HamburgerButton from "../HamburgerButton";
import HamburgerMenu from "../HamburgerMenu";
import DisplayBlanket from "../../DisplayBlanket/styled";
import Notification from "../Notification";

export default memo(function Navbar() {
  // UI States
  const theme = useTheme();
  const [hamburgerVisible, setHamburgerVisible] = useState(false);

  return (
    <>
      <Wrapper
        $hamburgerVisible={hamburgerVisible}
        animate={{
          opacity: 1,
          translateY: theme.Heights.navbarHeight,
        }}
      >
        <StyledNavbar $hamburgerVisible={hamburgerVisible}>
          <StyledLink to="/">
            <img src={logo} alt="Brand Logo" />
          </StyledLink>

          <HamburgerButton
            hamburgerVisible={hamburgerVisible}
            handleClick={setHamburgerVisible}
          />

          <NavList>
            <li>
              <PageLink to="/about-us">About</PageLink>
            </li>
            <li>
              <PageLink to="/menu">Menu</PageLink>
            </li>
            <li>
              <PageLink to="/cart">Cart</PageLink>
            </li>
            <li>
              <PageLink to="/contact-us">Contact</PageLink>
            </li>
          </NavList>
        </StyledNavbar>

        <HamburgerMenu hamburgerVisible={hamburgerVisible} />

        <Notification />
      </Wrapper>

      {hamburgerVisible && (
        <DisplayBlanket onClick={() => setHamburgerVisible(false)} />
      )}
    </>
  );
});
