import { Box, Heading, Text } from "@chakra-ui/react";
import Image from 'next/image'
import React from 'react'

export default function EditorialBanner() {
    return (
        <Box position="relative" w={{ base: "100%", lg: "68.75rem" }} h="31.25rem" color="white" fontWeight="semibold">
            <Box w="full" h="full" position="relative" overflow="hidden" borderRadius={{ base: "", lg: '2xl'}}>
                <Image
                src="/EditorialBanner.jpg"
                alt="editorial banner"
                fill
                loading="lazy"
                blurDataURL="/placeholder.png"
                className="object-cover"
                />
                {/* Overlay */}
                <Box position="absolute" inset="0" bg="black" opacity={0.5} />
            </Box>

            <Box position="absolute" top="20" left={{ base: "7", md: "20" }}>
                <Heading size="md">EDITORIAL</Heading>
                <Heading mt={3} size={{ base: 'lg', md: "2xl", lg: "4xl" }} fontWeight="extrabold">
                4 Key Elements of Effective Email Marketing <br /> Strategies Today
                </Heading>
                <Text mt={4} fontSize="xs">11 MINUTE READ</Text>
            </Box>
        </Box>
    )
}