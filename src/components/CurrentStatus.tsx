import styled from "styled-components";
import { Measure } from "./Measure";
import { WiStrongWind } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { WiHail } from "react-icons/wi";

interface CurrentStatusProps {
  currentWeather: CurrentWeather;
}

const measures = [
  {
    id: "wind",
    prop: "wind_kph",
    icon: WiStrongWind,
    measure: "kph",
  },
  {
    id: "humidity",
    prop: "humidity",
    icon: WiRaindrop,
    measure: "%",
  },
  {
    id: "precipitation",
    prop: "precip_mm",
    icon: WiHail,
    measure: "mm",
  },
];

export function CurrentStatus({ currentWeather }: CurrentStatusProps) {
  const { temp_c, condition } = currentWeather;
  return (
    <Wrapper>
      <IconWrapper>
        <img src={condition.icon} />
      </IconWrapper>
      <TempWrapper>
        <Temp>
          {temp_c}
          <span>&deg;c</span>
        </Temp>
      </TempWrapper>
      <MeasuresWrapper>
        {measures.map((m) => {
          return (
            <Measure
              key={m.id}
              Icon={m.icon}
              measure={m.measure}
              value={selectProp(currentWeather, m.prop)}
            />
          );
        })}
      </MeasuresWrapper>
    </Wrapper>
  );
}

function selectProp(currentWeather: CurrentWeather, propName: string) {
  switch (propName) {
    case "humidity":
      return currentWeather.humidity;
    case "wind_kph":
      return currentWeather.wind_kph;
    case "precip_mm":
      return currentWeather.precip_mm;
    default:
      break;
  }
}

// styling
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 5rem 0;
  & div {
    flex-grow: 2;
    min-width: 200px;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  flex-grow: 1;
  & img {
    transform: scale(2);
  }
`;
const TempWrapper = styled.div`
  & .temp {
    font-size: 10rem;
    font-weight: 100;
    position: relative;
  }

  & .deg {
    font-size: 3rem;
    position: absolute;
    top: 0px;
    right: -35px;
  }
`;

export const Temp = styled.span`
  font-size: 10rem;
  font-weight: 100;
  position: relative;
  & span {
    font-size: 3rem;
    position: absolute;
    top: 0px;
    right: -35px;
  }
`;
const MeasuresWrapper = styled.div``;
