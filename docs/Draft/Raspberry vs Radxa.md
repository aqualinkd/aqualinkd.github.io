Here's a comprehensive summary of hardware platform options for AqualinkD:

---

## AqualinkD Hardware Platform Comparison

AqualinkD is designed to run on any Linux-capable SBC and comes pre-compiled for Raspberry Pi, but the choice of platform has meaningful implications for long-term reliability, OS maturity, and how you connect to the Jandy RS485 bus.

---

### RS485 Connectivity — A Hard Requirement

Before choosing an SBC, it's important to understand that AqualinkD requires an RS485 interface to connect to your Jandy control panel. There are three ways to achieve this:

**1. Generic USB-to-RS485 adapter** — The most universal option. For off-the-shelf hardware, you can use a USB2RS485 adapter; the FTDI-based unit is highly recommended. This works on any Linux device with a USB port.

**2. AqualinkD RS485 HAT** (for GPIO-based SBCs) — The AqualinkD HAT is purpose-built for use with AqualinkD and allows you to easily connect an SBC to the Aqualink Serial bus via GPIO pins 8 and 10 (TX/RX). It can also power the SBC directly from the Jandy RS485 bus, providing up to 3 amps at 5v. It has the same footprint as a Raspberry Pi Zero but also works on full-size Pi boards like the Pi 3, 4, 5, etc.

**3. AqualinkD RS485 Carrier Board** (for Pi Compute Module) — This is a fundamentally different product from the HAT, but provides the same functionality. The CM4 complete unit includes the AqualinkD RS485 carrier board, which provides RS485 and power to the Compute Module

---

### Platform Option 1: Raspberry Pi (any version)

The Raspberry Pi — particularly the Pi Zero — is the perfect device for DIY builds, and AqualinkD ships pre-compiled for it, making initial setup very straightforward.  It does have one problem though. (below)

**The CF Card Problem**

The core challenge with all Raspberry Pi variants running off a microSD/CF card is storage reliability. All Raspberry Pis are inherently unstable devices to run 24/7/365 in default Linux configurations, because a power outage and general use will generally cause CF card corruption.

**Read-Only Root as a Mitigation**

The recommended approach to make a CF-based Pi extremely stable is a "read only root" installation of Linux. There are two methods: one uses overlayfs (easier for those not experienced with Linux), and the preferred method uses tmpfs on its own without overlayfs. A Pi Zero running AqualinkD in this configuration have been reported running 24/7/365 for over 8 years without a single failure or CF corruption.

**The Better Alternative: Boot from SSD**

If your hardware supports booting from something other than a CF card (like the Pi 3), it's strongly suggested to use that option with some form of SSD, as it's a lot easier than implementing RO root.

**OS Maturity — A Key Advantage**

Raspberry Pi OS (Raspbian) is the most mature and well-supported OS in this context. 
---

### Platform Option 2: Radxa Zero 3W

The Radxa Zero 3W combines the Raspberry Pi Zero device footprint with eMMC storage, overcoming all the CF card issues listed above and offering far greater stability.

**eMMC — Why It's Preferred**

Unlike a microSD/CF card, eMMC is a soldered, chip-based storage solution that behaves much more like an SSD. It is inherently more resilient to power-loss corruption, meaning you don't need to implement RO root filesystem tricks to achieve long-term reliability. For a device running 24/7 with potential power interruptions, this is a meaningful practical advantage.

**OS Maturity — The Trade-Off**

The Radxa's OS ecosystem is noticeably less mature than Raspberry Pi OS. Configuring the UART for the AqualinkD HAT on a Radxa (or any other non-Pi SBC) requires multiple manual steps: disabling U-Boot's serial console wait, disabling kernel debug/console output on the TTY serial, and enabling the appropriate UART overlay for the GPIO chip. A dedicated setup script exists in the `aqualinkd-radxa` repo to automate this, but it's more involved than the Pi equivalent. The Radxa Zero 3W is explicitly supported with detailed instructions in a separate repository.

---

### Platform Option 3: Raspberry Pi Compute Module (CM4)

The Compute Module series offers high-performance hardware and a full Linux operating system in a minimal form factor suitable for industrial and embedded applications. Compute Module models feature hardware equivalent to the corresponding flagship models but with fewer ports and no on-board GPIO pins — instead, users connect them to a separate baseboard (carrier board) that provides only the ports and pins required for a given application.

In short: same Pi brain, no built-in connectors — you plug it into a custom carrier board (like the AqualinkD RS485 carrier board) that provides exactly what your application needs and nothing more.

The CM4 is the premium option in the ecosystem. It is an industrial-strength SBC with **EMMC** and runs Raspbery OS. It is not designed as a DIY product like the other Pi's, but more of an embedded device, hence the need for a specifically designed carrier board.


---

### AqualinkD support

AqualinkD will run perfectly fine on any SBC, there are no performance gains to be had by picking the fastest CPU / most memory or largest storage. It is specifically designed and highly optimized and to keep it small and highly stable, it takes very little resources, it is well renounced for its rock solid stability and runs for years without any issues. 


### Summary Comparison

| | Raspberry Pi (CF) | Raspberry Pi w/ external (SSD/eMMC) | Radxa Zero 3W | Pi Compute Module CM4 |
|---|---|---|---|---|
| **Storage type** | microSD/CF | SSD or eMMC | eMMC (soldered) | eMMC (soldered) |
| **Corruption risk** | High without mitigation | Low | Very low | Very low |
| **RO root needed?** | Yes (recommended) | No | No | No |
| **OS maturity** | Excellent | Excellent | Moderate | Excellent |
| **HAT/RS485 option** | AqualinkD HAT or USB | AqualinkD HAT or USB | AqualinkD HAT or USB | RS485 Carrier Board only |
| **Setup complexity** | Low | Low–Medium | Medium | Medium |
| **Form factor** | Various | Various | Pi Zero footprint | Industrial |

**Bottom line:** eMMC-based platforms are all we will supply (Radxa Zero 3W or CM4) due to their inherent storage reliability over CF/SD-based systems. If you are DIY build then all options are supported, but we will not supply a device with an inherent design floor for a novice end user (yes we know may other projects will sell Pi based systems with CF cards) 
