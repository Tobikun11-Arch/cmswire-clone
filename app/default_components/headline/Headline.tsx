"use client"
import { Box, Flex, Avatar, Text, useAvatar } from "@chakra-ui/react";
import TableContents from "./TableContents";
import Article from "./Article";
import JoinModal from "../JoinModal";
import { Share2, Bookmark } from 'lucide-react';
import { useEffect, useState } from "react";
import ShareSocial from "../ShareSocial";

export default function Headline() {
  const avatar = useAvatar()
  const [ isSave, setSave ] = useState<boolean>(false)
  const [ isShare, setShare ] = useState<boolean>(false)

  useEffect(()=> {
    if(isSave) {
      setTimeout(() => {
        setSave(false)
      }, 5000);
    }
  }, [isSave])

  return (
    <Box 
      w={{ base: '100%', lg: "56.25rem" }}
      p={6} 
      borderRadius="lg" 
      zIndex={50} 
      mt={-24} 
      bg="white" 
      color='black'
      display="flex flex-col" 
      justifyContent="space-between" 
      alignItems="center" 
      position='relative'
      fontWeight="semibold">

      <Flex position='absolute' left={{ xl: '-5rem' }} top={{ base: '25px', md: '4.375rem', xl: '6.25rem' }} color='gray.500' direction={{ base: 'row', xl: 'column' }} align='center' gap={2}>
        <Flex gap={1} align='center' onClick={()=> setShare(true)}>
          <Share2 size={20}/>
          <Text display={{ base: "none", md: "block" }}>Share</Text>
        </Flex>
        <Flex gap={1} align='center' onClick={()=> setSave(true)}>
          {isSave ? (
            <>
              <Text>Saved✅</Text>
            </>
          ) : (
            <>
              <Bookmark size={20}/>
              <Text display={{ base: "none", md: "block" }}>Save</Text>
            </>
          )}
        </Flex>
      </Flex>
      
      {isShare && (
        <Box position='absolute' left={{ xl: '-5rem'}} top={{ base: '50px', md: '6.25rem',  xl: '8.125rem' }} color='gray.500' bg='white' p={4} boxShadow='md'>
          <ShareSocial onclose={()=> setShare(false)}/>
        </Box>
      )}
        
      <Flex align="center" gap={2} justifyContent='space-between' direction={{ base: 'column', md: 'row' }}>
       <Flex align='center' gap={2}>
       <Avatar.RootProvider value={avatar}>
          <Avatar.Image src="/AuthorProfile.jpg" />
          <Avatar.Fallback name="Segun Adebayo" />
        </Avatar.RootProvider>
        <Text fontSize={{ base: "sm", sm: "lg" }}>
          By <Text as="span" color="blue.400">John B. Doee</Text>
        </Text>
       </Flex>

      <Text fontSize={{ base: "sm", sm: 'lg', md: "xl" }} fontWeight="normal">
        February 5, 2025 <Text as="span" color="gray.500">|</Text> 
        <Text as="span" color="blue.500"> Technical Marketing</Text>
      </Text>
      </Flex>

      <Text mt={10} fontWeight='medium' fontSize='xl' fontStyle='italic'> 
        Smarter Social Media Strategies: Less Can Be More
      </Text>
      <Text fontSize='2xl' mt={3}>The Gist</Text>
      <Box as="ul" listStyleType="disc" fontWeight='normal' fontSize='xl' display='flex' flexDirection='column' gap={4} p={6}>
        <li>Quality Over Quantity. Posting too frequently can overwhelm followers. Instead, focus on high-value content that sparks engagement and shares.</li>
        <li>Strategic Automation. Automate post scheduling and responses to maintain consistency while freeing up time for real interactions.</li>
        <li>The Personalization Balance. Too much customization can dilute your brand identity. Keep messaging cohesive while still addressing audience needs.</li>
      </Box>

      <Text fontWeight='normal' fontSize='xl' mt={5}>
      Achieving success in social media marketing demands continuous refinement and adaptation, always striving for incremental improvements. This process unfolds in a landscape of ongoing shifts, where some changes necessitate strategic pivots, while others serve as mere distractions.
      <br /> <br />
      Seasoned social media marketers understand that an effective strategy maintains a highly engaged audience, fosters meaningful interactions, and drives measurable business outcomes. Strong engagement rates and consistent follower growth are essential, but the true markers of success lie in a brand’s ability to build trust, encourage brand advocacy, and maintain an authentic voice across platforms.

      These are the fundamentals of a strong social media strategy. But what distinguishes the most effective ones? Here are four key attributes.
      </Text>
      <TableContents />
      <Article />
      <JoinModal />
    </Box>
  );
}
