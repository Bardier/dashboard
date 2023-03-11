import {FC} from "react";
import {Link} from "react-router-dom";

export const ErrorScreen: FC = () => {
    return <p>
        Error
        <Link to='/'>Home</Link>
    </p>
}