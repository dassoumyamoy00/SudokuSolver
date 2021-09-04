const easy=62, medium=47, hard=36, expert=27;

let actualSolvedSudoku = new Array(9);

let unsolvedSudoku = new Array(9);

let ns=Number(0), g=Number(0);

window.onload=function() {main();}

function main()
{
	for(let k=0; k<9; ++k)
		actualSolvedSudoku[k]=new Array(9);

	for(let k=0; k<9; ++k)
		unsolvedSudoku[k]=new Array(9);

	generatePrincipalDiagonals();

	solveSudoku();

	/*
	for(let i=0; i<9; ++i)
		for(let j=0; j<9; ++j)
			console.log(i+" "+j+" "+actualSolvedSudoku[i][j]);
	*/
	if(g!=0)
		generateEmptySudoku(g);
	
	generateBoard(unsolvedSudoku);
}

function generatePrincipalDiagonals() //Principal Diagonals are formed
{
    generateEachPrincipalDiagonal(0,0); //1st principal diagonal
    generateEachPrincipalDiagonal(3,3); //2nd principal diagonal
    generateEachPrincipalDiagonal(6,6); //3rd principal diagonal
}

function generateEachPrincipalDiagonal(i, j) //Principal diagonals
{
    for(let a=0;a<3;a++)
        for(let b=0;b<3;b++)
        {
            let check=true;
            while(check)
            {
            	let n=parseInt(Math.random()*10+1)%10;
            	if(n==0) n=1;
                if(isValidInDiagonal(n,i,j))
                {
                    actualSolvedSudoku[a+i][b+j]=parseInt(n);
                    check=false;
                }
            }
        }
}

function isValidInDiagonal(n, i, j) //Validity checking while creating principal diagonals
{
    for(let a=0;a<3;a++)
        for(let b=0;b<3;b++)
          	if(actualSolvedSudoku[a+i][b+j]==n)
                return false;
    return true;
}


function generateEmptySudoku(givens)
{
	for(let i=0; i<9; ++i)
		for(let j=0; j<9; ++j)
			unsolvedSudoku[i][j]=actualSolvedSudoku[i][j];

    let emp=81-givens;  
    let i=Number(0);
    while(i<emp)    //57---about max 10 secs
    {    
    	console.log("Val of i: "+i)
        let ran_r=parseInt(Math.random()*10)%9;
        let ran_c=parseInt(Math.random()*10)%9;
        if(unsolvedSudoku[ran_r][ran_c]==Number(0)) continue;
        
    	ns=0;
    	unsolvedSudoku[ran_r][ran_c]=Number(0);
    	checkValidSudoku(unsolvedSudoku, 0, 0);
    	console.log("Solutions: ("+ran_r+","+ran_c+") #of solns: "+ns)
    	if(ns!=1) unsolvedSudoku[ran_r][ran_c]=actualSolvedSudoku[ran_r][ran_c];
    	else ++i;
    }
}

function checkValidSudoku(board, i, j)
{
	i+=Math.floor(j/9); j=j%9;
    
    if(i==9) return true;
    
    if(board[i][j] != Number(0)) 
    	return checkValidSudoku(board, i, j+1);
    
    for(let val=Number(1); val<=9; ++val)
        if(isValid(board, i, j, val))
        {
            board[i][j]=val;
            if(checkValidSudoku(board, i, j+1)) ++ns;
            board[i][j]=Number(0);
        }

   	return false;
}

