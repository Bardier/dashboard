import {SignInForm} from "@/blocks";
import {WrapperStyled} from "@/ui";
import {mainBgColor} from "@/styles";

export const SignInScreen = () => {
    return <WrapperStyled backgroundColor={mainBgColor}
                          minHeight='100vh'
                          display='flex'
                          justifyContent='center'
                          padding='160px 0 0'
    >
        <SignInForm/>
    </WrapperStyled>
}
