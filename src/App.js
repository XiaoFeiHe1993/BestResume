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

        // 设置transform属性，避免其对z-index属性造成影响
        setTimeout(function () {
            document.getElementById('dowebok').style.transform = 'none';
        }, 1000);
    }

    render() {
        return (
            <div id="dowebok" style={{transform:'none'}}>
                {/*<HelloPage />*/}

                <AboutMe />

                <WordCould />

                <ProjectPage />

                <TimePage />

                {/*<ContactPage/>*/}
            </div>
        );
    }
}