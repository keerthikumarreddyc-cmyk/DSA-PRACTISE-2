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
console.log(temp);*/
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
