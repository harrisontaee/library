# Quick Sort

Quick sort is a divide and conquer algorithm. It randomly picks an element as a pivot and partitions the given array around it. The goal of each 'recursive episode' is for items left of the array's pivot to be lower than the pivot and items right to be higher. This results in the pivot being in its correct position.

## Steps

1. Randomly pick the pivot.
2. Find "item from left" that is greater than pivot and "item from right" that is less than pivot swapping them if "item from left" > "item from right".
3. Recurse on the sub arrays left and right of the pivot (this is done using indexes on original the array so than no new arrays are created).


![Visualisation](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)


## Complexity

| Best | Average | Worst | Memory |
|:----:|:-------:|:-----:| :----: |
| $nlog(n)$ | $nlog(n)$ | $n^2$ | $log(n)$ |