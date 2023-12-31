// Utils
import styled from "styled-components";
import { motion } from "framer-motion";

import { StyledButtonPrimary } from "../../../../components/Button/styled";

// Styles
export const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    width: 100%;
    min-width: 320px;
    min-height: 320px;
    background-color: ${({ theme }) => theme.Colors.themeOpacity};
    padding: 1rem;
    border-radius: 1rem;
    opacity: 0;
    translate: 0 70px;
`;

export const ImageWrapper = styled("div")`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 1rem;
`;

export const Bullets = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    width: 100%;

    h4 {
        text-align: left;
    }
`;

export const Bullet = styled("h4")`
    text-align: left;
    text-transform: capitalize;
`;

export const ButtonBar = styled("div")`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    width: 100%;
`;

export const Button = styled(StyledButtonPrimary)`
    flex: 1;
`;
