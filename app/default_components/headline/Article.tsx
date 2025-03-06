import React from 'react'
import { Box, Text } from "@chakra-ui/react";

export default function Article() {
    return (
       <Box mt={5}> 
            <hr />
            <Text fontWeight='medium' mt={3} fontSize='xl'>Related Article: <Text as='span' color='blue.500'>5 Strategies to Boost Social Media Engagement</Text></Text>

            <Text fontWeight='semibold' fontSize='3xl' mt={5}>
                Leverage Automation to Enhance Social Media Marketing
            </Text>

            <Text fontSize='xl' fontWeight='thin' mt={2}>
            Scheduled posts, AI-driven responses, and other automation tools are among the most effective ways to streamline social media efforts. Their impact on engagement and efficiency far surpasses sporadic, manually managed content.
            <br /> <br />
            This efficiency is why top-performing brands rely on automation to maintain a consistent presence, with scheduled and AI-assisted posts driving a significant portion of their engagement. Despite automation representing only a fraction of their overall social media activity, its strategic use helps brands stay responsive and relevant without overwhelming their teams.
            <br /> <br />
            If you’re looking to maximize automation’s potential but aren’t sure where to start, check out this guide to essential automated strategies for social media success.
            </Text>
       </Box>
    )
}
