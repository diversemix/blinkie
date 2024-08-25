.PHONY: init udev test

udev:
	sudo cp 85-blinkstick.rules /etc/udev/rules.d
	echo "** NOW REBOOT **"

init:
	-pyenv deactivate
	pyenv activate blinkie
	pyenv shell blinkie

test:
	python test.py
