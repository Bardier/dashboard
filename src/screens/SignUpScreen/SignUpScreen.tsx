import {SignUpForm} from "@/blocks";
import {WrapperStyled} from "@/ui";
import {mainBgColor} from "@/styles";

export const SignUpScreen = () => {
    return <WrapperStyled backgroundColor={mainBgColor}
                          minHeight='100vh'
                          display='flex'
                          justifyContent='center'
                          padding='160px 0 0'
    >
        <SignUpForm/>
    </WrapperStyled>
}