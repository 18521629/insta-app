import React from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

class BraceletPage extends React.Component{
    render() {
        return(
            <div>
                <Navbar/>
                <Header/>
                <h1>This is Bracelet Page</h1>
                <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <ProductCard
                            image = "https://lh3.googleusercontent.com/proxy/_tzisQv4DbbEFHJETrBcnRZqQ3v4s1tCigeuV3552zQJwOR3Ud2EYn5YJKakVnkoogjv7bUxUQ7C8bQT48-SftvVI9DJPPRh_aG49ZbvcL4a2of7vkikLFFtuNLNSIdLacNeZ26jaLitbeCVt4xDnfRUwnEr19XPks6b_tq2YEM"
                            title = "Vòng tay gắn chuông"
                            price = "150.000"
                        />
                    </div>
                    <div class="col-sm-4">
                        <ProductCard
                            image = "https://bizweb.dktcdn.net/100/090/662/products/vong-tay-handmade-nu-3.jpg?v=1614570377983"
                            title = "Vòng tay vintage"
                            price = "130.000"  
                        />
                    </div>
                    <div class="col-sm-4">
                        <ProductCard
                            image = "https://www.chapi.vn/img/product/2017/8/26/vong-deo-tay-handmade-da-xanh-xinh-xan-500x500.jpg"
                            title = "Vòng tay đá"
                            price = "125.000"
                        />
                    </div>
                    <div class="col-sm-4">
                        <ProductCard
                            image = "http://bizweb.dktcdn.net/thumb/grande/100/345/596/products/htb1x8exlvxxxxbcxxxxq6xxfxxxc.jpg?v=1548647134677M"
                            title = "Vòng tay đính đá"
                            price = "145.000"
                        />
                    </div>
                    <div class="col-sm-4">
                        <ProductCard
                            image = "https://lh3.googleusercontent.com/proxy/67SXk5ai5_Lf1HR_apXFDuVm6qJnq7IwTnDHXEgDY5L-cCzW0qIpHgtqcVqMgqkj5_c2gvAoubCPyQYe7pMTewCfZVmp1TqjIvDDYKckU0a3nQ"
                            title = "Vòng tay lá"
                            price = "120.000"  
                        />
                    </div>
                    <div class="col-sm-4">
                        <ProductCard
                            image = "https://bizweb.dktcdn.net/100/345/596/products/vong-tay-gom-handmade.jpg?v=1548646967820"
                            title = "Vòng tay hoa cúc"
                            price = "115.000"
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default BraceletPage