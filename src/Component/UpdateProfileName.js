import { useState } from "react";

const UpdateProfileName = ({myusername, setUserName}) =>{


    const [inputname, setinputname] = useState("");

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
                        setUserName(inputname);
                    }
                    } type="submit">Submit</button>
            </form>
        </div>
    );
}


export default UpdateProfileName;