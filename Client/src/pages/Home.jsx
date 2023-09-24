import Favorite from "../components/Favorites";
import Categories from "../components/Categories";


function Home() {
    return (
        <div>
            <h1>Hey Foodie!</h1>
        
            <Favorite />

            <Categories />
        </div>
    )
}

export default Home;