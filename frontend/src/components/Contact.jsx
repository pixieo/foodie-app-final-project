import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea
  } from "@chakra-ui/react"
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail
  } from "react-icons/md"
  import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs"
  
  export default function Contact() {
    return (
      <Container bg="green.100" maxW="full" mt={0} centerContent overflow="hidden" id="contact">
        <Flex>
          <Box
            bg="green.700"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 5 }}
            p={{ sm: 5, md: 5, lg: 7 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#F0FFF4">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #C6F6D5" }}
                          leftIcon={<MdPhone color="#C6F6D5" size="20px" />}
                        >
                          +4072X XXX XXX
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #C6F6D5" }}
                          leftIcon={<MdEmail color="#C6F6D5" size="20px" />}
                        >
                          foodie@goodie.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #C6F6D5" }}
                          leftIcon={<MdLocationOn color="#C6F6D5" size="20px" />}
                        >
                          Bucharest, Romania
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start"
                    >
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#0D74FF" }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300"
                            }}
                            placeholder="Your message here..."
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg={"green.400"}
                            color="white"
                            _hover={{
                              bg: "green.300"
                            }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    )
  }
  