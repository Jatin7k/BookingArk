import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./propertyList.css"
const PropertyList = () => {
  const {data,loading,error} = useFetch(
    "http://localhost:8800/api/hotels/countByType"
    );
    const images =[
      "https://pix10.agoda.net/hotelImages/267/267770/267770_17020719200050841204.jpg?ca=13&ce=1&s=1024x768",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/20/be/a4/3a/raviz-exterior.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",

    ];
  return (
    <div className="pList">
    {loading ? (
      "loading"
    ) : (
      <>
        {data &&
          images.map((img,i) => (
            <div className="pListItem" key={i}>
              <img
                src={img}
                alt=""
                className="pListImg"
              />
              <div className="pListTitles">
                <h1>{data[i]?.type}</h1>
                <h2>{data[i]?.count} {data[i]?.type}</h2>
              </div>
            </div>
          ))}
      </>
    )}
  </div>
  )
}

export default PropertyList
