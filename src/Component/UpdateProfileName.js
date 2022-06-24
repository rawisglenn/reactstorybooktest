import { useState, useContext} from "react";
import { UserNameContext } from "../App";

const UpdateProfileName = () =>{

    //const [inputname, setinputname] = useState("");
    const [inputname, setinputname] = useContext(UserNameContext);

    return(
        <div>
            <h1>Please update your name</h1>
            <form>
                <input
                    type="text"
                    id="newName"
                    value={inputname}
                    onChange={
                        (e)=>
                        {
                            setinputname(e.target.value);
                        }
                    }/>
                <button onClick={(e)=>
                    {
                        e.preventDefault();
                        setinputname(inputname);
                    }
                    } type="submit">Submit</button>
            </form>
        </div>
    );
}


export default UpdateProfileName;