import sys
import subprocess
import time
from blinkstick import blinkstick


def init():
    CHANNEL = 0

    bstick = blinkstick.find_first()

    if bstick is None:
        sys.exit("BlinkStick not found...")


    def ping(host: str) -> bool:
        param = "-n" if subprocess.os.name == "nt" else "-c"
        command = ["ping", param, "1", host]
        return subprocess.run(command, stdout=subprocess.PIPE).returncode == 0


    def setcolor(index: int, color: str):
        bstick.set_color(index=index, name=color, channel=CHANNEL)


    def blink(index: int, color: str):
        bstick.blink(index=index, name=color, channel=CHANNEL, delay=100, repeats=5)


    def display_info():
        print ("Found device:")
        print ("    Manufacturer:  " + bstick.get_manufacturer())
        print ("    Description:   " + bstick.get_description())
        print ("    Serial:        " + bstick.get_serial())

        fargs = {}
        # fargs['name'] = 'red'
        fargs['hex'] = "#880000"
        fargs['index'] = int(0)
        fargs['channel'] = int(0)
        bstick.set_color(**fargs)

    checks = [
        {},
        { 'name': 'white', 'func': ping, 'args': ['google.com'] },
        { 'name': 'blue', 'func': ping, 'args': ['microsoft.com'] },
        { 'name': 'yellow', 'func': ping, 'args': ['diversemix.com'] },
        { 'name': 'green', 'func': ping, 'args': ['twitter.com'] },
        { 'name': 'white', 'func': ping, 'args': ['google.com'] },
        { 'name': 'blue', 'func': ping, 'args': ['microsoft.com'] },
        { 'name': 'yellow', 'func': ping, 'args': ['diversemix.com'] },
        { 'name': 'green', 'func': ping, 'args': ['twitter.com'] },
    ]

    return checks, setcolor, blink

