const Button = ({ children, onClick = () => { } }) => {
    return (
        <button className="bg-blue-600 hover:bg-blue-700 transition-colors rounded py-2 px-10 text-white focus:border-border focus:outline-none" onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;