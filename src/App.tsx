import styled from "styled-components";
import { SearchBar } from "./components/Search";
import { CurrentStatus } from "./components/CurrentStatus";
import {  useGetData } from "./hooks/useGetData";
import { useSearchHandler } from "./hooks/useSearchHandler";


function App() {
  const { searchChangeHandler, searchValue } = useSearchHandler();
  const { currentWeather, submitHandler, loading, errMess } = useGetData(searchValue);
  

  let content = <Head>{errMess}</Head>;
  if(currentWeather) {
    content =  <CurrentStatus currentWeather={currentWeather} />;
  }
  return (
    <AppWrapper>
      <SearchBar
        value={searchValue}
        changeHandler={searchChangeHandler}
        submitHandler={submitHandler}
      />
      {loading ? <Head>Loading . . . </Head> : null}
      {!errMess && !currentWeather && !loading ? <Head>Enter a city to see its weather</Head> : null}
      {!loading ? content : null}
    </AppWrapper>
  );
}

export default App;

// styling
const AppWrapper = styled.main`
  width: max(70%, 350px);
  margin: 5rem auto;
`;

const Head = styled.h1`
  text-align: center;
  margin-top: 6rem;
  font-weight: 300;
`;
