def fib(max):
	n, a, b = 0, 0, 1
	while n < max:
		yield b
		a, b = b, a+b
		n = n+1
	return 'done'

for x in fib(10):
	print(x)

# @@@@@@@@@@@@@@@@@@@@@@@@

def fibo(max):
	n = 0
	a, b = 0, 1
	while (n < max):
		if (n <= 1):
			print(n)
			n = n+1
		else:
			a, b = b, a+b
			print(b)
			n = n+1
	return 'done'

fibo(10)
