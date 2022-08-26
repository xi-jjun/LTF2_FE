import * as Result from "../styles/searchResultStyle";
import PhoneList from "../components/PhoneList";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function SearchResult({ phones, isShowMore, setIsShowMore, saveCart }) {
    const onClick = () => setIsShowMore(!isShowMore);

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
                    <PhoneList phones={phones} saveCart={saveCart} /> :
                    <PhoneList phones={phones} search saveCart={saveCart} />
                }
            </Result.ResultList>
        </Result.ResultBox>
    );
}