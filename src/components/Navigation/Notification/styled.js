// Utils
import styled from "styled-components";

// Styles
export const Container = styled("div")`
    position: fixed;
    top: calc(${({ theme }) => theme.Heights.navbarHeight} + 1rem);
    right: ${({ $isOpen }) => ($isOpen ? "1rem" : "-100vw")};
    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.Themes.Theme};
    padding: 0.8rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.Colors.contrastOpacity};
    border-radius: 0.8rem;
    z-index: 15;
    transition: right 200ms;

    @media screen and (min-width: ${({ theme }) => theme.Breakpoints.desktop}) {
        && {
            right: ${({ $isOpen }) => ($isOpen ? "3rem" : "-100vw")};
        }
    }
`;

export const Text = styled("span")`
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    color: ${({ theme, $success }) =>
        $success ? theme.Colors.primary : theme.Colors.red};
`;

export const SVGWrapper = styled("button")`
    width: 1.5rem;
    aspect-ratio: 1/1;

    & svg {
        stroke: ${({ theme }) => theme.Colors.contrast};
    }
`;

export const ProgressBar = styled("div")`
    position: absolute;
    left: 0;
    bottom: 0;

    align-self: flex-start;
    width: ${({ $isOpen }) => ($isOpen ? "0%" : "100%")};
    height: 0.3rem;
    background-color: ${({ theme, $success }) =>
        $success ? theme.Colors.primary : theme.Colors.red};

    transition: width ${({ $isOpen }) => ($isOpen ? "3s" : "0s")} 200ms;
`;
