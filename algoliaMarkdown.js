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

function markDown(input) {
  let output = ""
  const stack = [];

  for (let str of input.split('\n')) {
    if (str.startsWith('###')) {  //H3
      output += '<h3>'
      // output add rest of line
      stack.push('</h3>')
    } else if (str.startsWith('#')) {  //H1
      output += '<h1>'
      stack.push('</h1>')
    } else if (str.match()) {   //Check ref

    } else {  //paragraph

    }
  }

  return output;
}

<h3>An h3 header</h3>
  <p>
  <h1>
  <p>
    <a href = 'url'></a>
  </p>
