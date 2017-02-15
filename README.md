# csv
csv.js csv2json json2csv


## Usage

**csv2json**
```javascript
CSV(string)
```
```javascript
var data = 
`id,name,age
1,Tom,25
2,Lily,18`;

var json = CSV(data);

// =>
/*
[
  {id:'1', name:'Tom', age:'25'},
  {id:'2', name:'Lily', age:'18'}
]
*/
```
```javascript
CSV(string, keys)
```
```javascript
var data = 
`1,Tom,25
2,Lily,18`;

var json = CSV(data, 'id,name,age');

// =>
/*
[
  {id:'1', name:'Tom', age:'25'},
  {id:'2', name:'Lily', age:'18'}
]
*/
```

**json2csv**
```javascript
CSV(array)
```
```javascript
var data = [
  {id:'1', name:'Tom', age:'25'},
  {id:'2', name:'Lily', age:'18'}
];

var csv = CSV(data);

// =>
/*
id,name,age
1,Tom,25
2,Lily,18
*/
```
