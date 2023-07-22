import React,{useState} from 'react';
import axios from 'axios';


const SearchBar  = ({setVideos}) => {
    let [search,setSearch] = useState("");
    
    // console.log(videos)

    function implementSearch(){

        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
                key: "AIzaSyCwSH_WpNXLJ3g2M68GDw2lX-fXOB63S1o",
                part: "snippet",
                maxResults: 50,
                type : "video",
                q: search
            }
        })
        .then(response =>  setVideos(response.data.items))
        .catch(err => console.log(err))

    }

    


    return(
        <div className='searchbar'>
            <input type="text" placeholder="Search" 
               onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={implementSearch}>Search</button>
        </div>
    )
}

export default SearchBar;



// fetch("link", {
//      method: "POST",
//         headers: {},
//         params: {},
//         body: JSON.stringify({}),

// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))