import React from 'react';

const HomeCard = (props) => {
    return(
        <div className="col-12 col-sm-4" style={{padding: '10px'}}>
            <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top rounded mx-auto d-block" style={{width: '100px', height: '100px'}} src="https://cdn2.iconfinder.com/data/icons/startup-and-development-5/48/Business_product_release-512.png" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                
                <button href="#" className="btn btn-primary" onClick={props.action}>{props.title}</button>
            </div>
            </div>
        </div>
    );
}

export default HomeCard;