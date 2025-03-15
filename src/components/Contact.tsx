
import React from "react";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <h2 className="heading-lg mb-4">Get in Touch</h2>
          <p className="body-lg text-muted-foreground">
            I'm always open to new opportunities and collaborations. Feel free to
            reach out if you have a project in mind or just want to say hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="heading-sm">Contact Information</h3>
              <p className="text-muted-foreground">
                Fill out the form or contact me directly using the information below.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/60 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200"
              >
                <div className="p-2 bg-primary/10 rounded-md">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-lg border border-border/60 hover:border-primary/30 hover:bg-secondary/50 transition-all duration-200"
              >
                <div className="p-2 bg-primary/10 rounded-md">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Message</p>
                  <p className="font-medium">Let's chat about your project</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-background rounded-2xl p-6 border border-border/60 shadow-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
