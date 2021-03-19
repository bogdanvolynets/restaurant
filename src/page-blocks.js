// func that creates new DOM element
// it takes 3 parameters - DOM element, its classes(leave '' for no class), its content(optional)
const createNewElement = (newChild, cssClass, content) => {
    const newElement = document.createElement(newChild);
    if (Array.isArray(cssClass)) { 
        newElement.classList.add(...cssClass);
    } else if (cssClass !== '') { 
        newElement.classList.add(cssClass);
    }
    if (content) {
        newElement.textContent = content;
    }
    return newElement;
}

// func that creates img
// it takes 3 parameters - src, alt, classes(optional)
const createNewImg = (src, alt, cssClass) => {
    const newImg = document.createElement('img');
    newImg.src = src;
    if (alt) {
    newImg.alt = alt;
} else { 
    newImg.alt = "";
}
    if (cssClass && Array.isArray(cssClass)) {
        newImg.classList.add(...cssClass);
    } else if (cssClass) {
        newImg.classList.add(cssClass);
    }
    return newImg;
}

const createHeader = () => {
    const header = createNewElement('header', 'header');
    const logo = createNewImg('./images/logo.jpg', 'logo', 'header__logo');
    const menu = createNewElement('ul', 'menu');
    const menuItems = ["Home", "Menu", "Contact"];

    //create menu list
    for (let i = 0; i < menuItems.length; i++) {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu__item');
        menuItem.textContent = menuItems[i];
        menu.append(menuItem);
    }

    header.append(logo, menu);
    return header;
}

//create Tabs
//create home tab
    const homeTab = () => {
        const tab = createNewElement('div', ['tab', 'hometab', 'tab__home']);
        const heading = createNewElement('h1', 'hometab__heading', 'Hello');
        const homeImg = createNewImg('./images/home-img.jpg', 'my restaurant');
        const paragraph = createNewElement('p', 'hometab__intro', 'introduction will be here');
        tab.append(heading, homeImg, paragraph);
        return tab;
    }

//create menu tab
    const menuTab = () => {

        //store info about dish in the object
        const menuBlocks = {
            picture: [],
            name: [],
            price: [],
            description: []
        }

        const tab = createNewElement('div', ['tab', 'menutab', 'tab__menu']);
        const heading = createNewElement('h2', 'menutab__heading', 'Our Menu');

        //create container for dishes
        const grid = createNewElement('div', 'menutab__container');

        //iterate through object and get values for certain dish
        for (let i = 0; i < menuBlocks.picture.length; i++) {
            const menuBlock = createElement('div', ['menutab__block']);
            const menuBlockPicture = createNewImg(menuBlocks.picture[i]);
            const menuBlockName = createNewElement('h2', '', menuBlocks.name[i]);
            const menuBlockPrice = createNewElement('p', '', menuBlocks.price[i]);
            const menuBlockDesription = createNewElement('p', '', menuBlocks.description[i]);
            menuBlock.append(menuBlockPicture, menuBlockName, menuBlockPrice, menuBlockDesription);
            grid.append(menuBlock);
        }

        tab.append(heading, grid);
        return tab;
    }

    const contactTab = () => {
        const tab = createNewElement('div', ['tab', 'contact']);
        const heading = createNewElement('h2', 'contact__heading', 'Contact Us');
        const description = createNewElement('p', 'contact__description', 'description goes here')
    }

export {
    createHeader,
    homeTab,
    menuTab,
    contactTab
}