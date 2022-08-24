import React from "react";

import { PageContainer } from "../components/PageContainer";
import { useLocation } from "react-router-dom";

export default function SampleOrder() {
  const location = useLocation();
  return (
    <PageContainer>
      <div>{JSON.stringify(location.state)}</div>
    </PageContainer>
  );
}
