---
title: Pandas_Guide_For_Teammates
date: 2021-05-08
tags:
  - 팀원모두취직
  - 판다스정리
  - 원티드취직
  - 마이리얼트립취직
  - 뱅크샐러드취직
  - 토스취직
  - 데이터분석가
  - 데이터싸이언티스트
  - 넘파이정리
---

```python
import numpy as np
import pandas as pd
```

# 시리즈
- 인덱스는 데이터값과 일대일 매칭 
- 데이터가 나열된 1차원 형식의 배열 형태

## 시리즈 생성
- 딕셔너리 데이터 생성
- Sr = pd.Series(data=딕셔너리데이터이름, index=[])


```python
series_data = {"팀원1":"김승규","팀원2":"박성준","팀원3":"김아람"}
sr = pd.Series(data=series_data)
sr
```




    팀원1    김승규
    팀원2    박성준
    팀원3    김아람
    dtype: object



## 인덱스 구조
- 인덱스값 배열
    - 시리즈 객체.index
- 데이터값 배열
    - 시리즈 객체.values


```python
sr.index
```




    Index(['팀원1', '팀원2', '팀원3'], dtype='object')




```python
sr.values
```




    array(['김승규', '박성준', '김아람'], dtype=object)



## 원소 선택
- 정수형 위치 인덱스: iloc.대괄호([])안에 위치를 나타내는 숫자 입력. 
- 문자역 위치 인덱스: loc.대괄호([])안에 인덱스 이름 입력.


```python
sr.iloc[2]
```




    '김아람'




```python
sr.loc["팀원2"]
```




    '박성준'



# 데이터 프레임
- 데이터 프레임은 데이터 배열 형태.
- 여러개의 열 벡터들이 같은 행 인덱스 기준으로 줄지어 결합된 2차원 벡터 또는 행렬.

## 데이터 프레임 만들기
- pandas.DataFrame(딕셔너리형태 객체 이름)
- df = pandas.DataFrame(딕셔너리형태 객체 이름)


```python
회사ID리스트 = {"회사ID1":"1232134","회사ID2":"5839204","회사ID3":"13224213"}
df = pd.DataFrame(회사ID리스트, index = ["1","2","3"])
display(df)
```


<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>


## 행 이름과 인덱스 이름 설정 
- pd.DataFrame(데이터이름, index = [], columns =[])

## 행 이름과 인덱스 이름 바꾸기
- df.index = [새로운 행 이름 배열]
- df.columns = [새로운 열 이름 배열]

## 특정 행 이름과 인덱스 이름 바꾸기
- df.rename(index={"예전이름":"바꿀이름","예전이름":"바꿀이름"})
- df.rename(columns={"예전이름":"바꿀이름","예전이름":"바꿀이름"})


```python
df.rename(index={"1":"1_회사"}) #실제 df에는 영향을 주지 않음.
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1_회사</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.rename(columns={"회사ID1":"회사ID_1"}) #실제 df에는 영향을 주지 않음.
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID_1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>



## 행,열 삭제
행, 열을 소거시 drop()메서드를 사용하고 행은 axis=0 열은 axis=1로 설정한다.
- df.drop(행 인덱스 또는 리스트, axis = 0)
- df.drop(열 인덱스 또는 리스트, axis = 1)


```python
df.drop("1", axis=0) #실제 df에는 영향을 주지 않음.
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.drop(["1","2"], axis=0) #실제 df에는 영향을 주지 않음.
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.drop("회사ID1", axis=1)
#df.drop(df[["회사ID1"]], axis=1) 와도 같다.
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>




```python
#df = df.drop(index=df.query('열이름 비교연산자 조건').index)
```



## 행 인덱스 선택 
- 데이터프래임의 행 인덱스를 선택하기 위해서는 loc와 iloc인덱서를 사용한다. 
- 문자타입의 인덱스를 선택하기 위해서는 loc
- 정수형타입의 인덱스를 선택하기 위해서는 iloc을 사용한다.

|구분|loc|iloc|
|------|---|---|
|탐색대상|인덱스이름|정수형위치|
|범위지정|가능(범위끝포함)|가능(범위끝제외)|
|테스트1|loc['a':'c'] = 'a','b','c'|iloc[1:4] = 1,2,3|


```python
df.loc["1"]
```




    회사ID1     1232134
    회사ID2     5839204
    회사ID3    13224213
    Name: 1, dtype: object




