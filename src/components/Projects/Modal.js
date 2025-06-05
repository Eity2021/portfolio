import "./modal.css";
import SliderForImage from "./SliderForImage";
import { X } from 'lucide-react';
function ModalComponent({ isOpen, closeModal, perProduct }) {
  const { id, name, allImages,description ,languageInfo , liveLink} = perProduct;
  console.log("perProduct", perProduct);

  return (
    <div >
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{background:"#fff"}}>
            <button className="modal-close" onClick={closeModal}>
            <X />
            </button>
            <h2  className="cont"  style={{marginBottom:'20px'}}> Project {id}</h2>
            <div>
              <SliderForImage allImages={allImages}></SliderForImage>
            </div>
              <div className="cont" style={{marginTop:'20px'}}>
              <div style={{display:'flex', gap:'16px'}}>
                <h1 style={{fontSize:'26px',fontWeight:'bold',paddingBottom:'10px' , textDecoration: 'underline'}}>{name}</h1>           
                  <a href={liveLink} target="_blank"><h1 style={{fontSize:'22px',fontWeight:'bold',marginTop:'4px' , textDecoration: 'underline' ,color:"#0000FF",cursor:"pointer"}}>Live Link </h1></a>       
              </div>
              <p  style={{fontSize:'15px',fontWeight:'semibold',pb:'10px', fontFamily:'roboto',textAlign:'left'}}><span style={{fontSize:'18px',fontWeight:'bold', fontFamily:'roboto'}}> Project Description : </span> {description}</p>
              <div>
                <p style={{fontSize:'18px',fontWeight:'bold', fontFamily:'roboto',textAlign:'left'}}>React based frontend stack using  : </p>
                <ul style={{listStyleType: "circle"}}>
                  {
                    languageInfo.map((language , index) => (
                              <li key={index} style={{fontSize:'15px',fontWeight:'semibold',pb:'10px', fontFamily:'roboto', textAlign:'left'}}>{language}</li>
                    ))
                  }
              
                </ul>
              </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;
