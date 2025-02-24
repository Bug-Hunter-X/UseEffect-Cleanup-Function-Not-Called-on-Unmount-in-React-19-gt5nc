# React 19 useEffect Cleanup Issue

This repository demonstrates a problem where the cleanup function in React 19's `useEffect` hook is not consistently called when a component unmounts. This can lead to memory leaks and unexpected behavior.

## Bug Description
The provided `bug.js` file contains a simple counter component that uses `useEffect` with a cleanup function.  In ideal circumstances, the cleanup function should log 'Component unmounted' when the component is removed from the DOM. However, under certain conditions, especially rapid component switching or errors, this might not occur.

## Solution
The `bugSolution.js` file offers a potential solution, though the root cause may be related to a deeper React 19 behavior or interaction with other libraries. The solution focuses on improving the component's lifecycle management to help mitigate the issue.  More investigation may be needed to find a truly robust fix depending on the specific use case.