import {FC} from "react";
import {SideBar} from "@/blocks";
import {Logo, SideBarNav} from "@/components";

export const LeftSideBar: FC = () => {
    return <SideBar>
        <Logo/>
        <SideBarNav/>
    </SideBar>
}