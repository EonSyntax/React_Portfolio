import { Mail} from "lucide-react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { Instagram } from "lucide-react";
import { Send } from "lucide-react";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import {useToast} from "@/hooks/use-toast";
import { IconBrandX } from "@tabler/icons-react"


export const ContactSection = () => {
        const {toast} = useToast();
        const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        // Simulate form submission delay

        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Your message has been sent successfully. I'll get back to you soon!",
            });
            setIsSubmitting(false);
            e.target.reset();
        }, 1500);
    };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.</p>
        {/* <a href="mailto:your-email@example.com" className="cosmic-button">Contact Me</a> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                <div className="space-y-6 justify-center ms-0 md:ms-25">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="text-lg font-medium pr-6">Email</h4>
                            <a href="mailto:eonsyntax@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                eonsyntax@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Phone</h4>
                            <a href="tel:+2348133786763" className="text-muted-foreground hover:text-primary transition-colors">
                                +234 8133 786 763
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="text-lg font-medium">Location</h4>
                            <p className="text-muted-foreground">Ogun-State, Nigeria</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="mb-4 font-medium">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://twitter.com/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <IconBrandX size={20} />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <GithubIcon size={20} />
                        </a>
                        <a href="https://instagram.com/yourusername" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary bg-input text-foreground" placeholder="Emmanuel Adebanji..." />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-2 border rounded-md focus:outline-hidden focus:ring-2 focus:ring-primary bg-input text-foreground" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                        <textarea id="message" name="message" required rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-input text-foreground resize-none" placeholder="Hello, I'd like to talk about..."></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}
                    >
                        {isSubmitting ? (
                            <>
                                Sending...
                                <Loader2 className="animate-spin" size={16} />
                            </>
                        ) : (
                            <>
                                Send Message
                                <Send size={16} />
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};