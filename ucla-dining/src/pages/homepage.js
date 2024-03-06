import Header from '../components/header'; 
import Search from '../components/search'; 
import FilterButtons from '../components/filter-button';
import Card from '../components/card'; 
import CardDishes from '../components/card-dishes';
import CardDiningHall from '../components/card-dining-hall';
import '../styles/header.css';
import '../styles/general.css';
import '../styles/search.css';
import '../styles/card.css';


export default function(Homepage) {
    return(
        <>
      <Header/>
      <Search/>
      <FilterButtons/>

      <div class="grid">
        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/feast.webp'
            diningHallName = "FEAST at Rieber"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/deneve.webp'
            diningHallName = "De Neve"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/bplate.webp'
            diningHallName = "Bruin Plate"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/epicuria.webp'
            diningHallName = "Epicuria"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/study.webp'
            diningHallName = "The Study"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/rende.webp'
            diningHallName = "Rendezvous"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

        <Card>
          <CardDiningHall
            diningHallImage = '../prop-assets/drey.webp'
            diningHallName = "The Drey"
          />

          <CardDishes
            dishName = "Chicken Katsu Cutlet Curry Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Teriyaki Glazed Tofu Bowl"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
           <CardDishes
            dishName = "Takoyaki"
            starRating = "./prop-assets/3-stars.svg"
            numRating = "3.0"
            numOfRatings = "10"
          />
        </Card>

      </div>
    
    </>
    )
}