'use client'

import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwvwzjpo')

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <div className="section-tag">Get in touch</div>
            <h2 className="section-title">Let&apos;s build your <em>practice&apos;s</em> online home.</h2>
            <p className="section-sub">Fill in the form and I&apos;ll get back to you within 24 hours with a free, no-obligation quote tailored to your practice.</p>
            <div className="contact-detail">
              <div>
                <div className="detail-label">Email</div>
                <div className="detail-value"><a href="mailto:atienzapaulhenry@gmail.com">atienzapaulhenry@gmail.com</a></div>
              </div>
              <div>
                <div className="detail-label">Response time</div>
                <div className="detail-value">Within 24 hours</div>
              </div>
              <div>
                <div className="detail-label">Timezone</div>
                <div className="detail-value">JST (Tokyo) — async-friendly for US clients</div>
              </div>
            </div>
            <div className="guarantee">
              <div className="guarantee-title">My guarantee</div>
              <div className="guarantee-text">If you&apos;re not happy with the first design concept, I&apos;ll revise it completely at no extra charge. I don&apos;t consider the project done until you genuinely love your site.</div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="contact-form">
              <div className="form-title">Tell me about your practice</div>
              <div className="form-subtitle">No commitment required. You&apos;ll receive a clear, itemized quote within 24 hours.</div>

              {state.succeeded ? (
                <div className="form-success" style={{display:'block'}}>
                  ✓ Message received! I&apos;ll be in touch within 24 hours with your quote.
                </div>
              ) : (
                <form className="form-fields" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Your name</label>
                      <input type="text" id="name" name="name" placeholder="Dr. Sarah Miller" required />
                      <ValidationError field="name" errors={state.errors} className="field-error" />
                    </div>
                    <div className="field">
                      <label htmlFor="credentials">Credentials / license</label>
                      <input type="text" id="credentials" name="credentials" placeholder="LCSW, LPC, PhD..." />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="email">Email address</label>
                      <input type="email" id="email" name="email" placeholder="sarah@mytherapypractice.com" required />
                      <ValidationError field="email" errors={state.errors} className="field-error" />
                    </div>
                    <div className="field">
                      <label htmlFor="location">City &amp; state</label>
                      <input type="text" id="location" name="location" placeholder="Austin, TX" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="package">Package you&apos;re interested in</label>
                    <select id="package" name="package">
                      <option value="">Select one</option>
                      <option>Starter — $1,200</option>
                      <option>Professional — $1,950 (most popular)</option>
                      <option>Premium — $2,800</option>
                      <option>Not sure yet — help me decide</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Tell me about your practice &amp; what you need</label>
                    <textarea id="message" name="message" placeholder="I'm a licensed therapist specializing in anxiety and trauma..."></textarea>
                    <ValidationError field="message" errors={state.errors} className="field-error" />
                  </div>
                  <div>
                    <button type="submit" className="form-submit" disabled={state.submitting}>
                      {state.submitting ? 'Sending...' : 'Send my enquiry →'}
                    </button>
                    <div className="form-note">No spam, ever. I&apos;ll reply with a personalized quote — not a sales script.</div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}