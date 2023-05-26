

const User = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>Order number:{props.order}</p>
        </div>
    )
}

export default User