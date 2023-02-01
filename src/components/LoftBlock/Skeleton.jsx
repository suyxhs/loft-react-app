import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className="loft-block"
    speed={3}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="3" rx="10" ry="10" width="270" height="181" /> 
    <rect x="14" y="193" rx="10" ry="10" width="249" height="28" /> 
    <rect x="13" y="233" rx="10" ry="10" width="253" height="78" /> 
    <rect x="21" y="320" rx="10" ry="10" width="88" height="42" /> 
    <rect x="132" y="320" rx="10" ry="10" width="125" height="42" />
  </ContentLoader>
)

export default Skeleton