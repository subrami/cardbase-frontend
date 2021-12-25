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
} from '@chakra-ui/react'
import { useHook } from 'react'
import React, { useState } from 'react'
import { FiHome, FiCreditCard, FiHash, FiZap, FiCalendar } from 'react-icons/fi'
import BalanceChart from '../components/myChart'

export default function Dashboard() {
    return (
        <Flex h='100vh' flexDir='row' overflow='hidden' maxWidth='2000px'>
            {/*Column 1*/}
            <Flex
                width='15%'
                flexDirection='column'
                alignItems='center'
                bg='#1D1C1C'
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
                <Heading
                    fontWeight='normal'
                    mb='5'
                    letterSpacing='tight'
                    mb='1em'
                >
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
                <Flex justifyContent='space-between' ml='6' mt='6em'>
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
                        <Table variant='unstyled'></Table>
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
