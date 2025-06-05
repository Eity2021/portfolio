import { Link } from "react-router-dom";
export default function TopToBottom({ setExpanded }) {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <div>
          <Link style={{ color: "#fff", fontSize: "90px", fontWeight: 'bold', textDecoration: "none", fontFamily: 'Lato', display: "flex", justifyContent: "start" }} to="/" onClick={() => setExpanded(false)}>Home</Link>
        </div>
         <div>
          <Link style={{ color: "#fff", fontSize: "90px", fontWeight: 'bold', textDecoration: "none", fontFamily: 'Lato', display: "flex", justifyContent: "start" }} to="/project" onClick={() => setExpanded(false)}>Portfolio</Link>
        </div>
        <div>
          <Link style={{ color: "#fff", fontSize: "90px", fontWeight: 'bold', textDecoration: "none", fontFamily: 'Lato', display: "flex", justifyContent: "start" }} to="/about" onClick={() => setExpanded(false)}>About</Link>
        </div>
       
        <div>
          <Link style={{ color: "#fff", fontSize: "90px", fontWeight: 'bold', textDecoration: "none", fontFamily: 'Lato', display: "flex", justifyContent: "start" }} to="/contact" onClick={() => setExpanded(false)}>Contact</Link>
        </div>
      </div>
    </div>
  );
}