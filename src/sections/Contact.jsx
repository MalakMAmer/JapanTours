import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div 
      id='contact'
      className="relative bg-cover bg-center bg-no-repeat h-screen justify-start items-center" 
      style={{ backgroundImage: "url('/chureito.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t to-black via-black/70 from-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full lg:justify-start px-20">
        <div>
          <ContactForm />
        </div>
      </div>
          <Footer />
    </div>
  );
}

export default Contact;

