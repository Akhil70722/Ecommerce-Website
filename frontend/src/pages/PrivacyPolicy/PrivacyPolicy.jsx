// src/pages/PrivacyPolicy/PrivacyPolicy.jsx
import React from 'react';
import './PrivacyPolicy.css'; // Assuming you have a CSS file for styling

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        At <strong>CampusThreads</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect personal information when you place an order, create an account, or contact us. This may include your name, email address, phone number, shipping address, and payment details.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to:
      </p>
      <ul>
        <li>Process and fulfill your orders, including payment processing and shipping.</li>
        <li>Provide customer support and respond to your inquiries.</li>
        <li>Personalize your shopping experience and improve our services.</li>
        <li>Send promotional offers, newsletters, and updates if you opt-in to receive them.</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take the security of your personal information seriously. We use secure servers and encryption technology to protect your data from unauthorized access.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. However, we may share it with trusted third-party service providers who assist us in operating our website, processing payments, and delivering orders, as long as they agree to maintain the confidentiality of your information.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access and update your personal information. You can also request to delete your account or opt-out of marketing communications. To exercise these rights, please contact us using the information below.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy occasionally. If we make significant changes, we will notify you via email or display a prominent notice on our website.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please reach out to us at:
      </p>
      <p>
        <strong>Email:</strong> support@campusthreads.com<br />
        <strong>Phone:</strong> +1-123-456-7890
      </p>
    </div>
  );
};

export default PrivacyPolicy;
