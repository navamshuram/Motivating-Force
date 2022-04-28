const morebut = document.getElementById('more');
morebut.addEventListener('click', (e)=>{
	e.preventDefault();
	getSUP();
})



async function getSUP() {
			const response = await fetch("https://api.adviceslip.com/advice");
			const data = await response.json();
			let quotes = (data.slip.advice);
			console.log(quotes)
			let msg = document.getElementById('quote');
			msg.textContent = quotes;
		}
getSUP();






