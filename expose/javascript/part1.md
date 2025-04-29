# Part 1

1. 20
2. 20
3. As mentioned above, var is accessable anywhere inside the function it is define in. This can cause the misused of variable inside the function since we are allowed to defgine var over and over again, and that leads to potentially create unintentional bugs.
4. 20
5. The code reutrns error since let variable can only be access locally inside the condition. Since the let is define inside the if statement at line 5, so to line 13, the variable result is undefined.
6. It returns an error since we define result as const, therefore we can't modify that and line 7 trigger the error.
7. Since the code returns the error eariler, it will not even reach line 13. Additionally, const type variable has similar scoping as let, even when we somehow be able to run till that line, the function will saw the result as undefined.
