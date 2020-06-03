import React, { useState, useEffect, memo } from 'react';
import '../styles/style.css';
import { getStory } from '../services/hnApi';

export default memo(function Article({ storyId }) {

    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && setStory(data));
    }, []);

    let fontsize = '2em'

    if ( story.score <= 20 ) {
        fontsize = '1.2em'
    }
    else
    if ( story.score <= 50 && story.score > 20 ) {
        fontsize = '1.5em'
    }
    else
    if ( story.score <= 200 && story.score > 50 ) {
        fontsize = '2em'
    }
    else
    if ( story.score <= 350 && story.score > 200 ) {
        fontsize = '2.5em'
    }
    else
    {
        fontsize = '2.8em'
    }
    
    var styles2 = {
        fontSize: fontsize
    };
    
    return story ? (
        <>
            <div class="column">
    <div className="head"><span className="headline hl3" style={styles2}>{story.title}</span><p><span className="headline hl4">by {story.by}<br />score: {story.score} </span></p></div>
                <div dangerouslySetInnerHTML={{ __html: story.text }}></div>
            </div>
        </>
    ) : null;
});
