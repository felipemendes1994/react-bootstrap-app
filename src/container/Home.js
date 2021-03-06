import React, {Component} from 'react';
import {hashHistory} from 'react-router';

import HomeCard from '../ui/HomeCard';

export default class Home extends Component{

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => hashHistory.push('/releases')
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => hashHistory.push('/backlog')
    }

    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => hashHistory.push('/sprints')
    }


    render(){
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardReleases} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        );
    }
}