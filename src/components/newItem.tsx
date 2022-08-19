type itemProps = {
    text: string;
}

export function CompItem(props: itemProps){
    return (
        <p>{ props.text }</p>
    )
}