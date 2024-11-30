import React from "react";
import "../style/Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import GoogleMap from "../components/GoogleMap";

function Contact() {
  const [state, handleSubmit] = useForm("xpwzooyl");

  return (
    <div className="bg-photo" style={{ height: "1000px" }}>
      <div className="container p-4" id="contact-page">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="text-center col">
            <div className="card bg-dark text-white">
              <div className="card-header">
                <h3 className="card-title fs-4 mt-3">Contact Form</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control mb-3 bg-secondary border-1"
                    placeholder="Name..."
                  />
                  <ValidationError
                    prefix="Name"
                    field="Name"
                    errors={state.errors}
                  />
                  <input
                    id="surname"
                    name="surname"
                    type="text"
                    className="form-control mb-3 bg-secondary border-1"
                    placeholder="Surname..."
                  />
                  <ValidationError
                    prefix="Surname"
                    field="surname"
                    errors={state.errors}
                  />
                  <input
                    prefix="Email"
                    field="email"
                    type="email"
                    className="form-control mb-3 bg-secondary border-1"
                    placeholder="Email..."
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={"5"}
                    cols={"30"}
                    className="form-control bg-secondary border-1"
                    placeholder="Message..."
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mt-3"
                    disabled={state.submitting}
                  >
                    Send
                  </button>
                </form>
                {state.succeeded && (
                  <p className="text-success mt-3">Message Sended!</p>
                )}
              </div>
            </div>
          </div>
          <div className="text-center col" id="map" style={{ height: "450px" }}>
            <GoogleMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
