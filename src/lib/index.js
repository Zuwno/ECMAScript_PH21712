const render = (content, container) => {
container.innerHTML = content;
};


import Navigo from "navigo";
const rounter = new Navigo ("/" , {hash: true, linksSelector : "a"});

export {render, rounter};