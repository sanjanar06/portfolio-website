"use client";

import { ContactInfoItemCard } from "./contact-info-item";
import { SocialLinks } from "./contact-form-social-links";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const contactInfoData = {
  title: "Contact Information",
  description: "Feel free to reach out through any of these channels.",
  items: [
    {
      label: "Email",
      value: "ganeshnaidudsa@gmail.com",
      icon: Mail,
      link: "mailto:ganeshnaidudsa@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 6303392483",
      icon: Phone,
      link: "tel:+916303392483",
    },
    {
      label: "Location",
      value: "Hyderabad, Telangana",
      icon: MapPin,
    },
  ],
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ganesh-naidu-957111238/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/ganeshnaidudsa",
      icon: Github,
    },
    {
      name: "Twitter",
      url: "https://x.com/GaneshNaid91026",
      icon: Twitter,
    },
  ],
};

export function ContactInfo() {
  return (
    <section className=" flex flex-col space-y-5">
      <div className="flex flex-col space-y-5">
        {contactInfoData.items.map((item, _) => (
          <ContactInfoItemCard key={_} item={item} />
        ))}
      </div>

      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Connect with me</h3>
        <SocialLinks links={contactInfoData.socialLinks} />
      </div>
    </section>
  );
}
