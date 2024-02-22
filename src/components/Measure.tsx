import styled from "styled-components";
import { IconType } from "react-icons";

interface MeasureProps {
    Icon: IconType,
    value: number | undefined,
    measure: string
}

export function Measure({Icon, value, measure}: MeasureProps) {
   return (
     <Wrapper>
        <span className="icon">
            <Icon strokeWidth="1px" fill="transparent" />
        </span>
        <span className="value">
            {value}
        </span>
        <span className="measure">
            {measure}
        </span>
    </Wrapper>
   )
}


const Wrapper = styled.div`
    
    & .icon svg {
        font-size: 3rem;
        transform: translate(-5px, 14px);
    }

   
    color: var(--main-color-light);
    & .value  {
     font-size: 2rem;
     font-weight: 300;
    }

    & .measure {
        margin: 3px;
    }

`
