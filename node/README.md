# blinkie

If installing for the first time - please refer to https://npm.taobao.org/package/blinkstick

The following should install and link the executable onto your path:

```
npm install blinkie
npm link blinkie
```

# Controling all 8 LEDs

You can turn them all on then off with:

```
blinkie on
blinkie off
```

Or use a single color for all the LEDs, use either of:

```
blinkie red
blinkie "#ff0000"
```

Finally you can control a single LED with its index, by adding the index to the command line, 
for example, any of the following will work:

```
blinkie red 0
blinkie "#ff0000" 2
```
