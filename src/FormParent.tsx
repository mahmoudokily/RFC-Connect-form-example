import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { DeepNest } from "./DeepNestedInput";
export const FormParent = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  const resetInput = (e: any) => {
    e.preventDefault();
    methods.reset({
      ac_energy: "test"
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DeepNest />
        <button onSubmit={methods.handleSubmit(onSubmit)}>submit</button>
        <button onClick={resetInput}>reset</button>
      </form>
    </FormProvider>
  );
};
