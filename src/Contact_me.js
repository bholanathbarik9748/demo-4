import React, { useState, useEffect } from "react";
import { db } from "./Contact_me_database";

const Contact_me = () => {

    // {/* Data-Base */ }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setphoneno] = useState("");
    const [topic, settopic] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                topic: topic,
                phoneno: phoneno,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                alert("Sorry there is some server problem we FIX this as soon as possible 🤞");
                setLoader(false);
            });

        setName("");
        setEmail("");
        settopic("");
        setphoneno("");
        setMessage("");
    }

    return (
        <>
            <br />
            <br />
            <br />
            {/* Main Code */}
            <div class="contact_container">
                <form id="contact" className="form" onSubmit={handleSubmit}>
                    <h3>Contact us</h3>
                    <h4>Fill out this form and we will get back to you as quickly as possible!</h4>
                    <fieldset>
                        <input placeholder="Full Name *" type="text" tabindex="1" value={name}
                            onChange={(e) => setName(e.target.value)} required autofocus />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Email Address *" type="email" tabindex="2" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Phone Number *" type="tel" tabindex="3" value={phoneno}
                            onChange={(e) => setphoneno(e.target.value)} required />
                    </fieldset>
                    <fieldset>
                        <input placeholder="Topic *" type="text" tabindex="6" required value={topic}
                            onChange={(e) => settopic(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <textarea placeholder="Your Message Here.... *" tabindex="7" required value={message}
                            onChange={(e) => setMessage(e.target.value)}></textarea>
                    </fieldset>
                    <fieldset>
                        <button type="submit"
                            style={{ background: loader ? "#ccc" : " #d28829" }} id="contact-submit" data-submit="...Sending">Submit</button>
                    </fieldset>
                </form>
            </div>

            <footer class="container-fluid bg-dark my-0 py-3 text-light ">
                <footer class="footer py-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-12">
                                <p class="copyright-text text-center">Copyright &copy; 2021 tat-it-official.herokuapp.com</p>
                                <p class="copyright-text text-center">Designed by <a className="foot_name" rel="nofollow" href="https://github.com/bholanathbarik9748">Bholanath-Barik</a></p>
                            </div>

                        </div>
                    </div>
                </footer>
            </footer>
        </>
    );
}

export default Contact_me;
