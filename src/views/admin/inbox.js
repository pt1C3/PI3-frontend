import React from 'react';
import { Helmet } from 'react-helmet';
import './inbox.css'; // Certifique-se de criar e ajustar este arquivo CSS conforme necessário

export default function EmailSystemDesign() {
  return (
    <div className="wrapper d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Email System Design - LogicLeap</title>
      </Helmet>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-left"><strong>Email System Design</strong></h3>
                <p className="text-left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat vitae diam eu eleifend. Curabitur congue et elit vitae euismod. Nam gravida aliquam mauris, eget elementum elit facilisis vitae. Phasellus luctus rhoncus magna, non convallis libero pharetra nec.
                </p>
                <p className="text-left">
                  Nam vel libero enim. Vestibulum nec mi ultrices, aliquam diam ut, hendrerit nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pretium purus at odio vestibulum convallis. Vestibulum sit amet tempor metus, vitae laoreet magna.
                </p>
                <div className="new-message-container shadow">
                  <h5>New Message</h5>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="recipients" className="form-label">Recipients</label>
                      <input type="email" className="form-control" id="recipients" placeholder="Enter recipients" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="bodyText" className="form-label">Body Text</label>
                      <textarea className="form-control" id="bodyText" rows="4" placeholder="Enter your message"></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="btn btn-black">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
