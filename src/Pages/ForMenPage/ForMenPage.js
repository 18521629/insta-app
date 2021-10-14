import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

class ForMenPage extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Header/>
                <h1>This is for men page</h1>
            </div>
        );
    }
}

export default ForMenPage;