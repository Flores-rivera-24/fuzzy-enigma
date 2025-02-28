import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './Loading';
import { PokemonCard } from './Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(0);
    const apiKey = '3J7VIoLYWsWRQOBewthJbjmFSmVvzNUP';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dogs&limit=10`;
    const { data, hasError, isLoading } = useFetch(url);
    const gif = data?.data?.[counter];


    return (
        <>
            <h1>Buscador de GIFs</h1>
            <hr />
            {isLoading ? (
                <LoadingMessage />
            ) : hasError ? (
                <p>Error al cargar los GIFs</p>
            ) : (
                <>
                    {gif && (
                        <div>
                            <h2>{gif.title}</h2>
                            <img src={gif.images.fixed_height.url} alt={gif.title} style={{ width: '300px'}}
                            />
                        </div>
                    )}
                    <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
                    <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
                </>
            )}
        </>
    );
}

