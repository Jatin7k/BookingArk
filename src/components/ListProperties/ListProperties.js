import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./listProperties.css"

const ListProperties = () => {
    const {data,loading,error} = useFetch("http://localhost:8800/api/hotels?featured=true&limit=4");
    return (
        <div className='listprop'>
            {loading?("loading") 
            :
            <>{data.map(item=>(

                <div className="listpropItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="listpropImg" />
                <span className="listpropName">ApartHotels </span>
                <span className="listpropCity">Delhi</span>
                <span className="listpropPrice">Starting from ₹1500</span>
                <div className="listpropRating">
                    <button>7.9</button>
                    <span>Execellent</span>
                </div>
            </div>
            <div className="listpropItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                    alt=""
                    className="listpropImg"
                    />
                <span className="listpropName">Luxor Hotel & Casino</span>
                <span className="listpropCity">Goa</span>
                <span className="listpropPrice">Starting from ₹3200</span>
                <div className="listpropRating">
                    <button>8.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="listpropItem">
                <img
                    src="https://i.insider.com/613a294e2534ab0018537e09?width=1136&format=jpeg"
                    alt=""
                    className="listpropImg"
                    />
                <span className="listpropName">Four Seasons Hotel</span>
                <span className="listpropCity">Kolkata</span>
                <span className="listpropPrice">Starting from ₹1800</span>
                <div className="listpropRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="listpropItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                    alt=""
                    className="listpropImg"
                />
                <span className="listpropName">Hilton Garden</span>
                <span className="listpropCity">Mumbai</span>
                <span className="listpropPrice">Starting from ₹5000</span>
                <div className="listpropRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
                ))
            }</>}
        </div>
        )
}

export default ListProperties
