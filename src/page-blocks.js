const createNewElement = (parent, newChild, content) => {
    const newElement = document.createElement(newChild);
    if (content) {
        newElement.textContent = content;
    }
    return parent.append(newElement);
}

const createNewImg = src => {
    const newImg = document.createElement('img');
    newImg.src = src;
    return newImg;
}

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    const logo = createNewImg('./images/logo.jpg');
    logo.classList.add('logo');
    const nav = document.createElement('nav');
    nav.classList.add('menu');
    header.append(logo, nav)
    return header;
}

export {
    createNewElement,
    createHeader
}