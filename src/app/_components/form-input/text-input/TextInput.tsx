import React from "react";
import { TextInputProps } from "./text-input.type";
import { FieldValues, get } from "react-hook-form";
import Textbox from "../../textbox/Textbox";

const TextInput = <TFormValues extends FieldValues>({
  name,
  register,
  rules,
  errors,
  variant,
  ...rest
}: TextInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  return (
    <>
      <Textbox
        {...register(name, rules)}
        {...(hasError ? { variant: "error" } : { variant: variant })}
        {...rest}
      />
      {hasError && <p className="mt-1 text-sm text-error">{error.message}</p>}
    </>
  );
};

export default TextInput;
