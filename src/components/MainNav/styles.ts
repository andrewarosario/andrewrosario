import tw from 'tailwind-styled-components';

import * as ListItemContainer from '@/components/List/components/ListItem/styles';
import * as ListContainer from '@/components/List/styles';

export const Nav = tw.nav`
    items-center 
    justify-between
    hidden

    md:flex
`;

export const Title = tw.h2`
    hidden
`;

export const NavItem = tw.li`
    inline-block
    transition-all
    after:block
    after:origin-center
    after:scale-x-0
    after:border-b-2
    after:transition-all
    after:duration-500
    after:ease-in-out
    hover:font-bold
    hover:text-link
    hover:after:scale-x-50
    hover:after:border-link
`;

export const List = tw.ul`
    flex 
    gap-10
`;

export const ListItem = tw.li`
    transition-colors 
    duration-300 
    ease-in-out 
    hover:text-link
`;

export const Content = tw.div`
    z-50
    flex
    transition-colors
    duration-300
    hover:text-link
    md:hidden
`;

export const ContainerMobile = tw.div`
    fixed
    left-0
    top-0
    z-30
    min-h-screen
    w-full
    overflow-hidden
    bg-primary/80
    pt-[4rem]
`;

export const NavMobile = tw.nav`
    mx-auto
    flex
    max-w-[80%]
    items-center
    justify-center
    rounded-2xl
    border
    border-gray-600
    bg-secondary
    py-3
    shadow-2xl
`;

export const ListMobile = tw(ListContainer.Container)`
    w-full
    flex-col
    px-4
`;

export const ListItemMobile = tw(ListItemContainer.Container)`
    border-b
    border-gray-600
    py-3
`;
