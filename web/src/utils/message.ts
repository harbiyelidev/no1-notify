import { useDefaultData } from "@/store/index";
import { FetchNUI } from "@/utils/index";

export default function () {
    const StoreData = useDefaultData();

    window.addEventListener("message", async ({ data }) => {
        switch (data.action) {
            case "nui/check":
                FetchNUI("nui/checked", {});
                break;
            case "notification/add":
                StoreData.NotificationPush(data.payload);
                break;
            case "notification/setPosition":
                StoreData.NotificationSetPosition(data.payload.position);
                break;
            default:
                console.warn(`Unknown action received: ${data.action}`);
                break;
        }
    });
};