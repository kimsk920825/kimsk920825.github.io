---
title: 난이도 중 SQL 해커랭크 문제풀이 (총9문제)
date: 2021-04-07
tags:
  - SQL해커랭크_Contest_Leaderboard
  - 
  - 
  - 
---

# Contest Leaderboard

You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!

The total score of a hacker is the sum of their maximum scores for all of the challenges. 
Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score. 
If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. Exclude all hackers with 0 a total score of from your result.

번역
너가 지난번에 줄리아 코딩대회를 잘 도와줘서 줄리아가 이번에도 너의 도움을 원해.
해커 한명의 총 점수는 그 한명이 도전한 문제의 점수 중 가장 높게 나온 점수들의 합으로 정의한다. 
해커 아이디, 이름, 그리고 해커의 총 점수를 출력해라. 
점수를 내림차순으로 정렬해라.
만약 한 명이상의 선수가 같은 점수를 받았다면 hacker_id열 기준 오름차순으로 정렬해라.
총 점수가 0점인 사람은 출력에서 배제하라. 

### Input Format
The following tables contain contest data: <br>
Hackers: The hacker_id is the id of the hacker, and name is the name of the hacker. <br>


|Column|Type|
|:---:|:---:|
|hacker_id|Integer|
|name|String|

Submissions: The submission_id is the id of the submission, hacker_id is the id of the hacker who made
the submission, challenge_id is the id of the challenge for which the submission belongs to, and score is
the score of the submission.

|Column|Type|
|:---:|:---:|
|submission_id|Integer|
|hacker_id|Integer|
|challenge_id|Integer|
|score|Integer|

### Sample Input
Hackers Table:
|hacker_id|name|
|:---:|:---:|
| 4071  | name  |
| 4806  | Angela  |
| 26071  | Frank  |
| 49438  | Patrick  |
| 74842  | Lisa  |
| 80305  | Kimberly  |
| 84072  | Bonnie  |
| 87868  | Michael  |
| 92118  | Todd  |
| 95895  | Joe  |

<br>

Submissions Table: <br>
|submission_id|hacker_id|challenge_id|score|
|:---:|:---:|:---:|:---:|
|67194|<span style="color:blue">74842</span>|<span style="color:blue">63132</span>|<span style="color:blue">76</span>|
|64479   |<span style="color:blue">74842</span>   |<span style="color:blue">19797</span>   |<span style="color:blue">98</span>   |
|40742   |26071   |49593   |20   |
|17513   |4806   |49593   |32   |
|69846   |80305   |19797   |19   |
|41002   |26071   |89343   |36   |
|52826   |49438   |49593   |9   |
|31093   |26071   |19797   |2   |
|81614   |84072   |49593   |100   |
|44829   |26071   |89343   |17   |
|75147   |80305   |49593   |48   |
|14115   |4806   |49593   |76   |
|6943   |<span style="color:red">4071</span>   |<span style="color:red">19797</span>   |<span style="color:red">95</span>   |
|12855   |4806   |25917   |13   |
|73343   |80305   |49593   |42   |
|84264   |84072   |63132   |0   |
|9951   |<span style="color:red">4071</span>   |<span style="color:red">49593</span>   |<span style="color:red">43</span>   |
|45104   |49438   |25917   |34   |
|53795   |<span style="color:blue">74842</span>   |<span style="color:blue">19797</span>   |<span style="color:blue">5</span>   |
|26363   |26071   |19797   |5   |
|10063   |<span style="color:red">4071</span>   |<span style="color:red">49593</span>   |<span style="color:red">96</span>   |

<br>
Explanation <br>
Hacker 4071 submitted solutions for challenges 19797 and 49593, so the total score = 95 + max(43,96) = 101
<br>
Hacker 74842 submitted solutions for challenges 19797 and 63132, so the total score = max(98,5) + 76 = 174
<br>
<br>
분석
<br>
해커랭크 mysql서버는 window function이 안된다. <br>
처음에는 코드가 잘못된줄 알고 계속 들여다 봤지만 안되서 ms sql server로 바꿔서 진행했다. 
해커랭크 mysql서버가 예전버전이어서 window function이 안되는것같아 방법을 2개로 나눠서 진행했다. 첫 번째 방법은 회사 mysql 서버에서 window function이 돌아갈때를 가정하고 풀었고 두 번째 방법은 회사 mysql 서버가 예전 버전이라고 가정하고 window function 없이 풀었다. <br>

방법 1: 
1. 첫 번째 테이블 만들기
2. 첫 번째 select 절 만들기
3. 두 번째 테이블절 지정.
4. 두 번째 select절 조건 작성
5. 두 번째 select절 출력
6. 세 번째 테이블 지정
7. 세 번째 select절 조건 만들기<br>
7-1. hacker_id당, name당 score 점수 합산 <br>
7-2. 점수 합산이 0인것은 제외 <br>
7-3. 가장 높은 점수 부터 내림차순으로 정렬 출력, 같은 점수가 있다면 hacker_id 올림차순으로 정렬 출력.
8. 세 번째 select절 출력

