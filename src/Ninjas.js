import React from 'react';

const ninjaList = ({ninjaList, deleteNinja}) => {
    const mappedNinjaList = ninjaList.map((ninja)=> {
        if(ninja.age > 15){
            return( 
                <div className="ninja" key={ ninja.id }>
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                    <button onClick={ () => deleteNinja(ninja.id) }>Delete</button>
                    <br/>
                </div>
            )
        } else{
            return null;
        }
    });
    return(
        <div className="ninja-list">
            { mappedNinjaList }
        </div>
    );
}
export default ninjaList;