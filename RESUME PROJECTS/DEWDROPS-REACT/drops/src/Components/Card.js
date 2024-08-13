import React from 'react';

function Card() {
  return (
    <div className="col">
    <div className='container mt-5 '>
      <div className=" col-md-6 rounded card" id="home">
        <p className="text-center"></p>
        <h1
          className="text-center display-6 bg-white font-weight-bold"
          style={{ color: '#111', letterSpacing: '0.08em' }}
        >
          <img
            src={process.env.PUBLIC_URL + '/assets/Images/letter.jpg'}
            id="img-letter"
            height="50px"
            width="75%"
            className="pb-0 img-fluid w-50"
            alt="Letter"
          />
        </h1>
        <center>
          <em style={{ color: 'rgb(39, 109, 6)' }}>Crafting ideal moments..!</em>
        </center>
        <p className="lead px-1 py-2 ps-3" style={{ color: 'rgb(172, 57, 28)' }}>
          A premier catering and event planning company in Calicut since 2008. <br />
          Memorable events don't just happen. They happened to be our work.<br />
          So be a guest at your own event.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Card;
