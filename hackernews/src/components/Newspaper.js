import React, { useState, useEffect } from 'react';
import Article from './Article';
import { getStoryIds } from '../services/hnApi';
import '../styles/style.css';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';


export default function Newspaper() {

    const { count } = useInfiniteScroll();
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let separator = '/';

    return (
        <div>
            <div className="head">
                <div className="headerobjectswrapper">
                    <div className="weatherforcastbox"><span style={{ fontStyle: 'italic' }}>Developed using <br />Hacker News API <br />and<br /> ReactJS</span></div>
                    <header>Hacker News</header>
                </div>
                <div className="subhead">Date: {date} {separator} {month} {separator} {year}</div>
            </div>
            <div className="content">
                <div className="columns">
                    {storyIds.slice(0, count).map(storyId => (
                        <Article key={storyId} storyId={storyId} />
                    ))}

                </div>
            </div>
        </div>
    );
}
