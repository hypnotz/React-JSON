import SearchResultsItems from "./SearchResultsItems"

export default function SearchResults({result, isSearching}) {
    return(
        <div style={{width: "100%", padding: "1rem 0rem 0rem 0rem"}}>

            
            {!result.length && isSearching && <p>No existen resultados</p>}

        {result?.map((value) => 
        <SearchResultsItems key={value.id} {...value} > </SearchResultsItems>)}
        
        </div>
    );
}