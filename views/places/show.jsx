const React = require("react");
const Def = require("../default");

function show(data) {
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
          <h3>No Comments Yet!</h3>
        </div>
      </main>
      <a href={`/places/${data.id}/edit`} className="btn btn-warning">
        <i class="bi bi-pencil-square"></i>Edit
      </a>
      <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">
          <i class="bi bi-trash3"></i>Delete
        </button>
      </form>
    </Def>
  );
}

module.exports = show;
