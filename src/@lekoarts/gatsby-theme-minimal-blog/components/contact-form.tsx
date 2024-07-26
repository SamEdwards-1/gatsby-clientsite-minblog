/** @jsx jsx */
import { jsx } from 'theme-ui'

const ContactForm = () => {
  return (
    <form method="post" action="https://getform.io/f/lbjknvqa" netlify-honeypot="bot-field" data-netlify="true" name="contact" sx={{ variant: 'forms.primary', maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid', borderColor: 'muted', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div sx={{ mb: 3 }}>
        <label htmlFor="exampleInputEmail1" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>Email address</label>
        <input type="email" name="email" id="exampleInputEmail1" ariaDescribedby="emailHelp" placeholder="Enter email" sx={{ variant: 'forms.input', width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid', borderColor: 'muted' }} required />
      </div>
      <div sx={{ mb: 3 }}>
        <label htmlFor="exampleInputName" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>Name</label>
        <input type="text" name="name" id="exampleInputName" placeholder="Enter your name" sx={{ variant: 'forms.input', width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid', borderColor: 'muted' }} required />
      </div>
      <div sx={{ mb: 3 }}>
        <label htmlFor="exampleInputMessage" sx={{ display: 'block', mb: 1, fontWeight: 'bold' }}>Your Message</label>
        <textarea name="message" id="exampleInputMessage" placeholder="Enter your message" sx={{ variant: 'forms.textarea', width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid', borderColor: 'muted', minHeight: '150px' }} required></textarea>
      </div>
      <div sx={{ color: 'success', mb: 3, textAlign: 'center' }}>We received your submission, thank you!</div>
      <button type="submit" sx={{ variant: 'buttons.primary', width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: 'primary', color: 'background', fontWeight: 'bold', cursor: 'pointer' }}>Submit</button>
    </form>
  );
}

export default ContactForm;