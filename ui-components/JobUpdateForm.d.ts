/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Job } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobUpdateFormInputValues = {
    title?: string;
    description?: string;
    ctc?: number[];
    experience?: number[];
    jd?: string;
};
export declare type JobUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    ctc?: ValidationFunction<number>;
    experience?: ValidationFunction<number>;
    jd?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobUpdateFormOverridesProps = {
    JobUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    ctc?: PrimitiveOverrideProps<TextFieldProps>;
    experience?: PrimitiveOverrideProps<TextFieldProps>;
    jd?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    job?: Job;
    onSubmit?: (fields: JobUpdateFormInputValues) => JobUpdateFormInputValues;
    onSuccess?: (fields: JobUpdateFormInputValues) => void;
    onError?: (fields: JobUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobUpdateFormInputValues) => JobUpdateFormInputValues;
    onValidate?: JobUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobUpdateForm(props: JobUpdateFormProps): React.ReactElement;
