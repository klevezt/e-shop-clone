import React from 'react'

import './Sidenav.css'

import { SIDEBAR_MENU } from "./shared/sidebar_menu";
import { Component } from 'react';
import { Facebook, Twitter, YouTube } from '@material-ui/icons';
import SmartPhone from "./shared/sidebar_smartphone.gif";

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleMouseHoverOut = this.handleMouseHoverOut.bind(this);
    this.state = {
      menu: SIDEBAR_MENU,
      isHovering: false,
      itemHoveredId: 0,
    };
  }

  handleMouseHover(id) {
    this.setState({ isHovering: true, itemHoveredId: id });
    // console.log(this.state.itemHoveredId);
    console.log(this.state.menu[this.state.itemHoveredId].category[0].title);
  }

  handleMouseHoverOut() {
    this.setState({ isHovering: false });
  }

  render() {
    const menu_item = this.state.menu.map((menu) => {
      let isYellow = (
        <div
          className="sidenav__item"
          onMouseEnter={() => this.handleMouseHover(menu.row_id)}
          onMouseLeave={this.handleMouseHoverOut}
          key={menu.row_id}
        >
          {menu.title}
          {menu.badge === "" ? (
            <span> </span>
          ) : (
            <span className="menu__badges"> {menu.badge} </span>
          )}
        </div>
      );
      if (menu.bg_yellow_color) {
        isYellow = (
          <div className="sidenav__item yellow" key={menu.row_id}>
            {menu.title}
            {menu.badge === "" ? (
              <span></span>
            ) : (
              <span className="menu__badges"> {menu.badge} </span>
            )}
          </div>
        );
      }
      return isYellow;
    });

    const hoverItemInfo = this.state.menu[this.state.itemHoveredId].category.map(info => {

       return (
         <div className="sidenav__hover__context_main_category">
           <div className="sidenav__hover__context_main_category__header">
             <h5> {info.title} </h5>
             <div
               className="immm"
               style={{
                 backgroundPosition:
                   "-" +
                   info.cat_id * 80 +
                   "px -" +
                   this.state.menu[this.state.itemHoveredId].row_id * 60 +
                   "px",
               }}
             ></div>
           </div>
           <div className="sidenav__hover__context_main_category_links">
               <ul>
                 {info.content.map(content => {
                    return (
                      <li>
                        {content.title}
                        {content.subtitle.length > 0 ? (
                          <div className="sidenav__hover__context_main_category_links_sub_margin">
                            {content.subtitle.map((sub) => {
                              return (
                                <span className="sidenav__hover__context_main_category_links_subtitle">
                                  <ul><li> {sub.s_title}</li></ul>
                                </span>
                              );
                            })}{" "}
                          </div>
                        ) : null}
                      </li>
                    );
                 })}
               </ul>
           </div>
         </div>
       );
    });

    return (
      <div className="sidenav">
        {menu_item}
        {this.state.isHovering && this.state.itemHoveredId !== null && (
            <div
              className="sidenav__hover"
              onMouseEnter={() =>
                this.handleMouseHover(
                  this.state.menu[this.state.itemHoveredId].row_id
                )
              }
              onMouseLeave={this.handleMouseHoverOut}
            >
              <div className="sidenav__hover___header">
                ΚΑΤΗΓΟΡΙΕΣ / {this.state.menu[this.state.itemHoveredId].title}
              </div>
              <div className="sidenav__hover__context">
                <div className="sidenav__hover__context_main">
                  {hoverItemInfo}
                </div>
                <div className="sidenav__hover__context_promotions">
                  <img
                    src="https://www.e-shop.gr/images/menu_1_afixeis_2_v48.gif"
                    alt="hhh"
                  />
                  <img
                    src="https://www.e-shop.gr/images/menu_1_afixeis_4_v32.gif"
                    alt="hhh"
                  />
                  <img
                    src="https://www.e-shop.gr/images/menu_1_wizard_laptop_opt.png"
                    alt="hhh"
                  />
                </div>
                <div className="sidenav__hover__context_right">
                <a href="/"> ΝΕΕΣ ΑΦΊΞΕΙΣ </a>
                <a href="/"> ΠΡΟΣΦΟΡΕΣ </a>
              </div>
              </div>
            </div>
        )}
        <div className="sidenav__info">
          <h4> Ακολουθήστε μας </h4>
          <div className="sidenav__follow__us">
            <a href="/">
              <Facebook fontSize="large" />
            </a>
            <a href="/">
              <Twitter fontSize="large" />
            </a>
            <a href="/">
              <YouTube fontSize="large" />
            </a>
          </div>
        </div>
        <div className="sidenav__info">
          <div className="sidenav__smartphone">
            <h5>Έχεις Smartphone;</h5>
            <img
              src={SmartPhone}
              alt="smartphone"
              className="sidenav__smartphone__img"
            />
            <img
              src="https://www.e-shop.gr/images/web-menu-android_v2.png"
              alt="android"
            />
            <img
              src="https://www.e-shop.gr/images/web-menu-iphone_v2.png"
              alt="android"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidenav
