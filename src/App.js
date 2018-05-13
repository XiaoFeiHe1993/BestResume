import React, {Component} from 'react';
import ContactPage from './component/ContactPage';
import TimePage from './component/TimePage';
import WordCould from './component/WordCould';
import ProjectPage from './component/ProjectPage';
import HelloPage from './component/HelloPage';
import AboutMe from './component/AboutMe';

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