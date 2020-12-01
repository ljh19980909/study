import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Swiper from '../../../node_modules/swiper';
import '../../../node_modules/swiper/dist/css/swiper.min.css';
export default class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [],
        };
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {this.state.banners.map((v, i) => {
                        return (
                            <div className="swiper-slide" key={i}>
                                <div className="slider-nav">
                                    <img
                                        src={v.imageUrl}
                                        width="100%"
                                        height="100%"
                                        alt={v.typeTitle}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        );
    }
    componentDidMount() {
        //   轮播图数据
        fetch('http://127.0.0.1:1000/banner')
            .then(res => res.json())
            .then(data => {
                this.state.banners = data.banners;
                this.setState(
                    {
                        banners: [...this.state.banners],
                    },
                    () => {
                        this.initSwiper();
                        console.log(this.state.banners);
                    }
                );
            });
    }
    initSwiper() {
        this.swiper = new Swiper('.swiper-container', {
            loop: true, //无缝轮播
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2000,
        });
    }
}