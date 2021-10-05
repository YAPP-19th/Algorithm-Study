/* Programmers
 * 이분탐색 - 입국심사
 * created on 2021.10.05
 * created by jionchu */

class Solution {
    fun solution(n: Int, times: IntArray): Long {
        var min: Long = n.toLong()/times.size*times.min()!!.toLong()
        var max: Long = times.max()!!.toLong() * n
        
        while (min <= max) {
            val mid = (min+max)/2
            
            // 현재 시간 안에 n명의 사람을 모두 심사할 수 있는지
            var sum: Long = 0
            times.forEach { sum += mid/it }
            
            // 모두 심사 가능한 경우
            // 더 짧은 시간으로 가능한지 확인
            if (sum >= n) max = mid-1
            
            // 모두 심사 가능하지 않은 경우
            // 더 많은 시간 필요
            else min = mid + 1
        }
        
        return max + 1
    }
}