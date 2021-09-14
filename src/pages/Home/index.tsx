import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Center, Flex, Text } from "@chakra-ui/layout";
import HomeMenu from "../../components/HomeMenu";
import backgroundPlastic from "../../assets/images/plastic.png";
import backgroundCup from "../../assets/images/bluecup.png";
import homeMap from "../../assets/images/homemap.svg";
import homeTaggedMap from "../../assets/images/hometaggedmap.svg";
import { useFormContext } from "../../providers/FormContext";
import { useHistory } from "react-router";
import { Parallax } from 'react-scroll-parallax';


const Home = () => {
  const { setFormOption } = useFormContext();
  const history = useHistory();

  const sendTo = (path: string) => {
    setFormOption(path);
    history.push("/joinUs");
  };

  return (
    <Flex direction="column">
      <HomeMenu />
      <Parallax y={[-40, 40]} tagOuter="figure">
        <Flex
          direction="column"
          justifyContent="center"
          w="100%"
          h={["65vh", "74vh", "83vh", "92vh"]}
          bg="white"
          pl={["40px", "50px", "60px", "70px"]}
          bgImage={backgroundPlastic}
          backgroundSize={["210%", "180%", "165%", "140%, 110%"]}
          bgPosition="center"
          bgRepeat="no-repeat"
        >
          <Text fontSize={["2xl", "2xl", "4xl"]} fontWeight="bold" color="white">
            Find, Recycle, Connect
          </Text>
          <Text
            fontSize={["xl", "xl", "2xl"]}
            color="white"
            maxW={["200px", "300px", "350px"]}
          >
            For a cleaner and more sustainable world
          </Text>
          <Button
            mt="6"
            w="130px"
            fontSize={["xl", "xl", "2xl"]}
            fontWeight="500"
            bg="gray.50"
            color="green.300"
            h="45px"
            borderRadius="10px"
            _hover={{ bg: "green.300", color: "green.400" }}
            _focus={{}}
            onClick={() => sendTo("Sign up")}
          >
            Join us
          </Button>
        </Flex>
      </Parallax>
      <Center
        zIndex="1"
        w="100%"
        py="10"
        bg="white"
        fontSize={["3xl", "4xl"]}
        fontWeight="bold"
      >
        RECYCLING
      </Center>
      <Flex  bg="gray.50" zIndex="1" mb="20" textAlign={["center", "center", "left"]} direction="column">
        <Flex
          px="20"
          bg="white"
          justifyContent="space-around"
          direction={["column", "column", "row"]}
        >
          <Flex justifyContent="center" direction="column">
            <Text fontSize="3xl">Find collection wastes</Text>
            <Text maxW="300px">
              Das wer tribst dush der maine seele, zum bisth zo rum dur ich in
              mir
            </Text>
          </Flex>
          <Image
            src={homeTaggedMap}
            w={["200px", "250px", "300px"]}
            h={["200px", "250px", "300px"]}
          />
        </Flex>
        <Flex
          px="20"
          mt="50px"
          bg="gray.50"
          justifyContent="space-around"
          direction={["column-reverse", "column-reverse", "row"]}
        >
          <Image
            src={homeMap}
            w={["200px", "250px", "300px"]}
            h={["200px", "250px", "300px"]}
          />
          <Flex justifyContent="center" direction="column">
            <Text fontSize="3xl">Register new points</Text>
            <Text maxW="300px">
              Das wer tribst dush der maine seele, zum bisth zo rum dur ich in
              mir
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Parallax y={[-40, 40]} tagOuter="figure">
      <Flex
        
        direction="column"
        justifyContent="center"
        w="100%"
        h={["50vh", "60vh", "70vh", "80vh"]}
        bg="gray.100"
        pl={["40px", "50px", "60px", "70px"]}
        bgImage={backgroundCup}
        backgroundSize={["210%", "180%", "165%", "140%, 110%"]}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Text fontSize={["2xl", "2xl", "3xl"]} fontWeight="bold" color="white">
          EVENTS
        </Text>
        <Text
          fontSize={["xl", "xl", "2xl"]}
          color="white"
          maxW={["200px", "300px", "350px"]}
        >
          Participe de eventos que contruibuem para limpeza do planeta Crie
          eventos
        </Text>
      </Flex>
      </Parallax>
      <Flex flexDirection="column" zIndex="1">
        <Flex py="100px" alignItems="center" direction="column" bg="gray.50">
          <Text fontSize={["2xl", "2xl", "3xl"]}>Salve o planeta!</Text>
          <Button
            mt="6"
            w={["250px", "300px", "350px", "400px"]}
            fontSize={["xl", "xl", "2xl"]}
            fontWeight="500"
            bg="green.300"
            color="black"
            h="45px"
            borderRadius="10px"
            _hover={{ bg: "green.300", color: "green.400" }}
            _focus={{}}
            onClick={() => sendTo("Sign up")}
          >
            Join us
          </Button>
        </Flex>
        <Center
          h={["15vh", "14vh", "13vh", "12vh"]}
          fontSize={["sm", "md", "lg"]}
          bg="white"
        >
          &copy;Copyright 2021 Echologys Brasil SA. All rights reserved
        </Center>
      </Flex>
    </Flex>
  );
};

export default Home;
