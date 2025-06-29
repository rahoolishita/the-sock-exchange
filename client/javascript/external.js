let page = 1;
async function getData() { 
	const socks = await fetch(`http://localhost:9000/api/socks/1/10`).then(res => res.json());
	updateHTML(socks);  // Update HTML after data is fetched
		
	page++;
};

function updateHTML(socks) {
	// for (let i = 0; i < socks.length; i++) {
	// 	let sock = socks[i];
	// 	let sockDiv = document.createElement('div');
	// 	sockDiv.innerHTML = `<div>Color: ${sock.color}</div><div>Size: ${sock.size}</div>`;
	// 	document.getElementById('data').appendChild(sockDiv);
	// }
	
	let table = document.createElement('table');
	table.className = "table";  // Add CSS class to the table
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');

	// Create table headers
	let headers = Object.keys(socks[0].sockDetails);
	let tr = document.createElement('tr');

	for (let i = 0; i < headers.length; i++) {
		let th = document.createElement('th');
		th.textContent = headers[i];
		tr.appendChild(th);
	}

	// Same thing as above but using forEach
	// headers.forEach(header => {
	// 	let th = document.createElement('th');
	// 	th.textContent = header;
	// 	tr.appendChild(th);
	// });

	thead.appendChild(tr);
	table.appendChild(thead);

	// Create table body
	socks.forEach(sock => {
		
		let tr = document.createElement('tr');
		for (let key in sock.sockDetails) {
			let td = document.createElement('td');
			td.textContent = sock.sockDetails[key];
			tr.appendChild(td);
		}
		tbody.appendChild(tr);
	});
	table.appendChild(tbody);

	// Clear the existing table if any
	let dataDiv = document.getElementById('data');
	dataDiv.innerHTML = '';
	// Append the new table
	dataDiv.appendChild(table);
}

// Call the function to fetch and update data
// getData();