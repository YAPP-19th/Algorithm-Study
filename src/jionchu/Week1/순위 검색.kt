/* Programmers
 * 2021 KAKAO BLIND RECRUITENT - 순위 검색
 * created on 2021.09.27
 * created by jionchu */

class Solution {
    val map = mutableMapOf<String,MutableList<Int>>()
    
    fun solution(info: Array<String>, query: Array<String>): IntArray {
        var answer: IntArray = IntArray(query.size)
        
        // 입력 가능한 모든 쿼리 조건과 동일한 형태로 만들어 점수 저장
        info.forEach {
            madeConditions(0, it.split(" "), "")
        }
        
        // query별로 인원수 세기
        for (i in query.indices) {
            val index = query[i].lastIndexOf(" ")
            val score = query[i].substring(index+1).toInt()
            val scores = map.get(query[i].substring(0,index))
            
            if (scores == null) continue
            
            // 오름차순 정렬
            scores.sort()
            
            // 이분탐색
            var min = 0
            var max = scores.lastIndex
            var mid: Int

            while (min <= max) {
                mid = (min+max)/2
                
                if (scores[mid] >= score) max = mid - 1
                else min = mid + 1
            }

            answer[i] = scores.size-min
        }
        
        return answer
    }
    
    fun madeConditions(i: Int, infos: List<String>, condition: String) {
        
        if (i == infos.size-1) {
            val scores = map.getOrElse(condition) { mutableListOf() }
            scores.add(infos[i].toInt())
            map.put(condition,scores)
        } else if (i == 0) {
            madeConditions(i+1, infos, "-")
            madeConditions(i+1, infos, infos[i])
        } else {
            madeConditions(i+1, infos, "$condition and -")
            madeConditions(i+1, infos, "$condition and ${infos[i]}")
        }
    }
}