---
title: Pandas_Guide_For_Teammates
date: 2021-05-06
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
      <th>3</th>
      <td>1232134</td>
      <td>5839204</td>
      <td>13224213</td>
      <td>235</td>
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
df.loc["2","회사ID2"]
```




    '5839204'




```python
df.loc[["1","3"], ["회사ID1","회사ID4"]]
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
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>423</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>235</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.loc["1":"3", ["회사ID1","회사ID4"]]
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
      <th>회사ID4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1232134</td>
      <td>423</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1232134</td>
      <td>23532</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1232134</td>
      <td>235</td>
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
count() 메서드는 데이터프레임의 각 열이 가지고 있는 데이터 개수를 시리즈 객체로 반환한다. 

## 각 열의 고윳값 개수
- value_counts() 메서드는 시리즈 객체의 고윳값 개수를 세는데 사용한다. 
- dropna=True 옵션을 사용하면 nan값을 제외하고 숫자를 센다. 
- dropna=False가 기본값이다.
데이터프레임["열이름"].value_counts()


```python

```
