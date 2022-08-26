import React from "react";
import * as SearchStyle from "../styles/searchStyle";
import { PageContainer } from "../components/PageContainer";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import SearchResultCount from "../components/SearchResultCount";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Search({ phones, saveCart }) {
    const { keyword } = useParams();

    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <PageContainer>
            <SearchStyle.TotalLayout>
                <SearchBar keyword={keyword} isShowMore={isShowMore} setIsShowMore={setIsShowMore} />
                <SearchResultCount  phones={phones.length} keyword={keyword} />
                <SearchResult phones={phones} isShowMore={isShowMore} setIsShowMore={setIsShowMore} saveCart={saveCart}/>
            </SearchStyle.TotalLayout>
        </PageContainer>
    );
}