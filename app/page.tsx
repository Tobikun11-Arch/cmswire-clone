import { Flex } from "@chakra-ui/react";
import EditorialBanner from "./default_components/EditorialBanner";
import Headline from "./default_components/headline/Headline";


export default function Home() {
  return (
    <Flex
    minH='100vh'
    direction='column'
    align='center'
    bg='white'
    p={{ base: 0, lg: 4 }}
    cursor='default'>
       <EditorialBanner />
       <Headline />
    </Flex>
  );
}