```sql
/*
8. 세 번째 select절 출력
*/
select hacker_id, name, sum(score) 
/*
6. 세 번째 테이블 지정
*/
from
(
    /*
    5. 두 번째 select절 출력
    */
    select t.hacker_id, 
           t.name, 
           t.challenge_id, 
           t.score, 
           t.rnk
    /*
    3. 두 번째 테이블절 지정. 
    */
    from (
        /*
        2. 첫 번째 select 절 만들기
        해커 아이디, 해커 이름, 해커가 도전했을 떄 부여받은 아이디, 점수, 그리고 서브미션 해커아이디와 서브미션 도전 아이디 기준으로 파티션을 나누고 서브미션 점수 열 기준으로 내림차순하는 하는 열을 rnk라고 이름을 만들고 출력한다. 
        */
        select hackers.hacker_id as hacker_id, 
               hackers.name as name , 
               submissions.challenge_id as challenge_id,
               submissions.score as score,
               row_number() over (partition by submissions.hacker_id, submissions.challenge_id order by submissions.score desc) as rnk
         /*
         1. 첫 번째 테이블 만들기
         해커 태이블과 서브미션 테이블을 해커테이블의 해커아이디와 서브미션 테이블의 해커아이디 기준으로 inner join을 해준다.
         */        
        from hackers inner join submissions on hackers.hacker_id = submissions.hacker_id) t
    /*
    4. 두 번째 select절 조건 작성
    rnk가 1인 행만 출력. rnk가 1이라는 뜻은 같은 문제를 풀었을 때 가장 높은 점수를 받은 값을 의미함.
    */
    where rnk = 1
) t2
/*7. 세 번째 select절 조건 만들기*/
group by hacker_id, name
having sum(score)  != 0
order by sum(score)  desc, hacker_id
```
방법2

```sql
select hackers.hacker_id, hackers.name, sum(max_score) as total_score

    from(
    select hacker_id, challenge_id, max(score) as max_score
    from Submissions
    group by hacker_id, challenge_id
    ) t inner join hackers on t.hacker_id = hackers.hacker_id 
group by hackers.hacker_id, hackers.name
having total_score != 0 
order by total_score DESC, hacker_id
```

# New Companies
목표: print the company_code, founder name, total number of lead managers, total number of senior managers, total number of managers, and total number of employees.
조건: Order your output by ascending company_code. 
주의사항: 
1. the table may contain duplicate records.
2. the company_code is string, so the sorting should not be numeric. 

방법1: Inner Join 구문 이용하기
```sql
select c.company_code
, c.founder
, count(distinct lm.lead_manager_code)
, count(distinct sm.senior_manager_code)
, count(distinct m.manager_code)
, count(distinct e.employee_code)
from company c 
inner join lead_manager lm on c.company_code = lm.company_code
inner join senior_manager sm on lm.lead_manager_code = sm.lead_manager_code
inner join manager m on sm.senior_manager_code = m.senior_manager_code
inner join employee e on m.manager_code = e.manager_code

group by c.company_code, c.founder
order by c.company_code
```

방법 2: 서브쿼리 이용하기 
```sql 
select c.company_code, 
c.founder,
(select count(distinct lead_manager_code) from lead_manager where c.company_code = company_code),
(select count(distinct senior_manager_code) from senior_manager where c.company_code = company_code),
(select count(distinct manager_code) from manager where c.company_code = company_code),
(select count(distinct employee_code) from employee where c.company_code = company_code)
from company c
order by c.company_code
```
# Occupation
방법1: 
```sql
select min(doctor), min(professor),min(singer), min(actor)
from(select 
case when occupation = 'doctor' then name else null end Doctor,
case when occupation = 'professor' then name else null end Professor,
case when occupation = 'singer' then name else null end Singer,
case when occupation = 'actor' then name else null end Actor,
row_number() over (partition by occupation order by name) rnk
from occupations 
) t
group by t.rnk
order by t.rnk
```
방법2: 
```sql
select 
min(case when occupation = "doctor" then name else null end) Doctor,
min(case when occupation = "professor" then name else null end) Professor,
min(case when occupation = "singer" then name else null end) Singer,
min(case when occupation = "actor" then name else null end) Actor

from(
select name,
occupation,
row_number() over (partition by occupation order by name) rnk
from occupations
) t
group by t.rnk
order by t.rnk
```
방법3: window function 사용하지 않고 풀기. 
```sql
SET @r1=0, @r2=0, @r3=0. @r4=0;
select min(Doctor), min(Professor), min(Singer), min(Actor)
from(
    select case occupation when 'Doctor' then @r1:=@r1+1
                           when 'Professor' then @r2:=@r2+1
                           when 'Singer' then @r3:=@r3+1
                           when 'Actor' then @r4:=r4+1 END AS RowLine,
            case when occupation = 'doctor' then name else null end as Doctor,
            case when occupation = 'professor' then name else null end as Professor,
            case when occupation = 'singer' then name else null end as Singer,
            case when occupation = 'actor' then name else null end as Actor
            from occupation order by name
)as t
group by RowLine
```

