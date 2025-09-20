/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CandidateCreateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
    resume?: string;
    skills?: string[];
    education?: string;
    summary?: string;
    experience?: number;
    linkedin?: string;
};
export declare type CandidateCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    resume?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    experience?: ValidationFunction<number>;
    linkedin?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateCreateFormOverridesProps = {
    CandidateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    resume?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    experience?: PrimitiveOverrideProps<TextFieldProps>;
    linkedin?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateCreateFormProps = React.PropsWithChildren<{
    overrides?: CandidateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CandidateCreateFormInputValues) => CandidateCreateFormInputValues;
    onSuccess?: (fields: CandidateCreateFormInputValues) => void;
    onError?: (fields: CandidateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CandidateCreateFormInputValues) => CandidateCreateFormInputValues;
    onValidate?: CandidateCreateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateCreateForm(props: CandidateCreateFormProps): React.ReactElement;
