import {FC} from "react";
import {IUser} from "@/types";
import {UsersListItem, UsersListSpan, UsersListStyled} from "@/components";

interface UsersListProps {
    users: IUser[]
}

export const UsersList: FC<UsersListProps> = ({users}) => {
    return <UsersListStyled>
        {users.map((user, i) => (
            <UsersListItem key={i}>
                {user.name}
                <UsersListSpan>{user.date}</UsersListSpan>
            </UsersListItem>
        ))}
    </UsersListStyled>
}