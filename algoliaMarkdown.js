// Problem 1:
// const input =
// [
//   {
//     "id": 12,
//     "name": "kiwi"
//   },
//   {
//     "id": 30,
//     "name": "apple"
//   },
//   {
//     "id": 4,
//     "name": "grape"
//   },
//   {
//     "id": 23,
//     "name": "pear"
//   },
//   {
//     "id": 24,
//     "name": "peach"
//   },
//   {
//     "id": 1,
//     "name": "cherry"
//   },
//   {
//     "id": 3,
//     "name": "plum"
//   },
//   {
//     "id": 9,
//     "name": "strawberry"
//   },
//   {
//     "id": 11,
//     "name": "mango"
//   },
//   {
//     "id": 12,
//     "name": "kiwi"
//   },
//   {
//     "id": 12,
//     "name": "kiwi"
//   },
//   {
//     "id": 4,
//     "name": "grape"
//   },
//   {
//     "id": 8,
//     "name": "orange"
//   },
//   {
//     "id": 3,
//     "name": "plum"
//   }
// ]
//
// function deDuplicate(arr) {
//   const idMap = {}  // K: ID, V: true
//   const ret = [];
//
//   for (let obj of arr) {
//     if (!idMap[obj.id]) {
//       idMap[obj.id] = true;
//       ret.push(obj);
//     }
//   }
//
//   ret.sort((a,b)=>a.id-b.id);
//
//   return ret;
// }
//
// console.log(deDuplicate(input))

//  ###, #, []()
// split('\n')

const input = `### An h3 header

This sentence should be rendered inside a paragraph tag

So should this one...
And also this one

# But this one should be an h1 header

Here's a link to [a website](http://foo.bar), which should be rendered in an anchor tag

Here's another p tag`

const expectedOutput = `<h3>An h3 header</h3>

<p>This sentence should be rendered inside a paragraph tag</p>

<p>So should this one...</p>
<p>And also this one</p>

<h1>But this one should be an h1 header</h1>

<p>Here's a link to <a href="http://foo.bar">a website</a>, which should be rendered in an anchor tag</p>

<p>Here's another p tag</p>
`

function markDown(input) {
  let output = [];

  for (let str of input.split('\n')) {
    if (str.startsWith('###')) {  //H3
      output.push('<h3>' + str.slice(4) + '</h3>');
    } else if (str.startsWith('#')) {  //H1
      output.push('<h1>' + str.slice(2) + '</h1>');
    } else if (str.match('.*\[.*\].*\\)')) {   //Check ref
      const start1 = str.indexOf('\[');
      const end1 = str.indexOf('\]');
      const start2 = str.indexOf('\(');
      const end2 = str.indexOf('\)');
      output.push(
        '<p>' + str.slice(0,start1)
        + '<a href="' + str.slice(start2+1,end2) + '">'
        + str.slice(start1+1,end1) + '</a>'
        + str.slice(end2+1) + '</p>'
      )
    } else if (str.length > 0){  //paragraph
      output.push('<p>' + str + '</p>');
    } else {                    //NewLine
      output.push(str);
    }
  }

  return output.join('\n');
}

console.log(markDown(input))
