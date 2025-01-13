import React,{useState,useEffect} from "react";
import Home from "./Home";
import './Container.css'
import pic2 from './Images/pic2.jpg'
import pic3 from './Images/pic3.jpg'
import pic4 from './Images/pic4.jpg'
import pic5 from './Images/pic5.jpg'


const images=[pic2,pic3,pic4,pic5]

function Container() {

    const [currentIndex,setCurrentIndex]=useState(0)
        
        useEffect(()=>{
            const imageSlider=()=>{
                setCurrentIndex((prevIndex)=>(prevIndex+1)% images.length)
            }
            const intervalID=setInterval(imageSlider,6000)
    
            return ()=> clearInterval(intervalID)
        },[])



    const [articles, setArticles] = useState([]); 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Fetch data from the API when the component mounts
        const fetchArticles = async () => {
          try {
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=7d3a66910ee94d2f9b38eeae8a3aa428"); // Replace with your API URL
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
    {/* News Slider */}

    <div className="slider">
        <img src={images[currentIndex]} alt="Photo nhi aayi" className="images" />
    </div> 
    {/* <div className="slider"></div> */}
    <div id="h1">Top_HeadLines</div>


      <div className="container my-5">
        <div className="row g-3">
        {articles.map((element) =>(
             <div className="col-md-4" key={element.url}>
            <Home
              title={element.title}
              newsUrl={element.url}
              desc={element.description}
              imageUrl={element.urlToImage}></Home>
          </div>

        ))}
          
        </div>
      </div>
    </>
  );
}

export default Container;
