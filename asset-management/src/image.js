const lazyLoadingImage = ( element )=>{
  import( './bg.jpeg')
    .then(src => element.src = src.default)
    .catch(err => console.error(err));
}

export default lazyLoadingImage;