n = 2  # Do not modify this line.
message = ""
if n < 0:
    message = "The number is negative"
if n > 0:
    message = "The number is positive"
if n == 0:
    message = "The number is zero"
if n % 2 == 0:
    message += " and even"
if n % 2 == 1:
    message += " and odd"
    
print(message)