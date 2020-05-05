import React from 'react'
import Background from '../telstra.jpeg'


function Home() {

    var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: {Background }
  };

    return (
        <div style={sectionStyle}>
            <h1>About Telstra</h1>
            <p>Telstra Corporation Limited is an Australian telecommunications company which builds and operates telecommunications networks and markets voice, mobile, internet access, pay television and other products and services.

            Telstra has a long history in Australia, originating together with Australia Post as the Postmaster-General's Department. Telstra is now fully privatised and was undergoing a change program to become more customer focused under its previous CEO, David Thodey.</p>
        </div>
    )
}

export default Home