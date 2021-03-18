import './style.scss';
import { createNewElement, createHeader } from './page-blocks';
const body = document.querySelector('body');
const content = document.querySelector('#content');
body.prepend(createHeader());
createNewElement(content, 'h1', 'Hello!');
