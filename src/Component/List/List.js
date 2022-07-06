import './List.css';


function List(props){
    return(
        <div data-testid="list">
        {props.listArr.length>0 && props.listArr.map((fact)=>{
            return(
                <div className='list-container'>
                    <div className='title-type'>{fact.partOfSpeech}</div>
                    <ol className='order-list'>
                    {fact.definitions!==undefined && fact.definitions!==null &&   fact.definitions.length>0 && fact.definitions.map((def)=>{
                        return(
                            <li className='row'>
                                {def.definition!==undefined && def.definition!==null && def.definition!=='' && <div className='defination'>{def.definition}</div>}
                                {def.example!==undefined && def.example!==null && def.example!=='' && <div className='example'>{def.example}</div>}
                            </li>
                        )
                    })}
                    </ol>
                </div>
            )
        })}
        </div>
    )
}
export default List;