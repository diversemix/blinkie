import time
from funcs import init


checks, setcolor, blink = init()

def start():
    display_info()
    # heartbeat()
    while True:
        setcolor(0, "red")

        # Perfor all the checks
        for index in range(1, 8):
            color=checks[index]['name']
            blink(index=index, color=color)
            time.sleep(0.5)
            func = checks[index]['func']
            args = checks[index]['args']
            result = func(*args)
            if not result:
                color = "red"
            setcolor(index=index, color=color)

        setcolor(0, "green")
        time.sleep(5)

start()
