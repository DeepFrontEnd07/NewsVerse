import React,{useState,useEffect} from 'react'
import Sports from './Sports'

function Sportscontainer() {
    const [articles, setArticles] = useState([]);
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchArticles = async () => {
          try {
            const response = await fetch(
              "https://newsapi.org/v2/top-headlines?category=sports&apiKey=7d3a66910ee94d2f9b38eeae8a3aa428"
            ); // Replace with your API URL
            const data = await response.json();
    
            setArticles(data.articles); // Update state with the articles
          } catch (error) {
            console.error("Error fetching the articles:", error);
          } finally {
            setLoading(false); // Set loading to false after fetch completes
          }
        };
        fetchArticles();
      }, []);
  return (
    <>
    <div id="h11">Sports_News</div>

<div className="container my-5">
  <div className="row g-3">
    {articles.map((element) => (
      <div className="col-md-4" key={element.url}>
        <Sports
          title={element.title}
          newsUrl={element.url}
          desc={element.description}
          imageUrl={element.urlToImage}
        ></Sports>
      </div>
    ))}
  </div>
</div>

    </>
  )
}

export default Sportscontainer
