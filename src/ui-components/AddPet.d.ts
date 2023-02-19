/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddPetOverridesProps = {
    AddPet?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Add Pet"?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: MyIconProps;
    Divider29766917?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36592694?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36592701?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36592708?: PrimitiveOverrideProps<TextFieldProps>;
    Divider29766925?: PrimitiveOverrideProps<DividerProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Button29766926?: PrimitiveOverrideProps<ButtonProps>;
    Button36592716?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddPetProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: AddPetOverridesProps | undefined | null;
}>;
export default function AddPet(props: AddPetProps): React.ReactElement;
