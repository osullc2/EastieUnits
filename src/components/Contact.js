import "./Contact.css"


function Contact(){
    return(
    <>
        <div className = "container" id="contact">
            <div className = "title">
                Contact Information
            </div>

            <div className = "contact-body">
                <div className = "contact-text"> John Smith </div>
                <div className = "contact-text"> (123) 456-7890 </div>
                <div className = "contact-text"> SmithJ.biz@email.com </div>
            </div>
        </div>
    </>
    )
}

export default Contact