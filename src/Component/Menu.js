const Menu = ({username}) => {
  return (
    <ul style={{overflow:"hidden", listStyleType:"none"}}>
        <li style={{float:"left", display:"block", padding:"16px"}}>Home</li>
        <li style={{float:"left", display:"block", padding:"16px"}}>Pricing</li>
        <li style={{float:"left", display:"block", padding:"16px"}}>FAQs</li>
        <li style={{float:"left", display:"block", padding:"16px"}}>
            <button>{username}'s Profile</button>
        </li>
    </ul>

  );
};

export default Menu;