import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { ContactFormConfig, ContactFormSchema } from "./contact-form-config";

const useContactForm = () => {
  type FormValues = z.infer<typeof ContactFormSchema>;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      [ContactFormConfig.email.name]: ContactFormConfig.email.defaultValue,
      [ContactFormConfig.firstname.name]: ContactFormConfig.firstname.defaultValue,
      [ContactFormConfig.lastname.name]: ContactFormConfig.lastname.defaultValue,
      [ContactFormConfig.subject.name]: ContactFormConfig.subject.defaultValue,
      [ContactFormConfig.message.name]: ContactFormConfig.message.defaultValue,
    },
  });



  const onSubmit = async (values: z.infer<typeof ContactFormSchema>) => {
    setIsSubmitting(true);
    console.log(values);
  
    try {
     
      const emailSubject = encodeURIComponent(values["subject"]);
      const messageText = encodeURIComponent(`${values["message"]}`);
  
      const recipientEmail = "ganeshnaidudsa@gmail.com"; 
  
      const mailtoLink = `mailto:${recipientEmail}?subject=${emailSubject}&body=${messageText}`;
  
      window.location.href = mailtoLink;
  
      toast("Opening your email client...");
      form.reset();
    } catch (error) {
      console.error("Error opening mail client:", error);
      toast("There was a problem opening your email client.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  return {
    form,
    onSubmit,
    isSubmitting,
  };
};

export default useContactForm;
