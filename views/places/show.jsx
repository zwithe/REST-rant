const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div className='flexCustom'>
              <section>
                <img src={data.place.pic} alt={data.place.name}/>
              </section>
              <section>
                <h2>
                  Cuisines
                </h2>
                <p>
                  {data.place.cuisines}
                </p>
                <h2>
                  Location
                </h2>
                <p>
                  {data.place.city}, {data.place.state}
                </p>
                <h2>
                  Rating
                </h2>
                <p>
                  No rating yet
                </p>
              </section>
            </div>
            <hr/>
            <h2>
              Comments
            </h2>
            <p>
              No comments yet
            </p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     

          </main>
        </Def>
    )
}

module.exports = show
