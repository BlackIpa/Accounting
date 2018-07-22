const trs = document.querySelectorAll("#tbl tr");
addIdsAndClasses();
checkResultsAndAddColors();
playersTable();

function addIdsAndClasses() {
	for (let i = 1; i < trs.length; i++) {
		let tds = trs[i].querySelectorAll("td");
		tds[3].setAttribute("id", "result" + i);
		if (tds[3].innerHTML === "") { break; };
		for (let j = 3; j < tds.length; j++) {
			tds[j].setAttribute("class", "pick" + i);
		}
	}
}

function checkResultsAndAddColors() {
	for (let i = 1; i < trs.length; i++) {
		let tds = trs[i].querySelectorAll("td");
		let result = tds[3].innerHTML;
		if (!result) { return; }
		for (let j = 4; j < tds.length; j++) {
			let pick = tds[j].innerHTML;
			tds[j].classList.add(checkResult(result, pick, tds[j]));
		}
	}
}
function checkResult(result, pick, td) {
	if (!pick) { return; }
	let resultArr = result.split("-");
	let pickArr = pick.split("-");
	for(let i=0; i<resultArr.length;i++) resultArr[i] = +resultArr[i];
	for(let i=0; i<pickArr.length;i++) pickArr[i] = +pickArr[i];
	let resultFinal = returnResult(resultArr);
	let pickFinal = returnResult(pickArr);
	if (resultArr[0] === pickArr[0] && resultArr[1] === pickArr[1]) {
		return "green";
	} else if (resultFinal === pickFinal) {
		return "yellow";
	} else {
		return "red";
	}
}
function returnResult(resultArr) {
	if (resultArr[0]-resultArr[1] > 0) {
		return "Team A"
	} else if (resultArr[0]-resultArr[1] < 0) {
		return "Team B"
	} else {
		return "Tie"
	}
}
function Player(name, col, pts=0, exact=0, result=0, wrong=0) {
	this.name = name;
	this.col = col;
	this.pts = pts;
	this.exact = exact;
	this.result = result;
	this.wrong = wrong;
}
function playersTable() {
	const players = [];
	const tbl = document.getElementById("tbl2");
	getPlayersAndResults(players);
	let i = 1;
	let txt;
	players.forEach(function (player) {
		let row = tbl.insertRow(1);
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);
		cell1.innerHTML = player.name;
		cell2.innerHTML = player.pts;
		cell3.innerHTML = player.exact;
		cell4.innerHTML = player.result;
		cell5.innerHTML = player.wrong;
		i += 1;
	});
}
function getPlayersAndResults(players) {
	let ths = trs[0].querySelectorAll("th");
	for (let i = 4; i < ths.length; i++) {
		let nr = i - 3
		var obj = new Player(ths[i].innerHTML, i);
		obj["player"+nr]="player"+nr;
		for (let j = 1; j < trs.length; j++) {
			let tds = trs[j].querySelectorAll("td");
			if (tds[3].innerHTML === "") { break; };
			if (tds[obj.col].classList.contains("green")) {
				obj.pts += 3;
				obj.exact += 1;
			} else if (tds[obj.col].classList.contains("yellow")) {
				obj.pts += 1;
				obj.result += 1;
			} else {
				obj.wrong += 1;
			}
		}
		players.push(obj);
	}
	return players.sort(compare);
}
function compare(a, b) {
	const ptsA = a.pts;
	const ptsB = b.pts;
	let comparison = 0;
	if (ptsA > ptsB) {
		comparison = 1;
	} else if (ptsA < ptsB) {
		comparison = -1;
	}
	return comparison;
}


const trs1 = document.querySelectorAll(".old-results tr");
addIdsAndClasses1();
checkResultsAndAddColors1();

function addIdsAndClasses1() {
	for (let i = 1; i < trs1.length; i++) {
		let tds = trs1[i].querySelectorAll("td");
		tds[3].setAttribute("id", "result" + i);
		if (tds[3].innerHTML === "") { break; };
		for (let j = 3; j < tds.length; j++) {
			tds[j].setAttribute("class", "pick" + i);
		}
	}
}

function checkResultsAndAddColors1() {
	for (let i = 1; i < trs1.length; i++) {
		let tds = trs1[i].querySelectorAll("td");
		let result = tds[3].innerHTML;
		if (!result) { return; }
		for (let j = 4; j < tds.length; j++) {
			let pick = tds[j].innerHTML;
			tds[j].classList.add(checkResult(result, pick, tds[j]));
		}
	}
}
function checkResult1(result, pick, td) {
	let resultArr = result.split("-");
	let pickArr = pick.split("-");
	for(let i=0; i<resultArr.length;i++) resultArr[i] = +resultArr[i];
	for(let i=0; i<pickArr.length;i++) pickArr[i] = +pickArr[i];
	let resultFinal = returnResult(resultArr);
	let pickFinal = returnResult(pickArr);
	if (resultArr[0] === pickArr[0] && resultArr[1] === pickArr[1]) {
		return "green";
	} else if (resultFinal === pickFinal) {
		return "yellow";
	} else {
		return "red";
	}
}