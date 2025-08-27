 <script>

  // Topics

  const topics = ["Arrays","Strings","Dates","Numbers","Functions","Objects"];



  // Q&A bank per topic (10 each)

  const qaBank = {

   Arrays: [

    {q: "How do you add an element to the end of an array?", a: "Use .push().<br><code>let arr = [1,2]; arr.push(3); // [1,2,3]</code>"},

    {q: "How do you remove the last element of an array?", a: "Use .pop()."},

    {q: "How do you create a shallow copy of an array?", a: "Use <code>.slice()</code> or the spread operator <code>[...]</code>."},

    {q: "Which method is best for transforming each element?", a: "<code>.map()</code>."},

    {q: "How do you filter out even numbers from [1,2,3,4]?", a: "<code>[1,2,3,4].filter(n => n % 2 !== 0)</code> → <code>[1,3]</code>."},

    {q: "What method checks if an array includes a specific value?", a: "<code>.includes()</code>."},

    {q: "How do you sort numbers [10, 2, 5] ascending?", a: "<code>[10,2,5].sort((a,b) => a-b)</code> → <code>[2,5,10]</code>."},

    {q: "How do you find the first element greater than 3 in [1,4,2,5]?", a: "<code>[1,4,2,5].find(n => n > 3)</code> → <code>4</code>."},

    {q: "Which method executes a function for every element without returning a new array?", a: "<code>.forEach()</code>."},

    {q: "How do you combine two arrays [1,2] and [3,4]?", a: "<code>[1,2].concat([3,4])</code> or <code>[...[1,2], ...[3,4]]</code>."}

   ],

   Strings: [

    {q: "How do you find the length of 'hello'?", a: "<code>'hello'.length</code> → <code>5</code>."},

    {q: "How do you get the first character of 'cat'?", a: "<code>'cat'[0]</code> → <code>'c'</code>."},

    {q: "How do you make a string uppercase?", a: "<code>'dog'.toUpperCase()</code> → <code>'DOG'</code>."},

    {q: "How do you check if 'apple' includes 'pp'?", a: "<code>'apple'.includes('pp')</code> → <code>true</code>."},

    {q: "How do you find the index of 'o' in 'hello'?", a: "<code>'hello'.indexOf('o')</code> → <code>4</code>."},

    {q: "How do you replace 'cat' with 'dog' in 'my cat'?", a: "<code>'my cat'.replace('cat','dog')</code> → <code>'my dog'</code>."},

    {q: "How do you remove whitespace from both ends of ' hi '?", a: "<code>' hi '.trim()</code> → <code>'hi'</code>."},

    {q: "How do you split 'a,b,c' into an array?", a: "<code>'a,b,c'.split(',')</code> → <code>['a','b','c']</code>."},

    {q: "How do you extract 'cat' from 'my cat is cute'?", a: "<code>'my cat is cute'.substring(3,6)</code> → <code>'cat'</code>."},

    {q: "How do you repeat 'ha' 3 times?", a: "<code>'ha'.repeat(3)</code> → <code>'hahaha'</code>."}

   ],

   Dates: [

    {q: "How do you create a new Date object for now?", a: "<code>new Date()</code>."},

    {q: "How do you get the current year?", a: "<code>new Date().getFullYear()</code>."},

    {q: "How do you get the current month (0–11)?", a: "<code>new Date().getMonth()</code>."},

    {q: "How do you get the current day of the week (0–6)?", a: "<code>new Date().getDay()</code>."},

    {q: "How do you get the current day of the month?", a: "<code>new Date().getDate()</code>."},

    {q: "How do you get the current time in milliseconds since 1970?", a: "<code>Date.now()</code>."},

    {q: "How do you format a date as a string?", a: "<code>new Date().toDateString()</code>."},

    {q: "How do you get the current hours?", a: "<code>new Date().getHours()</code>."},

    {q: "How do you set the year of a Date object to 2030?", a: "<code>let d=new Date(); d.setFullYear(2030);</code>"},

    {q: "How do you get an ISO string representation of a date?", a: "<code>new Date().toISOString()</code>."}

   ],

   Numbers: [

    {q: "How do you convert a string '123' to a number?", a: "<code>Number('123')</code> or <code>parseInt('123')</code>."},

    {q: "How do you fix a number to 2 decimal places?", a: "<code>(3.14159).toFixed(2)</code> → <code>'3.14'</code>."},

    {q: "How do you check if NaN is a number?", a: "<code>isNaN(value)</code>."},

    {q: "How do you parse '3.14' as a float?", a: "<code>parseFloat('3.14')</code>."},

    {q: "How do you get the maximum of [1,5,3]?", a: "<code>Math.max(1,5,3)</code> → <code>5</code>."},

    {q: "How do you get a random number between 0 and 1?", a: "<code>Math.random()</code>."},

    {q: "How do you round 4.7 down?", a: "<code>Math.floor(4.7)</code> → <code>4</code>."},

    {q: "How do you round 4.3 up?", a: "<code>Math.ceil(4.3)</code> → <code>5</code>."},

    {q: "How do you round 4.6 to nearest integer?", a: "<code>Math.round(4.6)</code> → <code>5</code>."},

    {q: "How do you get the absolute value of -9?", a: "<code>Math.abs(-9)</code> → <code>9</code>."}

   ],

   Functions: [

    {q: "How do you define a traditional function?", a: "<code>function greet(){ return 'Hi'; }</code>"},

    {q: "How do you define a fat arrow function?", a: "<code>const add = (a,b) => a+b;</code>"},

    {q: "What is the difference between parameters and arguments?", a: "Parameters are placeholders in the function definition; arguments are the actual values passed."},

    {q: "How do you return a value from a function?", a: "Use <code>return</code>."},

    {q: "How do you set a default parameter?", a: "<code>function greet(name='Guest'){ return 'Hi ' + name; }</code>"},

    {q: "Can functions be stored in variables?", a: "Yes, functions are first-class citizens."},

    {q: "What keyword refers to the current object inside a function?", a: "<code>this</code>."},

    {q: "How do you create an anonymous function?", a: "<code>(function(){ console.log('hi'); })();</code>"},

    {q: "What is recursion?", a: "When a function calls itself."},

    {q: "How do you pass a function as an argument?", a: "<code>function run(fn){ fn(); }<br>run(() => console.log('Hello'));</code>"}

   ],

   Objects: [

    {q: "How do you define an object?", a: "<code>let person = {name:'Alice', age:25};</code>"},

    {q: "How do you access object properties?", a: "Dot notation <code>person.name</code> or bracket notation <code>person['name']</code>."},

    {q: "How do you add a new property to an object?", a: "<code>person.city = 'NYC';</code>"},

    {q: "How do you remove a property?", a: "<code>delete person.age;</code>"},

    {q: "How do you check if 'age' exists in an object?", a: "<code>'age' in person</code>."},

    {q: "How do you loop through object keys?", a: "<code>for (let key in person) { console.log(key); }</code>"},

    {q: "How do you get an array of object keys?", a: "<code>Object.keys(person)</code>."},

    {q: "How do you get an array of object values?", a: "<code>Object.values(person)</code>."},

    {q: "How do you merge two objects {a:1} and {b:2}?", a: "<code>Object.assign({}, {a:1}, {b:2})</code> or <code>{...{a:1}, ...{b:2}}</code>."},

    {q: "How do you turn an object into JSON?", a: "<code>JSON.stringify(person)</code>."}

   ]

  };



  // Geometry

  const NUM = topics.length;

  const SLICE = 360 / NUM; // 60° per slice

  const cx = 320, cy = 320, R = 300, labelR = 160; // labelR controls radial distance of labels



  const wheel = document.getElementById('wheel');

  const slices = document.getElementById('slices');

  const labels = document.getElementById('labels');



  const toRad = d => d * Math.PI / 180;

  function wedgePath(a0, a1){

   const x0 = cx + R * Math.cos(toRad(a0)), y0 = cy + R * Math.sin(toRad(a0));

   const x1 = cx + R * Math.cos(toRad(a1)), y1 = cy + R * Math.sin(toRad(a1));

   return `M ${cx},${cy} L ${x0},${y0} A ${R},${R} 0 0 1 ${x1},${y1} Z`;

  }



  // Build wheel

  topics.forEach((topic, i) => {

   const start = i * SLICE, end = start + SLICE, mid = start + SLICE/2;



   // Color palette (distinct neighbors)

   const hue = Math.round((i * 360) / NUM);

   const fill = `hsl(${hue}, 70%, ${i % 2 ? 62 : 52}%)`;



   // Slice path

   const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

   path.setAttribute('d', wedgePath(start, end));

   path.setAttribute('fill', fill);

   slices.appendChild(path);



   // Rotated label group to slice centerline

   const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');

   g.setAttribute('transform', `rotate(${mid} ${cx} ${cy})`);



   // Label box centered on the centerline at radius labelR

   const arcLen = (SLICE * Math.PI / 180) * labelR;

   const boxW  = Math.max(Math.floor(arcLen * 0.95), 90);

   const boxH  = 70; // adjust to move closer/farther radially with labelR only



   const fo = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');

   fo.setAttribute('x', String(cx - boxW/2));

   fo.setAttribute('y', String(cy - labelR - boxH/2));

   fo.setAttribute('width', String(boxW));

   fo.setAttribute('height', String(boxH));



   const div = document.createElement('div');

   div.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');

   div.className = 'label-box';

   div.style.fontSize = '26px';

   div.textContent = topic;



   fo.appendChild(div);

   g.appendChild(fo);

   labels.appendChild(g);

  });



  // Spin logic

  let currentRotation = 0;

  const spinBtn = document.getElementById('spinBtn');

  spinBtn.addEventListener('click', () => {

   const index = Math.floor(Math.random() * NUM);

   const centerAng = index * SLICE + SLICE / 2; // where that slice is in logical space

   const base = ((currentRotation % 360) + 360) % 360;

   let delta = (360 * 6) + (0 - centerAng) - base; // land at 0° (top)

   if (delta < 360 * 4) delta += 360 * 4;

   const target = currentRotation + delta;

   wheel.style.transition = 'transform 1.5s cubic-bezier(0.12,0.9,0.1,1)';

   wheel.style.transform = `rotate(${target}deg)`;

   wheel.addEventListener('transitionend', () => {

    currentRotation = target;

    openModal(index);

   }, { once: true });

  });



  // Modal + flip

  const modal  = document.getElementById('qaModal');

  const flipCard = document.getElementById('flipCard');

  const qaTitle = document.getElementById('qaTitle');

  const q    = document.getElementById('questionText');

  const a    = document.getElementById('answerText');



  function openModal(topicIndex){

   const topic = topics[topicIndex];

   const bank = qaBank[topic];

   const pair = bank[Math.floor(Math.random() * bank.length)];

   qaTitle.textContent = `Topic: ${topic}`;

   q.innerHTML = `<span class="hint">Question:</span> ${pair.q}`;

   a.innerHTML = `<span class="hint">Answer:</span> ${pair.a}`;

   flipCard.classList.remove('flipped');

   modal.classList.add('open');

   modal.setAttribute('aria-hidden','false');

   flipCard.focus();

  }



  function closeModal(){

   modal.classList.remove('open');

   modal.setAttribute('aria-hidden','true');

  }



  // Close controls: click outside dialog or press Esc

  modal.addEventListener('click', (e) => { if (!e.target.closest('.dialog')) closeModal(); });

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });



  // Flip interactions

  function toggleFlip(){

   const flipped = flipCard.classList.toggle('flipped');

   flipCard.setAttribute('aria-pressed', String(flipped));

  }

  flipCard.addEventListener('click', toggleFlip);

  flipCard.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleFlip(); }});

 </script>