const React = require("react");
const Def = require("../default");
const comments = require('../../models/comment.js')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ❤️'}</h2>
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
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <h3 className='text-center'>
                    Located in {data.place.city}, {data.place.state}
                </h3>
        <div>
          <h2>Rating</h2>
          <h3>Not Rated</h3>
        </div>
        <div>
          <h2>Description</h2>
          <h3>
            {data.place.showEstablished()}
          </h3>
          <h4>
            serving {data.place.cuisines}
          </h4>
        </div>
        <div>
          <br />
          <h2>Comments</h2>
          {comments}
        </div>
      </main>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        <i className="bi bi-pencil-square"></i>Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          <i className="bi bi-trash3"></i>Delete
        </button>
      </form>
    </Def>
  );
}

module.exports = show;
