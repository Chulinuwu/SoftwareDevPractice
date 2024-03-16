

export default function Greeting({name,lastname}:{name:string;
                                        lastname : string;}){
    return(
        <p>Hello {name} {lastname}.</p>
    )
}