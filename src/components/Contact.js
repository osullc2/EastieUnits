import "./Contact.css"

function Contact(){
    return(
    <>
    <section id="#contact">
        <div className="contact-text">
            <p1 style={{color:'white', textDecoration: 'underline', fontWeight: 'bold'}}>Contact Info</p1>
            <br />
            <p2 style={{color:'white'}}>John Smith</p2>
            <br />
            <p3 style={{color:'white'}}>(123) 456-7890</p3>
            <br />
            <p4 style={{color:'white'}}>SmithJ.biz@email.com</p4>
        </div>
    </section>
    </>
    )
}

export default Contact