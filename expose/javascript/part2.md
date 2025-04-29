# Part 2

1. It will return 3, because we define i as var so we can access anywhere inside the scope of the function. Since we loop 3 times, i will be set to 3 and get printed in line 12
2. Becasue the discountedPrice is var, so we can still acess it outside the loop (anywhere inside the function). Since the last element in the list is 300, it will return 300 \* 0.5 = 150.
3. It is similar to the question. Since finalPrice is a var that we can access anywhere inside the function, we will print the last recored finalPirce, which is 300 \* 0.5 = 150
4. It will return [ 50, 100, 150 ], which is the discounted list that we created earlier. The list is filled inside the loop using push since it's a var type that can be access everywhere inside the function.
5. It will return error since i is a let variable which only be able to access locally (inside the loop)
6. It will return error as similar reason as problem 5. Since discountedPrice is a let variable in this case, so we can only access inside the loop
7. It will return the last discounted price 150, and it is fine in this case since the finalPrice is define inside the function, so we can access/update it anywhere inside the function.
8. It will return [ 50, 100, 150 ], since discounted is let define inside the function, which we can modify inside the function scope.
9. It will return error since i is a let variable which only be able to access locally (inside the loop)
10. It will return 3 since the length of the price list is 3, and it's fine since length is define inside the function and we are not reassigning anything
11. It will return [ 50, 100, 150 ]. Since we are not reassigning discounted to other variable, adding element into the discounted will not violate the const properties. Since we define discounted inside the function, so we can access it inside the loop that happen inside the fuction and add elements into the list.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student.['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. 32, since 3 will be converted to string first and concat with 2, which will be converted to string as well due to string + operation
    B. 1, since string 3 will be converted to number and minus 2
    C. 3, since the null will be converted to 0 and add 3
    D. 3null, since 3 will be converted to string first and concat with null, which will be converted to string as well due to string + operation
    E. 4, since true will be converted to 1 and add 3
    F. 0, false will be converted to 0 and null will be converted to 0 as well due to 0 + operation
    G. 3undefine, since 3 will be converted to string first and concat with undefine, which will be converted to string as well due to string + operation
    H. NaN, 3 will be converted to a number in this case. However, since undefine will be converted to NaN when converting to a number, 3 - NaN will be NaN
14. A. true, since 2 will become number and indeed greater than 1
    B. false, since 2 and 12 become number and 2 is less than 12
    C. true, since 2 on the right will be convert to 2 and they are the same value
    D. false, since 2 on the left is a number and 2 on the right is string. They have differnet type since here is a strictly comparsion.
    E. false, true will become 1 in this case which is not equal to 2
    F. true, since Boolean(2) will be evaluate to true, and both are same type
15. == is a loose comparsion, it cares about values but not types. === is a strict comparsion, it cares both values and types
16. It wil lreturn [2,4,6] in the end. First we create new array inside the modifyarray function, then we loop though the passing array that pass into the modifyarray. In side the loop, we push whatever we got from the callback function. Since when we call the callback function and pass in the value, the callback function do something will simply return the num\*2 number. In the modifyarray function, we will add that to the array we create there and eventually return an array containers doubled value compared to the original array.
17. It will print 1 4 3 2. non setTimeout print will go first, and timeout with bigger number go later
