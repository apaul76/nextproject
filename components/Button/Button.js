import CustomButton  from "../../styles/Button.style"

const Button = ({children,handler}) => {
    return (
        <CustomButton onClick={()=>handler()}>
            {children}
        </CustomButton>
    )
}

export default Button