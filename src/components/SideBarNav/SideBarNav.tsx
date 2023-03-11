import {FC} from "react";
import {NavItem, NavLinkStyled, NavList} from "@/components";
import {CardsIcon, DashboardIcon, GamesIcon, ProductIcon, SettingsIcon, WearTearIcon} from "@/assets";

export const SideBarNav: FC = () => {
    return <NavList>
        <NavItem>
            <NavLinkStyled to='/'>
                <DashboardIcon/>
            </NavLinkStyled>
        </NavItem>
        <NavItem>
            <NavLinkStyled to='/cards'>
                <CardsIcon/>
            </NavLinkStyled>
        </NavItem>
        <NavItem>
            <NavLinkStyled to='/product'>
                <ProductIcon/>
            </NavLinkStyled>
        </NavItem>
        <NavItem>
            <NavLinkStyled to='/wear-tear'>
                <WearTearIcon/>
            </NavLinkStyled>
        </NavItem>
        <NavItem>
            <NavLinkStyled to='/games'>
                <GamesIcon/>
            </NavLinkStyled>
        </NavItem>
        <NavItem>
            <NavLinkStyled to='/settings'>
                <SettingsIcon/>
            </NavLinkStyled>
        </NavItem>
    </NavList>
}