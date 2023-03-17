import "./FeaturedProperties.css"
import useFetch from "../../hooks/useFetch"
import { Oval } from 'react-loader-spinner'

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BASE_URL}/hotels?limit=4`);
    // console.log(data)

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 4)

    return (
        <div className="fp">
            {
                loading ? <Oval
                    height={50}
                    width={50}
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#4fa94d"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                /> : <>
                    {
                        data.map((item, i) => (
                            <div className="fpItem" key={i}>
                                <img
                                    src={item?.photos[i]}
                                    className="fpImg"
                                />
                                <span className="fpName">{item?.title}</span>
                                <span className="fpCity">{item?.city}</span>
                                <span className="fpPrice">Starting from ${item?.cheapestPrice}</span>
                                <div className="fpRating">
                                    <button>{(rndInt + i) % 5}⭐</button>
                                    <span>Excellent</span>
                                </div>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}

export default FeaturedProperties