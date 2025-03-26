/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { InputTypes } from "@/types/input.types";
import { ReactElement } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface IFormInputProps {
  name: string;
  label: string;
  type: InputTypes;
  placeholder?: string;
  description?: string;
  form: UseFormReturn<any>;
  className?: string;
}

const FormInput = ({
  name,
  label,
  type,
  placeholder,
  description,
  form,
  className,
}: IFormInputProps) => {
  const inputComponents: Record<InputTypes, (field: any) => ReactElement> = {
    [InputTypes.TEXT]: (field: any) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
        <FormControl>
          <Input {...field} id={name} placeholder={placeholder} />
        </FormControl>
        <FormMessage />
      </FormItem>
    ),

    [InputTypes.TEXTAREA]: (field: any) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        {description && <FormDescription>{description}</FormDescription>}
        <FormControl>
          <Textarea className="h-44" {...field} id={name} rows={10} placeholder={placeholder} />
        </FormControl>
        <FormMessage />
      </FormItem>
    ),
  };

  const InputComponent = inputComponents[type] || inputComponents[InputTypes.TEXT];

  return (
    <div className={className}>
      <FormField control={form.control} name={name} render={({ field }) => InputComponent(field)} />
    </div>
  );
};

export default FormInput;
