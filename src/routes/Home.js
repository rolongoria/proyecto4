import React from 'react'
import PicturesCarousel from '../components/PicturesCarousel'
import Pupusas from '../images/pupusas.png';
import Flautas from '../images/flautas.png';
import Enchiladas from '../images/enchiladas.png';
import Gorditas from '../images/gorditas.png';
import '../style-sheets/Home.css';



const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 center-text'>
          <h1><em>Latin-Mexican</em></h1>
            
        </div>
        <div className='col-sm-3'></div>
      </div>

      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 center-text'>
          
          <h2>Inspired Kitchen</h2>   
        </div>
        <div className='col-sm-3'></div>
      </div>

      <div className='row'>
        <div className='col-sm-12'>
          <PicturesCarousel pic1={Pupusas} pic2={Flautas} pic3={Enchiladas} pic4={Gorditas}/>
        </div>  
      </div>

      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 center-text'>
          <h1><em>Cocina Artesanal</em></h1>
            
        </div>
        <div className='col-sm-3'></div>
      </div>

      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6 center-text'>
          
          <h2>Made with Love</h2>   
        </div>
        <div className='col-sm-3'></div>
      </div>

      <div className='row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
          <p>Las Pupusas del Itacate is a fast-casual Latin-Mexican inspired eatery located in Pharr, Texas. 
            Originally established in Reynosa, Mexico in 1995, 
            our concept was founded on the principles of offering people homemade tasty meals with a twist.</p>
          <p>We use 100% natural ingredients in every item on our menu and everything is made from scratch in our kitchen.</p>   
        </div>
        <div className='col-sm-3'></div>
      </div>

    


    </div>
  )
}

export default Home