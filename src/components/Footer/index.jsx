// Utils
import { memo } from "react";
import { Facebook, GitHub, Linkedin, X } from "react-feather";

// Assets
import logo from "../../assets/favicon.png";

// Components
import {
  StyledFooter,
  Branding,
  LogoWrapper,
  BrandName,
  SocialsWrapper,
  SVGLink,
} from "./styled";

export default memo(function Footer() {
  return (
    <StyledFooter>
      <Branding>
        <LogoWrapper to="/">
          <img src={logo} alt="Brand Logo" />
        </LogoWrapper>
        <BrandName>Belly Brains</BrandName>
      </Branding>
      <SocialsWrapper>
        <SVGLink to="https://facebook.com/ZAIN1KHOSO" target="_black">
          <Facebook />
        </SVGLink>

        <SVGLink to="https://github.com/Zain-Khoso/" target="_black">
          <GitHub />
        </SVGLink>

        <SVGLink to="https://linkedin.com/in/zain-khoso" target="_black">
          <Linkedin />
        </SVGLink>

        <SVGLink to="https://x.com/Zain_Khoso_Dev" target="_black">
          <X />
        </SVGLink>
      </SocialsWrapper>
    </StyledFooter>
  );
});
