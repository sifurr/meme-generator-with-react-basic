import logo from '../images/troll-face.png'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" />
            <h2>Meme Generator</h2> 
            <h4>React Course - Practice Project </h4>           
        </nav>
    );
};

export default Navbar;