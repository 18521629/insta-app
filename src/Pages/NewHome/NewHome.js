import React from 'react';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestions/Suggestions';
import './newHome.css'
class NewHome extends React.Component{
    render(){
        return(
            <div className="page__content">
            <header>
                <h1>Scarletty</h1>
            </header>
            <div className="featured__items__container">
                <div className="featured__items__title">
                    <h4>Fresh up your day</h4>
                </div>
                <div className="featured__items__wrapper">
                    <div className="featured__items__background">
                    </div>
                    <div className="featured__items__content">
                        <div className="featured__items__name">
                            <h4>Pastel Red Tower</h4>
                            <p>Price: $5.99</p>
                        </div>
                        <div className="featured__items__description">
                            <p>Silky smooth, non-imflammatory tower. Give your skin the touches it deserves.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lipstick__items__container">
                <div className="lipstick__items__title">
                    <h4>Colors to your voice</h4>
                </div>
                <div className="lipstick__items__wrapper">
                    <div className="lipstick__items__card">
                        <div className="lipstick__item__background">
                        </div>
                        <div className="lipstick__item__content">
                            <div className="lipstick__item__name">
                                <h4>Rose Gold Lipstick</h4>
                                <p>Price: $3.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="lipstick__items__card">
                        <div className="lipstick__item__background">
                        </div>
                        <div className="lipstick__item__content">
                            <div className="lipstick__item__name">
                                <h4>Rose Gold Lipstick</h4>
                                <p>Price: $3.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more__categories__container">
                <div className="more__categories__title">
                    <h4>Have a look around our closets</h4>
                </div>
                <div className="more__categories__wrapper">
                    <div className="more__categories__card">
                        <div className="more__categories__box">
                            <div className="more__categories__name">
                                <h4>Accessories</h4>
                            </div>
                            <div className="more__categories__button">
                                <button>Explore <i className="fas fa-arrow-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="more__categories__card">
                        <div className="more__categories__box">
                            <div className="more__categories__name">
                                <h4>Accessories</h4>
                            </div>
                            <div className="more__categories__button">
                                <button>Explore <i className="fas fa-arrow-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="more__categories__card">
                        <div className="more__categories__box">
                            <div className="more__categories__name">
                                <h4>Accessories</h4>
                            </div>
                            <div className="more__categories__button">
                                <button>Explore <i className="fas fa-arrow-circle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scarletty__gallery__container">
                <div className="scarletty__gallery__title">
                    <h4>Be part of #Scarletties</h4>
                </div>
                <div className="scarletty__gallery__wrapper">
                    <div className="scarletty__gallery__item__1">
                        <img src="../../assets/header_1.jpg" alt=""/>
                    </div>
                    <div className="scarletty__gallery__item__2">
                        <img src="../../assets/header_2.jpg" alt=""/>
                    </div>
                    <div className="scarletty__gallery__item__3">
                        <img src="../../assets/header_2.jpg" alt=""/>
                    </div>
                    <div className="scarletty__gallery__item__4">
                        <img src="../../assets/header_1.jpg" alt=""/>
                    </div>
                    <div className="scarletty__gallery__item__5">
                        <img src="../../assets/header.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewHome;