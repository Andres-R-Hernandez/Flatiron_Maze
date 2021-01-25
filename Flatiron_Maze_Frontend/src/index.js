// mazeWidth = 10;
// mazeHeight = 10;
// function createBlankMaze() {

//     var rowIndex, colIndex;

//     var table = document.createElement("table");
//     var tbody = document.createElement("tbody");

//     for (rowIndex = 1; rowIndex <= mazeHeight; rowIndex++) {

//         var row = document.createElement("tr");

//         for (colIndex = 1; colIndex <= mazeWidth; colIndex++) {

//             var col = document.createElement("td");
//             if (rowIndex == 1 && colIndex == 1 ) {

//                 col.style.backgroundColor = "rgb(244,0,0)";
//                 col.setAttribute("type", "start");

//             } else if (rowIndex == mazeHeight && colIndex == mazeWidth) {
                
//                 col.style.backgroundColor = "rgb(0,244,0)";
//                 col.setAttribute("type", "finish");

//             } else {

//                 col.style.backgroundColor = "rgb(255,255,255)";

//             }
//             col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);

//             row.appendChild(col);

//         }

//         tbody.appendChild(row);

//     }
    
//     table.appendChild(tbody);

//     document.getElementById("maze_container").appendChild(table);

// }

{/* <script type="text/javascript">
	//init object globally
	var objImage= null;
	function init(){
		objImage=document.getElementById("image1");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
	}
	function getKeyAndMove(e){				
		var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;						
		}
	}
	function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
	}
	function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
	}
	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
	}
	function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
	}
	window.onload=init;
</script> */}