import { FaRegCalendar } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import {v4} from 'uuid'

import SideBar from '../SideBar';
import Card from "../Cards";
import { Component } from "react";
import Carousel from "../Carousel";
import RecentReleases from "../RecentReleases";

// import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import './index.css'

const cardsList = [
    {
        id: 1,
        iconColor: 'sky-blue',
        title: 'My Saved Library 1',
        text: 'dd-mm-yyyy'
    },
    {
        id: 2,
        iconColor: 'purple',
        title: 'My Saved Library 2',
        text: 'dd-mm-yyyy'
    },
    {
        id: 3,
        iconColor: 'green',
        title: 'My Saved Library 3',
        text: 'dd-mm-yyyy'
    },
    {
        id: 4,
        iconColor: 'orange',
        title: 'My Saved Library 4',
        text: 'dd-mm-yyyy'
    },
    {
        id: 5,
        iconColor: 'red',
        title: 'My Saved Library 5',
        text: 'dd-mm-yyyy'
    }
]

const apiStatusConstans = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'INPROGRESS',
    failure: 'FAILURE'
}


class Home extends Component{
    state = {
        apiStatus: apiStatusConstans.initial,
        homeData: [],
        viewMore: false
    }

    componentDidMount(){
        this.getHomeData()
    }

    getHomeData = async () => {
        this.setState({apiStatus: apiStatusConstans.inProgress})

        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-03-24&sortBy=publishedAt&apiKey=36c6d140fece4aa0aa54bfb8acf311e6';

        const response = await fetch(url);
        if (response.ok === true){
            const result = await response.json();
            
            const updatedData = result.articles.map(item => ({
                id: v4(),
                title: item.title,
                description: item.description,
                imgUrl: item.urlToImage,
            }))
            this.setState({apiStatus: apiStatusConstans.success, homeData: updatedData})
       
        }
    }

    loaderView = () => {
        return (
            <div className='loader'>
                <Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
            </div>
        )
    }

    onClickViewMore = () => {
        this.setState(prevState => ({viewMore: !prevState.viewMore}))
    }

    renderHomeData = () => {
        const {homeData, viewMore} = this.state
        const carouselOne = homeData.slice(1, 15)
        const carouselTwo = homeData.slice(16, 30)

        const viewMoretext = viewMore ? 'View Less': 'View More'
        return (
            <>
                <div className="carousel-container">
                    <Carousel carouselOne={carouselOne}/>
                </div>
                {viewMore && 
                    (<div className="carousel-container">
                        <Carousel carouselOne={carouselTwo}/>
                     </div>)
                }
                <button className="view-more-btn" onClick={this.onClickViewMore}>{viewMoretext}</button>
            </>
            
        )
    }

    displayHomeData = () => {
        const {apiStatus} = this.state

        switch(apiStatus){
            case apiStatusConstans.inProgress:
                return this.loaderView()
            case apiStatusConstans.success:
                return this.renderHomeData()
            case apiStatusConstans.failure:
                return 'failure'
            default:
                return null
        }

    }


    render(){
        return(
            <>
                <SideBar/>
                <div className='home-container'>
                    <div className="home-responsive-container">
                        <div className='home-header'>
                            <div className="side-bar-text">
                                <div className='home-header-text-container'>
                                    <p className="title">Good Afternoon Akshay,</p>
                                    <p className="subtitle">You're subscribed to Retail plan</p>
                                </div>
                            </div>
                            <div className="calender-date">
                                <div className="calender">
                                    <FaRegCalendar className="home-icon"/>
                                    <p className="text"> Today April 24,</p>
                                </div>
                                <div className="calender">
                                    <MdAccessTime className="home-icon"/>
                                    <p className="text"> 16:42</p>
                                </div>
                                <FiBell className="home-bell-icon"/>
                            </div>
                        </div>
                        <ul className="cards-container">
                            {cardsList.map(item => <Card data={item} key={item.id}/>)}
                        </ul>
        
                        <div className="home-data-container">
                            <div className="home-data-carousel">
                                {this.displayHomeData()}
                            </div>
                            <div className="recent-searches">
                                <RecentReleases/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }
}


export default Home