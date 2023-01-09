import React, { useContext } from 'react';
import { Box, Image, Badge, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../Context/Theme';
import { TfiGithub } from "react-icons/tfi";
import { GrDeploy } from "react-icons/gr";
import Nordstrom from "./ProjectImages/Nordstrom.png"
import Smatbot from "./ProjectImages/Smatbot.png"
import Indeed from "./ProjectImages/Indeed.png"
import Yoox from "./ProjectImages/Yoox.png"
const Project = () => {
    const { Theme } = useContext(AppContext);

    const light = {
        backgroundColor: 'white',
        color: 'black'
    }

    const dark = {
        backgroundColor: 'black',
        color: 'white'
    }
    return (
        <Box >
            <Text >
                <Text textAlign='center' color='' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>My Project's</Text>
            </Text>

            <Box w={"80%"} display={{ base: "column", sm: "column", lg: "grid" }} gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="20px" gap={20}>
                {/* {first} */}
                <Text left>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10}  >
                        <Image w='full' src={Nordstrom} alt="NordStrom" h={{ lg: '300px' }} />
                        <Box p='6' >
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>NordStrom</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} h={{ lg: '80px' }} mb={{ lg: 6 }} >
                                An e-commerce website that provides large number of
                                clothing accessories,beauty products and many more
                            </Box>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' mt={3}  >
                                <Badge borderRadius='full' px='2' fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1} >
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        Javascript
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >

                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a href="https://github.com/morevishal99/selective-stem-7212" target="_blank"> <TfiGithub size={35} /></a>
                            <a href='https://profound-treacle-ceb424.netlify.app/' target="_blank"><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Text>

                {/* {second} */}
                <Text right>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={Smatbot} alt="SmatBot" h={{ lg: '300px' }} />
                        <Box p='6'>
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>SmatBot</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} h={{ lg: '80px' }} mb={{ lg: 6 }}>
                                A website which provides Automated chatbots, Customized chatbot solutions, Affordable pricing and Conversational AI Chatbot to Acquire, Engage & Support Customers.                                </Box>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' mt={3} >
                                <Badge borderRadius='full' px='2' fontSize={{ base: 'sm', md: 'sm', lg: 'sm' }}>
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1} >
                                    
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2'  >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }} textTransform='uppercase' ml='2' >
                                        Javascript
                                    </Box>
                                    
                                </Box>
                            </Box>
                        </Box>
                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a href="https://github.com/mahipat303/smatbot.com-clone" target="_blank"> <TfiGithub size={35} /></a>
                            <a href='https://elaborate-vacherin-013d66.netlify.app/' target="_blank"><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Text>

                {/* {third} */}
                <Text left>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={Indeed} alt="Indeed" />
                        <Box p='6'>
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Indeed</Text>

                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} mb={{ lg: 6 }}>
                                The site allows jobseekers to search for jobs by location, job type, salary, and keywords. Employers can post jobs for free and use the site to search for potential candidates. Indeed also offers a variety of resources to employers, such as job posting tools, resume search tools, and employer branding tools.
                            </Box>

                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge borderRadius='full' px='2' >
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1}>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        HTML
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        CSS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        JAVA-Script
                                    </Box>
                                   
                                </Box>
                            </Box>
                        </Box>

                        <Flex gap={10} alignItems="center" mb={5} ml={7}>
                            <a href="https://github.com/ankitraju123/vengeful-anger-1431" target="_blank"> <TfiGithub size={35} /></a>
                            <a href='#' target="_blank"><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Text>

                {/* {fourth} */}
                <Text right>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={Yoox} alt="Yoox" />
                        <Box p='6'>
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Yoox</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} mb={{ lg: 6 }}>
                            Yoox is an online clothing and fashion store that specializes in providing high-end designer clothing and accessories. They offer a wide variety of items from both established and emerging designers from around the world.                                 </Box>
                            <Box display={{ base: "column", sm: "column", lg: "flex" }} alignItems='baseline' >
                                <Badge borderRadius='full' px='2' >
                                    TECH STACK
                                </Badge>
                                <Box display={{ base: "grid", sm: "grid", lg: "flex" }} gridTemplateColumns="repeat(1,1fr)" gap={1}>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        React JS
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        Javascript
                                    </Box>
                                    <Box color='gray.500' fontWeight='semibold' letterSpacing='wide' fontSize='xs' textTransform='uppercase' ml='2' >
                                        Chakra UI
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Flex  gap={10} alignItems="center" mb={5} ml={7}>
                            <a href="https://github.com/morevishal99/potent-toothbrush-7925/tree/main/my_yoox_clone" target="_blank"> <TfiGithub size={35} /></a>
                            <a href='#' target="_blank"><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Text>
            </Box>
        </Box>
    );
}
export default Project;