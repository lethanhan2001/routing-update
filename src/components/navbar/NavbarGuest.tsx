import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import tw from "twin.macro";
import useInnerWidth from "../../hooks/useInnerWidth";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Button from "../../pages/Button";
import { Link } from "react-router-dom";

interface MenuTabletProps {
  show: boolean;
}

const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 39px calc(10% + 3px) 18px calc(10% + 5px);
`;

const Menu = styled.div``;

const MenuList = styled.ul`
  ${tw`flex justify-around items-center`}
`;

const MenuItem = styled.a`
  ${tw`
  list-none text-[#8b8b8b] font-medium no-underline
  tracking-[1.2px] text-base cursor-pointer
`}

  &:not(:last-child) {
    margin: 0 24px;
  }
  &:last-child {
    margin: auto 0 auto 30px;
  }
  &:first-child {
    font-size: 16px;
    font-weight: 600;
    color: #414880;
  }
`;

const MainLogo = styled.div`
  ${tw` relative `}
`;

const One = styled.div`
  ${tw`
  w-[63px] bg-[#ff64ae] relative rounded-full h-[63px]
`}
`;
const Two = styled.div`
  ${tw`
 w-[13px] absolute top-[11px] left-[15px] h-[13px] rounded-full bg-white
`}
`;
const Three = styled.div`
  ${tw`
 w-[6px] absolute top-[23px] left-[28px] h-[6px] rounded-full bg-white
`}
`;
const Four = styled.div`
  ${tw`
 w-[40px] absolute top-[25px] left-[40px] h-[11px] rounded-[50px] bg-[#091156]
`}
`;

const BoxLogo = styled.div`
  ${tw` flex items-center`}
`;

const Title = styled.div`
  ${tw`ml-[34px] text-2xl font-bold text-main tracking-[3px]`}
`;

const MenuIcon = styled.div`
  ${tw`
 cursor-pointer text-[30px]
`}
`;

const MenuTablet = styled.div<MenuTabletProps>`
  ${tw`
  fixed z-50 top-0 bottom-0 left-0 h-full w-[300px] bg-white shadow-2xl ease-in-out transition-all
`}

  ${(props) =>
    props.show &&
    css`
      left: -300px;
    `}
`;

const MenuListTablet = styled.div`
  ${tw`
  flex flex-col items-center justify-center text-center mx-auto my-[50%]
`}
`;

const MenuItemTablet = styled.p`
  ${tw`
 list-none my-6 first:text-[#091156] first:font-semibold
`}
`;

const NavbarGuest = () => {
  const width: number = useInnerWidth();
  const [show, setShow] = useState<boolean>(true);
  return (
    <>
      <NavbarHeader>
        <BoxLogo>
          <MainLogo>
            <One></One>
            <Two></Two>
            <Three></Three>
            <Four></Four>
          </MainLogo>
          <Title>Beautice</Title>
        </BoxLogo>

        {width > 1250 ? (
          <Menu>
            <MenuList>
              <MenuItem>
                <Link to={`/`}>Home+</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/about`}>About</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/service`}>Service</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/gallery`}>Gallery</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`/blog`}>Blog</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Button>
                  <Link to={`/contact`}>Contact</Link>
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <>
            {show ? (
              <MenuIcon onClick={() => setShow(false)}>
                <HiOutlineMenu />
              </MenuIcon>
            ) : (
              <MenuIcon onClick={() => setShow(true)}>
                <AiOutlineClose />
              </MenuIcon>
            )}
          </>
        )}

        {width <= 1250 && (
          <MenuTablet show={show}>
            <MenuListTablet>
              <MenuItemTablet>
                <Link to={`/`}>Home+</Link>
              </MenuItemTablet>
              <MenuItemTablet>
                <Link to={`/about`}>About</Link>
              </MenuItemTablet>
              <MenuItemTablet>
                <Link to={`/service`}>Service</Link>
              </MenuItemTablet>
              <MenuItemTablet>
                <Link to={`/gallery`}>Gallery</Link>
              </MenuItemTablet>
              <MenuItemTablet>
                <Link to={`/blog`}>Blog</Link>
              </MenuItemTablet>
              <MenuItemTablet>
                {" "}
                <Button>
                  <Link to={`/contact`}>Contact</Link>
                </Button>
              </MenuItemTablet>
            </MenuListTablet>
          </MenuTablet>
        )}
      </NavbarHeader>
    </>
  );
};

export default NavbarGuest;
