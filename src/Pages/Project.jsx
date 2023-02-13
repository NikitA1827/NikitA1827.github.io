import React, { useContext } from 'react';
import { Box, Image, Badge, Text, Flex } from '@chakra-ui/react'
import { AppContext } from '../Context/Theme';
import { TfiGithub } from "react-icons/tfi";
import { GrDeploy } from "react-icons/gr";
import maxfashion from "./ProjectImages/maxfashion.png"
import freshly from "./ProjectImages/freshly.com.png"
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
                <Text textAlign='center' color='' fontSize={{ base: '20px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }}>My Projects</Text>
            </Text>

            <Box w={"80%"} display={{ base: "column", sm: "column", lg: "grid" }} gridTemplateColumns="repeat(2,1fr)" m={"auto"} mt="20px" gap={20}>
                {/* {first} */}
                <Text left>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10}  >
                        <Image w='full' src={freshly} alt="Freshly.com" h={{ lg: '300px' }} />
                        <Box p='6' >
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Freshly.com</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} h={{ lg: '80px' }} mb={{ lg: 6 }} >
                            Freshly is a meal delivery service that offers an array of chef-cooked, ready-to-eat meals with a special focus on healthy, balanced eating. The service's menu consists of a broad range of single-serve dishes, dairy-free, keto, and paleo diets.
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
                            <a href="https://github.com/NikitA1827/freshly.com" > <TfiGithub size={35} /></a>
                            <a href='https://eclectic-crostata-ac3961.netlify.app/'><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Text>

                {/* {second} */}
                <Text right>
                    <Box style={Theme === 'light' ? light : dark} w={"100%"} borderRadius='lg' overflow='hidden' backgroundColor={"white"} mb={10} >
                        <Image w='full' src={maxfashion} alt="" h={{ lg: '300px' }} />
                        <Box p='6'>
                            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>Maxfashion.in</Text>
                            <Box fontSize={{ base: 'sm', md: 'md', lg: 'md' }} h={{ lg: '80px' }} mb={{ lg: 6 }}>
                               Maxfashion.in is a website which provides the online store for the users to buy a tranding cloths,accessories,footwear and many more. They have a various categories for men,women and for girls and boys too.                              </Box>
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
                            <a href="https://github.com/Binodgith/hunky-potato-4915" > <TfiGithub size={35} /></a>
                            <a href='https://ubiquitous-madeleine-f0f0ee.netlify.app/' ><GrDeploy size={30} /></a>
                        </Flex>
                    </Box>
                </Text>

            </Box>
        </Box>
    );
}
export default Project;