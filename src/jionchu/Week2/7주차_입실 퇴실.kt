/* Programmers
 * 위클리 챌린지 - 7주차_입실 퇴실
 * created on 2021.09.29
 * created by jionchu */

class Solution {
    fun solution(enter: IntArray, leave: IntArray): IntArray {
        var answer: IntArray = IntArray(enter.size)
        val exist = mutableListOf<Int>() // 방 안에 존재하는 사람들
        var index = 0 // 다음 입실할 사람
        
        // 퇴실 순서대로
        for (i in leave.indices) {
            
            // leave[i]까지 입실
            for (j in index..enter.indexOf(leave[i])) {
                exist.forEach{ answer[it-1]++ }
                answer[enter[index]-1] += exist.size
                exist.add(enter[index++])
            }
            
            // 퇴실
            exist.remove(leave[i])
        }
        
        return answer
    }
}