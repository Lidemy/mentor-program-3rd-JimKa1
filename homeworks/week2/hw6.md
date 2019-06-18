``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 進入第一個for迴圈
2. i = 0, 3 不 <= 0,不符合if條件,沒有return,i++
3. i = 1, 5 不 <= 0,不符合if條件,沒有return,i++
4. i = 2, 8 不 <= 0,不符合if條件,沒有return,i++
5. i = 3, 13不 <= 0,不符合if條件,沒有return,i++
6. i = 4, 22不 <= 0,不符合if條件,沒有return,i++
7. i = 5, 35不 <= 0,不符合if條件,沒有return,i++
8. 進入下一個for迴圈
9. i = 2, 8 等於 5 + 3,不符合if條件,沒有return,i++
10. i = 3, 13 等於 8 + 5,不符合if條件,沒有return,i++
11. i = 4, 22 不等於 13 + 8,符合if條件,return "invalid",
12. function結束