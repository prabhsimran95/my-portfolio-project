import React, { Component } from "react";
import * as emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: "",
      email: "",
      subject: "",
      sent: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    // this.resetForm = this.resetForm.bind();
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.name + this.state.email + this.state.message + "");
  }

  sendEmail(event) {
    event.preventDefault();
    const templateId = "template_o1PLQLb1";
    let templateParams = {
      message_html: this.state.message,
      from_name: this.state.name,
      from_email: this.state.email,
      to_name: "Prabhsimran",
      subject: this.state.subject,
      to_email: "<prabhsimran.06@gmail.com>"
    };
    emailjs
      .send("gmail", templateId, templateParams, "user_fxj1tNRdoOM7Wuw1l5W12")
      .then(
        result => {
          console.log(result.text);
          if (result.text === "OK") {
            this.setState({
              sent: true,
              message: "",
              name: "",
              email: "",
              subject: ""
            });
            console.log(this.state.message + " 11");
          }
        },
        error => {
          console.log(error.text);
        }
      );
  }
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form
              action=""
              id="contact-Form"
              name="contactForm"
              onSubmit={this.sendEmail}
            >
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="subject"
                    onChange={this.handleChange}
                  />
                </div>

                <div>
                  <label>
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="5"
                    id="contactMessage"
                    name="message"
                    onChange={this.handleChange}
                  ></textarea>
                </div>

                <div>
                  <button className="submit">Submit</button>
                </div>
              </fieldset>
            </form>

            <div>
              {this.state.sent && (
                <div className="feedbackmessage">
                  <i className="fa fa-check"></i> Your message was sent, Thank
                  you!
                  <br />
                </div>
              )}
            </div>

            <div id="message-warning"> Error boy</div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Reach me at</h4>
              <p className="address">
                <span>{email}</span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
