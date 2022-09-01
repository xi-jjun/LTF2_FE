import * as Result from "../styles/searchResultStyle";
import PhoneList from "../components/PhoneList";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

export default function SearchResult({ searchPhones, isShowMore, setIsShowMore, saveCart, propsList }) {
    const onClick = () => setIsShowMore(!isShowMore);

    const [filterOpt, setFilterOpt] = useState({ planId: 1 });

    return (
        <Result.ResultBox>
            <Result.ResultBar>
                <div className="result">
                    검색 결과
                </div>
                {(isShowMore) ? 
                    <div></div> :
                    <div className="more" onClick={onClick}>
                        더 보기
                        <KeyboardArrowRightIcon fontSize="small"></KeyboardArrowRightIcon>
                    </div>
                }
            </Result.ResultBar>
            <Result.ResultList>
                {(isShowMore) ?
                    <PhoneList phones={searchPhones} saveCart={saveCart} propsList={propsList} filterOpt={filterOpt}/> :
                    <PhoneList phones={searchPhones} search saveCart={saveCart} propsList={propsList} filterOpt={filterOpt}/>
                }
            </Result.ResultList>
        </Result.ResultBox>
    );
}