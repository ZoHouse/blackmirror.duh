# Zo House Black Mirror

![Zo House](https://user-images.githubusercontent.com/12345/67890.png)
_Image: Add a screenshot of your final mirror display here!_

A turnkey digital information radiator for Zo House, powered by MagicMirror². This project provides a pre-configured, portrait-oriented display designed to be deployed on a Raspberry Pi with minimal setup.

It's designed to be a "plug-and-play" solution for any physical Zo House space, creating a shared dashboard that's both informative and culturally aligned with the Zo ethos.

---

## The 4-Step Guide to Your Own Black Mirror

This guide will walk you through everything, from buying the parts to a fully running mirror.

### Step 1: Procure Your Hardware

You will need the following components. You can find these at online retailers like Amazon, Adafruit, or a local electronics store.

-   **A Raspberry Pi:** This project was developed on a Pi 4, but newer or older models (like the Pi 3 or Pi 5) should work.
-   **A microSD Card:** A 16GB or 32GB card is recommended. Get a "Class 10" or "A1" rated card for better performance.
-   **A Power Supply:** Ensure it provides enough power for your Pi model (e.g., a USB-C supply for a Pi 4).
-   **A Monitor or TV:** Any HDMI-compatible screen that can be physically oriented vertically will work.
-   **An HDMI Cable:** To connect the Pi to your display.
-   **(Optional) A Case:** To protect your Raspberry Pi.

### Step 2: Prepare the Raspberry Pi

Before you can install the software, you need to set up the Raspberry Pi's operating system.

1.  **Flash Raspberry Pi OS:** Use the official [Raspberry Pi Imager](https://www.raspberrypi.com/software/) to flash the latest version of "Raspberry Pi OS" onto your microSD card. The imager makes this process simple and will guide you through it.
2.  **Initial Boot & Setup:** Insert the microSD card into your Pi, connect your keyboard, mouse, and monitor, and power it on. Follow the on-screen prompts to complete the initial setup, including connecting to your Wi-Fi network.
3.  **Open the Terminal:** Once you're at the desktop, open the Terminal application. This is where you'll enter the commands to install the mirror software.

### Step 3: Install and Configure the Mirror

Now, you'll clone this project and configure it for your location.

1.  **Clone the Repository:** In the terminal, run the following commands to download the project and enter the directory:
    ```bash
    git clone https://github.com/ZoHouse/blackmirror.duh.git
    cd blackmirror.duh
    ```

2.  **Install Dependencies:** This command will install all the necessary software, including the correct version of Node.js.
    ```bash
    npm install
    ```

3.  **Set Your Timezone:** For the clock to be correct, set your Pi's timezone using this command. Navigate to `Localisation Options` > `Timezone`.
    ```bash
    sudo raspi-config
    ```

4.  **Configure Your Mirror:** Open the configuration file with a text editor:
    ```bash
    nano config/config.js
    ```
    -   **Set Location:** Find your latitude and longitude from a site like [latlong.net](https://www.latlong.net/) and update the `lat` and `lon` fields in the `weather` module.
    -   **Set Calendar:** Get the `.ics` link for your calendar and replace the `YOUR_CALENDAR_URL.ics` placeholder. For Google Calendar, find this in your calendar's settings under "Secret address in iCal format".
    -   **Configure Currencies:** The cryptocurrency module uses the Coinbase API and does not require an API key. To select the currencies to display, edit the `currency` array in the `MMM-cryptocurrency` section of your `config.js`. Use standard cryptocurrency ticker symbols (e.g., "BTC", "ETH").
    -   **Configure NFT Floor Price:** To display the floor price of the "Founders of Zo World" NFT collection, you'll need an API key from [OpenSea](https://docs.opensea.io/reference/request-an-api-key). Add this key to the `openseaApiKey` field in the `MMM-NFTFloorPrice` module's configuration.
    -   Press `Ctrl+X`, then `Y`, then `Enter` to save the file.

### Step 4: Run the Mirror

You're ready to launch!

1.  **Rotate the Display:** First, find your display's name by running `wlr-randr`. Then, use that name to rotate the screen.
    ```bash
    wlr-randr --output HDMI-A-1 --transform 90
    ```
    (Replace `HDMI-A-1` with your display's name).

2.  **Start the Application:**
    ```bash
    npm start
    ```

> **Important: Restarting After a Reboot**
>
> The rotation and application need to be started again after a reboot. You can use this single command from your main computer to do both:
>
> ```bash
> ssh your_pi_username@your_pi_ip "export DISPLAY=:0 && /usr/bin/wlr-randr --output HDMI-A-1 --transform 90 && source ~/.nvm/nvm.sh && cd ~/blackmirror.duh && npm start"
> ```

---

## Further Customization

The text for the `compliments` and "Rules of the House" can be edited directly in the `config/config.js` file.

---

## License

This project is built on [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) and is subject to the MIT License. See the `LICENSE.md` file for details.
```
