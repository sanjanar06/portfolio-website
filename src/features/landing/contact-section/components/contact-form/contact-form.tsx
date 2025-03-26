"use client";

import FormInput from "@/components/form-input";
import { LoadingButton } from "@/components/loading-button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ContactFormConfig } from "./contact-form-config";
import useContactForm from "./use-contact-form";

export const ContactForm = () => {
  const { form, onSubmit, isSubmitting } = useContactForm();

  return (
    <Card className="border-none">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 grid-cols-2">
            {Object.values(ContactFormConfig).map((config, index) => (
              <FormInput key={index} form={form} {...config} />
            ))}

            <LoadingButton
              isLoading={isSubmitting}
              loadingText="Submitting..."
              type="submit"
              className="col-start-2 cursor-pointer"
            >
              Submit
            </LoadingButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
