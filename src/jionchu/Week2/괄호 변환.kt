/* Programmers
 * 2020 KAKAO BLIND RECRUITMENT - 괄호 변환
 * created on 2021.09.29
 * created by jionchu */

class Solution {
    fun solution(p: String): String {
        return balancing(p)
    }
    
    // 문자열을 올바른 괄호 문자열로 바꾸는 함수
    fun balancing(w: String): String {
        // 빈 문자열인 경우 (1)
        if (w.isEmpty()) return ""
        else {
            // 두 개의 균형잡힌 괄호 문자열로 분리하기 (2)
            val index = seperateIndex(w)
            var u = w.substring(0, index)
            val v = w.substring(index)
            
            // u가 올바른 괄호 문자열인 경우 (3)
            if (isBalanced(u)) return u+balancing(v)
            // u가 올바른 괄호 문자열이 아닌 경우 (4)
            else {
                var answer = ""
                // u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집기 (4-4)
                u.substring(1,u.length-1).forEach {
                    if (it == '(') answer += ')'
                    else answer += '('
                }
                
                return "("+balancing(v)+")"+answer
            }
        }
    }
    
    // 두 개의 균형잡힌 괄호 문자열로 분리하는 위치를 반환하는 함수
    fun seperateIndex(w: String): Int {
        var index = 0
        var count = 0
        
        for (i in w.indices) {
            if (w[i] == '(') count++
            else count--
            
            // 더 이상 분리할 수 없는 균형잡힌 문자열 발견
            if (count == 0) {
                return i+1
            }
        }
        
        return w.length
    }
    
    // 문자열이 올바른 괄호 문자열인지 확인하는 함수
    fun isBalanced(u: String): Boolean {
        var count = 0
        
        for (i in 0 until u.length) {
            if (u[i] == '(') count++
            else count--
            
            if (count < 0) return false
        }
        
        return true
    }
}