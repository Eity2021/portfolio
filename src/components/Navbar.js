import { useState } from "react";
import { Navbar } from "react-bootstrap";
import TopToBottom from "./TopToBottom";
import { AlignJustify, X } from 'lucide-react';

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ position: 'relative' }}>


      <Navbar
        fixed="top"

      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight: "12px" }}>
          <Navbar.Brand href="/" className="d-flex" style={{ paddingLeft: '40px', zIndex: 10 }}>
            <h2 style={{ color: "#fff", textSize: "10px", fontWeight: 'bold', fontFamily: 'sans-serif', marginTop: '10px' }}> Marufa  </h2>
          </Navbar.Brand>

          <button
            onClick={() => setExpanded(prev => !prev)}
            aria-controls="basic-navbar-nav"
            // className="navbar-toggler"
            type="button"
            style={{ border: 'none', background: '#0c0c0c', paddingLeft: '30px', paddingRight: '30px', zIndex: 10 }}
          >
            <span style={{ color: "#fff" }}>
              {expanded ? <X size={40} /> : <AlignJustify size={40} />}
            </span>
          </button>

          <div
            className="smooth-expand"
            style={{
              height: expanded ? '100vh' : '0px',
            }}
          >
            <div style={{ width: '100%', background: '#0c0c0c', height: '100%' }}>
              <TopToBottom setExpanded={setExpanded} />
            </div>
          </div>


        </div>
      </Navbar>
    </div>
  );
}

export default NavBar;