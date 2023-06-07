# Heap Sort

Heap sort is a comparison based sorting technique based on a Binary [Heap](../../../data-structures/heap/) data structure.

## Steps

1. Build a heap (min or max depending on sort direction) from the input data.
2. Replace first element (largest or smallest) with the last item of the heap followed by reducing the size of heap by 1.
3. Heapify down.
4. Repeat above steps while size of heap is greater than 1.


![Visualisation](https://upload.wikimedia.org/wikipedia/commons/f/fe/Heap_sort_example.gif)


## Complexity

| Best | Average | Worst | Memory |
|:----:|:-------:|:-----:| :----: |
| $nlog(n)$ | $nlog(n)$ | $nlog(n)$ | $1$ |