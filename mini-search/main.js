const form = document.querySelector("#searchForm")
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  // console.log(res.data[0].show.image.medium);
  makeImages(res.data);
  form.elements.query.value = "";
})

const makeImages = (shows) => {
  for(let result of shows) {
    if(result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}