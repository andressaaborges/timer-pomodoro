import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'blue',
    success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 5rem;
    height: 2rem;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};

    border: 0;
    border-radius: 2px;
    margin: 0.5rem;

    /* ${props => {
        return css`
        background-color: ${buttonVariants[props.variant]}
        `
    }} */
`
