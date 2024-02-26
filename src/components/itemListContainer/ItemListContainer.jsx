import './itemListContainer.css';

export const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h1 className='saludo'>{greeting}</h1>
        </div>
    )
}