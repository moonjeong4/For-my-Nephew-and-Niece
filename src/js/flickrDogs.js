export default {
  page: 2,
  photosEl: undefined,
  getSearchUrl: function (perPage) {
    return `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d6a105e9e4bfefa125cb86fbeba8dd&text=golden retriever}&format=json&nojsoncallback=1&per_page=${perPage}&page=${this.page}`;
  },
  search: async function () {
    let url = this.getSearchUrl(4);
    let data = await (await fetch(url)).json();
    this.render(data);
    this.page++;
  },
  init: function (photosId) {
    this.photosEl = document.getElementById(photosId);
  },
  render: function (photos) {
    this.photosEl.innerHTML;
    let photoList = photos.photos.photo;

    for (let photo of photoList) {
      let src = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
      let iEl = document.createElement("div");
      iEl.classList.add("photo-dog");
      iEl.style.backgroundImage = `url(${src})`;
      this.photosEl.append(iEl);
    }
  },
};
