import React from 'react'
import stile from "./style/recipes.module.css"
import {Link} from "react-router-dom";
import { useDispatch} from 'react-redux';
import {addSingleRecipe} from "../../redux/slice/recipesSlice";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function Recipe({title, image, id, isCard}) {

  const dispatch= useDispatch();
  // const {recipes}= useSelector(state=>state);


  const selectedRecipe= ()=>{

  const recipeObj={
    title:title,
    image:image,
    id:id,
    isCard:false
  }

  
dispatch(addSingleRecipe(recipeObj));
// console.log(recipes);
};




  return (

    // <div className={stile.card} onClick={ selectedRecipe}>
    //      <h2>{title}</h2>
    //      <img src={image} alt="ricetta"/>
    //     {isCard===true ? 
    //     <span className='button' ><Link to={`/recipes/${id}`} >Esplora</Link></span> :
    //     null}  </div>

    <Card  className={stile.responsive} sx={{ padding: "15px 20px", margin:"25px 20px", m:3, marginTop:"30px" }} onClick={ selectedRecipe}>
    <CardActionArea>
      <CardMedia
        component="img"
        sx={{maxWidth:"100%"}}
        image={image}
        alt="foto ricetta"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      
      </CardContent>
    </CardActionArea>
    {isCard===true ? 
    (<CardActions>
      <Button size="large" color="primary" sx={{backgroundColor:"#64732F", color:"white", fontSize:"14"}} className='button'>
      <Link to={`/recipes/${id}`} style={{fontSize:"14"}}>Esplora</Link>
      </Button></CardActions>
     ) : null}
  </Card>


        
  
  )
}

export default Recipe