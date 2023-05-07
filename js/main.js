//****filter */
(function() {
		
		let field = document.querySelector('.items');
		let li = Array.from(field.children);

		function FilterProduct() {
			for(let i of li){
				const name = i.querySelector('strong');
				const x = name.textContent;
				i.setAttribute("data-category", x);
			}

			let indicator = document.querySelector('.indicator').children;

			this.run = function() {
				for(let i=0; i<indicator.length; i++)
				{
					indicator[i].onclick = function () {
						for(let x=0; x<indicator.length; x++)
						{
							indicator[x].classList.remove('active');
						}
						this.classList.add('active');
						const displayItems = this.getAttribute('data-filter');

						for(let z=0; z<li.length; z++)
						{
							li[z].style.transform = "scale(0)";
							setTimeout(()=>{
								li[z].style.display = "none";
							}, 500);

							if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all")
							 {
							 	li[z].style.transform = "scale(1)";
							 	setTimeout(()=>{
									li[z].style.display = "block";
								}, 500);
							 }
						}
					};
				}
			}
		}
		new FilterProduct().run();
	})();


/**********magnifier**************/	

const allImgs = document.querySelectorAll('img');

allImgs.forEach(img => {
  img.addEventListener('mouseover', function(event) {
  
    const magnify = document.createElement('div');
    magnify.classList.add('magnify');

    const magnifyImg = document.createElement('img');
    magnifyImg.src = this.src;

    magnify.appendChild(magnifyImg);

    document.body.appendChild(magnify);

    const magnifySize = 160;
    magnify.style.width = magnifySize + 'px';
    magnify.style.height = magnifySize + 'px';
    magnify.style.left = event.pageX - magnifySize / 2 + 'px';
    magnify.style.top = event.pageY - magnifySize / 2 + 'px';

    document.addEventListener('mousemove', function(event) {
      magnify.style.left = event.pageX - magnifySize / 2 + 'px';
      magnify.style.top = event.pageY - magnifySize / 2 + 'px';


      const imgRect = img.getBoundingClientRect();
      const x = event.pageX - imgRect.left;
      const y = event.pageY - imgRect.top;
      const maxX = imgRect.width - magnifySize;
      const maxY = imgRect.height - magnifySize;
      const imgX = (x / imgRect.width) * maxX;
      const imgY = (y / imgRect.height) * maxY;
      magnifyImg.style.left = -imgX + 'px';
      magnifyImg.style.top = -imgY + 'px';
    });
  });


  img.addEventListener('mouseout', function() {
    const magnify = document.querySelector('.magnify');
    if (magnify) {
      magnify.remove();
    }
  });
});