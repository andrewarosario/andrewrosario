'use client';

import Link from 'next/link';

import { NavItem } from '@/types';

import { ToggleButton } from './components';
import { useMainNav } from './hooks';
import * as S from './styles';

type MainNavProps = {
  items: NavItem[];
};

export const MainNav = ({ items }: MainNavProps) => {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      <S.Nav>
        <S.Title>Menu de navegação</S.Title>

        <S.List>
          {items.map((item) => (
            <S.NavItem key={item.title}>
              <Link href={item.href}>{item.title} </Link>
            </S.NavItem>
          ))}
        </S.List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>

      {isOpenMenu && (
        <S.ContainerMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.map((item) => (
                <S.ListItemMobile key={item.title}>
                  <Link href={item.href} onClick={handleToggleMenu}>
                    {item.title}
                  </Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerMobile>
      )}
    </>
  );
};
