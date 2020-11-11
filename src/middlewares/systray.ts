import SysTray from "systray";
import fs from "fs-extra";
import path from "path";
import opener from "opener";

const icon = fs.readFileSync(path.join(__dirname, `../assets/logo.ico`));

export const systray = new SysTray({
  menu: {
    // you should using .png icon in macOS/Linux, but .ico format in windows
    icon: icon.toString("base64"),
    title: "SellerSpot Server",
    tooltip: "SellerSpot Server",
    items: [
      {
        title: "Go to Console",
        tooltip: "Go to Console",
        checked: false,
        enabled: true,
      },
      {
        title: "Access Server",
        tooltip: "Access Server",
        checked: false,
        enabled: true,
      },
    ],
  },
  debug: false,
  copyDir: true, // copy go tray binary to outside directory, useful for packing tool like pkg.
});

systray.onClick((action) => {
  if (action.seq_id === 0) {
    opener("https://www.google.com");
  } else if (action.seq_id === 1) {
    // open the url
    opener("http://localhost:4000");
  }
});
