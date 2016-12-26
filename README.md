# csv
csv.js csv2json json2csv


## Usage

**csv2json**
```javascript
var data = 
`id,name,age
1,Tom,25
2,Lily,18`;

var json = csv(data);

// =>
/*
[
  {id:'1', name:'Tom', age:'25'},
  {id:'2', name:'Lily', age:'18'}
]
*/
```

**csv2json**
```javascript
var data = [
  {id:'1', name:'Tom', age:'25'},
  {id:'2', name:'Lily', age:'18'}
];

var csv = csv(data);

// =>
/*
id,name,age
1,Tom,25
2,Lily,18
*/
```
