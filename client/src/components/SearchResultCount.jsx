import { useNavigate } from "react-router-dom";
import * as ResultCount from "../styles/searchResultCountStyle";
import { LGButton } from "./Button";

export default function SearchResultCount({searchPhones, keyword}) {
    const navigate = useNavigate();

    const goHome = () => navigate("/");

    return (
        <ResultCount.CountBox>
            <span>
                "{keyword}"
            </span>
            에 대한 검색 결과는
            {(searchPhones.length > 0) ?
                <span>
                    &nbsp;{searchPhones.length}건입니다.
                </span> :
                <>
                    <span>
                        &nbsp;없습니다.
                    </span>
                    <div className="goHome">
                        <LGButton
                            onClick={goHome}
                            variant="primary"
                        >메인페이지로</LGButton>
                    </div>
                </>
            }
            
        </ResultCount.CountBox>
    );
}