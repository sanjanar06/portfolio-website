import { InputTypes } from "@/types/input.types";
import { z } from "zod";

export const ContactFormSchema = z.object({
  firstname: z.string().min(2, { message: "First Name must be at least 2 characters." }),
  lastname: z.string().min(2, { message: "Last Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const ContactFormConfig = {
  firstname: {
    name: "firstname",
    label: "First Name",
    placeholder: "Ex: John",
    type: InputTypes.TEXT,
    defaultValue: "",
    className: "col-span-1",
  },
  lastname: {
    name: "lastname",
    label: "Last Name",
    placeholder: "Ex: Doe",
    type: InputTypes.TEXT,
    defaultValue: "",
    className: "col-span-1",
  },
  email: {
    name: "email",
    label: "Email",
    placeholder: "Ex: john.doe@example.com",
    type: InputTypes.TEXT,
    defaultValue: "",
    className: "col-span-full",
  },
  subject: {
    name: "subject",
    label: "Subject",
    placeholder: "Ex: Project Inquiry / Job Opportunity",
    type: InputTypes.TEXT,
    defaultValue: "",
    className: "col-span-full",
  },
  message: {
    name: "message",
    label: "Message",
    placeholder: "Ex: I'd like to discuss a machine learning project for my business...",
    type: InputTypes.TEXTAREA,
    defaultValue: "",
    className: "col-span-full",
  },
};
