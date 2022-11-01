import React, {useState, useEffect} from 'react';
import GifItem from '../GifItem/GifItem';
import './GifContainer.css';

const GifContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const getGifs = async () => {
            setLoading(true);
            const api_key = "09KzeP3q8ZXynbTvJ87MmF5TBNQREl8d";
            try {
                const res = await fetch(`https://api.giphy.com/v1/gifs/search?q="memes"&limit=9&api_key=${api_key}`);
                const { data } = await res.json();
                setData(data)
            } catch (error) {
                console.log("error", error)
            } finally {
                setLoading(false)
            }
        }

        getGifs();

    }, [])

    return (
        <div className="gridContainer">
            {
                loading?
                    <h1>Cargando...</h1>
                :
                    <>
                        {
                            data?.map((gif) => (
                                <div>
                                    <GifItem title={gif?.title} img={gif.images?.downsized_medium.url} />
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default GifContainer