```python
df.loc["1":"3"]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.loc[["1","3"]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>



## 열 선택 
- 열 1개만 선택할때: df["열 이름"] or df.열 이름
- 열을 여러개 선택할때: df[["",""]]


```python
df["회사ID1"]
```




    1    1232134
    2    1232134
    3    1232134
    Name: 회사ID1, dtype: object




```python
df[["회사ID1","회사ID2"]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
    </tr>
  </tbody>
</table>
</div>



## 원소 선택 
- 행 인덱스와 열 이름을 [행,열]형식의 2차원 좌표로 입력한다. 
    - 인덱스 이름 방식: 데이터프레임.loc[행 인덱스, 열 번호]
    - 정수 위치 인덱스 방식: 데이터프레임.iloc[행 번호, 열 번호]


```python
df.loc["2","회사ID2"] #df.loc[2]["회사ID"]와 같음. 하지만 여러 행,열 설정을 해주기 위해선 리스트로 묶어줘야함. 
```




    '5839204'




```python
df.loc[["1","3"], ["회사ID1","회사ID3"]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.loc["1":"3", ["회사ID1","회사ID3"]]
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>13224213</td>
    </tr>
  </tbody>
</table>
</div>



## 행 추가
- df.loc[인덱스 이름] = 데이터값 또는 리스트


```python
df.loc["4"] = ["2324124","1314213","124214123"] #df에 변화가 바로 적용
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2324124</td>
      <td>1314213</td>
      <td>124214123</td>
    </tr>
  </tbody>
</table>
</div>



## 열 추가
- df["새로운 열 이름"] = 데이터값 또는 리스트


```python
df["회사ID4"] = ["423","23532","235","8679"] #df에 변화가 바로 적용
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>423</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>23532</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>235</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2324124</td>
      <td>1314213</td>
      <td>124214123</td>
      <td>8679</td>
    </tr>
  </tbody>
</table>
</div>



## 원소 값 변경
- df.loc["행 이름"]["열 이름"] = 새로운 값
- df.iloc["행 번호"]["열 번호] = 새로운 값


```python
df.loc["1"]["회사ID1"] = 3 #df에 변화가 바로 적용
```


```python
df.loc["1"]["회사ID1":"회사ID4"] = 3 #df에 변화가 바로 적용
```


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>23532</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>235</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2324124</td>
      <td>1314213</td>
      <td>124214123</td>
      <td>8679</td>
    </tr>
  </tbody>
</table>
</div>



## 특정 열을 행 인덱스로 설정 
- df.set_index(["열 이름들"])
- df.set_index("열 이름")

## 행 인덱스 재배열 
- 기존 객체를 변경하지 않고 새로운 데이터프래임 객체를 반환한다


```python
new_obj = ['comp_row1','comp_row2','comp_row3','comp_row4'] #df에 변화가 바로 적용
df_new = df.reindex(new_obj)
```


```python
df_new
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>comp_row1</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>comp_row2</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>comp_row3</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>comp_row4</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



### 재배열된 df_new 변수에 값 할당


```python
df_new.loc["comp_row1":"comp_row4"]["회사ID1"] = ["31","34","213","421"]

```


```python
df_new
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>comp_row1</th>
      <td>31</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>comp_row2</th>
      <td>34</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>comp_row3</th>
      <td>213</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>comp_row4</th>
      <td>421</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>23532</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>235</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2324124</td>
      <td>1314213</td>
      <td>124214123</td>
      <td>8679</td>
    </tr>
  </tbody>
</table>
</div>



## 행 인덱스 초기화
- df.reset_index()

## 행 인덱스를 기준으로 데이터 정렬 
- df.sort_index(ascending = True 또는 False)


```python
df.sort_index(ascending = False)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>4</th>
      <td>2324124</td>
      <td>1314213</td>
      <td>124214123</td>
      <td>8679</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>235</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>23532</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>



## 열 인덱스를 기준으로 데이터 정렬 
df. sort_values(by = "열이름", ascending True 또는 False)


```python
df["회사ID1"] = df["회사ID1"].astype(int)
```


```python
df.sort_values(by = "회사ID1", ascending=False)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>회사ID1</th>
      <th>회사ID2</th>
      <th>회사ID3</th>
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>4</th>
      <td>2324124</td>
      <td>1314213</td>
      <td>124214123</td>
      <td>8679</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>23532</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>235</td>
    </tr>
    <tr>
      <th>1</th>
      <td>3</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>



# 산술연산 
- 판다스의 산술 연산은 3단계를 거친다. 
    1. 행/열 인덱스를 기준으로 모든 원소를 정렬한다.
    2. 동일한 위치에 있는 원소끼리 일대일로 대응시킨다. 
    3. 일대일 대응되는 원소끼리 연산을 처리한다. 
    4. 대응되는 원소가 없다면 nan으로 처리한다.

## 시리즈 (+-*/) 숫자
- 시리즈 객체에 어떤 숫자를 연산하면 시리즈의 개별 원소에 각각 적용된 객체로 반환된다. 


```python
d = {"index1":1,"index2":2,"index3":3}
sr2 = pd.Series(d)
display(sr2)
```


    index1    1
    index2    2
    index3    3
    dtype: int64



```python
sr2+2 #sr2에 바로 적용 안됨. 
```




    index1    3
    index2    4
    index3    5
    dtype: int64



## 시리즈 (+-*/) 시리즈
- 시리즈가 다른 시리즈와 연산할때 같은 인덱스끼리 연산하다. 
- 인덱스가 정렬이 안되어있다해도 판다스는 알아서 같은 인덱스를 찾아 연산한다. 
- 연산을 하는 두 시리즈의 크기가 다르거나 크기가 같더라도 인덱스가 다르다면 판단스는 유효한 같이 없다고 생각하여 nan을 추출한다. 

### 시리즈 크기가 같고 인덱스도 같은 상황


```python
d = {"index1":4, "index2":9, "index3":10}
sr3 = pd.Series(data=d)
```


```python
sr2+sr3
```




    index1     5
    index2    11
    index3    13
    dtype: int64



### 시리즈 크기는 같은데 인덱스가 다른 상황


```python
d = {"index4":3, "index5":1, "index6":3}
sr4 = pd.Series(data=d)
```


```python
sr3+sr4
```




    index1   NaN
    index2   NaN
    index3   NaN
    index4   NaN
    index5   NaN
    index6   NaN
    dtype: float64



### 시리즈 크기는 다르고 인덱스는 같은 상황


```python
d = {"index1":4, "index2":23490, "index3":33,"index4":123}
sr5 = pd.Series(data = d)
```


```python
sr2+sr5
```




    index1        5.0
    index2    23492.0
    index3       36.0
    index4        NaN
    dtype: float64



## 연산 메소드
- 객체 사이의 공통된 인덱스가 없거나 Nan이 포함된 경우 연산 결과가 Nan이 반환되는데 이를 방지하기 위해서 메소드안에 fill_value 옵션을 써준다.
- 덧셈: 시리즈객체1.add(시리즈객체2, fill_value=0)
- 뺄셈: 시리즈객체1.sub(시리즈객체2, fill_value=0)
- 곱셈: 시리즈객체1.mul(시리즈객체2, fill_value=0)
- 나눈셈: 시리즈객체1.div(시리즈객체2, fill_value=0)


```python
sr2.add(sr4, fill_value=0)
```




    index1    1.0
    index2    2.0
    index3    3.0
    index4    3.0
    index5    1.0
    index6    3.0
    dtype: float64




```python
sr3.sub(sr2, fill_value=0)
```




    index1    3
    index2    7
    index3    7
    dtype: int64




```python
sr3
```




    index1     4
    index2     9
    index3    10
    dtype: int64



# 데이터 입출력

## CSV

### CSV파일 불러오기 
- pd.read_csv('파일경로/파일이름.csv')

### CSV로 저장하기
- 데이터프레임.to_csv('파일경로/파일이름.csv')

## Excel

### Excel 파일 불러오기
- pandas.read_excel('파일경로/파일이름.xlsx')

### Excel 파일로 저장하기 
- 데이터프레임.to_excel('파일경로/파일이름.xlsx')

### 여러개의 데이터프레임을 한개의 excel파일로 저장
- writer = pandas.ExcelWriter("파일경로/파일이름.xlsx")
- df1.to_excel(writer, sheet_name="sheet1")
- df2.to_excel(writer, sheet_name="sheet2")
- writer.save()

## Json

### Json 파일 불러오기
- pandas.read_json('파일경로/파일이름.json')

### Json 파일로 저장하기
- df.to_json('파일경로/파일명.json')

## HTML

### HTML 파일 불러오기 
- 웹에 있는 <table> 태그가 붙은 
- pandas.read_html('웹주소 url')
- pandas.read_html('파일경로/파일명.html')

# 데이터 살펴보기

## 각 열의 개수 
- count() 메서드는 데이터프레임의 각 열이 가지고 있는 데이터 개수를 시리즈 객체로 반환한다. 
- 데이터프레임.count() --> 데이터프레임을 이루고 있는 열의 개수를 시리즈 객체로 반환한다.

## 각 열의 고윳값 개수
- value_counts() 메서드는 시리즈 객체의 고윳값 개수를 세는데 사용한다. 
- dropna=True 옵션을 사용하면 nan값을 제외하고 숫자를 센다. 
- dropna=False가 기본값이다.
데이터프레임["열이름"].value_counts()


```python
import pandas as pd
import numpy as np
```


```python
data = {"A": [1,2,3,4,5],"B":[3,59,30,1,2],"C":["dw","vc","qw","bb","ll"]}
df = pd.DataFrame(data)
```


```python
df.count() #전체 데이터의 열이 가지고 있는 갯수 
```




    A    5
    B    5
    C    5
    dtype: int64




```python
df["A"].value_counts() #한 열이 가지고 있는 value값들의 고유 갯수 counting 
```




    5    1
    4    1
    3    1
    2    1
    1    1
    Name: A, dtype: int64



# 통계 함수 적용 

## 평균값 
- 데이터프레임에 mean()메서드를 적용하면, 산술 데이터를 갖는 모든 열의 평균값을 각각 계산하여 시리즈 객체로 반환한다. 
- df.mean() df의 열 평균을 계산 
- df["열이름"].mean() 선택 받은 열의 평균 계산.

## 중간값
- 데이터프레임에 median()메서드를 적용하면, 산술 데이터를 갖는 모든 열의 중간값을 각각 계산하여 시리즈 객체로 반환한다. 
- 데이터프레임의 특정 열을 선택하여 중간 값을 계산할 수도 있다. 
- df.median()
- df["열이름"].median()

## 최대값
- 데이터프레임에 max() 메서드를 적용하면 데이터프레임의 각 열이 갖는 데이터값 중에서 최대값을 계산하여 시리즈로 반환한다. \
- 특정열을 선책하여 계산할 수도 있다. 
- 문자열 데이터는 아스키코드로 크고 작음을 비교한다. 
- 모든 열의 최대값: df.max()
- 특정 열의 최대값: df["열 이름"].max()


```python
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>3</td>
      <td>dw</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>59</td>
      <td>vc</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>30</td>
      <td>qw</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>1</td>
      <td>bb</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>2</td>
      <td>ll</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.max()
```




    A     5
    B    59
    C    vc
    dtype: object




```python
df["A"].max()
```




    5




```python
df[["A","B"]].max()
```




    A     5
    B    59
    dtype: int64



## 최소값
- 데이터프레임에 min() 메서드를 적용하면 데이터프레임의 각 열이 갖는 데이터값 중에서 최소값을 계산하여 시리즈 형태로 반환한다. 
- 특정열을 계산할 수도 있다. 
- 문자열 데이터는 아스키코드로 크고 작음을 계산한다. 
- 모든 열의 최소값: 데이터프레임객체.min()
- 특정 열의 최소값: 데이터프레임객치["열값"].min()

## 표준편차
- 데이터프레임에 std() 메서드를 적용하면 산술 데이터를 갖는 열의 표준편차를 계산하여 시리즈로 반환한다. 
- 특정열만 계산할 수도 있다. 
- 문자열 데이터는 비교하지 않는다. 
- df.std()
- df["열이름"].std()

## 상관계수 
- 데이터프레임에 corr()메서드를 적용하면 두 열간의 상관계수를 계산한다. 
- 산술 데이터를 갖는 모든 열에 대해 2개씩 서로 짝을 짓고, 각각의 경우에 대하여 상관계수를 계산한다. 
- 문자열 데이터는 계산이 불가능하기때문에 포함하지 않는다. 
- df.corr()
- df.[["열이름","열이름]].corr()


```python
df.corr()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>1.000000</td>
      <td>-0.372822</td>
    </tr>
    <tr>
      <th>B</th>
      <td>-0.372822</td>
      <td>1.000000</td>
    </tr>
  </tbody>
</table>
</div>




```python
df[["A","B"]].corr()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>A</th>
      <td>1.000000</td>
      <td>-0.372822</td>
    </tr>
    <tr>
      <th>B</th>
      <td>-0.372822</td>
      <td>1.000000</td>
    </tr>
  </tbody>
</table>
</div>



# 판다스 내장 그래프 도구 활용 
- 시리즈 또는 데이터프레임 객체에 plot()메서드를 적용하여 그래프를 그린 뒤, kind 옵션으로 종류를 선택한다.


|kind 옵션|설명|kind 옵션|설명|
|------|---|---|---|
|'line'|선 그래프|'kde'|커널 밀도 그래프|
|'bar'|수직 막대 그래프|'area'|면적 그래프|
|'barh'|수평 막대 그래프|'pie'|파이 그래프|
|'his'|히스토그램|'scatter'|산점도 그래프|
|'box'|'박스 그래프'|'hexbin'|고밀도 산점도 그래프|

## 선 그래프
- 데이터프래임 객체에 plot()메서드를 적용할 때 다른 옵션을 추가하지 않으면 가장 기본적인 선 그래프를 그린다. 
- 선 그래프: 데이터프레임객체.plot()

##  막대 그래프
- plot()메스드 안에 kind="bar"옵션을 추가한다.
- 막대그래프 : 데이터프레임객체.plot(kind="bar")

## 히스토그램
- plot()메서드 안에 kind="hist"옵션을 추가한다
- 히스토그램: 데이터프레임객체.plot(kind="hist")


```python
df.plot(kind="hist")
```




    <matplotlib.axes._subplots.AxesSubplot at 0x11910b7d0>




![png](pandas_dataframe_writtenby_SeungHwanOh_files/pandas_dataframe_writtenby_SeungHwanOh_114_1.png)


## 

## 산점도
- df.plot(x="특정 열", y="특정 열", kind="scatter")


```python
df.plot(x='A', y='B', kind="scatter")
```




    <matplotlib.axes._subplots.AxesSubplot at 0x11a2fb250>




![png](pandas_dataframe_writtenby_SeungHwanOh_files/pandas_dataframe_writtenby_SeungHwanOh_117_1.png)


## 박스플롯
- plot()메서드 안에 kind="box"옵션을 입력한다. 
- 박스플롯을 통해 'o'표시를 통해 이상값을 확인할 수 있다. 
- 박스플롯: 데이터프레임['열 이름'.'열 이름', ~].plot(kind="box")
- 이때 하나만 보고 싶다면 데이터프레임에 컬럼을 하나만 지정하면 된다. 

# 시각화 도구

## Matplotlib - 기본 그래프 도구
### 선 그래프
    - 선 그래프는 연속하는 데이터 값들을 직선 또는 곡선으로 연결하여 데이터 값 사이의 관계를 나타낸다
    - 특히 시계열 데이터와 같이 연속적인 값의 변화와 패턴을 파악하는데 적합하다.
    - 선 그래프는 기본 옵션이기 때문에 옵션을 설정하지 않고 plot 함수를 쓰면 선 그래프가 나온다.
    
    1. 스타일 서식 지정
    plt.style.use('ggplot')
    
    2. 그림 사이즈 지정
    plt.figure(figsize=(가로숫자,세로숫자))
    
    3. x축, y축 데이터를 plot 함수에 입력 --> 시리즈의 인덱스를 x축 데이터로, 데이터값을 y축데이터로 전달
    plt.plot(x축, y축, marker="지정 알파벳", markersize=숫자입력)
    #판다스 객체 자체를 plot함수에 입력하는 것도 가능하다. 
    
    4. 그래프 객체에 차트 제목을 추가할 때 title()함수를 이용한다.
    plt.title("제목 입력", size=숫자) 
    
    5. 축 이름 추가 
    plt.xlabel("x축 이름", size=숫자)
    plt.ylabel("y축 이름", size=숫자)
    
    6. matplotlib 한글 문제 해결 --> 해당 코드를 그대로 쓰면 된다.
    from matplotlib import font_manager, rc 
    font_path = "./폰트파일위치/폰트.ttf"
    font_name = font_manager.FontProperties(fname=font_path).get_name()
    rc('font', family=font_name)
    
    7. x축, y축 범위 지정 (최솟값, 최댓값)
    plt.xlim(최솟값, 최댓값)
    plt.ylim(최솟값, 최댓값) 
    
    8. x축 눈금 라벨 회전 / vertical 대신 숫자를 입력해도 된다.
    plt.xsticks(rotation= "vertical")
    
    9. 범례표시 / best는 최적의 위치를 선정해주는 자동기능이다. 
    plt.legend(labels=["범례 이름"], loc="best", fontsize=숫자)
    
    10. 그래프 출력
    plt.show()  

# 데이터 사전 처리

## 누락 데이터 처리
    - 유효한 데이터 값이 존재하지 않는 누락 데이터를 NaN으로 표시한다. 
    - 누락 데이터 확인
        - df.info()메서드로 데이터프레임 요약정보를 출력하면 NaN 값의 개수를 보여준다. 
        - df["열"].value_counts() 메서드로 특정 열의 누락 데이털르 확인할 수 있다. 
            - 이때 누락 데이터의 개수를 확인하려면 반드시 dropna = False라는 옵션을 적용해야 한다. 그렇지 않으면 NaN값을 제외하고 유요한 데
              이터 개수만을 구한다.
        - df.isnull()메서드와 notnull()메서드를 통해 직접적으로 누락 데이터를 찾을 수 있다. 
            - isnull(): 누락데이터라면 True 반환, 유효한 데이터면 False를 반환
            - notnull(): 유효한 데이터면 True 반환, 누락 데이터면 False를 반환
            - 이때 True는 1로 계산되고 False는 0으로 판별되기 때문에, sum(axis=0) 메소드를 활용하여 True(1)의 합을 구할 수 있다. 
                - print(df.head().isnull().sum(axis=0))

## 누락 데이터 제거
    - dropna() 메서드를 적용해 NaN 값을 갖는 행 또는 열을 삭제할 수 있다. 
    - subset옵션으로 열을 한정할 수 있다.
    - how 옵션으로 NaN값에 따라 삭제 조건을 줄 수 있다.
    - 누락 데이터 삭제(기준점): 데이터프레임객체.dropna(axis=0 또는 1, thresh=n)
    - 누락 데이터 삭제(조건): 데이터프레임객체.dropna(subset=['열 이름'], how='any' or 'all', axis =0 또는 1)
    이때 n은 결측치가 n개 이상인 행 또는 열을 삭제하라는 기준점을 주는 것이다.
    how 옵션의 any는 NaN가 하나라도 존재하는 행 또는 열을 삭제하라는 의미고, all은 모든 데이터가 NaN인 경우에만 삭제하라는 의미다. 


```python
import seaborn as sns
df = sns.load_dataset('titanic')
```


```python
#각 열의 NaN 개수를 계산하기 위해서 for 반복문으로 각 열의 NaN 개수 계산하기. 
missing_df = df.isnull()
for col in missing_df.columns:
    missing_count = missing_df[col].value_counts()
    try:
        print(col,":", missing_count[True]) #NaN값이 있으면 개수 출력
    except:
        print(col,":", 0) #Nan값이 없으면 0개 출력
```

    survived : 0
    pclass : 0
    sex : 0
    age : 177
    sibsp : 0
    parch : 0
    fare : 0
    embarked : 2
    class : 0
    who : 0
    adult_male : 0
    deck : 688
    embark_town : 2
    alive : 0
    alone : 0



```python
df_thres = df.dropna(axis=1, thresh=500)
```


```python
print(df_thres.columns)
```

    Index(['survived', 'pclass', 'sex', 'age', 'sibsp', 'parch', 'fare',
           'embarked', 'class', 'who', 'adult_male', 'embark_town', 'alive',
           'alone'],
          dtype='object')


891명의 승객중에서 177명의 나이에 대한 데이터가 없다. 승객의 나이가 데이터 분석의 중요한 변수라면, 나이 데이터가 없는 승객의 레코드(행)를 제거하는 것이 좋다. dropna() 메소드에 subset을 'age'열로 한정하면 'age'열의 행 중에서 NaN값이 있는 모든 행(axis=0)을 삭제한다. 기본값으로 how="any" 옵션이 적용되는데, NaN값이 하나라도 존재하면 삭제한다는 뜻이다. how="all" 옵션으로 입력하면 모든 데이터가 NaN값일 경우에만 삭제가 된다. 예제에서는 891개의 행 중에서 나이 데이터가 누락된 177개 행을 삭제하고 나머지 714개의 행을 df_age에 저장한다


```python
df_age = df.dropna(subset=["age"], how="any", axis=0)
```


```python
missing_data = df_age.isnull()
for col in missing_data.columns:
    eda = missing_data[col].value_counts()
    try:
        print(col, ":",eda[True])
    except:
        print(col, ":",0)
```

    survived : 0
    pclass : 0
    sex : 0
    age : 0
    sibsp : 0
    parch : 0
    fare : 0
    embarked : 2
    class : 0
    who : 0
    adult_male : 0
    deck : 530
    embark_town : 2
    alive : 0
    alone : 0


## 누락 데이터 치환 
    - 누락 데이터를 바꿔서 대체할 값으로는 데이터의 분포와 특성을 잘 나타낼 수 있는 평균값, 최빈값 등을 활용한다. 
    - 판다스에서는 fillna() 메소드를 상ㅇ한다.
    - 원본 객체를 변경하려면 inplace = True옵션을 추가해야 한다. 
    - 평균(Mean)으로 누락 데이터를 바꿔주는 방법을 알아보자. 앞의 예제처럼 승객의 나이 데이터가 누락된 행을 제거하지 않고, 대신 'age'열의 나머
    지 승객의 평균 나이로 치환하다. 먼저 'age'열에 들어있는 값들의 평균을 계산하여 mean_age에 저장한다. mean() 메소드를 적용하면 NaN을 제외
    하고 평균을 계산한다. fillna() 메소드에 mean_age를 인자로 전달하면 NaN을 찾아서 mean_age값으로 치환한다. 
    

### 정수형 데이터


```python
import seaborn as sns 
df = sns.load_dataset('titanic')
print(df['age'].head(10))
print('\n')
mean_age = df['age'].mean(axis=0)
df["age"].fillna(mean_age, inplace=True)

#age 열의 첫 10개 데이터 출력(5행에 NaN값이 평균으로 대체)
print(df['age'].head(10))
```

### 범주화 데이터
승선도시를 나타내는 'embark_town'열에 있는 NaN을 다른 값으로 바꾼다. 승객들이 가장 많이 승선한 도시의 이름을 찾아서 NaN을 치환한다. 먼저 value_counts() 메소드를 사용하여 승선도시별 승객 수를 찾고, idxmax() 메소드로 가장 큰 값을 갖는 도시를 찾는다. 실행 결과에서 829행의 NaN값을 포함해서 누락 데이터들은 Southamption으로 변경한다


```python
import seaborn as sns

df = sns.load_dataset('titanic')

# embark_town 열의 829행의 NaN 데이터 출력
print(df['embark_town'][825:830])
print('\n')

# embark_town 열의 NaN값을 승선도시 중에서 가장 많이 출현한 값으로 치환하기. 
most_freq = df["embark_town"].value_counts(dropna=True).idxmax()
print(most_freq)
print('\n')

df['embark_town'].fillna(most_freq, inplace=True)

#embark_town열 829행의 NaN 데이터 출력(NaN값이 most_freq값으로 대체)
print(df['embark_town'][825:830])
```

    825     Queenstown
    826    Southampton
    827      Cherbourg
    828     Queenstown
    829            NaN
    Name: embark_town, dtype: object
    
    
    Southampton
    
    
    825     Queenstown
    826    Southampton
    827      Cherbourg
    828     Queenstown
    829    Southampton
    Name: embark_town, dtype: object


#### 누락 데이터가 표시가 안될때

누락 데이터가 NaN으로 표시되지 않은 경우
    - 데이터셋 중에는 누락 데이터가 NaN으로 입력되지 않은 경우도 많다. 예를 들면, 숫자 0이나 문자 '-','?' 같은 값으로 입력되기도 한다. 판다스에서 누락 데이터를 다루려면 replace() 메소드를 활용하여 NumPy에서 지원하는 np.nan으로 변경해주는 것이 좋다. 단, np.nan을 사용하기 위해서는 "import numpy as np"와 같이 NumPy라이브러리를 먼저 임포트해야 한다. 
        - 사용법: df.replace('?', np.nan, inplace=True)
        - nan외의 다른 누락값이 있나 확인법: unicon.apply(lambda x: "?" in list(x), axis=1 )

#### 범주화 데이터 특성을 이용한 결측치 치환
데이터셋의 특성상 서로 이웃하고 있는 데이터끼리 유사성을 가질 가능성이 높다. 이럴 때는 앞이나 뒤에서 이웃하고 있는 값으로 치환해 주는 것이 좋다. fillna() 메소드에 method='ffill' 옵션을 추가하면 NaN이 있는 행의 직전 행에 있는 값으로 바꿔준다. method='bfill' 옵션을 사용하면 NaN이 있는 행의 바로 다음 행에 있는 값을 가지고 치환한다. 다음의 예제에서는 'ffill'옵션을 사용하여 829행의 NaN값을 바로 앞에 위치한 828행의 Queenstown으로 변경한다. 


```python
import seaborn as sns
df = sns.load_dataset('titanic')
df['embark_town'].fillna(method='ffill', inplace=True)
```


```python
df['embark_town'].value_counts(dropna=True)
```




    Southampton    644
    Cherbourg      169
    Queenstown      78
    Name: embark_town, dtype: int64



# 중복 데이터 처리 

## 중복 데이터 확인
    - 동일한 관측값이 중복되는지 여부, 즉 행의 레코드가 중복되는지 여부를 확인하려면 duplicated()메소드를 이용한다. 전에 나온 행들과 비교하여 
    중복되는 행이면 True를 반환하고, 처음 나오는 행에 대해서는 False를 반환한다.
    - 데이터프레임에 duplicated() 메소드를 적용하면 각 행의 중복 여부를 나타내는 불린 시리즈를 반환한다. 
    - 0행의 데이터는 뒤에 나오는 1행의 데이터와 같지만 처음 나오는 값이다. 즉, 앞에 비교할 데이터가 아예없기 때문에 중복이 아니라는 뜻에서 False
    로 판정한다. 1행의 데이터는 앞의 0행과 중복되기 때문에 True가 된다.


```python
import pandas as pd 
df = pd.DataFrame(
{'c1':['a','a','b','a','b'],
 'c2':[1,1,1,2,2],
 'c3':[1,1,2,2,2]})
print(df)
print('\n')

df_dup = df.duplicated()
print(df_dup)
print('\n')
```

      c1  c2  c3
    0  a   1   1
    1  a   1   1
    2  b   1   2
    3  a   2   2
    4  b   2   2
    
    
    0    False
    1     True
    2    False
    3    False
    4    False
    dtype: bool
    
    


데이터프레임의 열은 시리즈 객체이므로, duplicated() 메소드를 적용할 수 있다. 데이터프레임 dfdml 'c2'열은 정수 1과 2로 구성된다. 1이 처음 나타난 0행과 2가 처음 나타난 3행을 제외하고 나머지 1,2,4행은 이전에 나온 행과 중복되므로 True가 된다. 1,2행은 데이터 1을 가진 0행과 중복되고, 4행은 데이터 2를 가진 3행과 중복된다. 


```python
col_dup = df['c2'].duplicated()
print(col_dup)
```

    0    False
    1     True
    2     True
    3    False
    4     True
    Name: c2, dtype: bool


## 중복 데이터 제거

중복 데이터를 제거하는 명령에는 drop_duplicates() 메소드가 있다. 중복되는 행을 제거하고 고유한 관측값을 가진 행들만 남긴다. 원본 객체를 변경하려면 inplace=True 옵션을 추가한다. 다음 예제에서 1행의 데이터는 앞에 이웃하고 있는 0행의 데이터와 중복되므로 제거된다. 


```python
import pandas as pd 
df=pd.DataFrame({
    "c1":['a','a','b','a','b'],
    "c2":[1,1,1,2,2],
    "c3":[1,1,2,2,2]  
})
print(df)
print('\n')
```

      c1  c2  c3
    0  a   1   1
    1  a   1   1
    2  b   1   2
    3  a   2   2
    4  b   2   2
    
    



```python
df2 = df.drop_duplicates()
print(df2)
print('\n')
```

      c1  c2  c3
    0  a   1   1
    2  b   1   2
    3  a   2   2
    4  b   2   2
    
    


drop_duplicates() 메소드의 subset 옵션에 "열 이름의 리스트"를 전달할 수 있다. 데이터의 중복여부를 판별할 때, subset 옵션에 해당하는 열을 기준으로 판단한다. 데이터프레임 df의 'c2','c3' 열을 기준으로 판별하면 0행과 1행, 3행과 4행의 데이터가 각각 중복된다. 


```python
df3 = df.drop_duplicates(subset=['c2','c3'])
print(df3)
```

      c1  c2  c3
    0  a   1   1
    2  b   1   2
    3  a   2   2


## 데이터 표준화 


```python

```

# 코드 실제 예시

## 특정 컬럼 갯수가 일정 수준의 갯수를 넘겨야 True되는 코드


```python
# 데이터가 일정 개수 이상 존재하는 회사만 남긴다.
#df = df.groupby("회사ID").filter(lambda x : len(x) > 24
```

## 특정 컬럼의 조건이 True인 전체 데이터 조회


```python
#df = df.loc[df["연매출액"]>70000000]
#df = df[df["연매출액"]>70000000] 같은 코드. 
#df = df[df['월별_직원수']>=400]
#특정 조건에 맞는 전체 데이터를 출력하기 위해선 df[df[조건]]
```

## 새로운 열에 리스트로 값 추가


```python
# new_df["연매출액_변화량"] = change_sales_columns #여기서 change_sales_columns는 리스트 형태입니다.
```

## Unique()함수는 반환값을 리스트로 돌려준다. 


```python
#check_id_list = check_df['회사ID'].unique()
#for을 돌릴 수 있다.
```

[126814 294387 294337 126521 294367 126538 439986 126674 126516 507086
 126664 403351 126983 227414 126606 126831 510329 227415 403359 403434
 469458 419998 126802 419945 419977 126772 403462 127065 469473 469677
 127090 127060 420046 420008 294530 403470]


```python
# # 연매출액 변화가 없는 회사 ID 제거
# # 기존 리스트를 for문을 돌면서 조건에 만족한 데이터만 리스트 필터링
# # 필터링된 리스트를 다시 for문을 돌면서 필터링. 
# change_sales_list = []
# for x in check_id_list :
#     new_df = check_df[check_df['회사ID']==x]
#     if sum(new_df['연매출액_변화량']) > 10000000 : # 연매출액 성장 100억 이상
#         change_sales_list.append(x) 
# print(len(change_sales_list), "개의 회사가 연매출액이 증가했습니다.")
# print(change_sales_list)
# # 직원수 변화가 없는 회사 ID 제거

# change_worker_list = []
# for z in change_sales_list :
#     worker_df = check_df[check_df['회사ID']==z]
#     if sum(worker_df['월별_직원수_변화량']) > 30 : # 직원수 30명 이상
#         change_worker_list.append(z)   
# print(len(change_worker_list), "개의 회사의 직원수가 증가했습니다.")  
# print(change_worker_list)
```
