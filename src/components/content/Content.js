import { Component } from "react";
import { NavLink } from "react-router-dom";

import Search from "../search/Search";
import { countryCodes } from "../../constants";
import img404 from "../../404.svg";
import "./Content.css";


class Content extends Component {

  state = {
    items: []
  };

  addItems = (items) => {
    console.log(items, "Content");
    this.setState({ items });
  };

  searchCountryCode = (nameCountry) => {
    let index = countryCodes.findIndex(el => el.name == nameCountry)
    return countryCodes[index].code;
  }

  render() {
    return (
      <div className="content">
        <Search addItems={this.addItems} />
        <div className="content__items">
          {
            typeof this.state.items !== 'string'
              ?
              this.state.items.map((el, i) => {
                  return (
                    <div className="content__item" key={i}>
                      <div className="content__item__inner">
                        <h4 className="content__item-title">
                          <NavLink to={`/recipe/${el.idMeal}`}>{el.strMeal}</NavLink>
                        </h4>
                        <div className="content__item-text">{el.strInstructions}</div>
                        <div className="content__item__tags">
                          <img src={`https://www.countryflags.io/${this.searchCountryCode(el.strArea)}/flat/32.png`}/>
                          <div className="content__item__tags-country">{el.strArea}</div>
                          <div className={`content__item__tags-category ${el.strCategory}`}>{el.strCategory}</div>
                        </div>
                        <div className="content__item__ingred">{
                          el.ingred && el.ingred.map(_el => {
                            return (
                              <div className="content__item__ingred__inner">
                                <div className={`content__item__ingred-name ${el.strCategory}`}>{_el.name }</div>
                                <div className={`content__item__ingred-measure ${el.strCategory}`}>{_el.measure }</div>
                              </div>
                            )
                          })
                        }</div>
                      </div>
                    </div>
                  );
                })
              : <div className="content__item-not-found" >
                <img src={ img404 } className="img404"/>
                </div>
          }
        </div>
      </div>
    );
  }
}

export default Content;
