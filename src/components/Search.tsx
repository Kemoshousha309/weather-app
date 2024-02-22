import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
    value: string,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    submitHandler: (e: React.FormEvent<HTMLFormElement>) => void
}

export function SearchBar({value, changeHandler, submitHandler}: SearchBarProps) {

    return (
        <SearchWrapper onSubmit={submitHandler}>
            <SearchInput onChange={changeHandler} value={value}/>
            <SearchBtn><CiSearch strokeWidth=".7px" /></SearchBtn>
        </SearchWrapper>
    )
}


const SearchWrapper = styled.form`
    display: flex;
    justify-content: space-around;
`

const SearchInput = styled.input.attrs({placeholder: "Enter The City", type: "text"})`
    border: var(--main-color-light);
    outline: none;
    box-shadow: 0px 0px 3px 0px #8888885e;
    border-radius: 5px;
    font-family: inherit;
    color: inherit;
    transition: all .3s;
    font-size: 1rem;
    padding: 1rem;
    flex-basis: max(70%, 200px);
    flex-shrink: 1;
    &:focus {
        box-shadow: 0px 0px 3px 0px var(--secondary-color);
    }

`

const SearchBtn = styled.button`
    border: none;
    background-color: transparent;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        color: var(--secondary-color);
    }
    &:active {
        transform: translateY(.2rem);
    }
    & svg {
        font-size: 2rem;
    }
    
`
