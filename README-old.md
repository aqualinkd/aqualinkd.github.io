
# Aqualinkd Overview
Linux daemon to control Jandy Aqualink RS pool controllers. Provides web UI, MQTT client & HTTP API endpoints. Control your pool equipment from any phone/tablet or computer.  Is also compatible with most Home control systems including Apple HomeKit, Home Assistant, Samsung, Alexa, Google, etc.

Quick rundown of all the AqualinkD resources.

## [AqualinkD information & repo](https://github.com/aqualinkd/AqualinkD)

AqualinkD software is designed to be run on any SBC like a Raspbery Pi (or docker). It comes pre-compiled for any 16 or 32 bit ARM machine and ovbiously source is available to compile for any linux machine of your choice. (Windows is not and will never be supported, but you can run the AqualinkD Docker image on a windows machine)

## [AqualinkD serial HAT](https://github.com/chrisdaun/pi-zero-serial-hat)

AqualinkD required a RS485 connection, this can be done with a USB2RS485 adapter or the official AqualinkD hat.

## [AqualinkD Homebridge plugin](https://github.com/aqualinkd/homebridge-aqualinkd)

Homebridge plugin.  Integrate AqualinkD into Apple homekit.

## [AqualinkD cases](https://github.com/aqualinkd/AqualinkD-Cases)

3D printable Cases for AqualinkD with HAT.

## [AqualinkD-Radxa](https://github.com/aqualinkd/AqualinkD-Radxa-zero3)

Radxa Zero W is the preferred hardware because it's zero form factor and uses eMMC and not an SD card.
Radxa OS is not perfectly setup for AqualinkD the below has information on that.

##
Raspberry Pi Zero W is also very good HW, but like all Raspberry Pi's and it's clones, suffers from CF card corruption. This can be easily solved using a RO Root file system.

# [AqualinkD Org (all repos)](https://github.com/aqualinkd/)






