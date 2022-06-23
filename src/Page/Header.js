import Menu from "../Component/Menu";

const Header = ({username}) => {
  return (
      <header>
        <span style={{float:"left"}}>Coffee House</span>
        <Menu username={username} style={{float:"left"}}/>
      </header>

  );
};

export default Header;