import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/index.js";
import "./style.css";
import SearchResults from "./components/SearchResults/index.js";

export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false);
    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    

    useEffect(() => {
        const getUsers = async () => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
        };
        getUsers().catch(null);
    }, []);

   

    const handleCloseSearch = () => {
        setIsAtTop(false); 
        setResult([]);
    }; 
    const handleSearchClick = (searchText) =>{
        setIsAtTop(true);
        if(data?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filterData = data.filter((value) => (
               
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.phone.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) || 
                    value.username.toLowerCase().includes(searchTextMinus)
                )
            );
            setResult(filterData);
        }
    };
    console.log(result);
    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
           <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} isSearching={isAtTop}></SearchBox>
           <SearchResults result={result} isSearching={isAtTop} ></SearchResults>
         </div>
    );
}