/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Candidate } from "../src/API.ts";
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
export declare type CandidateUpdateFormInputValues = {
    name?: string;
    email?: string;
    phone?: string;
};
export declare type CandidateUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CandidateUpdateFormOverridesProps = {
    CandidateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CandidateUpdateFormProps = React.PropsWithChildren<{
    overrides?: CandidateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    candidate?: Candidate;
    onSubmit?: (fields: CandidateUpdateFormInputValues) => CandidateUpdateFormInputValues;
    onSuccess?: (fields: CandidateUpdateFormInputValues) => void;
    onError?: (fields: CandidateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CandidateUpdateFormInputValues) => CandidateUpdateFormInputValues;
    onValidate?: CandidateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CandidateUpdateForm(props: CandidateUpdateFormProps): React.ReactElement;
