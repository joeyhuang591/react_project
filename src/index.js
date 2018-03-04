import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCtoxGbCZbzI2Uf6kCcxS_U0K9renQ6Hxs';


//create a new component. This component should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = { videos:[] };

        YTSearch({key:API_KEY,term:'surfboards'},(videos) => {
            //only works when the key in the property are same variable name
            this.setState({videos});
            
            // this.setState({videos: videos});
        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>    
        );
    }
}

//Take this component's generated HTML and put it on the page (in the dom)
ReactDOM.render(<App />, document.querySelector('.container'));