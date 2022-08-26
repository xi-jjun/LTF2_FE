import { useNavigate } from "react-router-dom";
import * as ResultCount from "../styles/searchResultCountStyle";
import { LGButton } from "./Button";

export default function SearchResultCount({phones, keyword}) {
    const navigate = useNavigate();

    const goHome = () => navigate("/");

    return (
        <ResultCount.CountBox>
            <span>
                "{keyword}"
            </span>
            에 대한 검색 결과는
            {(phones > 0) ?
                <span>
                    &nbsp;{phones}건입니다.
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