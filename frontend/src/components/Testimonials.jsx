import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue
  } from "@chakra-ui/react"
  
  const Testimonial = ({ children }) => {
    return <Box>{children}</Box>
  }
  
  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"lg"}
        p={8}
        rounded={"xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: "solid transparent",
          borderLeftWidth: 16,
          borderRight: "solid transparent",
          borderRightWidth: 16,
          borderTop: "solid",
          borderTopWidth: 16,
          borderTopColor: useColorModeValue("white", "gray.800"),
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)"
        }}
      >
        {children}
      </Stack>
    )
  }
  
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={"h3"} fontSize={"2xl"}>
        {children}
      </Heading>
    )
  }
  
  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.600", "gray.400")}
        fontSize={"sm"}
      >
        {children}
      </Text>
    )
  }
  
  const TestimonialAvatar = ({ src, name, country }) => {
    return (
      <Flex align={"center"} mt={10} direction={"column"}>
        <Avatar src={src} alt={name} mb={2} />
        <Stack spacing={-1} align={"center"}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
            {country}
          </Text>
        </Stack>
      </Flex>
    )
  }
  
  export default function Testimonials() {
    return (
      <Box bg={useColorModeValue("gray.100", "gray.700")} id="reviews">
        <Container maxW={"7xl"} py={36} as={Stack} spacing={70}>
          <Stack spacing={3} align={"center"}>
            <Heading>Our Clients Speak</Heading>
            <Text>We are helping thousands of people all over the world cook better, save more and waste less.</Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 20 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient App</TestimonialHeading>
                <TestimonialText>
                  Thank you for this application that helps me avoid wasting food.
                  This will change my cooking habits.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Nadia"}
                country={"France"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                <TestimonialText>
                  This is a very straightforward app for making recipies out of ingredients 
                  you have and it's the best one I have tried so far.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Sara"}
                country={"Spain"}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                <TestimonialText>
                  First app to ever offer me exactly what I was looking for, recipies for what I have in stock.
                  
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Alessandra"}
                country={"Italy"}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    )
  }
  