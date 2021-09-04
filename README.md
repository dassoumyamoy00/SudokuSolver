# SudokuSolver

*A web application that generates unique sudoku every time using efficient backtracking algorithm.*

Introduction:

Depicts data structure and Problem Solving skills

## Algorithms used:

### 
1. Generate Random and Valid Sudoku Board :
#### 
* Generate the 3 principal grids in the board ramdonly, subject to constraint that every number (1-9) in every principal grid should be unique. 
* Once the valid princpal grids are obtained, apply backtracing algorithm to generate the sudoku board.

### 
2. Delete values at specific positions from board to create an empty sudoku
####
* Generate random indexes, and try deleting the value at that index; such that, once the value at that index is deleted, only a unique solution (the actual sudoku) can be generated. For this, after deleting the value at this specific index, apply backtracking to count the number of solutions possible. Restore the value at that index it number of solutions is not equal to 1, else let that value removed. Move to the next iteration.
* The number of vaalues to be deleted (no.of knowns/unknowns) depends on the difficulty level

###
3. Display this unsolved sudoku in the web application and ask the user to solve it

###
4. Once the user solves the sudoku and clicks on check Answer button, tally the solution with the actual sudoku generated.
####
* Highlight the correct values in green and incorrect ones in red.

###
5. If the user clicks on Show Answer button, actual sudoku is displayed

## Technologies Used: Entirely Front End based (HTML, CSS and JavaScript)

## Algorithms Used: Backtracking, Sudoku Generator Algorithm, Basics of sudokus

## Data Structures Used : 2D arrays in JavaScript to store the valid and unsolved sudokus

NO SAMPLE SUDOKU HAS BEEN TAKEN AS INPUT IN ANY FORM. EVERY TIME SUDOKUS ARE BEING RANDOMLY GENERATED, BASED ON THE DIFFICULTY LEVEL.

Other Contributors: Kaushik Mahajan

References:

1. [Mathematics of Sudoku - Wikipedia](https://en.wikipedia.org/wiki/Mathematics_of_Sudoku)
2. 
3. [Testing unique solutions of sudoku](http://www.birot.hu/sudoku.php)
