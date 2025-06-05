import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Github,Linkedin ,Twitter} from 'lucide-react';
import './socialMedia.css';
export default function SocialMedia() {
  return (
 <div className="d-none d-lg-flex flex-column align-items-center  custom-sidebar">
      <div className="d-flex flex-column gap-3">
        <OverlayTrigger placement="right" overlay={<Tooltip>GitHub</Tooltip>}>
          <a href="#" className="p-1 rounded-circle icon-hover " aria-label="GitHub">
            <Github size={20} color="#fff"/>
          </a>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={<Tooltip>LinkedIn</Tooltip>}>
          <a href="#" className="p-1 rounded-circle icon-hover" aria-label="LinkedIn">
            <Linkedin size={20} color="#fff"/>
          </a>
        </OverlayTrigger>
        <OverlayTrigger placement="right" overlay={<Tooltip>Twitter</Tooltip>}>
          <a href="#" className="p-1 rounded-circle icon-hover" aria-label="Twitter">
            <Twitter size={20} color="#fff"/>
          </a>
        </OverlayTrigger>
      </div>
      <div className="vertical-text mt-4">Follow Me</div>
    </div>
  )
}
