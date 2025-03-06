import React from 'react'
import {  Flex, Text, Group, Input, InputAddon } from "@chakra-ui/react";

export default function JoinModal() {
    return (
        <Flex p={4} bg='white' justify='center' direction='column' align='center'>
            <Text color='gray.600' fontWeight='bold' fontSize='50px' textAlign='center'>
                Join the Leading Community of <br /> Technical Professionals
            </Text>

            <Group attached w='70%' h='60px'>
                <Input placeholder="Enter work email" h='60px' outline='none'/>
                <InputAddon bg='red.500' color='white'>Join the Community</InputAddon>
            </Group>
        </Flex>
    )
}
