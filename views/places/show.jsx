const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div className='flexCustom'>
              <section>
                <img src={data.place.pic} alt={data.place.name}/>
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </section>
              <section>
                <h2>
                  Description
                </h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <h2>
                  Rating
                </h2>
                <p>
                  No rating yet
                </p>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>     
              </section>
            </div>
            <hr/>
            <h2>
              Comments
            </h2>
            {comments}
            <div>
              <h1>Add a New Comment</h1>
              <form method="POST" action={`/places/${data.place._id}/comment`}>
                  <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input className="form-control" id="author" name="author" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="rant">Rant</label>
                    <br></br>
                    <input type="checkbox" id="rant" name="rant"/>
                  </div>
                  <div className="form-group">
                  <label htmlFor="stars">Star Rating</label>
                    <input type="number" className="form-control" id="stars" name="stars" min="0" step=".5" max="5" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Review</label>
                    <textarea className="form-control" id="content" name="content" required></textarea>
                  </div>
                  <input className="btn btn-primary" type="submit" value="Add Comment" />
              </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show









