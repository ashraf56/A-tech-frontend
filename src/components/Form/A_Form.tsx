/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";


interface FormProps {
    children: ReactNode;
    onSubmit: SubmitHandler<any>;
}

const A_Form = ({ children, onSubmit }: FormProps) => {
    const methods = useForm()

    const handlesubmit = methods.handleSubmit

    return (
        <FormProvider {...methods}>
            <form onSubmit={handlesubmit(onSubmit)}>{children}</form>
        </FormProvider>
    );
};

export default A_Form;