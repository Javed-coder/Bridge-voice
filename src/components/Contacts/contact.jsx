import React from "react";
import "./contact.css";

const contactsData = [
    {
        id: 1,
        name: "Jamal",
        email: "jamal@example.org",
        flag: "🇫🇷",
        role: "NGO",
    },
    {
        id: 2,
        name: "Amina",
        email: "amina@example.org",
        flag: "🇸🇦",
        role: "Refugee",
    },
    {
        id: 3,
        name: "Sarah",
        email: "sarah@example.org",
        flag: "🇺🇸",
        role: "NGO",
    },
    {
        id: 4,
        name: "Mohamed",
        email: "mohamed@example.org",
        flag: "🇪🇬",
        role: "Refugee",
    },
];

const Contact = () => (
    <div className="contact-container">
        <div className="contact-card">
            <h2 className="contact-title">Contacts</h2>
            <div>
                {contactsData.map((contact) => (
                    <div key={contact.id} className="contact-item">
                        <span className="contact-flag">{contact.flag}</span>
                        <div className="contact-info">
                            <div className="contact-name">{contact.name}</div>
                            <div className="contact-email">{contact.email}</div>
                        </div>
                        <span className={`contact-role ${contact.role === "NGO" ? "ngo-role" : "refugee-role"}`}>
                            {contact.role}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Contact;
