import { useForm } from '@formspree/react';

import Heading from '../UI/Heading';
import P from '../UI/P';

import './Contact.scss';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqnongr');

  return (
    <div className="contact-section" id="contact">
      <Heading>Contact</Heading>
      <div className="contact-content">
        <div className="contact-text">
          <P>
            {/* Looking to start a new project or just want to say hi? Send me an
            email and I'll do my best to reply within 24 hrs! */}
            Looking for a creative and passionate candidate to join your team?
            Send me an email and I'll do my best to reply within 24 hrs!
          </P>
          <br />
          <P>
            If contact forms aren't your thing... send me an email at
            <a
              href="mailto:rustamxontolipov788@gmail.com"
              className="underline"
            >
              rustamxontolipov788@gmail.com
            </a>
          </P>
        </div>
        <div className="contact-form">
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Kevin De Bruyne"
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
              ></textarea>
              {state.succeeded && <p>Thanks for your message!</p>}
            </div>

            <button
              className="button"
              type="submit"
              name="Hover"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
