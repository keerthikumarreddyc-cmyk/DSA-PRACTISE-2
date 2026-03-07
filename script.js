/*n = 5;
for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}

for (i = n; i >= 1; i--) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = n; i >= 1; i--) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = n; i >= 1; i--) {
  row = "";
  for (j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}

for (i = n; i >= 1; i--) {
  row = "";
  for (j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}
for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
for (i = n - 1; i >= 1; i--) {
  row = "";
  for (j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
n = 5;
for (i = 1; i <= n; i++) {
  row = "";

  for (j = 1; j <= i; j++) {
    row += j;
  }

  for (j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}
num = 1;
for (i = 1; i <= n; i++) {
  row = "";

  for (j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";

  for (j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j);
  }
  console.log(row);
}

for (i = n; i >= 1; i--) {
  row = "";

  for (j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j);
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";

  for (j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + i);
  }
  console.log(row);
}
n = 5;
for (i = 1; i <= n; i++) {
  row = "";
  for (j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j);
  }
  for (j = i - 1; j >= 1; j--) {
    row += String.fromCharCode(64 + j);
  }
  console.log(row);
}

for (i = 1; i <= n; i++) {
  row = "";
  for (j = n - i + 1; j <= n; j++) {
    row += String.fromCharCode(64 + j);
  }
  console.log(row);
}

//PALINDROME CHECK
s = "racecar";
arr = s.split("");
i = 0;
j = s.length - 1;
while (i < j) {
  if (arr[i] !== arr[j]) {
    console.log(false);
    break;
  }
  i++;
  j--;
}
if (i >= j) {
  console.log(true);
}*/

