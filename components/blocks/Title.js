import React from "react";
import {TitleText, TitleWrapper} from "../../styles/components/TitleStyle";

const Title = ({children}) => {
    // console.log(props)
    return (
        <TitleWrapper>
            <TitleText>{children}</TitleText>
        </TitleWrapper>
    );
};

export default Title;