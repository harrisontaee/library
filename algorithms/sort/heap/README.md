# Heap Sort

Heap sort is a comparison based sorting technique based on Binary Heap data structure.

## Steps

1. Build a max heap from the input data.
2. Replace largest element (index 0) with the last item of the heap followed by reducing the size of heap by 1.
3. Heapify the root of tree.
4. Repeat above steps while size of heap is greater than 1.


![Visualisation](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)


## Complexity

| Best | Average | Worst | Memory |
|:----:|:-------:|:-----:| :----: |
| $nlog(n)$ | $nlog(n)$ | $nlog(n)$ | $1$ |