import React from 'react'
import './Body.css'
import Image1 from "./shared/fpage_winter_2012.jpg"
import Image2 from "./shared/fpage_sales_offers_2006.jpg"
import FooterIcon from "./shared/footer_icon.jpg"

const Body = (props) => {

    const link_1 = props.links_1.map((link) => {
      return <li key={link.id}> - {link.title}</li>;
    })

    const suggestions_1 = props.suggestions.map((suggestion) => {

      return (
        <div className="body__box1" key={suggestion.id}>
          <img src={suggestion.image} alt={suggestion.brand} />
          <div className="body__box1__content">
            <div className="body__box1__content_upper">
              <h5> {suggestion.brand} </h5>
              <h4> {suggestion.description} </h4>
            </div>
            <div className="body__box1__content_down">
              <h3 className="red">
                <del>{suggestion.discount_price !== "" ? suggestion.price.slice(0,-1) : suggestion.price }</del> {suggestion.discount_price}
              </h3>
              <button  className="more__suggestions">
                περισσότερα
              </button>
            </div>
          </div>          
        </div>        
      );
    })

    return (
      <div className="body">
        {/* <SidenavHover /> */}
        {
          // <div className="sidenav__hover">
          //   <div className="sidenav__hover__header">
          //     ΚΑΤΗΓΟΡΙΕΣ
          //   </div>
          // </div>
        }

        {/* FrontPage Image1 */}
        <div className="body__image1">
          <img src={Image1} alt="image1" />
        </div>

        {/* FrontPage Links1 */}
        <div className="body__links1">
          <ul>{link_1}</ul>
        </div>

        {/* FrontPage Suggestions */}
        <div className="body__suggestions1">
          {suggestions_1}
          <div className="more">Δείτε περισσότερες προτάσεις &gt;</div>
        </div>

        {/* FrontPage e-fresh */}

        {/* FrontPage Image2 */}
        <div className="body__image1">
          <img src={Image2} alt="image1" />
        </div>

        {/* FrontPage Links2 */}
        <div className="body__links1">
          <ul>{link_1}</ul>
        </div>

        {/* FrontPage Suggestions2 */}
        <div className="body__suggestions1">
          {suggestions_1}
          <div className="more">Δείτε περισσότερες προτάσεις &gt;</div>
        </div>

        {/* New Arrivals */}
        {/* Offers */}
        {/* FrontPage Image3 */}
        <div className="body__image3">
          <img src={FooterIcon} alt="image__3" />
        </div>
      </div>
    );
}

export default Body
