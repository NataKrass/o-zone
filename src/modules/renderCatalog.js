export default function renderCatalog(){
	const cards = document.querySelectorAll('.goods .card');
	const catalogList = document.querySelector('.catalog-list');
	const catalogWrapper = document.querySelector('.catalog');
	const catalogBtn = document.querySelector('.catalog-button');
 	const categories = new Set();

	
	cards.forEach((card) => {
  		categories.add(card.dataset.category);
	});

 categories.forEach((item) => {
   const li = document.createElement('li');
   li.textContent = item;
   catalogList.appendChild(li);
 })

 catalogBtn.addEventListener('click', (event) => {
 	 if(catalogWrapper.style.display) {
 	 	catalogWrapper.style.display = '';
 	 } else{
 	 	catalogWrapper.style.display = 'block';
 	 }
 
 	 if(event.target.tagName === 'LI'){
 	 	cards.forEach((card) => {
			if(card.dataset.category === event.target.textContent){
				card.style.display = '';
			} else {
				card.style.display = 'none';
			}
 	 	});
 	 }
 });

}