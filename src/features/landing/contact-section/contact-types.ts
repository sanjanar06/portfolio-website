import type { LucideIcon } from "lucide-react";

export interface ContactInfoItem {
  label: string;
  value: string;
  icon: LucideIcon;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface ContactInfoData {
  title: string;
  description: string;
  items: ContactInfoItem[];
  socialLinks: SocialLink[];
}

export interface ContactFormData {
  title: string;
  description: string;
  submitButtonText: string;
  successMessage: string;
}

export interface HireMeData {
  contactInfo: ContactInfoData;
  contactForm: ContactFormData;
}
