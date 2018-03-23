import React from 'react';
import { AboutContents } from '../blog/AboutContents';

const AboutPage = () => {
    return (
        <div className='container'>
            <input class="btn btn-primary" type="reset" value="Back" />

            <AboutContents  />
        </div>

    )
}

export { AboutPage }