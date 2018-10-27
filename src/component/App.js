import React, {Component} from 'react';
import ContactPage from './ContactPage';
import TimePage from './TimePage';
import WordCould from './WordCould';
import ProjectPage from './ProjectPage';
import HelloPage from './HelloPage';
import AboutMe from './AboutMe';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // $('#dowebok').fullpage({
        //     sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
        // });
    }

    render() {
        return (
            <div id="dowebok">
                <HelloPage />

                <AboutMe />

                <WordCould />

                <ProjectPage />

                <TimePage />

                <ContactPage/>
            </div>
        );
    }
}