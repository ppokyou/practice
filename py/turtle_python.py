'''blabla'''
import turtle

def draw_snake(rad, angle, len, neckrad):
    '''blabla'''
    for i in range(len):
        turtle.pencolor('red')
        turtle.circle(rad, angle)
        turtle.pencolor('yellow')
        turtle.circle(-rad, angle)
    turtle.pencolor('blue')
    turtle.circle(rad, angle/2)
    turtle.fd(rad)
    turtle.circle(neckrad+1, 180)
    turtle.fd(rad*2/3)

def main():
    """blabla"""
    turtle.setup(1800, 700, -100, -100)
    pythonsize = 30
    turtle.pensize(pythonsize)
    #turtle.pencolor('red')
    turtle.seth(-40)
    draw_snake(40, 90, 4, pythonsize/2)

main()
