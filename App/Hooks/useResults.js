import { useState , useEffect} from "react"
import yelp from "../API/yelp"

export default ()=> {
     const [result , setResult]  = useState([]);
  const [errorMessage , setErrorMessage]  = useState('');
  const SearchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get('/search' , {
        params: {
          limit: 20 , 
          term: searchTerm ,
          location: 'san jose'
        }
  
      });
      setResult(response.data.businesses);
      
    } catch (error) {
      setErrorMessage(" ohhhh Something went Weong!")
    }
  }

 useEffect(() => {
         SearchAPI('Pasta')
 }, [])

 return [SearchAPI , result , errorMessage]
}