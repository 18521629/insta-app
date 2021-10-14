import React from "react";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

class RingPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <h1>This is for ring page</h1>
            </div>
        );
    }
}

export default RingPage;