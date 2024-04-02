import './Popup.css'; // Assume basic styles for .popup-backdrop and .popup-content
import ReactDOM from 'react-dom';

export default function Popup ({ isOpen, onClose, children }){
  if (!isOpen) return <></>;

  return ReactDOM.createPortal(
    (
        <div className="popup-backdrop" onClick={onClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
    , document.body
  );
};
