export default function CreateListing() {
  return (
    <div className="profile">
      <header>
        <p className="pageHeader">Create a Listing</p>
      </header>
      <main>
        <form>
          <label className="formLabel">Sell / Rent</label>
          <div className="formButtons">
            <button type="button" id="type" value="sale">
              Sell
            </button>
            <button type="button" id="type" value="rent">
              Rent
            </button>
          </div>
          <label className="formLabel">Name</label>
          <input className="formInputName" type="text" id="name" />
          <div className="formRooms flex">
            <div>
              <label className="formLabel">Bedrooms</label>
              <input
                className="formInputSmall"
                type="number"
                id="bedrooms"
                min="1"
                max="50"
                required
              />
            </div>
            <div>
              <label className="formLabel">Bathrooms</label>
              <input
                className="formInputSmall"
                type="number"
                id="bathrooms"
                min="1"
                max="50"
                required
              />
            </div>
          </div>
          <label className="formLabel">Parking spot</label>
          <div className="formButtons">
            <button type="button" id="parking" value="true">
              Yes
            </button>
            <button type="button" id="parking" value="false">
              No
            </button>
          </div>
          <label className="formLabel">Furnished</label>
          <div className="formButtons">
            <button type="button" id="furnished" value="true">
              Yes
            </button>
            <button type="button" id="furnished" value="false">
              No
            </button>
          </div>
          <label className="formLabel">Add geolocation</label>
          <div className="formButtons">
            <button type="button" value="true">
              Yes
            </button>
            <button type="button" value="false">
              No
            </button>
          </div>
          <label className="formLabel">Address</label>
          <textarea className="formInputAddress" id="address" required />
          <label className="formLabel">Offer</label>
          <div className="formButtons">
            <button type="button" id="offer" value="true">
              Yes
            </button>
            <button type="button" id="offer" value="false">
              No
            </button>
          </div>
          <label className="formLabel">Regular Price</label>
          <div className="formPriceDiv">
            <input
              className="formInputSmall"
              type="number"
              id="regularPrice"
              min="50"
              max="750000000"
              required
            />
          </div>
          <label className="formLabel">Images</label>
          <p className="imagesInfo">
            The first image will be the cover (max 6).
          </p>
          <input
            className="formInputFile"
            type="file"
            id="images"
            max="6"
            accept=".jpg,.png,.jpeg"
            multiple
            required
          />
          <button type="submit" className="primaryButton createListingButton">
            Create Listing
          </button>
        </form>
      </main>
    </div>
  );
}
