// App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Images";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const perPage = 20; // Number of images per page

    axios
      .get("https://pixabay.com/api/", {
        params: {
          key: apiKey,
          image_type: "photo",
          safesearch: true,
          page: page,
          per_page: perPage,
        },
      })
      .then((response) => {
        setImages([...images, ...response.data.hits]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.error("Error fetching images: ", error);
      });
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <h1 class="navbar-brand">Image Gallery</h1>
          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control rounded"
              placeholder="fashion, nature, science, education etc..."
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </form>
        </div>
      </nav>

      <div className="mt-4">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {images.map((image) => (
              <div key={image.id} className="col">
                <div className="rounded float">
                  <div key={image.id} className="m-2">
                    <Image
                      webformatURL={image.webformatURL}
                      tags={image.tags}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
