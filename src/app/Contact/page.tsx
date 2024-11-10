import Footer from "../../../components/Footer";

export default function Contact(){
    return(
        <div className="about-contact-hero-image">
            <div>
                <h1 className="about-contact-heading">Contact Us</h1>

            <form className="contact-form" action="/submit-form" method="POST">

            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-field" type="text" id="name" name="name" placeholder="Name" required/>
            </div>

            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="form-field" type="email" id="email" name="email" placeholder="Email" required/>
            </div>

            <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-field" id="message" name="message" rows={4} placeholder="Message" required></textarea>
            </div>

        
            <button type="submit">Send Message</button>
            </form>

            </div>

            <Footer />
        </div>
    );
}