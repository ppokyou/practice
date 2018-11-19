import turtle

def draw_triangle():
    seth = 0
    lenth = 100
    for i in range(3):
        turtle.seth(seth)
        turtle.fd(lenth)
        seth += 120

draw_triangle()