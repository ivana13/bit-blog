import React from 'react';

const AuthorInfo = (props) => {
    // props.match.params.id

    

    return (
        <div class="col s12 m7">
            <div class="card horizontal">
                <div class="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AuthorInfo }