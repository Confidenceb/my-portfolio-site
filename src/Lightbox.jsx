import React, { useEffect } from "react";

const Lightbox = ({ image, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          &times;
        </button>
        <img src={image} alt={alt} className="lightbox-image" />
      </div>
    </div>
  );
};

export default Lightbox;
