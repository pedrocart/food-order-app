import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
      <div className="modal-actions">
        <button className="text-button" type="button" onClick={() => dialog.current.close()}>
          Close
        </button>
        <button className="button" type="button">
          Go To Checkout
        </button>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
