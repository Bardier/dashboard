import {FC} from "react";
import {Link} from "react-router-dom";
import {LogoIcon} from "@/assets";

export const Logo: FC = () => {
    return <Link to='/'><LogoIcon/></Link>
}