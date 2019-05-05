function component() {
  return import(/* webpackChunkName: "join" */'lodash/join').then(({default: join})=>{
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'Webpack!'], ' ');;
    return element; 
  });
}

component().then(component => {
  document.body.appendChild(component);
});