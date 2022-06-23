import UpdateProfileName from '../Component/UpdateProfileName'


const Content = ({myusername, setUserName}) => {
    return(
        <div>
            <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1637&q=80"
                style={{ width: "500px" }}/>
            <p>Photo by <a href="https://unsplash.com/@fahmipaping">Fahmi Fakhrudin</a> on Unsplash</p>

            <UpdateProfileName myusername={myusername} setUserName={setUserName}/>
        </div>

    );
};


export default Content;