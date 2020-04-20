import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';

export default class services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free coctails',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima, dolorum.'   
            },
            {
                icon: <FaHiking /> ,
                title: 'endless Hiking',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima, dolorum.'
            },
            {
                icon: <FaShuttleVan /> ,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima, dolorum.'
            },
            {
                icon: <FaBeer /> ,
                title: 'strongest beer',
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Minima, dolorum.'
            }
        ]
    }
    render() {
        return (
            <section className = "services">
               <Title title = 'services' />
               <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key = {index} className = "service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>   
                    })}
               </div>
            </section>
        )
    }
};

