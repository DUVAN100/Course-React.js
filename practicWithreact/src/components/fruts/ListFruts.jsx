import ItemFrut from './ItemFrts';

const ListFruts = ({fruts}) => {
    return (
        <>
            <ul>
                {
                fruts.map((frut, index)=>(
                    <ItemFrut key={index} frut = {frut}/>
                ))
                }
            </ul>
        </>
        
        
    )
  }

export default ListFruts