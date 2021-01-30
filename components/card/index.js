const Card = ({ children, className }) => {
    return (
        <div className={"h-fit-content p-8 bg-white rounded-lg " + className}>
            {children}
        </div>
    )
}

export default Card;