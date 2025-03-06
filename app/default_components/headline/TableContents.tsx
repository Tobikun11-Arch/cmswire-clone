import { Text, Box } from '@chakra-ui/react'
import React from 'react'

export default function TableContents() {
    return (
        <Box>
            <Text fontWeight='semibold' mt={4} fontSize='2xl'>
                Table of Contents
            </Text>
            <Box as="ul" listStyleType="disc" fontWeight='semibold' fontSize='xl' display='flex' flexDirection='column' gap={4} p={4} color='purple.600'>
                <li>Quality Over Quantity. Posting too frequently can overwhelm followers. Instead, focus on high-value content that sparks engagement and shares.</li>
                <li>Strategic Automation. Automate post scheduling and responses to maintain consistency while freeing up time for real interactions.</li>
                <li>The Personalization Balance. Too much customization can dilute your brand identity. Keep messaging cohesive while still addressing audience needs.</li>
            </Box>
        </Box>
    )
}
