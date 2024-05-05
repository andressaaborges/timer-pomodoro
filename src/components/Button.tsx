import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  readonly variant?: ButtonVariant
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
