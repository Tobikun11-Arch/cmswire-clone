"use client"
import React, { useState } from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
import { X, Copy, Mail, Linkedin, Twitter, Facebook } from 'lucide-react'

interface ShareProps {
    onclose: ()=> void
}

export default function ShareSocial({ onclose }: ShareProps) {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    const [ isCopy, setCopy ] = useState<boolean>(false)

    //handle the copy of website link
    const copyToClipboard = () => {
        setCopy(true)
        navigator.clipboard.writeText(currentUrl);

        setTimeout(() => {
            setCopy(false)
        }, 2000);
    };

    //user can share the web to others
    const shareByEmail = () => {
        window.open(`mailto:?subject=Check this out&body=${currentUrl}`, '_blank');
    };

    //handle multiple social share like Facebook and Linkedin
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <Box color='black'>
            <Flex align='center' gap={24}>
                <Text>Share</Text>
                <X onClick={onclose} size={20}/>
            </Flex>

            <Box mt={3} fontWeight='medium' flexDirection='column' gap={2}>
                <Flex align='center' gap={4} onClick={copyToClipboard}>
                    <Copy size={20}/>
                    <Text>{isCopy ? "Copied!" : 'Copy'}</Text>
                </Flex>
                <Flex align='center' gap={4} onClick={shareByEmail}>
                    <Mail size={20}/>
                    <Text>Email</Text>
                </Flex>
                <Flex align='center' gap={4} onClick={()=> openInNewTab(`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`)}>
                    <Linkedin size={20}/>
                    <Text>LinkedIn</Text>
                </Flex>
                <Flex align='center' gap={4} onClick={() => openInNewTab(`https://twitter.com/intent/tweet?url=${currentUrl}`)}>
                    <Twitter size={20}/>
                    <Text>Twitter</Text>
                </Flex>
                <Flex align='center' gap={4} onClick={() => openInNewTab(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`)}>
                    <Facebook size={20}/>
                    <Text>Facebook</Text>
                </Flex>
            </Box>
        </Box>
    )
}