function generateBoard(unsolvedSudoku)
{

	for(let i=0, idCount=0; i<81; ++i)
	{
		let mytile=document.createElement("p");
		if(unsolvedSudoku[parseInt(i/9)][i%9]!=0) 
		{	
			mytile.textContent = unsolvedSudoku[parseInt(i/9)][i%9];
			if(g==easy) mytile.style.backgroundColor = '#00B050';
			else if(g==medium) mytile.style.backgroundColor = '#FFC000';
			else if(g==hard) mytile.style.backgroundColor = '#008AF2';
			else if(g==expert) mytile.style.backgroundColor = '#FF5D5D';
			mytile.style.fontFamily = 'ar essence';
		
		}
		else 
		{
			let v = document.createElement("input");
			v.setAttribute("id", (i+1)*-1);	//key starts from -1, -2, ...

			if(g==easy) v.style.backgroundColor = '#A8D08D';
			else if(g==medium) v.style.backgroundColor = '#FFD966';
			else if(g==hard) v.style.backgroundColor = '#8FDAFF';
			else if(g==expert) v.style.backgroundColor = '#FFbdbd';
				
			v.style.fontSize="30pt";
			v.style.height="50px";
			v.style.width="50px";
			v.style.textAlign="center";
			v.style.fontFamily="AR CENA";
			v.style.caretColor="transparent";
			v.style.border = '0px';
			v.style.padding = '10px'
			v.setAttribute("type", "text");
			v.setAttribute("maxlength", "1");
			v.setAttribute("onkeypress","allowNumbersOnly(event)");
			
			mytile.append(v);
		}
		mytile.id=i;
		mytile.classList.add("tile");

		if((mytile.id > 17 && mytile.id<27)||(mytile.id>44 && mytile.id<54))
			mytile.classList.add("bottomBorder");

		if((mytile.id+1)%9==3 || (mytile.id+1)%9==6)
			mytile.classList.add("rightBorder");
		
		if(g==0)
		{
			mytile.style.opacity = '0%';
			document.getElementById("checkInput").style.opacity='0%';
			document.getElementById("showAnswer").style.opacity='0%';
		}
		else
		{
			mytile.style.opacity = '100%';
			document.getElementById("checkInput").style.opacity='100%';
			document.getElementById("showAnswer").style.opacity='100%';
		}
		
		document.getElementById("board").appendChild(mytile);
	}
}

function newGame()
{
	let tiles = document.querySelectorAll(".tile");
	for(let i=0; i<tiles.length; ++i) tiles[i].remove();

	if(document.getElementById("easy").checked) g=easy;
	else if(document.getElementById("medium").checked) g=medium;
	else if(document.getElementById("hard").checked) g=hard;
	else if(document.getElementById("expert").checked) g=expert;

	main();
}

function allowNumbersOnly(e) 
{
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 49 || code > 57)) 
        e.preventDefault();
}

function checkInput()
{

	for(let i=0; i<9; ++i)
	{
		for(let j=0; j<9; ++j)
		{
			if(unsolvedSudoku[i][j]==Number(0))
			{
				let val=document.getElementById(-1*(9*i+j+1)).value;
				if(val=='')
				{
					alert("All Cells Are Not Filled");
					return;
				}
			}
		}
	}

	//check answer
	for(let i=0; i<9; ++i)
	{
		for(let j=0; j<9; ++j)
		{
			if(unsolvedSudoku[i][j]==Number(0))
			{
				let val=document.getElementById(-1*(9*i+j+1)).value;
				if(val!=actualSolvedSudoku[i][j])
				{
					document.getElementById(-1*(9*i+j+1)).style.color="Red";
				}
				else 
				{
					document.getElementById(-1*(9*i+j+1)).style.color="Green";
				}
			}
		}
	}
}

function showAnswer()
{
	for(let i=0; i<9; ++i)
		for(let j=0; j<9; ++j)
			if(unsolvedSudoku[i][j]==Number(0))
			{
				document.getElementById(-1*(9*i+j+1)).value=actualSolvedSudoku[i][j];
				document.getElementById(-1*(9*i+j+1)).style.color='black';
				//console.log('hello');
			}
}

function solveSudoku()
{
	solve(actualSolvedSudoku, 0, 0);
}

function solve(board, i, j)
{
    i+=Math.floor(j/9); j=j%9;
    
    if(i==9) return true;
    
    if(board[i][j] != undefined) 
    	return solve(board, i, j+1);
    
    for(let val=Number(1); val<=9; ++val)
        if(isValid(board, i, j, val))
        {
            board[i][j]=val;
            if(solve(board, i, j+1)) return true;
            board[i][j]=undefined; 
        }
    
    return false; //No valid vals
}

function isValid(board, row, col, val)
{
    //check row
    for(let i=0; i<=8; ++i) 
        if(board[row][i]!=undefined)
            if(board[row][i] == val) return false;
    
    //check column
    for(let i=0; i<=8; ++i) 
        if(board[i][col]!=undefined)
            if(board[i][col] == val) return false;
    
    //check grid
    for(let i=0; i<=2; ++i) 
        for(let j=0; j<=2; ++j)
        {
            if(board[Math.floor(row/3)*3+i][Math.floor(col/3)*3+j]!=undefined)
            {
                if(board[Math.floor(row/3)*3+i][Math.floor(col/3)*3+j] == val) return false;
            }
        }
    
    return true;
}
