import { ReactNode } from "react"

interface ButtonPropsInterface {
  children: ReactNode, 
  onClick: () => void, 
  title: string, 
  disabled: boolean
  type: 'submit' | 'reset' | 'button'
} 

export default ButtonPropsInterface