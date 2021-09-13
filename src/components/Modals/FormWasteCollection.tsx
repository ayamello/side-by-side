import {
  Flex,
  VStack,
  Text,
  Input as ChakraInput,
  Box,
  HStack,
  FormErrorMessage,
  Icon,
  useBoolean,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../Input";
import { AiFillShop, AiOutlineCalendar } from "react-icons/ai";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { RiContactsBookFill, RiTimeLine, RiRecycleFill } from "react-icons/ri";
import { ButtonForms } from "../ButtonForms";
import { useState } from "react";
import { OptionsMaterialsType } from "../OptionsMaterialsTypes";
import { WCDefaultData } from "../../utils/WCDefaultData";

interface WCDataForm {
  title: string;
  address: string;
  contact: string;
  start_time?: string;
  end_time?: string;
}

export const FormWasteCollection = () => {
  const [materialsType, setMaterialsType] = useState<string[]>([]);
  const [hasntMaterial, setHasntMaterial] = useBoolean();
  const { contact, create_at, end_time, start_time, type } = WCDefaultData;

  const eventSchema = yup.object().shape({
    title: yup.string().required("Waste colection name required"),
    address: yup.string().required("Waste colectiona address required"),
    contact: yup.string(),
    start_time: yup.string(),
    end_time: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const wasteCollectionSubmit = (data: WCDataForm) => {
    if (materialsType.length === 0) {
      setHasntMaterial.on();
    } else {
      setHasntMaterial.off();
      console.log(data, materialsType);
    }
  };

  return (
    <Flex
      as="form"
      justifyContent="center"
      onSubmit={handleSubmit(wasteCollectionSubmit)}
    >
      <VStack spacing="5" h="100%" w="100%">
        <Text as="p" color="green.400">
          Create a new Waste Point
        </Text>
        <Input
          icon={AiFillShop}
          placeholder="Local name"
          {...register("title")}
          error={errors.title}
        />
        <Input
          icon={FaMapMarkerAlt}
          placeholder="Address"
          error={errors.address}
          {...register("address")}
        />
        <Input
          icon={RiContactsBookFill}
          placeholder="Contact"
          error={errors.contact}
          {...register("contact")}
        />
        <HStack>
          <Input
            icon={RiTimeLine}
            placeholder="Open at:"
            error={errors.start_time}
            {...register("start_time")}
          />
          <Input
            icon={RiTimeLine}
            placeholder="Close at:"
            error={errors.end_time}
            {...register("end_time")}
          />
        </HStack>
        <Flex flexDirection="column">
          <HStack pl="12px" mb="12px">
        <Icon as={RiRecycleFill} color="gray.200"/>
            <Text
              as="label"
              children="Choose the types:"
              alignSelf="flex-start"
              color="gray.200"
            />
            {hasntMaterial && (
              <Text
                mt="-2px"
                mb={{ lg: "-8px" }}
                children="Material type is required"
                color="red.500"
                fontSize="sm"
              />
            )}
          </HStack>

          <OptionsMaterialsType
            setMaterialsType={setMaterialsType}
            materialsType={materialsType}
          />
        </Flex>

        <Box flex="1" width="100%" textAlign="center">
          <ButtonForms type="submit" width={["75%", "75%"]} mt="2rem">
            Create
          </ButtonForms>
        </Box>
      </VStack>
    </Flex>
  );
};