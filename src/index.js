import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCtoxGbCZbzI2Uf6kCcxS_U0K9renQ6Hxs';


//create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos:[],
        selectedVideo: null };
        
        this.videoSearch('surfboards');

    }

    videoSearch(term){
        YTSearch({key:API_KEY,term:term},(videos) => {
            //only works when the key in the property are same variable name
            this.setState({videos:videos,
            selectedVideo:videos[0]});
            
            // this.setState({videos: videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange= { term =>{this.videoSearch(term)} }/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo =>{this.setState({selectedVideo})}}
                videos={this.state.videos} />
            </div>    
        );
    }
}

//Take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));