# no1-notify

A modern and customizable FiveM notification system. Built with Vue.js 3, TypeScript, and Tailwind CSS.

![no1-notify Preview](https://i.imgur.com/7onQai7.png)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and modern interface design
- 🎯 **8 Different Positions** - Top-left, top-right, top-center, bottom-left, bottom-right, bottom-center, left-center, right-center
- 🎭 **4 Notification Types** - Success, Error, Warning, Info
- ⚡ **Smooth Animations** - Fluid animations with Vue TransitionGroup
- 🔧 **Easy to Use** - Simple export functions
- 📱 **Responsive** - Compatible with all screen sizes
- 🎨 **Customizable** - Colors and styles can be easily changed

## 📦 Installation

1. Clone or download the repository
2. Add the folder to your `resources` directory
3. Add to your `server.cfg` file:
```lua
ensure no1-notify
```

## 🚀 Usage

### Sending Notifications

```lua
-- Using exports
exports['no1-notify']:SendNotify({
    title = "Success!",
    description = "Operation completed successfully.",
    type = "success",
    duration = 5000
})
```

### Notification Types

```lua
-- Success (Green)
exports['no1-notify']:SendNotify({
    title = "Success",
    description = "Operation completed successfully.",
    type = "success",
    duration = 5000
})

-- Error (Red)
exports['no1-notify']:SendNotify({
    title = "Error",
    description = "An error occurred.",
    type = "error",
    duration = 5000
})

-- Warning (Yellow)
exports['no1-notify']:SendNotify({
    title = "Warning",
    description = "Be careful!",
    type = "warning",
    duration = 5000
})

-- Info (Blue)
exports['no1-notify']:SendNotify({
    title = "Info",
    description = "This is an informational message.",
    type = "info",
    duration = 5000
})
```

### Setting Position

```lua
-- Set the position where notifications will appear
exports['no1-notify']:SetPosition('top-right') -- Default

-- Available positions:
-- 'top-left', 'top-right', 'top-center'
-- 'bottom-left', 'bottom-right', 'bottom-center'
-- 'left-center', 'right-center'
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `title` | string | ✅ | Notification title |
| `description` | string | ✅ | Notification description |
| `type` | string | ❌ | Notification type: `success`, `error`, `warning`, `info` (default: `info`) |
| `duration` | number | ❌ | How long the notification stays on screen (ms). `0` = permanent (default: `5000`) |

## 🛠️ Development

### Web UI Development

To develop the web interface:

```bash
cd web
npm install
npm run dev
```

### Build

For production build:

```bash
cd web
npm run build
```

The build output will be created in the `web/build` folder.

## 📁 Project Structure

```
no1-notify/
├── client/
│   └── cl_main.lua          # Client-side Lua script
├── web/
│   ├── src/
│   │   ├── App.vue          # Main Vue component
│   │   ├── store/           # Pinia store
│   │   ├── types/           # TypeScript type definitions
│   │   └── utils/           # Helper functions
│   ├── build/               # Build output
│   └── package.json
├── fxmanifest.lua
└── README.md
```

## 🎨 Customization

To customize colors and styles, you can edit the `borderColor`, `icon`, and `textColor` functions in the `web/src/App.vue` file.

## 📝 License

This project is free to use and modify.

## 👤 Author

**vezironi**

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## ⚠️ Notes

- Notifications automatically close after the specified duration
- If the `duration` parameter is set to `0`, the notification will be permanent
- Position changes affect all notifications
- Notifications are displayed in a stack format
