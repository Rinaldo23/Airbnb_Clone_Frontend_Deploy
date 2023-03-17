import useFetch from "../../hooks/useFetch"
import "./Featured.css"
import { Oval } from 'react-loader-spinner'

const Featured = () => {

    const { data, loading, error } = useFetch(`${process.env.REACT_APP_BASE_URL}/hotels/countByCity?cities=Juhu,Bandra,CST`);
    // console.log(data);

    return (
        <div className="featured">
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

                />
                    : <>
                        <div className="featuredItem">
                            <img
                                src="https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                                alt=""
                                className="featuredImg"
                            />
                            <div className="featuredTitles">
                                <h1>Juhu</h1>
                                <h2>{data[0]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img
                                src="https://images.pexels.com/photos/338917/pexels-photo-338917.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                                alt=""
                                className="featuredImg"
                            />
                            <div className="featuredTitles">
                                <h1>Bandra</h1>
                                <h2>{data[1]} properties</h2>
                            </div>
                        </div>
                        <div className="featuredItem">
                            <img
                                src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
                                alt=""
                                className="featuredImg"
                            />
                            <div className="featuredTitles">
                                <h1>CST</h1>
                                <h2>{data[2]} properties</h2>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default Featured