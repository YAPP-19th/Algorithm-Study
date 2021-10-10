/* Programmers
 * 2021 KAKAO BLIND RECRUITMENT - 메뉴 리뉴얼
 * created on 2021.10.10
 * created by jionchu */

class Solution {
    lateinit var map: MutableMap<String, Int>
    
    fun solution(orders: Array<String>, course: IntArray): Array<String> {
        var answer = mutableListOf<String>()
        
        for (n in course) {
            map = mutableMapOf()
            
            // n개로 구성할 수 있는 코스요리 조합
            for (order in orders) {
                // 알파벳 오름차순 정렬
                dfs(order.toCharArray().sorted().joinToString(""), n, 0, "")
            }
            
            // 개수 순 정렬
            val menuList = map.toList().sortedByDescending { it.second }
            
            // 가장 개수가 많은 코스요리 추가
            if (menuList.size == 0) continue
                
            var max = menuList[0].second
            for (i in menuList.indices) {
                if (menuList[i].second == max && menuList[i].second > 1)
                    answer.add(menuList[i].first)
                else break
            }
        }
        
        // 오름차순 정렬
        answer.sort()
        return answer.toTypedArray()
    }
    
    // 가능한 모든 코스요리 조합 만들기
    fun dfs(order: String, more: Int, current: Int, menu: String) {

        if (more == 0) {
            val total = map.getOrDefault(menu, 0) + 1
            map.put(menu, total)
            
            return
        }
        
        if (order.length == current) {
            return
        }
        
        dfs(order, more-1, current+1, menu+order[current])
        dfs(order, more, current+1, menu)
    }
}