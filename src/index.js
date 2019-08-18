'use strict';

import renderCatalog from './modules/renderCatalog';
import actionPage from './modules/actionPage';
import addCart from './modules/addCart';
import toggleCart from './modules/toggleCart';
import toggleCheckbox from './modules/toggleCheckbox';
import renderCards from './modules/renderCards';
import getData from './modules/getData';

getData().then((data) => {
	renderCards(data);
	toggleCheckbox();
	toggleCart();
	addCart();
	actionPage();
	renderCatalog();
});
