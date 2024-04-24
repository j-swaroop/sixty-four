import {v4} from 'uuid'
import { Oval } from "react-loader-spinner";
import RecentItem from '../RecentItem';

import { Component } from "react";
import './index.css'

const apiStatusConstans = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    inProgress: 'INPROGRESS',
    failure: 'FAILURE'
}

class RecentReleases extends Component{
    state = {
        apiStatus: apiStatusConstans.initial,
        recentData: [],
        selectVal: 'USA'
    }

    componentDidMount(){
        this.getRecentData()
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

    getRecentData = async () => {
        this.setState({apiStatus: apiStatusConstans.inProgress})

        // const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=36c6d140fece4aa0aa54bfb8acf311e6'
        const url = 'https://api.webz.io/newsApiLite?token=c7414d09-bce2-4f48-99d4-d8f432143ffa&q=Bitcoin'

        const response = await fetch(url)
        if (response.ok === true){
            const data = await response.json()
            const updatedData = data.posts.map(item => ({
                id: v4(),
                author: item.author,
                content: item.highlightText,
                publishedAt: item.published
            }))

            this.setState({apiStatus: apiStatusConstans.success, recentData: updatedData})
        }
        
    }

    renderRecentData = () => {
        const {recentData} = this.state
        // const recentUpdatedData = recentData.slice(0, 55)
        return(
            <ul className='recent-data'>
                {recentData.map(item => <RecentItem key={item.id} data={item}/>)}
            </ul>
        )
    }

    displayRecentData = () => {
        const {apiStatus} = this.state

        switch(apiStatus){
            case apiStatusConstans.inProgress:
                return this.loaderView()
            case apiStatusConstans.success:
                return this.renderRecentData()
            case apiStatusConstans.failure:
                return 'failure'
            default:
                return null
        }

    }

    onChangeSelectVal = event => {
        this.setState({selectVal: event.target.value})
    }

    render(){
        const {selectVal} = this.state

        return(
            <div className='recent-releases-container'>
                <div className='select-text'>
                    <p className='recent-text'>Recent Releases</p>
                    <select value={selectVal} onChange={this.onChangeSelectVal} className='select-container'>
                        <option value='USA'> Usa</option>
                        <option value='INDIA'> India</option>
                        <option value='UK'> Uk</option>
                    </select>
                </div>
                <hr className='hr-line'/>
                {this.displayRecentData()}
            </div>
        )
    }
}

export default RecentReleases