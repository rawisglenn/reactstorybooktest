function Button ({label, backgroundColor="red", size="md", onClick})
{   
    let scale = 1;
    if(size === "md") {scale = 0.75;}
    if (size === "lg") {scale = 1.5;}

    const style = {
        backgroundColor,
        border:"none",
        padding:`${scale * 0.5}rem ${scale * 1}rem`
    }
    
    return (
        <button onClick={onClick} style={style}>
            {label}
        </button>
    );
};

export default Button;