# Binary Tree Nodes
방법 1: 
```sql
-- write a query to find node type of binary tree

-- order by the value of node --> interpreted as order it by n

-- 1. P에 없는 N은 Leaf
-- 2. P에 있는 N은 inner 
-- 3. P에 null이 있는 같은 열의 N은 Root

select N,
case 
when P IS NULL then 'Root'
when N  IN (select distinct P from BST) then 'Inner'
else 'Leaf' END 
from BST
order by N
```

방법 2: join문 활용하기
```sql
select distinct BST.N,
case
when BST.P IS NULL then 'Root'
when BST2.P IS NULL then 'Leaf'
else 'Inner'
end
from BST left join BST BST2 on BST.N = BST2.P
order by n
```

# SQL Project Planning
```sql
-- 1. the start and end dates of projects listed by the number of days it took to complete the project in ascending order. 
-- 2. if more than one project have the same number of completion days
-- then order by the start date of the project. 
select t.Start_Date, t2.End_Date
from
(select Start_Date
, row_number() over (order by Start_Date) rnk
from Projects
where Start_Date NOT IN (select distinct End_Date from Projects)) t
inner join (
select End_Date
, row_number() over (order by End_Date) rnk
from projects
where End_Date NOT IN (select distinct Start_Date from Projects)) t2
on t.rnk = t2.rnk
order by DATEDIFF(end_date,start_date)
```
# Ollivander's Inventory
```sql
-- 1. write a query to print the id, age, coins_needed, and power of the wands that Ron's interested in, sorted in order of descending power. 
-- 2. If more than one wand has same power, sort the result in order of descending age. 
-- 3. age하고 power가 같은 것중에 coins_needed가 가장 적은 것을 추출해라. 
select t.id, t.age, t.coins_needed, t.power
from(
select
wands.id as id, 
wands_property.age as age, 
wands.coins_needed as coins_needed, 
wands.power as power,
row_number() over (partition by wands_property.age, wands.power order by wands.coins_needed) as rnk, 
wands_property.is_evil as is_evil
from wands inner join wands_property on wands.code = wands_property.code 
) t
where rnk = 1 and t.is_evil = 0
order by t.power desc, t.age desc
```
# Weather Observation 20
```sql
-- median 
-- 홀수 n+1/2 번째 숫자가 
-- 짝수 AVG(n/2,(n/2)+1) 숫자가 median 
-- n은 총 갯수. 

select ROUND(AVG(LAT_N),4)
from 
(
select 
    row_number() over(order by LAT_N) rnk,
    count(*) over () n,
    LAT_N
from station 
) t
where case 
        when MOD(n,2) =1 then rnk = (n+1)/2
        ELSE rnk IN (n/2,(n/2)+1) 
      END
```
# LeetCode: 262. Trips and Users
```sql

# 1.write a SQL query to find the cancellation rate of requests with unbanned users (both client and driver must not be banned)
# 2. each day between "2013-10-01" and "2013-10-03"
# 3. cancellation rate =  dividing the umber of canceled/the total number of requests 
# 4. return the result table in any order 
# 5. cancellation rate to two decimal points 

# case when Status != 'completed' then 1 else 0 end as total_number_of_cancel,
# count(*) over () as total_number_of_status

SELECT 
Request_at as Day, 
ROUND(cancelation_rate/total_status_number,2) as 'Cancellation Rate'

FROM(
SELECT t.Request_at,
SUM(case when Status != 'completed' then 1 else 0 end) as cancelation_rate,
count(*) as total_status_number
FROM Trips t 
    INNER JOIN Users uc ON t.Client_Id = uc.Users_Id
    INNER JOIN Users ud ON t.Driver_Id = ud.Users_Id
WHERE ud.Banned = 'No' AND uc.Banned = 'No' AND t.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY t.Request_at
) t2
```
# LeetCode: 626. Exchange Seats
```sql
SELECT 
    CASE
        WHEN MOD(id,2) = 1 AND id != total_number then id + 1
        WHEN MOD(id,2) = 1 AND id = total_number then id 
        ELSE id -1
        END as id 
    , student
FROM(
SELECT *,
COUNT(*) OVER () as total_number 
FROM seat
) t
order by id 
```