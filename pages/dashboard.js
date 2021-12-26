import {
    Flex,
    Heading,
    Link,
    Icon,
    Text,
    Avatar,
    initialColorMode,
    IconButton,
    Table,
    Thead,
    Th,
    Tr,
    Tbody,
    Td,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiHome, FiCreditCard, FiHash, FiZap, FiCalendar } from 'react-icons/fi'
import BalanceChart from '../components/myChart'

export default function Dashboard() {
    const [extend, changeExtend] = useState('hide')

    return (
        <Flex h='100vh' flexDir='row' overflow='hidden' maxWidth='2000px'>
            {/*Column 1*/}
            <Flex
                width='15%'
                flexDirection='column'
                alignItems='center'
                bg='#0e1111'
                color='white'
            >
                <Heading
                    mt={50}
                    mb={100}
                    fontSize='3xl'
                    alignSelf='center'
                    letterSpacing='loose'
                >
                    Card<span className='base'>base.</span>
                </Heading>
                <Flex
                    flexDirection='column'
                    h='100vh'
                    justifyContent='space-between'
                >
                    <Flex flexDirection='column' as='nav'>
                        <Flex
                            flexDir='column'
                            align='flex-start'
                            justifyContent='center'
                        >
                            {/* Sidebar Items */}
                            <Flex className='items'>
                                <Link>
                                    <Icon
                                        as={FiHome}
                                        fontSize='2xl'
                                        className='active-icon'
                                    />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text className='active-text'>Home</Text>
                                </Link>
                            </Flex>
                            <Flex className='items'>
                                <Link>
                                    <Icon as={FiHash} fontSize='2xl' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text className=''>Wallet</Text>
                                </Link>
                            </Flex>
                            <Flex className='items'>
                                <Link>
                                    <Icon as={FiCreditCard} fontSize='2xl' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text className=''>Cards</Text>
                                </Link>
                            </Flex>
                            <Flex className='items'>
                                <Link>
                                    <Icon as={FiZap} fontSize='2xl' />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }}>
                                    <Text className=''>Services</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir='column' alignItems='center' mb='10' mt='5'>
                        <Avatar
                            size='md'
                            mt='2'
                            mb='2'
                            src='rami-picture.jpeg'
                        />
                        <Text>Rami Dior</Text>
                    </Flex>
                </Flex>
            </Flex>
            {/*Column 2*/}
            <Flex
                w='60%'
                padding='4%'
                flexDir='column'
                overflow='auto'
                minH='100vh'
                color='black'
                backgroundColor={'white'}
            >
                <Heading fontWeight='normal' letterSpacing='tight' mb='1em'>
                    Welcome back,{' '}
                    <Flex fontWeight='bold' display='inline-flex'>
                        Rami.
                    </Flex>
                </Heading>
                <Flex ml='6' height='250' flexDir={'column'}>
                    <Text fontSize='l' color='gray' fontSize='large'>
                        My Balance
                    </Text>
                    <Text
                        fontSize='3xl'
                        fontWeight='bold'
                        letterSpacing='tight'
                        mb='3'
                    >
                        $7,510.21
                    </Text>
                    <BalanceChart height='50' />
                </Flex>
                <Flex justifyContent='space-between' ml='6' mt='8em'>
                    <Flex alignItems='flex-end'>
                        <Heading as='h2' size='lg' letterSpacing='tight' mr='4'>
                            Transactions
                        </Heading>
                        <Text fontSize='sm' color='gray'>
                            Dec 2021
                        </Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>
                <Flex flexDirection={'column'}>
                    <Flex overflow='auto'>
                        <Table variant='unstyled' mt='4'>
                            <Thead>
                                <Tr color='gray'>
                                    <Th>Transaction sent to</Th>
                                    <Th>Category</Th>
                                    <Th isNumeric>Cashback</Th>
                                    <Th isNumeric>Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex align='center'>
                                            <Avatar
                                                size='sm'
                                                mr='3'
                                                src='amazon.jpeg'
                                            />
                                            <Flex flexDir='column'>
                                                <Heading size='sm'>
                                                    Amazon
                                                </Heading>
                                                <Text
                                                    fontSize='sm'
                                                    color='gray'
                                                >
                                                    Yesterday at 1:40 PM
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Electronic Devices</Td>
                                    <Td isNumeric fontWeight='bold'>
                                        +$28
                                    </Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight='bold'
                                            display='inline-table'
                                        >
                                            -$242
                                        </Text>
                                        .00
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align='center'>
                                            <Avatar
                                                size='sm'
                                                mr='3'
                                                src='twitch.png'
                                            />
                                            <Flex flexDir='column'>
                                                <Heading size='sm'>
                                                    Twitch
                                                </Heading>
                                                <Text
                                                    fontSize='sm'
                                                    color='gray'
                                                >
                                                    Yesterday at 8:27 AM
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Online Platform</Td>
                                    <Td isNumeric fontWeight='bold'>
                                        +$1
                                    </Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight='bold'
                                            display='inline-table'
                                        >
                                            -$35
                                        </Text>
                                        .00
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>
                                        <Flex align='center'>
                                            <Avatar
                                                size='sm'
                                                mr='3'
                                                src='linkedin.png'
                                            />
                                            <Flex flexDir='column'>
                                                <Heading size='sm'>
                                                    LinkedIn
                                                </Heading>
                                                <Text
                                                    fontSize='sm'
                                                    color='gray'
                                                >
                                                    Dec 23rd at 2:20 PM
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Social Media</Td>
                                    <Td isNumeric fontWeight='bold'>
                                        +$3
                                    </Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight='bold'
                                            display='inline-table'
                                        >
                                            -$42
                                        </Text>
                                        .20
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Flex>
                </Flex>
            </Flex>
            {/*Column 3*/}
            <Flex
                width='25%'
                minH='100vh'
                backgroundColor='#FAFAFA'
                flexDir='column'
                p='3%'
                overflow='auto'
            ></Flex>
        </Flex>
    )
}
