local NuiLoaded = false
local Position = 'top-right'

--- CheckNui()
--- @return nil
--- @description Waits until the NUI is fully loaded before proceeding.
local function CheckNui()
    while not NuiLoaded do
        Wait(100)
    end
end

--- NuiMessage(action, payload)
--- @param action string The action to be sent to the NUI.
--- @param payload table The payload data to be sent with the action.
--- @return nil
--- @description Sends a message to the NUI with the specified action and payload after ensuring the
function NuiMessage(action, payload)
    CheckNui()
    SendNUIMessage({
        action = action,
        payload = payload
    })
end

--- AddNotification
--- @param data table
--- @return nil
--- @usage SendNotify({ title = "Title", description = "Message", type = "success", duration = 5000 })
function AddNotification(data)
    NuiMessage("notification/add", data)
end

exports('SendNotify', AddNotification)

--- SetPosition
--- @param position 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center'
--- @return nil
--- @usage SetPosition('top-right')
function SetPosition(position)
    NuiMessage("notification/setPosition", { position = position })
end

exports('SetPosition', SetPosition)

CreateThread(function()
    while not NuiLoaded do
        if NetworkIsSessionStarted() then
            SendNUIMessage({
                action = 'nui/check',
            })
        end
        Wait(2000)
    end

    SetPosition(Position)
end)

RegisterNUICallback('nui/checked', function(data, cb)
    NuiLoaded = true
    cb(true)
end)

RegisterCommand('test_notify', function(source, args, rawCommand)
    AddNotification({
        title = 'Test Notification',
        description = 'This is a test notification',
        type = 'success',
        duration = 5000
    })

    Wait(1000)

    AddNotification({
        title = 'Test Notification',
        description = 'This is a test notification',
        type = 'error',
        duration = 5000
    })

    Wait(1000)

    AddNotification({
        title = 'Test Notification',
        description = 'This is a test notification',
        type = 'warning',
        duration = 5000
    })

    Wait(1000)

    AddNotification({
        title = 'Test Notification',
        description = 'This is a test notification',
        type = 'info',
        duration = 5000
    })
end, false)