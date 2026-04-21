import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import "./ClientFeedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const ClientFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", title: "", quote: "" });
  const [selectedImage, setSelectedImage] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error("Error fetching testimonials:", error);
      } else if (data) {
        setFeedbacks(data);
      }
    };
    fetchTestimonials();
  }, []);

  const total = feedbacks.length;

  const handleUp = () => {
    if (total > 0) setIndex((prev) => (prev + 1) % total);
  };

  const handleDown = () => {
    if (total > 0) setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setSelectedImage(imgUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quote) return;
    setIsSubmitting(true);
    
    // Use uploaded image or generate default avatar for user
    const finalImg = selectedImage ? selectedImage : `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name)}&background=random&color=fff`;

    const newFeedback = {
      name: formData.name,
      title: formData.title || "",
      quote: formData.quote,
      img: finalImg
    };

    const { data, error } = await supabase
      .from('testimonials')
      .insert([newFeedback])
      .select();

    if (error) {
      console.error("Error submitting review:", error);
      alert("There was an error submitting your review. Please try again.");
    } else if (data) {
      setFeedbacks([data[0], ...feedbacks]);
      setFormData({ name: "", title: "", quote: "" });
      setSelectedImage(null);
      setShowForm(false);
      setIndex(0); // Reset to show the newest one
    }
    
    setIsSubmitting(false);
  };

  const leftCard = feedbacks[index];
  const rightCard = total > 1 ? feedbacks[(index + 1) % total] : null;

  return (
    <section className="client-feedback">
      <div className="container">
        <div className="section-header feedback-header-top">
          <div>
            <p className="subtitle">Testimonials</p>
            <h2 className="feedback-title">Client's Feedback</h2>
          </div>
          <button className="btn btn-primary add-review-btn" onClick={() => setShowForm(true)}>
            <FontAwesomeIcon icon={faPlus} className="plus-icon"/> Leave a Review
          </button>
        </div>

        {showForm && (
          <div className="review-modal-overlay">
            <div className="review-modal glass-card luxury-glass">
              <button className="close-btn" onClick={() => setShowForm(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <h3>Share Your Experience</h3>
              <form onSubmit={handleSubmit} className="review-form">
                <input 
                  type="text" 
                  placeholder="Your Name (Required)" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Your Role / Company" 
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
                <textarea 
                  placeholder="Your Feedback (Required)" 
                  rows="4"
                  value={formData.quote}
                  onChange={(e) => setFormData({...formData, quote: e.target.value})}
                  required
                ></textarea>
                <div className="file-input-wrapper">
                  <label htmlFor="file-upload" className="file-upload-label">
                    {selectedImage ? "Image Uploaded!" : "Upload Profile Picture (Optional)"}
                  </label>
                  <input 
                    id="file-upload"
                    type="file" 
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </div>
          </div>
        )}

        {total === 0 ? (
          <div className="empty-feedback-state glass-card">
            <h3 className="text-xl">No reviews yet!</h3>
            <p className="text-muted">Be the first to share your experience working with me.</p>
          </div>
        ) : (
          <div className="feedback-content">
            {total > 1 && (
              <div className="nav-buttons">
                <button onClick={handleUp} className="nav-btn" aria-label="Previous">
                  <FontAwesomeIcon icon={faAngleUp} />
                </button>
                <button onClick={handleDown} className="nav-btn" aria-label="Next">
                  <FontAwesomeIcon icon={faAngleDown} />
                </button>
              </div>
            )}

            <div className="feedback-cards-wrapper">
              <div className={`feedback-cards ${total === 1 ? 'single-card' : ''}`}>
                <div className="feedback-card glass-card">
                  <div className="feedback-header">
                    <img src={leftCard.img} alt={leftCard.name} className="feedback-icon" />
                    <div>
                      <p className="name">{leftCard.name}</p>
                      <p className="title">{leftCard.title}</p>
                    </div>
                  </div>
                  <div className="quote-content">
                    <p className="quote">"{leftCard.quote}"</p>
                  </div>
                </div>

                {rightCard && (
                  <div className="feedback-card glass-card">
                    <div className="feedback-header">
                      <img src={rightCard.img} alt={rightCard.name} className="feedback-icon" />
                      <div>
                        <p className="name">{rightCard.name}</p>
                        <p className="title">{rightCard.title}</p>
                      </div>
                    </div>
                    <div className="quote-content">
                      <p className="quote">"{rightCard.quote}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientFeedback;

