import { defineStore } from 'pinia';
import type { Notification } from '@/types/index';

export const useDefaultData = defineStore("DefaultData", {
    state: () => ({
        notifications: [] as Notification[],
        position: 'top-right' as 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center',
    }),
    actions: {
        NotificationPush(notification: Omit<Notification, 'id'>) {
            const id = Date.now()
            const newNotification: Notification = {
                id,
                duration: notification.duration ?? 5000,
                title: notification.title,
                description: notification.description,
                type: notification.type ?? 'info',
            }

            this.notifications.unshift(newNotification);

            if (newNotification.duration && newNotification.duration > 0) {
                setTimeout(() => this.NotificationRemove(id), newNotification.duration)
            }
        },
        NotificationRemove(id: number) {
            this.notifications = this.notifications.filter((n) => n.id !== id)
        },
        NotificationClear() {
            this.notifications = []
        },
        NotificationSetPosition(position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | 'left-center' | 'right-center') {
            this.position = position;
        },
    }
});