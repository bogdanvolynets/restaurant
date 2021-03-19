import './style.scss';
import { createHeader, homeTab } from './page-blocks';
const body = document.querySelector('body');
const content = document.querySelector('#content');
body.prepend(createHeader());
content.append(homeTab());