/*arr = [0, 0, 1, 0, 3, 12];
i = 0;
for (j = 1; j < arr.length; j++) {
  if (arr[j] !== 0) {
    arr[i] = arr[j];
    i++;
  }
}
while (i < arr.length) {
  arr[i] = 0;
  i++;
}
console.log(arr);


arr = [1, 1, 1, 2, 2, 3];
i = 0;
for (j = 1; j < arr.length; j++) {
  if (arr[j] !== arr[i]) {
    i++;
    arr[i] = arr[j];
  }
}
console.log(arr.slice(0, i + 1));

s = "coding";
arr = s.split("");
i = 0;
j = arr.length - 1;
while (i < j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  i++;
  j--;
}
console.log(arr);*/
/*//1.sum of target
arr = [2, 3, 4, 7, 11, 15];
target = 9;
i = 0;
j = arr.length - 1;
found = false;
while (i < j) {
  sum = arr[i] + arr[j];
  if (sum === target) {
    found = true;
    break;
  } else if (sum < target) {
    i++;
  } else {
    j--;
  }
}
console.log(found);
//2.move zeros
arr = [0, 0, 1, 0, 3, 12];
i = 0;
for (j = 1; j < arr.length; j++) {
  if (arr[j] !== 0) {
    arr[i] = arr[j];
    i++;
  }
}
while (i < arr.length) {
  arr[i] = 0;
  i++;
}
console.log(arr.slice(0, i + 1));
//3.Remove duplicates in array
arr = [1, 1, 1, 2, 2, 3];
i = 0;
for (j = 1; j < arr.length; j++) {
  if (arr[j] !== arr[i]) {
    i++;
    arr[i] = arr[j];
  }
}
console.log(arr.slice(0, i + 1));

//REMOVE ELEMENT
arr = [3, 3, 2, 2, 3];
val = 3;
i = 0;
for (j = 0; j < arr.length; j++)
  if (arr[j] !== val) {
    arr[i] = arr[j];
    i++;
  }
console.log(arr.slice(0, i));
a = [1, 3, 6];
b = [2, 4, 5];
i = 0;
j = 0;
result = [];
while (i < a.length && j < b.length) {
  if (a[i] < b[j]) {
    result.push(a[i]);
    i++;
  } else if (a[i] > b[j]) {
    result.push(b[j]);
    j++;
  }
}
while (i < a.length) {
  result.push(a[i]);
  i++;
}
while (i < b.length) {
  result.push(b[j]);
  j++;
}
console.log(result);

nums = [-7, -3, 2, 3, 11];
i = 0;
j = nums.length - 1;
k = nums.length - 1;
temp = [];
while (i <= j) {
  if (Math.abs(nums[i]) > Math.abs(nums[j])) {
    temp[k] = nums[i] * nums[i];
    i++;
  } else {
    temp[k] = nums[j] * nums[j];
    j--;
  }
  k--;
}
console.log(temp);
//PALINDROME CHECK
s = "racecar";
i = 0;
j = s.length - 1;
while (i < j) {
  if (s[i] !== s[j]) {
    console.log(false);
    break;
  }
  i++;
  j--;
}
if (i >= j) {
  console.log(true);
}
//CONTAINER WITH MOST WATER
heights = [1, 3, 2, 5, 25, 24, 5];
i = 0;
j = heights.length - 1;
max = 0;
while (i < j) {
  area = Math.min(heights[i], heights[j]) * (j - i);
  if (area > max) {
    max = area;
  }
  if (heights[i] < heights[j]) {
    i++;
  } else {
    j--;
  }
}
console.log(max);
// Reverse word in a sentence
s = "the sky is blue";
word = s.split(" ");
result = [];
for (i = word.length - 1; i >= 0; i--) {
  result.push(word[i]);
}
console.log(result.join(" "));

//dupicate 2
nums = [0, 0, 0, 1, 1, 1, 2, 2, 3];
i = 2;
for (j = 2; j < nums.length; j++) {
  if (nums[j] !== nums[i - 2]) {
    nums[i] = nums[j];
    i++;
  }
}
console.log(nums.slice(0, i));
console.log(i);

s = "babad";

start = 0;
maxLen = 1;

for (i = 0; i < s.length; i++) {
  // odd length palindrome
  l = i;
  r = i;
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    if (r - l + 1 > maxLen) {
      start = l;
      maxLen = r - l + 1;
    }
    l--;
    r++;
  }

nums = [2, 3, 1, 2, 4, 3];
target = 7;

left = 0;
sum = 0;
minLen = Infinity;

for (right = 0; right < nums.length; right++) {
  sum += nums[right];

  while (sum >= target) {
    minLen = Math.min(minLen, right - left + 1);
    sum -= nums[left];
    left++;
  }
}

if (minLen === Infinity) {
  console.log(0);
} else {
  console.log(minLen);
}


s = "abcabcbb";

left = 0;
maxLen = 0;

for (right = 0; right < s.length; right++) {
  for (k = left; k < right; k++) {
    if (s[k] === s[right]) {
      left = k + 1;
      break;
    }
  }

  maxLen = Math.max(maxLen, right - left + 1);
}

console.log(maxLen);

nums = [1, 0, -1, 0, -2, 2];
target = 0;

nums.sort((a, b) => a - b);
result = [];

for (i = 0; i < nums.length - 3; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) continue;

  for (j = i + 1; j < nums.length - 2; j++) {
    if (j > i + 1 && nums[j] === nums[j - 1]) continue;

    left = j + 1;
    right = nums.length - 1;

    while (left < right) {
      sum = nums[i] + nums[j] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[j], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
}

console.log(result);
people = [3, 2, 2, 1];
limit = 3;

people.sort((a, b) => a - b);

left = 0;
right = people.length - 1;
boats = 0;

while (left <= right) {
  if (people[left] + people[right] <= limit) {
    left++;
  }

  right--;
  boats++;
}

console.log(boats);

nums = [1, 12, -5, -6, 50, 3];
k = 4;

sum = 0;

// first window
for (i = 0; i < k; i++) {
  sum += nums[i];
}

maxSum = sum;

// slide the window
for (j = k; j < nums.length; j++) {
  sum = sum + nums[j] - nums[j - k];
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum / k);
nums = [1, 2, 3];
k = 3;

count = 0;

for (i = 0; i < nums.length; i++) {
  sum = 0;

  for (j = i; j < nums.length; j++) {
    sum += nums[j];

    if (sum === k) {
      count++;
    }
  }
}

console.log(count);*/

nums = [2, 1, 5, 1, 3, 2];
k = 3;

sum = 0;

// first window
for (i = 0; i < k; i++) {
  sum += nums[i];
}

maxSum = sum;

// slide window
for (j = k; j < nums.length; j++) {
  sum = sum + nums[j] - nums[j - k];
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);
