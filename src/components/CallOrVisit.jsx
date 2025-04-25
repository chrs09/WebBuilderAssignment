import React from 'react';

const CallOrVisit = () => {
  return (
    <section className="call-or-visit">
      <h2 className="section-title">Call or Visit</h2>
      <div className="cards-wrapper">
        <div className="form-card">
          <h3>Send us a message</h3>
          <form>
            <div className="form-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
            </div>

            <div className="form-group">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">Email Address</label>
            </div>

            <div className="form-group">
                <input type="text" id="message" required placeholder=" " />
                <label htmlFor="message">Message</label>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <p className="recaptcha-note">
            Protected by reCAPTCHA • <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy</a> • <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms</a>
          </p>
        </div>

        <div className="info-card">
          <a
            href="https://api.whatsapp.com/send/?phone=14259412560&text&type=phone_number&app_absent=0"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 Chat on WhatsApp
          </a>
          <p className="location">
            <strong>Marci Metzger - THE RIDGE REALTY GROUP</strong> <br />
            3190 HW-160, Suite F Pahrump, NV 89048
          </p>

          <p className="phone">📞 (206) 919-6886</p>

          <div className="hours">
            <h4>Office Hours</h4>
            <p>Mon–Sun: 8:00 AM – 7:00 PM</p>
            <p className="note">Appointments outside hours available by request.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallOrVisit;
