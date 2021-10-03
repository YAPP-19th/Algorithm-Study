/* Programmers
 * 2017 팁스타운 - 예상 대진표
 * created on 2021.09.27
 * created by jionchu */

class Solution {
    fun solution(n: Int, a: Int, b: Int): Int {
        var answer = 0
        var a = a-1
        var b = b-1
        
        while(a != b) {
            answer++
            a/=2
            b/=2
        }

        return answer
    }
}