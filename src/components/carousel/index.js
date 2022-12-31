import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NatureBg, NatureBg1, NatureBg2 } from '../../assets';
import './index.css'

const Carousel = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='d-flex justify-content-center text-center align-items-center '>
        <OwlCarousel className='content-carousel' loop={true} items={3} margin={8} autoplay ={true} center={true} >  
            <div class='item'>
                <div class="card">
                    <img src={NatureBg} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Bangunan ini kerap disebut sebagai salah satu istana paling indah yang ada di Indonesia. Keunikan utama dari arsitektur istana ini adalah kombinasi unsur Melayu, Islam, India, Spanyol, dan Italia di dalamnya.</p>
                    </div>
                </div>
            </div>
            <div class='item'>
                <div class="card">
                    <img src={NatureBg1} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Masjid Kesultanan Aceh ini dibangun oleh Sultan Iskandar Muda, terletak tepat di jantung Kota Banda Aceh yang menjadikan titik pusat dari segala kegiatan di Aceh Darussalam. Masjid ini mirip dengan bangunan megah Taj Mahal di India dengan memberikan nuansa sholat seperti di Masjid Nabawi.</p>
                    </div>
                </div>
            </div>
            <div class='item'>
                <div class="card">
                    <img src={NatureBg2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Kota Padang memiliki banyak tempat wisata yang menarik untuk dikunjungi. Kota Padang terkenal dengan pesisirnya karena letak kota Padang yang tidak terlalu jauh dari bibir pantai. Bangunan-bangunan ikonik juga menjadi salah satu daya tarik Padang terhadap wisatawan yang berkunjung ke kota ini.</p>
                    </div>
                </div>
            </div>
        </OwlCarousel>  
      </div>
      </div>
    </div>
  )
}

export default Carousel
