export default function SearchResultsItems({name, email}){
    return(
    <div style={ {backgroundColor: "#9b9b9b", marginTop: 5, marginBottom: 5, width: "100%"}}>
    <p>{name}</p>
    <p>{email}</p>
    </div>
    )
}