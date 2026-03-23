import ContactForm from "../components/ContactForm";
import "./contact.css";
export default function Contact() {
    return(
        <section className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions, suggestions, or feedback about SeeFlix, we'd love to hear from you! Please feel free to reach out to us through the following channels:</p>
            <ContactForm />
        </section>
    )
}