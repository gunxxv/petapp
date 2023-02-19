/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function PetProfile(props) {
  const { pet, overrides, ...rest } = props;
  const buttonThreeSixFourEightTwoSixNineSixOnClick = useDataStoreDeleteAction({
    id: pet?.id,
    model: Pet,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="300px"
      height="543px"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="25px"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(122,182,238,1)"
      {...getOverrideProps(overrides, "PetProfile")}
      {...rest}
    >
      <Button
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="link"
        children="Delete"
        onClick={() => {
          buttonThreeSixFourEightTwoSixNineSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button36482696")}
      ></Button>
      <Image
        width="129px"
        height="127px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={pet?.image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Name")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Name: "}${pet?.name}`}
          {...getOverrideProps(overrides, "Melinda Marcus")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Breed:"}${pet?.breed}`}
          {...getOverrideProps(overrides, "Breed")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"About:"}${pet?.about}`}
          {...getOverrideProps(overrides, "About: Great animal")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Age:"}${pet?.age}`}
          {...getOverrideProps(overrides, "Age: 23")}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Button
          width="207px"
          height="54px"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Profile"
          {...getOverrideProps(overrides, "Button29766907")}
        ></Button>
        <Button
          width="207px"
          height="57px"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Update"
          {...getOverrideProps(overrides, "Button36482689")}
        ></Button>
      </Flex>
    </Flex>
  );
}
