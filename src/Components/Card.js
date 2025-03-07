import React from 'react';

const Card = ({ data }) => {
    const readMore = (url) => {
        window.open(url);
    };

    return (
        <div className='cardContainer'>
            {data.map((curItem, index) => {
                if (!curItem.urlToImage) {
                    return null;
                } else {
                    return (
                        <div className='card'>
                            <img src={curItem.urlToImage} alt={curItem.title} />
                            <div className='content'>
  <span className="source">{curItem.source?.name}</span>
  {/* Rest of the content */}
</div>
                            <div className='content'>
                                <a className='title' onClick={() => window.open(curItem.url)}>{curItem.title}</a>
                                <p>{curItem.description}</p>
                                <button onClick={() => window.open(curItem.url)}>Read More</button>
                            </div>

                            
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Card;
