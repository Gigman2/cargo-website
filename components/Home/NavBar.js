import React from "react";
import { Flex, Grid, Image, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const menuLinks = [
    {
        name: 'About Us',
        path: ''
    },
    {
        name: 'Ebikes',
        path: '/ebikes'
    },
    {
        name: 'Business',
        path: '/business'
    },
    {
        name: 'Entrepreneurs',
        path: '/entrepreneurs'
    },
    {
        name: 'Impact',
        path: '/impact'
    },
    {
        name: 'Press',
        path: '/press'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
  ];

  return (
    <Grid
      as="nav"
      templateColumns="30% 70%"
      role="nav"
      zIndex={60}
      bg="black"
      position="fixed"
      px={16}
      h={28}
      alignContent='center'
      w="100%"
    >
      <Image src="/images/logo.png" alt="cargo-logo" h={12} />
      <Flex justify="space-between" w="100%" align="center">
        <Flex justify="space-between" w="70%">
          {menuLinks?.map((menu) => (
            <NextLink href={menu?.path}passHref key={menu}>
              <Link
                _focus={{ outline: "none" }}
                color={router?.pathname === menu?.name ? '#CBD359' : "white"}
                _hover={{
                  textDecor: "none",
                  color: "#CBD359",
                }}
              >
                {menu?.name}
              </Link>
            </NextLink>
          ))}
        </Flex>
        <Button
          variant="outline"
          color="#CBD359"
          border="2px"
          borderColor="white"
          rounded="xl"
          colorScheme="none"
          w={36}
        >
          Login
        </Button>
      </Flex>
    </Grid>
  );
};

export default NavBar;
