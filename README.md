# SudokuSolver

## Introduction

Sudoku is a wonderful mathematical puzzle that has fascinated several mathematicians over the decades. No specific predefined mathematics behind solving a sudoku has yet been successfully established. It is completely logic-based puzzle and the only way of solving a sudoku is to try for every possible solutions.

*Hence a simple web application has been developed that generates unique sudokus of varying difficulties every time.*

As an enthusiast in Data Structures and Problem Solving, this has been developed so as to highlight the practical implementation of backtracking algorithm and recursion. Since backtracking runs in exponential complexity both in terms of time and space, generating all possible solutions; hence it is not suitable in most problem solving. However, small puzzles like sudoku, word puzzles, maze puzzles, etc. can only be solved using backtracking.

*The application also allows an user to solve the puzzle and check the solution.*

***NO SAMPLE SUDOKU HAS BEEN TAKEN AS INPUT IN ANY FORM. EVERY TIME SUDOKUS ARE BEING RANDOMLY GENERATED, BASED ON THE DIFFICULTY LEVEL.***

## Explanation

### 1. Generate Random and Valid Sudoku 
 
* Generate the **three principal subgrids** in the board randomly, subject to constraint that every number (1-9) in every principal subgrid should be unique.
* Once the valid princpal grids are obtained, apply backtracking algorithm to generate the sudoku board.

### 2. Delete values from board to create an unique unsolved sudoku

* Generate random indexes, and try deleting the value at that index; such that, once the value at that index is deleted, only an unique solution (the original sudoku) can be generated. For this, after deleting the value at this specific index, apply backtracking to count the number of solutions possible. Restore the value at that index it number of solutions is not equal to 1. Repeat the step based on the number of knowns/unknowns.
* The number of values to be deleted (no.of knowns/unknowns) depends on the difficulty level.

### 3. Display the unsolved sudoku and ask user to solve it

### 4. Check Answer Button

* Once the user solves the sudoku and clicks on check Answer button, tally the solution with the original sudoku (since the solution should be unique).
* Highlight the correct values in green and incorrect ones in red.

### 5. Show Answer Button

* If the user clicks on Show Answer button, original sudoku is displayed.

## Languages

Entirely Front End based (HTML, CSS and JavaScript)

## Data Structures

2D Arrays used in JavaScript to store the valid and unsolved sudokus

## Algorithms

Backtracking and Sudoku Generator Algorithm

## Limitations 

* It is believed that the number of knowns for unique solution of any sudoku must be at least 17, but we have considered the least number of knowns as 26, while developing the application. If we have considered the number of knowns lesser than 26, the execution time for the generation of unique unsolved sudoku will exceed the normal time limits, in general environments. The algorithm should be updated further to meet this limitation.
* Difficulty level is based on the number of knowns in the unsolved sudoku.
* Only rank 3 sudokus have been considered in this development.

## References

1. [Mathematics of Sudoku - Wikipedia](https://en.wikipedia.org/wiki/Mathematics_of_Sudoku)
2. [My (soumya00) solution to the leetcode problem 37](https://leetcode.com/submissions/detail/541913230/)
3. [Testing unique solutions of sudoku](http://www.birot.hu/sudoku.php)
4. [Image used in interface](https://unsplash.com/)

<br>

<br>

`SOUMYAMOY DAS`<br>
`4th September 2021`
