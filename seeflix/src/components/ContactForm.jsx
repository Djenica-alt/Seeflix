
export default function ContactForm() {
    return(
        <section className="contact">
                        
            <form action="Contact">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message..."></textarea>
              <button type="submit">Send Message</button>
            </form>
        </section>
    )
}