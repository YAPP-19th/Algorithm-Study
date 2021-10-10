/* Programmers
 * 깊이/너비 우선 탐색(DFS/BFS) - 네트워크
 * created on 2021.10.10
 * created by jionchu */

class Solution {
    val disconnected = mutableListOf<Int>()
    
    fun solution(n: Int, computers: Array<IntArray>): Int {
        var answer = 0
        for (i in 0 until n) disconnected.add(i)
        
        while (disconnected.size > 0) {
            // 새로운 네트워크
            answer++
            
            dfs(n, computers, disconnected.removeAt(0))
        }
        
        return answer
    }
    
    fun dfs(n: Int, computers: Array<IntArray>, computer: Int) {
        for (i in 0 until n) {
            // 두 컴퓨터가 연결되어 있는 경우
            if (disconnected.contains(i) && computers[computer][i] == 1) {
                // 네트워크에 속하게 되는 컴퓨터는 리스트에서 제거
                disconnected.remove(i)
                
                dfs(n, computers, i)
            }
        }
    }
}