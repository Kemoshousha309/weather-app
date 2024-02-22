import { useState } from "react";

export function useSearchHandler() {
    const [value, setValue] = useState<string>("");

    const searchChangeHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    

    return {searchValue: value, searchChangeHandler}
}